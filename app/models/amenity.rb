class Amenity < ApplicationRecord
	belongs_to :venue, optional: true
end
