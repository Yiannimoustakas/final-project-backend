class Pub < ApplicationRecord
  has_many :drinks
  has_many :orders, through: 'drinks'

  def address
    location
  end
  geocoded_by :location
  after_validation :geocode
end
