class CreateReservations < ActiveRecord::Migration[7.0]
  def change
    create_table :reservations do |t|
      t.integer :user_id
      t.integer :product_id
      t.string :date
      t.string :time

      t.timestamps
    end
  end
end
