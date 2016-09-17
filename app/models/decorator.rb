class Decorator < ApplicationRecord
	searchkick
	belongs_to :user, optional: true
	has_one :address, dependent: :destroy
	has_one :contact, dependent: :destroy
	has_many :images
	accepts_nested_attributes_for :address
	accepts_nested_attributes_for :images, allow_destroy: true
	accepts_nested_attributes_for :contact
end
