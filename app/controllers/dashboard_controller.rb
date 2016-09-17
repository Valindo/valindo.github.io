class DashboardController < ApplicationController
	def index
	end

	def profile
		@user = User.find(params[:id])
	end

	def all_users
		@users = User.all
	end

	def venue
		@user = current_user
		@venues = @user.venues
	end

	def caterer
		@user = current_user
		@caterers = @user.caterers
	end

	def planner
		@user = current_user
		@planners = @user.planners
	end

	def decorator
		@user = current_user
		@decorators = @user.decorators
	end

	def block_user
		@user = User.find(params[:id])
		if @user.paid?
			@user.paid = false
		else
			@user.paid = true
		end
		if @user.save
			puts "____________________UPDATED USER STATUS #{@user.email}______________"
		else
			puts "____________________FAILED USER STATUS #{@user.email}______________"
		end
		redirect_to all_users_path
	end

	def destroy
		@user = User.find(params[:id])

		if @user.destroy
			puts "*********************DELETED USER********************" 
		else
			puts @user.errors.full_messages
			puts "**********************DELETE FAILED******************"
		end
		redirect_to all_users_path
	end
end
