class CreateInstrumentSetups < ActiveRecord::Migration[6.1]
  def change
    create_table :instrument_setups do |t|
      t.references :setup, null: false, foreign_key: true
      t.references :instrument, null: false, foreign_key: true

      t.timestamps
    end
  end
end
