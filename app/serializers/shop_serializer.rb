class ShopSerializer < ActiveModel::Serializer
  attributes :id, :name, :hours, :description, :phone, :image
  has_one :shop_address
  
end
