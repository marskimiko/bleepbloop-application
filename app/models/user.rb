class User < ApplicationRecord
  has_secure_password
  has_one_attached :image
  validates :username, :name, :image, presence: true

  has_many :setups

end
