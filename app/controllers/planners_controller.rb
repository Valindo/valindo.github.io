class PlannersController < ApplicationController
	before_action :check_privilege!, only: [:edit, :new, :create]

	def index
		@planners = Planner.all
		respond_to do |format|
      		format.html # index.html.erb
      		format.xml  { render xml: @caterers}
      		format.json { render 'index.json.jbuilder'}
      	end
      end

      def new
      	@planners = Planner.new
      	@planners.build_address
      	@planners.build_contact
      	@planners.build_offer
      end

      def create
      	@planners = Planner.new(planners_params)
      	@planners.user_id = current_user.id
      	if @planners.save
      		puts "*************SAVED*************"
      		redirect_to @planners
      	else
      		puts @planners.errors.full_messages
      		puts "^^^^^^^^^^^^^NOT SAVED^^^^^^^^^^^^^^"
      	end
      end

      def show
      	@planner = Planner.find(params[:id])
      	@edit_button = false
      	if current_user == nil
      	else
      		if current_user.admin?
      		else
      			if current_user.id == @planner.user_id
      				@edit_button = true
      			else
      				@edit_button = false
      			end
      		end
      	end
      	respond_to do |format|
      		format.html # index.html.erb
      		format.xml  { render xml: @caterers}
      		format.json { render 'show.json.jbuilder'}
      	end
      end

      def destroy
      	@planner = Planner.find(params[:id])
      	if @planner.destroy
      		if current_user.admin?
      			redirect_to planners_path
      		else
      			redirect_to dashboard_planners_path
      		end
      	end
      end

      def edit
      	@planners = Planner.find(params[:id])
      	if current_user.admin?
      	else
      		if current_user.id == @planners.user_id
      		else
      			redirect_to dashboard_planners_path
      		end
      	end
      end

      def update
      	@planners = Planner.find(params[:id])
      	if @planners.update(planners_params)
      		redirect_to planner_path
      	else
      		render 'edit'
      	end
      end
      private
      def planners_params
      	params.require(:planner).permit(:id, :title, :description,:thumbnail, :terms, address_attributes:[:location], images_attributes:[:id, :caption, :picture, :_destroy], contact_attributes:[:id, :mobile, :mobile_alt, :landline, :landline_alt], offer_attributes:[:id, :description])
      end

      def check_privilege! 
      	if current_user == nil
      		redirect_to sign_in_path
      	else
      		if current_user
      		end
      	end
      end
  end
