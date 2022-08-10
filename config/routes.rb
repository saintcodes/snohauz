Rails.application.routes.draw do
  resources :shop_addresses
  resources :reservations
  resources :reviews
  resources :products
  resources :addresses
  resources :shops
  resources :users

  post '/signup', to: "users#create"
  get "/me", to: "users#show"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"

end
