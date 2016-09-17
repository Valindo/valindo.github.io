class AddReferencesToUser < ActiveRecord::Migration[5.0]
  def change
  	add_reference :venues, :user, foreign_key: true
  	add_reference :caterers, :user, foreign_key: true
  	add_reference :planners, :user, foreign_key: true
  end
end
