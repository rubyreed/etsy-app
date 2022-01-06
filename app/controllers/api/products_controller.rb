class Api::ProductsController < ApplicationController
  def index
    render json: Product.products_with_seller
  end
  def category
    products = Product.page(@page).by_category([:category])
    total_pages = products.total_pages
    render json: {products: products, total_pages: total_pages}
  end
end
