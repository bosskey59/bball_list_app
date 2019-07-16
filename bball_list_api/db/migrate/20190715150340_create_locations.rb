class CreateLocations < ActiveRecord::Migration[5.2]
  def change
    create_table :locations do |t|
      t.string :name
      t.string :address
      t.integer :number_of_courts
      t.boolean :indoor

      t.timestamps
    end
  end
end
