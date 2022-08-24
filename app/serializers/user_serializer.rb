class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :image, :password_digest
end
