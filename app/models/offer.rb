class Offer < ApplicationRecord
	belongs_to :venue, optional: true
	belongs_to :caterer, optional: true
	belongs_to :planner, optional: true
end
