class AddTnCtoPlannersAndVenues < ActiveRecord::Migration[5.0]
	def change
		add_column :venues, :terms, :text
		add_column :planners, :terms, :text
	end
end
