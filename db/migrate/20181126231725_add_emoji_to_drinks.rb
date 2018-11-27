class AddEmojiToDrinks < ActiveRecord::Migration[5.2]
  def change
    add_column :drinks, :emoji, :string
  end
end
