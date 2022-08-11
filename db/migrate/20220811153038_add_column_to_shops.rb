class AddColumnToShops < ActiveRecord::Migration[7.0]
  def change
    add_column :shops, :image, :string
  end
end
