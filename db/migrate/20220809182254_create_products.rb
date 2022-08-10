class CreateProducts < ActiveRecord::Migration[7.0]
  def change
    create_table :products do |t|
      t.string :category
      t.string :name
      t.integer :price
      t.string :description
      t.integer :shop_id
      t.string :image

      t.timestamps
    end
  end
end
