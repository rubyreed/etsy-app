class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :category
      t.float :price
      t.text :description
      t.belongs_to :seller, null: false, foreign_key: true

      t.timestamps
    end
  end
end
