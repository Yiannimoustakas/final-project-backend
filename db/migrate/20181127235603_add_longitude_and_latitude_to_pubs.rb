class AddLongitudeAndLatitudeToPubs < ActiveRecord::Migration[5.2]
  def change
    add_column :pubs, :longitude, :string
    add_column :pubs, :latitude, :string
  end
end
