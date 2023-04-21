class Instrument < ApplicationRecord
  has_many :instrument_setups
  has_many :setups, through: :instrument_setups
end
