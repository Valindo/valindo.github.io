class CaterersController < ApplicationController
	before_action :check_privilege!, only: [:new, :edit, :create]

	def index
		@caterers = Caterer.all
		respond_to do |format|
      		format.html # index.html.erb
      		format.xml  { render xml: @caterers}
      		format.json { render 'index.json.jbuilder'}
      	end
      end

      def new
      	@caterer = Caterer.new
      	@caterer.build_address
      	@caterer.build_contact
      	@caterer.build_offer
      end

      def create
      	@caterer = Caterer.new(caterer_params)
      	@caterer.user_id = current_user.id
      	if @caterer.save
      		puts "*****************SAVED******************"
      		redirect_to dashboard_caterers_path
      	else
      		puts @caterer.errors.full_messages
      		puts "^^^^^^^^^^^^^^^^NOTSAVED^^^^^^^^^^^^^^^^^^^"
      	end
      end

      def show
      	@caterer = Caterer.find(params[:id])
      	@edit_button = false
      	if current_user == nil
      	else
      		if current_user.admin?
      		else
      			if current_user.id == @caterer.user_id
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
      	@caterer = Caterer.find(params[:id])
      	if @caterer.destroy
      		if current_user.admin?
      			redirect_to caterers_path
      		else
      			redirect_to dashboard_caterers_path
      		end
      	end
      end

      def edit
      	@caterer = Caterer.find(params[:id])
      	if current_user.admin?
      	else
      		if current_user.id == @caterer.user_id
      		else
      			redirect_to dashboard_caterers_path
      		end
      	end
      end

      def update
      	@caterer = Caterer.find(params[:id])
      	if @caterer.update(caterer_params)
      		redirect_to caterer_path
      	else
      		render 'edit'
      	end
      end

      private

      def caterer_params
      	params.require(:caterer).permit(:id, :title, :thumbnail, :description, contact_attributes:[:id, :mobile, :mobile_alt, :landline, :landline_alt], menus_attributes:[:id , :title, :_destroy, dishes_attributes:[:id, :title, :dish_type, :_destroy], images_attributes:[:id, :picture, :caption, :_destroy]], packages_attributes:[:id, :title, :_destroy, dishes_attributes:[:id, :title, :dish_type, :_destroy]], address_attributes:[:id, :location], images_attributes:[:id, :picture,:caption, :destroy], offer_attributes:[:id, :description])
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
