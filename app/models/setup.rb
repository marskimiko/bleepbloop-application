class Setup < ApplicationRecord
  belongs_to :user
  has_many :instrument_setups, dependent: :destroy
  has_many :instruments, through: :instrument_setups

  validates :name, presence: true
  validates :description, presence: true
  validates :photo, presence: true
  validates :genre, presence: true
end
