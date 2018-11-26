Rails.application.routes.draw do
  root "users#index"
  resources :orders
  resources :drinks

  get '/pubs/search/:query' => 'pubs#search'
  get '/pub/:id' => 'pubs#show'
  resources :pubs

  resources :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
