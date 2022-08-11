class ShopsController < ApplicationController

  def index
    shops = Shop.all
    render json: shops, status: :ok
  end

  def show
    shop = Shop.find(params[:id])
    render json: shop, status: :ok
  end
  

end
