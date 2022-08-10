Rails.application.routes.draw do
  resources :shop_addresses
  resources :reservations
  resources :reviews
  resources :products
  resources :addresses
  resources :shops
  resources :users
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
