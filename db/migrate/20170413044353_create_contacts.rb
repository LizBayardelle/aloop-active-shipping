class CreateContacts < ActiveRecord::Migration
  def change
    create_table :contacts do |t|
	    t.string   "first_name"
	    t.string   "last_name"
	    t.string   "email"
	    t.string   "phone"
	    t.string   "preferred_contact_method", default: "None"
	    t.string   "subject"
	    t.text     "message"
	    t.integer  "user_id"
	    t.boolean  "read",                     default: false
	    t.boolean  "archived",                 default: false
	    t.datetime "created_at",                                null: false
	    t.datetime "updated_at",                                null: false

      t.timestamps null: false
    end
  end
end
