class ChargesController < ApplicationController
  def new
  end

  def create
    # Amount in cents
    @amount = current_order.total * 100
    @user = current_user
    @order = current_order

    if @user.stripe_customer_id
      customer = @user.stripe_customer_id
    else
      customer = Stripe::Customer.create(
        :email => params[:stripeEmail],
        :source  => params[:stripeToken]
      )
      @user.update_attributes(stripe_customer_id: customer.id)
    end
    @order.update_attributes(order_status_id: 2)
    @order.update_attributes(date_placed: DateTime.now)
    # current_order = nil

    charge = Stripe::Charge.create(
      :customer    => @user.stripe_customer_id,
      :amount      => @amount.to_i,
      :description => 'Rails Stripe customer',
      :currency    => 'usd'
    )

  rescue Stripe::CardError => e
    flash[:error] = e.message
    redirect_to new_charge_path
  end
end
