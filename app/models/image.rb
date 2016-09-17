class Image < ApplicationRecord
	belongs_to :venue, optional: true
	belongs_to :caterer, optional: true 
	belongs_to :planner, optional: true
	belongs_to :user, optional: true
	belongs_to :menu, optional:true
	belongs_to :decorator, optional: true
	has_attached_file :picture
	validates_attachment_content_type :picture, content_type: /\Aimage\/.*\Z/
end
