class Product < ActiveRecord::Base
	has_one_attached :image

	acts_as_taggable
	has_many :order_items

	default_scope { where(active: true) }
end
