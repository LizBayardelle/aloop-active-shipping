class AddShippingFieldsToProduct < ActiveRecord::Migration
  def change
    add_column :products, :weight, :decimal
    add_column :products, :envelope, :boolean, default: false
    add_column :products, :box_length, :decimal
    add_column :products, :box_width, :decimal
    add_column :products, :box_depth, :decimal
  end
end
