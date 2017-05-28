class UsersController < ApplicationController
  def show
  	@user = User.find(params[:id])
  	@unapproved_photos = Photo.where(approved: false)
    @orders = Order.where(user_id: current_user.id).order('date_placed DESC')
    @current_orders = Order.where(order_status_id: 2)
  end

  def update
    @user = User.find(params[:id])
    @user.update_attributes(account_update_params)
    if @user.update(account_update_params)
      redirect_to charges_shipping_path
    else
      render :back
      flash[:notice] = "Something is amuck."
    end
  end

  def account_update_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation, :current_password, :phone, :admin, :stripe_customer_id, :street_address_1, :street_address_2, :city, :state, :zip, :provence, :country, :has_shipping)
  end
end
