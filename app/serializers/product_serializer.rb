class ProductSerializer < ActiveModel::Serializer
  attributes :id, :category, :name, :price, :description, :shop_id, :image, :rental_rate
  belongs_to :shop
  has_many :reviews, include: :user
end
