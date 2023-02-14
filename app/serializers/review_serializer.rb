class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :product_id, :comment, :created_at, :rating, :image
  belongs_to :user


end
