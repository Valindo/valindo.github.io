class AddPriceToVenues < ActiveRecord::Migration[5.0]
  def change
  	add_column :venues, :price, :decimal
  end
end
