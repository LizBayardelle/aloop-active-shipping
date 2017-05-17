class RegistrationsController < Devise::RegistrationsController
  respond_to :html, :js

  private

  def sign_up_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation, :phone, :stripe_customer_id, :street_address_1, :street_address_2, :city, :state, :zip, :provence, :country, :has_shipping)
  end

  def account_update_params
    params.require(:user).permit(:first_name, :last_name, :email, :password, :password_confirmation, :current_password, :phone, :admin, :stripe_customer_id, :street_address_1, :street_address_2, :city, :state, :zip, :provence, :country, :has_shipping)
  end
end
