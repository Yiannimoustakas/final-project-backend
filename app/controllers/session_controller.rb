class SessionController < ApplicationController
  def new
  end

  # Session controller is authenticating the user and giving us a current_user in the process

  def create
    user = User.find_by email: params[:email]
    if user.present? && #user.authenticate( params[:password] )
      session[:user_id] = user.id
      redirect_to app_path
    else
      flash[:error] = "Invalid email address or password"
      redirect_to( login_path )
    end

  end

  def destroy
    session[:user_id] = nil
    redirect_to login_path
  end
end
