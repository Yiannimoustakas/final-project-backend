class Drink < ApplicationRecord
  belongs_to :pub
  has_and_belongs_to_many :orders
end
