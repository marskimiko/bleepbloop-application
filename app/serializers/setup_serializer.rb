class SetupSerializer < ActiveModel::Serializer
  attributes :id, :name, :photo, :genre
  has_one :user
end
