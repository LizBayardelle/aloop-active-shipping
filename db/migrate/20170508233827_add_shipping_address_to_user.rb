class AddShippingAddressToUser < ActiveRecord::Migration
  def change
    add_column :users, :street_address_1, :string
    add_column :users, :street_address_2, :string
    add_column :users, :city, :string
    add_column :users, :state, :string
    add_column :users, :zip, :string
    add_column :users, :provence, :string
    add_column :users, :country, :string
    add_column :users, :has_shipping, :boolean
  end
end
