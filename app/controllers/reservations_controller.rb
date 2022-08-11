class ReservationsController < ApplicationController

  def index
    reservations = Reservation.all
    render json: reservations, status: :ok
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
    res.destroy
    head :no_content
  end

private

  def res_params
    params.permit(:date, :time)
  end
  
end
