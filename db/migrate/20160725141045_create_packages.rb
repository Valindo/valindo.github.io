class CreatePackages < ActiveRecord::Migration[5.0]
	def change
		create_table :packages do |t|
			t.string :title
			t.references :caterer
			t.timestamps
		end
	end
end
