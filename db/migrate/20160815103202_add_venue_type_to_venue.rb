class AddVenueTypeToVenue < ActiveRecord::Migration[5.0]
  def change
  	add_column :venues, :venue_type, :string
  end
end
