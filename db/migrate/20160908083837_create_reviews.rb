class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
    	t.string :display_picture
    	t.string :name
    	t.text :comment
    	t.decimal :rating
    	t.references :venue
    	t.references :caterer
    	t.references :planner
      t.timestamps
    end
  end
end
