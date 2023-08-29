class User < ApplicationRecord
  has_secure_password
  has_one_attached :image
  has_many :setups


  validates :username, presence: true
  validates :image, presence: true
  validates :name, presence: true

end
