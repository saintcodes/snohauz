class ProductSerializer < ActiveModel::Serializer
  attributes :id, :category, :name, :price, :description, :shop_id, :image
  belongs_to :shop
  has_many :reviews, include: :user
end
