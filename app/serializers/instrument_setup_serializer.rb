class InstrumentSetupSerializer < ActiveModel::Serializer
  attributes :id, :setup
  has_one :instrument
end
