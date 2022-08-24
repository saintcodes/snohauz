class AddColumnToProduct < ActiveRecord::Migration[7.0]
  def change
    add_column :products, :rental_rate, :integer
  end
end
