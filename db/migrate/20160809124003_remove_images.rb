class RemoveImages < ActiveRecord::Migration[5.0]
	def change
		if table_exists? 'images'
			drop_table :images
		end
	end
end
