Rails.application.routes.draw do
  root "pages#app"
  resources :orders
  resources :drinks

  get '/app' => 'pages#app'

  get '/pubs/search/:query' => 'pubs#search'
  get '/pub/:id' => 'pubs#show'
  get 'pubs/geosearch/:distance' => 'pubs#geo_search'
  resources :pubs

  resources :users, except: [:index]
  get "/login" => "session#new"
  post "/login" => "session#create"
  delete "/login" => "session#destroy"

end
