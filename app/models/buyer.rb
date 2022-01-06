class Buyer < ApplicationRecord
  belongs_to :seller
  serialize :categories
end
