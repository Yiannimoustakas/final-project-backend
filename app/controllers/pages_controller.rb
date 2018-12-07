class PagesController < ApplicationController
  # Allows me to view the api-key set in the bash profile in the javascript (react) folder 
  def app
    @api_key = ENV['GOOGLE_MAPS_API_KEY']
    unless @current_user.present?
      redirect_to login_path
      return
    end

    render react_component: "SearchForm", props: {api_key: @api_key, prerender: false}
  end
end
