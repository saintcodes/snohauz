Rails.application.routes.draw do
  resources :shop_addresses, only: [:index, :show]
  resources :reservations, except: [:index]
  resources :reviews
  resources :products, only: [:index, :show]
  resources :shops, only: [:index, :show]
  resources :users

  post '/signup', to: "users#create"
  get "/me", to: "users#show"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  get '/reservations', to: "reservations#my_reso"
  get '/shopsProducts/:id', to: "products#shop"
  # get '/products'

end
