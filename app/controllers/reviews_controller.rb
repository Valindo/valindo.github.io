class ReviewsController < ApplicationController
	def index
		@reviews = Review.all
	end

	def show_venue
		@reviews = Review.where(venue_id=params[:id])
	end

	def show_caterer
		@reviews = Review.where(caterer_id=params[:id])
	end

	def show_planner
		@reviews = Review.where(planner_id=params[:id])
	end

	def update
		@review = Review.find(params[:id])

		if @review.update(review_params)
			puts "========REVIEW UPDATED========"
		else
			puts @review.errors.full_messages
			puts "========REVIEW UPDATE FAILED========"
		end
	end

	def create
		@review = Review.new(review_params)
		if @review.save
			puts "============REVIEW SAVED============"
		else
			@review.errors.full_messages
			puts "=============REVIEW NOT SAVED======="	
		end
	end

	def destroy
		@review = Review.find(params[:id])

		if @review.destroy
			puts "=======REVIEW DELETED======="
		else
			puts @review.errors.full_messages
			puts "========REVIEW DELETE FAILED========"
		end
	end

	private
	def review_params
		params.permit(:id, :comment, :display_picture, :name, :venue_id, :caterer_id, :planner_id, :rating)
	end

end
