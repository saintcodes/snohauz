class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :product_id, :shop_id, :date, :time
  # belongs_to :shop


end
