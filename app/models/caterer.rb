class Caterer < ApplicationRecord
	searchkick
	has_attached_file :thumbnail, styles: { medium: "300x300>", thumb: "100x100>" }
	validates_attachment_content_type :thumbnail, content_type: /\Aimage\/.*\z/
	belongs_to :user, optional: true
	has_many :menus, dependent: :destroy
	has_many :dishes, through: :menus, dependent: :destroy
	has_many :packages, dependent: :destroy
	has_many :images, dependent: :destroy
	has_many :reviews, dependent: :destroy
	has_one :address, dependent: :destroy
	has_one :contact , dependent: :destroy
	has_one :offer, dependent: :destroy
	accepts_nested_attributes_for :menus , allow_destroy: true
	accepts_nested_attributes_for :dishes, allow_destroy: true
	accepts_nested_attributes_for :packages, allow_destroy: true
	accepts_nested_attributes_for :address, allow_destroy: true
	accepts_nested_attributes_for :images, allow_destroy: true
	accepts_nested_attributes_for :contact, allow_destroy:true
	accepts_nested_attributes_for :offer, allow_destroy:true
end
