class RenameDishAttributes < ActiveRecord::Migration[5.0]
  def change
  	rename_column :dishes, :type, :dish_type
  end
end
