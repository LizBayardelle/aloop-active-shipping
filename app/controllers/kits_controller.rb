class KitsController < ApplicationController
  def XR250_XR400
    @order_item = current_order.order_items.new
  end

  def XR600
    @order_item = current_order.order_items.new
  end

  def XR650L
    @order_item = current_order.order_items.new
  end

  def replacement
    @replacement_products = Product.tagged_with(["Replacement"], any: true)
  end

  def rear_fenders_1
  end

  def rear_fenders_2
  end

  def graphics
  end
end
