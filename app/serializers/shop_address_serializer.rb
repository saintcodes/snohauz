class ShopAddressSerializer < ActiveModel::Serializer
  attributes :id, :street, :city, :state, :zip_code, :shop_id
end
