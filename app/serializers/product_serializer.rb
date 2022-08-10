class ProductSerializer < ActiveModel::Serializer
  attributes :id, :category, :name, :price, :description, :shop_id, :image
end
