class User < ApplicationRecord
  has_secure_password
  has_one_attached :image
  has_many :setups


  validates :username, presence: true, length: { minimum: 2 }
  # validates :image, presence: true
  validates :name, presence: true, length: { minimum: 2 }

end
