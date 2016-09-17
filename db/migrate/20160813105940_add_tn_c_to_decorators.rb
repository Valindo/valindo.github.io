class AddTnCToDecorators < ActiveRecord::Migration[5.0]
  def change
  	add_column :decorators, :terms, :text
  end
end
