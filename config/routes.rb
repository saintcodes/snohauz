Rails.application.routes.draw do
  resources :shop_addresses, only: [:index, :show]
  resources :reservations
  resources :reviews
  resources :products, only: [:index, :show]
  resources :shops, only: [:index, :show]
  resources :users

  post '/signup', to: "users#create"
  get "/me", to: "users#show"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"

end
