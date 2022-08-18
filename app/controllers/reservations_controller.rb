class ReservationsController < ApplicationController

  def index
    reservations = Reservation.all
    render json: reservations.to_json(include: [:product, :shop]), status: :ok
  end

  def show
    reservation = Reservation.find(params[:id])
    render json: reservation, status: :ok
  end

  def update
    res = Reservation.find(params[:id])
    res.update!(res_params)
    render json: res, status: :accepted
  end

  def create
    res = Reservation.create!(res_params)
    render json: res, status: :created
  end

  def destroy
    res = Reservation.find(params[:id])
    res.destroy!
    head :no_content
  end

  def my_reso
    reso = Reservation.where(user_id: session[:user_id])
    # render json: reso.to_json (:include=> {:shop=>{:include=> {:shop_address}}}, :product)
    render json: reso.to_json(include: [:product, :shop]), status: :ok
  end

private

  def res_params
    params.permit(:user_id, :product_id, :shop_id, :date, :time)
  end
  
end
