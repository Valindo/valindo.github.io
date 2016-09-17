class CreateOffers < ActiveRecord::Migration[5.0]
  def change
    create_table :offers do |t|
    	t.text :description
    	t.references :venue, foreign_key: true
    	t.references :caterer, foreign_key: true
    	t.references :planner, foreign_key: true
      t.timestamps
    end
  end
end
