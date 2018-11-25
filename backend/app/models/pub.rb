class Pub < ApplicationRecord
  has_many :drinks
  has_many :orders, through: 'drinks'
end
