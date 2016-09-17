class RemoveUserVenue < ActiveRecord::Migration[5.0]
  def change
  	remove_reference :users, :venue
  end
end
