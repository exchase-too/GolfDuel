class CreateGolfers < ActiveRecord::Migration[6.0]
  def change
    create_table :golfers do |t|
      t.string :name
      t.string :image_url
      t.integer :odds
      t.integer :score

      t.timestamps
    end
  end
end
