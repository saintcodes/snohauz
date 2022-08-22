class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create]

  def index
    render json: User.all, status: :ok
  end

  def show
    render json: @current_user
  end

  def create
    user = User.create!(user_params)
    # if user.valid?
    session[:user_id] = user.id
    render json: user, status: :created
    # else
    #   render json: {errors: user.errors.full_messages}, status: :unprocessable_entity
    # end
  end

  def update
    byebug
    user = User.find_by(id: session[:user_id])
    if user
      user = User.update(user_params_update)
      render json: user, status: :accepted
    else
      render json: {error: "Not authorized"}, status: :unauthorized
    end
  end
  
    
private

  def user_params
    params.permit(:username, :image, :password, :password_confirmation)
  end

  def user_params_update
    params.permit(:image)
  end


end
