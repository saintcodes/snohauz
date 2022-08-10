class Shop < ApplicationRecord
  has_many :products
  has_many :reviews, through: :products
  has_many :reservations, through: :products
  has_one :shop_address
end
