Rails.application.routes.draw do

  resources :shop_addresses, only: [:index, :show]
  resources :reservations, except: [:index]
  resources :reviews, except: [:update]
  resources :products, only: [:index, :show]
  resources :shops, only: [:index, :show]
  resources :users, only: [:index, :show, :create, :update]
  
  post '/signup', to: "users#create"
  get "/me", to: "users#show"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  get '/reservations', to: "reservations#my_reso"
  # get '/shopsProducts/:id', to: "products#shop"
  get '/products/shops/:name', to: "products#shop"
  

end
