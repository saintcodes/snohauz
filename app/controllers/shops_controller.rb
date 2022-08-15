class ShopsController < ApplicationController

  def index
    shops = Shop.all
    render json: shops.to_json(include: :shop_address), status: :ok
  end

  def show
    shop = Shop.find(params[:id])
    render json: shop.to_json(include: [:shop_address, :products]), status: :ok
  end
  

end
