class AddFields < ActiveRecord::Migration[5.0]
  def change
  	add_reference :users, :venue, foreign_key: true
  	add_reference :users, :caterer, foreign_key: true
  	add_reference :users, :planner, foreign_key: true
  end
end
