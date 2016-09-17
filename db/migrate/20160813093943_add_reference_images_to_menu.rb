class AddReferenceImagesToMenu < ActiveRecord::Migration[5.0]
  def change
  	add_reference :images, :menu, foreign_key: true
  end
end
