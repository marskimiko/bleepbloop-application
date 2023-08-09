class SetupSerializer < ActiveModel::Serializer
  attributes :id, :name, :photo, :genre, :description
  has_one :user
end
