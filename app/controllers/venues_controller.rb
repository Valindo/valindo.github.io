class VenuesController < ApplicationController
	before_action :check_privilege!, only: [:new, :create, :edit]

	def index
		@venues = Venue.all
		respond_to do |format|
      		format.html # index.html.erb
      		format.xml  { render xml: @venues}
      		format.json { render 'index.json.jbuilder'}
      	end
      end

      def new
      	@venue = Venue.new
      	@venue.build_address
      	@venue.build_contact
      	@venue.build_offer
      end

      def create
      	@venue = Venue.new(venue_params)
      	@venue.user_id = current_user.id
      	if @venue.save
      		puts "**************************SAVED****************************"
      		redirect_to @venue
      	else
      		@venue.errors.full_messages.each do |msg|
      			puts msg
      		end
      		puts "_________________________NOTSAVED__________________________"
      	end
      end

      def show
      	@venue = Venue.find(params[:id])
      	@edit_button = false
            if current_user == nil
            else
                 if current_user.admin?
                 else
                      if current_user.id == @venue.user_id
                           @edit_button = true
                     else
                           @edit_button = false
                     end
               end
         end
         respond_to do |format|
      		format.html # index.html.erb
      		format.xml  { render xml: @venue}
      		format.json { render 'show.json.jbuilder'}
      	end
      end

      def destroy
      	@venue = Venue.find(params[:id])
      	if @venue.destroy
      		if current_user.admin?
      			
      		else
      			redirect_to dashboard_venues_path
      		end
      	end
      end

      def edit
      	@venue = Venue.find(params[:id])
      	if current_user.admin?
      	else
      		if current_user.id == @venue.user_id
      		else
      			redirect_to dashboard_venues_path
      		end
      	end
      end

      def update
      	@venue = Venue.find(params[:id])

      	if @venue.update(venue_params)
      		redirect_to venue_path
      	else
      		render 'edit'
      	end
      end

      private
      def venue_params
      	params.require(:venue).permit(:title, :description,:price, :terms, :thumbnail, :venue_type, address_attributes:[:location],amenities_attributes:[:id , :title, :description, :quantity, :_destroy], images_attributes:[:id, :picture, :caption], contact_attributes:[:id, :mobile, :mobile_alt, :landline, :landline_alt], offer_attributes:[:id, :description])
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
