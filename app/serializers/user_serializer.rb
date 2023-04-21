class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :photo, :username, :password_digest
end
