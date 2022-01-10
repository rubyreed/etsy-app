class Seller < ApplicationRecord
  has_many :buyers
  has_many :products


# SELECT buyers.id AS buyer_id, buyers.name AS buyer_name, sellers.id AS seller_id,
# products.id AS product_id, category, price, description FROM sellers
# INNER JOIN buyers
# ON sellers.id = buyers.seller_id
# INNER JOIN products
# ON sellers.id = products.seller_id
# WHERE buyers.id = 1

def self.by_buyer(selectedBuyer)
  select('buyers.id AS buyer_id, buyers.name AS buyer_name, sellers.id AS seller_id,
  products.id AS product_id, category, price, description')
  .joins('INNER JOIN buyers
  ON sellers.id = buyers.seller_id')
  .joins('INNER JOIN products
  ON sellers.id = products.seller_id')
  .where("buyers.id = #{selectedBuyer}")
end
end
