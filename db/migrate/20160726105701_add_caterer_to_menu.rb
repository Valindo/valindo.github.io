class AddCatererToMenu < ActiveRecord::Migration[5.0]
  def change
    add_reference :menus, :caterer, foreign_key: true
  end
end
