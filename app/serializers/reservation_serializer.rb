class ReservationSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :product_id, :date, :time
end
