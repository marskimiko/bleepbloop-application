class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :photo, :username

  has_many :setups
end
