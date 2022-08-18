class AddColumnToReservations < ActiveRecord::Migration[7.0]
  def change
    add_column :reservations, :shop_id, :integer
  end
end
