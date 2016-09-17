class SessionsController < 	Devise::SessionsController
	protected
		def after_sign_in_path_for(resource)
			if resource.is_a?(User) && !resource.paid?
				sign_out resource
				flash[:error] = "This account has been blocked"
				unauthenticated_root_path
			else
				super
			end
		end
end