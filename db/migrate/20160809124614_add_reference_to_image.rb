class AddReferenceToImage < ActiveRecord::Migration[5.0]
  def change
  	add_reference :images, :venue, foreign_key: true
  	add_reference :images, :caterer, foreign_key: true
  	add_reference :images, :planner, foreign_key: true
  end
end
