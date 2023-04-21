class AddTypeToInstruments < ActiveRecord::Migration[6.1]
  def change
    add_column :instruments, :type, :string
  end
end
