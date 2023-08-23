class SetupSerializer < ActiveModel::Serializer
  attributes :id, :name, :photo, :genre, :description, :user_id, :instruments
  # belongs_to :user
  has_many :instruments
end
