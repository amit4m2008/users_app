class ApplicationController < ActionController::Base
	before_action :authenticate_user!
	before_action :configure_permitted_parameters, if: :devise_controller?

 	protected

	 def configure_permitted_parameters
		attributes = [:first_name, :last_name, :age, :gender, :country]
    devise_parameter_sanitizer.permit(:sign_up, keys: attributes)
 	end
end
