class ShopSerializer < ActiveModel::Serializer
  attributes :id, :name, :hours, :description, :phone, :image
end
