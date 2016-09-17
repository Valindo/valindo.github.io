class RenameMenuColumn < ActiveRecord::Migration[5.0]
	def change
		rename_column :menus, :type, :title
	end
end
