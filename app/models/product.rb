class Product < ApplicationRecord
  belongs_to :seller

  # SELECT products.id AS product_id, category, price, description, s.id AS seller_id, name AS seller_name, email AS seller_email FROM products
  # INNER JOIN sellers s
  # ON s.id = products.seller_id
  # ORDER BY s.id;
  
  def self.products_with_seller
    select('products.id AS product_id, category, price, 
    description, s.id AS seller_id, name AS seller_name,
     email AS seller_email')
    .joins('INNER JOIN sellers s
    ON s.id = products.seller_id')
    .order('s.id')
  end

# SELECT products.id, price, category, description 
# FROM products
# ORDER BY category

def self.category
select('products.id, price, category, description')
.order('category')
end
end
