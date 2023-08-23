class User < ApplicationRecord
  has_secure_password
  has_one_attached :image
  validates :username, :password, :password_confirmation, presence: true

  has_many :setups

end
