class Setup < ApplicationRecord
  validates :name, presence: true

  belongs_to :user
  has_many :instrument_setups, dependent: :destroy
  has_many :instruments, through: :instrument_setups
end
