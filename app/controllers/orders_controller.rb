class OrdersController < ApplicationController
  def update
    @order = current_order
    if @order.update(order_params)
      redirect_to root_path, notice: 'Order was successfully updated.'
    else
      render :back
      flash[:notice] = "Something is amuck."
    end
  end

  def edit
  end

  private

  def order_params
    params.require(:order).permit(:subtotal, :tax, :shipping, :total, :order_status_id)
  end
end
