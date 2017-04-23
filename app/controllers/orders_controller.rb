class OrdersController < ApplicationController
  def update
    @order = current_order
    if @order.update(order_params)
      redirect_to new_charge_path
    else
      render :back
      flash[:notice] = "Something is amuck."
    end
  end

  def edit
  end

  def show
    @order = Order.find(params[:id])
  end

  private

  def order_params
    params.require(:order).permit(:subtotal, :tax, :shipping, :total, :order_status_id, :user_id, :date_placed)
  end
end
