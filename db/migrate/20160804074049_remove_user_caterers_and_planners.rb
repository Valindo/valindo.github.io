class RemoveUserCaterersAndPlanners < ActiveRecord::Migration[5.0]
  def change
  	  	remove_reference :users, :caterer
  	  	remove_reference :users, :planner
  end
end
