class DecoratorsController < ApplicationController
	before_action :check_privilege!, only: [:index]

	def index
		@decorators = Decorator.all
	end

	def new
		@decorators = Decorator.new
		@decorators.build_address
		@decorators.build_contact
	end

	def create
		@decorators = Decorator.new(decorators_params)
		@decorators.user_id = current_user.id

		if @decorators.save
			puts "~~~~~~~~~~~~SAVED~~~~~~~~~~~~"
			redirect_to @decorators
		else
			puts @decorators.errors.full_messages
			puts "::::::::::::ERROR:::::::::::::"
		end
	end

	def show
		@decorator = Decorator.find(params[:id])
	end

	def destroy
		@decorator = Decorator.find(params[:id])

		if @decorator.destroy
			if current_user.admin?
				redirect_to decorators_path
			else
				redirect_to dashboard_decorators_path
			end
		end
	end

	def edit
		@decorators = Decorator.find(params[:id])
	end

	def update
		@decorators = Decorator.find(params[:id])

		if @decorators.update(decorators_params)
			redirect_to decorator_path
		else
			render 'edit'
		end
	end

	private
	def decorators_params
		params.require(:decorator).permit(:id, :title, :terms, :description, address_attributes:[:location], images_attributes:[:id, :picture, :caption, :_destroy], contact_attributes:[:id, :mobile, :mobile_alt, :landline, :landline_alt])
	end

	def check_privilege! 
		if not current_user.admin?
			redirect_to dashboard_decorators_path
		end
	end
end
