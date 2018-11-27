class AddPriceToDrinks < ActiveRecord::Migration[5.2]
  def change
    add_column :drinks, :price, :integer
  end
end
