class CreateShopAddresses < ActiveRecord::Migration[7.0]
  def change
    create_table :shop_addresses do |t|
      t.string :street
      t.string :city
      t.string :state
      t.integer :zip_code
      t.integer :shop_id

      t.timestamps
    end
  end
end
