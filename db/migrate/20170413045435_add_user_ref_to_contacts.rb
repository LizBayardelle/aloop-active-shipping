class AddUserRefToContacts < ActiveRecord::Migration
  def change
  	remove_column :contacts, :user_id
    add_reference :contacts, :user, index: true, foreign_key: true
  end
end
