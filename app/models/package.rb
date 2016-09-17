class Package < ApplicationRecord
	has_many :dishes, dependent: :destroy
	belongs_to :caterer, optional: true
	accepts_nested_attributes_for :dishes, allow_destroy: true
end
