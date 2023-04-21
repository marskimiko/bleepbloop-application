class CreateSetups < ActiveRecord::Migration[6.1]
  def change
    create_table :setups do |t|
      t.string :name
      t.string :description
      t.string :photo
      t.string :genre
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
