class CreateShops < ActiveRecord::Migration[7.0]
  def change
    create_table :shops do |t|
      t.string :name
      t.string :hours
      t.string :description
      t.string :phone

      t.timestamps
    end
  end
end
