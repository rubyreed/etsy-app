class Api::ProductsController < ApplicationController
  def index
    render json: Product.products_with_seller
  end
end
