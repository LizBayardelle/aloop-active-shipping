class UsersController < ApplicationController

  def show
  	@user = User.find(params[:id])
  	@unapproved_photos = Photo.where(approved: false)
    @orders = Order.where(user_id: current_user.id).order('date_placed DESC')
  end
end
