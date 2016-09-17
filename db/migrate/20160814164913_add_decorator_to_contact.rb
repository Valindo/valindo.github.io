class AddDecoratorToContact < ActiveRecord::Migration[5.0]
  def change
  	add_reference :contacts, :decorator, foreign_key: true
  end
end
