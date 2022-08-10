class AddCommentToReviews < ActiveRecord::Migration[7.0]
  def change
    add_column :reviews, :comment, :string
  end
end
