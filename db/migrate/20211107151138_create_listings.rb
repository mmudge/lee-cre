class CreateListings < ActiveRecord::Migration[6.1]
  def change
    create_table :listings do |t|
      t.string :name
      t.string :street
      t.string :city
      t.string :zipcode
      t.string :state

      t.timestamps
    end
  end
end
