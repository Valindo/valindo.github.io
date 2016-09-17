class CreateContacts < ActiveRecord::Migration[5.0]
  def change
    create_table :contacts do |t|
    	t.string :mobile
    	t.string :landline
    	t.string :mobile_alt
    	t.string :landline_alt
    	t.string :email

    	t.references :venue, foreign_key: true
    	t.references :caterer, foreign_key: true
    	t.references :planner, foreign_key: true
      t.timestamps
    end
  end
end
