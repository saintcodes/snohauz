class Review < ApplicationRecord
  belongs_to :product
  belongs_to :user
  has_one_attached :image
  
end
