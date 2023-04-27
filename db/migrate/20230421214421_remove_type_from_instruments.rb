class RemoveTypeFromInstruments < ActiveRecord::Migration[6.1]
  def change
    remove_column :instruments, :type, :string
  end
end
