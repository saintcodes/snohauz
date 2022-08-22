class ReviewsController < ApplicationController

  def index
    reviews = Review.all
    render json: reviews, status: :ok
  end

  def show
    reviews = Review.where(product_id: (params[:id]))
    render json: reviews, status: :ok
  end

  def create
    review = Review.create!(review_params)
    render json: review, status: :ok
  end
  
  def destroy
    review = Review.find(params[:id])
    review.destroy!
    head :no_content
  end

  private

  def review_params
    params.permit(:comment, :user_id, :product_id, :rating)
  end

end
