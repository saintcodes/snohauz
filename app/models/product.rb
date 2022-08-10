class Product < ApplicationRecord
  belongs_to :shop
  has_many :reviews
  has_many :reservations
  
end
