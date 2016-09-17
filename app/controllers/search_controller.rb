class SearchController < ApplicationController
	def search
		user = User.find(current_user.id)
		
		if current_user.admin?
			category = params[:page].scan(/\/(.*)/).last.first
		else
			category = params[:page].scan(/dashboard\/(.*)/).last.first
		end

		if category.include? "search"
			pos = params[:page].rindex('F') + 1
			category = params[:page].slice(pos, params[:page].length)
		end

		if params[:query].present?
			if not user.admin?
				instance_variable_set("@#{category}", user.send(category).search(params[:query], where: { user_id: current_user.id}))
			else
				instance_variable_set("@#{category}", user.send(category).search(params[:query]))
			end
			render :template => "#{category}/index"
		else
			instance_variable_set("@#{category}", [])
		end
	end
end
