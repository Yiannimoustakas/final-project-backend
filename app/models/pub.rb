class Pub < ApplicationRecord
  has_many :drinks
  has_many :orders, through: 'drinks'
  geocoded_by :location
  after_validation :geocode

  def address
    location
  end
end
