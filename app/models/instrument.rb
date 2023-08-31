class Instrument < ApplicationRecord
  has_many :instrument_setups
  has_many :setups, through: :instrument_setups

  validates :name, presence: true, length: { minimum: 2 }
  validates :brand, presence: true, length: { minimum: 2 }
  validates :photo, presence: true, format: { with: %r{.(gif|jpg|png)\Z}i, message: 'must be a URL for GIF, JPG or PNG image.' }
end
