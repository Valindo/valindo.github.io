class AddReferenceToAddress < ActiveRecord::Migration[5.0]
  def change
  	add_reference :addresses, :decorator, foreign_key: true
  end
end
