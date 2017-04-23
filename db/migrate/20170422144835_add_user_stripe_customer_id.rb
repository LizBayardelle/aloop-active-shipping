class AddUserStripeCustomerId < ActiveRecord::Migration
  def change
    change_table :users do |t|
      t.string :stripe_customer_id, limit: 50, null: true
    end
  end
end
