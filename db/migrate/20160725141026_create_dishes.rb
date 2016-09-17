class CreateDishes < ActiveRecord::Migration[5.0]
	def change
		create_table :dishes do |t|
			t.string :title
			t.string :type
			t.references :menu
			t.references :package
			t.timestamps
		end
	end
end
