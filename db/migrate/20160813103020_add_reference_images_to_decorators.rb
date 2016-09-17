class AddReferenceImagesToDecorators < ActiveRecord::Migration[5.0]
  def change
  	add_reference :images, :decorator, foreign_key: true
  end
end
