class InstrumentSetupSerializer < ActiveModel::Serializer
  attributes :id, :setup, :instrument_id
  # has_one :instrument
  # belongs_to :setups
  # belongs_to :instruments
end
