#OVERRIDES ONLY AFTER_UPDATE_PATH_FOR METHOD OF DEVISE REGISTRATION CONTROLLER
class RegistrationsController < Devise::RegistrationsController

  protected

    def after_update_path_for(resource)
    	dashboard_profile_path(resource)	
    end
end