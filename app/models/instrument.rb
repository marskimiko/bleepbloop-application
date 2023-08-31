class Instrument < ApplicationRecord
  has_many :instrument_setups
  has_many :setups, through: :instrument_setups

  validates :name, presence: true
  validates :brand, presence: true
  validates :photo, presence: true
end
