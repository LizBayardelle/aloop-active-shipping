class CreateProducts < ActiveRecord::Migration
  def change
    create_table :products do |t|
		t.string   "name"
	    t.string   "tag_line"
	    t.string   "description"
	    t.string   "application_notes"
	    t.string   "size"
	    t.string   "aloop_number"
	    t.decimal  "price"
	    t.string   "image_file_name"
	    t.string   "image_content_type"
	    t.integer  "image_file_size"
	    t.datetime "image_updated_at"
	    t.boolean  "active",             default: true
	    t.datetime "created_at",                        null: false
	    t.datetime "updated_at",                        null: false

        t.timestamps null: false
    end
  end
end
