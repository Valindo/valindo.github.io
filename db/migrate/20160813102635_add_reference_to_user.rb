class AddReferenceToUser < ActiveRecord::Migration[5.0]
  def change
  	add_reference :decorators, :user, foreign_key: true
  end
end
