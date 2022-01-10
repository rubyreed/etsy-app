class Api::ProductsController < ApplicationController
  def index
    render json: Product.products_with_seller
  end
  def category
    render json: Product.category
  end 
  def selectshow
    render json: Seller.by_buyer(params[:id])
  end
end
