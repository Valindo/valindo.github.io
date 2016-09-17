class Menu < ApplicationRecord
	belongs_to :caterer,  optional: true
	has_many :dishes, dependent: :destroy
	has_many :images
	accepts_nested_attributes_for :dishes, allow_destroy: true
	accepts_nested_attributes_for :images, allow_destroy: true
end
