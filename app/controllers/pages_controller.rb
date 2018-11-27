class PagesController < ApplicationController
  def app
    unless @current_user.present?
      redirect_to login_path
    end
  end
end
