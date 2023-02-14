class ProductsController < ApplicationController
  
  # def index
  #   products = Product.find_sole_by(name:)
  #   render json: products, status: :ok
  # end

  # def index
  #   products = Product.all.distinct.pluck(:name)
  #   render json: products, status: :ok
  # end

  def index
    products = Product.all
    render json: products, status: :ok
  end

  def show
    product = Product.find(params[:id])
    render json: product, status: :ok
  end

  def shop
    productShops = Product.where(name: params[:name])
    render json: productShops, status: :ok
  end
  
end
