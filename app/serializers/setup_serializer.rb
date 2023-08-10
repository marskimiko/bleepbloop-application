class SetupSerializer < ActiveModel::Serializer
  attributes :id, :name, :photo, :genre, :description, :user_id
  has_one :user
end
