# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# User.create(email: 'test@test.com', password: 123456)

categories = [
  'Jewelery',
  'Bags',
  'Ceramics',
  'Bracelets',
  'Bedding',
  'Kitchen Utensils',
  'Wall Art'
]

10.times do
  s = Seller.create(
    name: Faker::Name.name,
    email: Faker::Internet.email
  )

  5.times do
    num_categories = rand(0..categories.length - 1);
    Buyer.create(
      name: Faker::Name.name,
      max_price: rand(1..1000),
      categories: categories.sample(num_categories),
      seller_id: s.id
    )
  end
  
  5.times do
    price = Faker::Commerce.price(range: 1..1000.0)
    p = Product.create(
      price: price,
      category: categories.sample,
      description: Faker::Hipster.sentence,
      seller_id: s.id
  )
  end
end

