class User < ApplicationRecord
  
  has_secure_password
  
  has_many :reviews
  has_many :reservations
  
  validates :username, presence: true, uniqueness: true, length: { in: 6..12 }
  validates :password, presence: true, format: { with: /\A(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}\z/, 
    message: "password must contain one capital case letter, one number, one special character, and be at least 8 characters long" }

end
