class SessionsController < ApplicationController
  skip_before_action :authorize, only: [:create, :destroy]

  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: {errors: ["Invalid Username or Password"]}, status: :unauthorized
    end
  end

  # old
  # def destroy
  #   user = User.find_by(id: session[:user_id])
  #   if user
  #     session.delete :user_id
  #     head :no_content
  #   else
  #     render json: {errors: ["Not Authorized"]}, status: :unauthorized
  #   end
  # end

  # revised
  def destroy
    session.delete :user_id
    head :no_content
  end
  
end
