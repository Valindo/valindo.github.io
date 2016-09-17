class CreateAddresses < ActiveRecord::Migration[5.0]
  def change
    create_table :addresses do |t|
      t.text :location
      t.references :venue, foreign_key: true
      t.references :planner, foreign_key: true
      t.references :caterer, foreign_key: true

      t.timestamps
    end
  end
end
