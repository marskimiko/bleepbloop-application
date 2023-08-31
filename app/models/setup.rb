class Setup < ApplicationRecord
  belongs_to :user
  has_many :instrument_setups, dependent: :destroy
  has_many :instruments, through: :instrument_setups

  validates :name, presence: true, length: { minimum: 2 }
  validates :description, presence: true, length: { minimum: 10, maximum: 100 }
  # validates :photo, presence: true
  validates :photo, presence: true, format: { with: %r{.(gif|jpg|png)\Z}i, message: 'must be a URL for GIF, JPG or PNG image.' }
  validates :genre, presence: true, length: { minimum: 2 }
end
