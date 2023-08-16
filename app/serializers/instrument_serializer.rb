class InstrumentSerializer < ActiveModel::Serializer
  attributes :id, :name, :brand, :photo
  # has_many :setups
end
