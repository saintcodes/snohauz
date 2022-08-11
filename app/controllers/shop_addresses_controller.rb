class ShopAddressesController < ApplicationController

  def index
    shopAddresses = ShopAddress.all
    render json: shopAddresses, status: :ok
  end

  def show
    shopAddress = ShopAddress.find(params[:id])
    render json: shopAddress, status: :ok
  end
  
end
