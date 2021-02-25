class CreateWagers < ActiveRecord::Migration[6.0]
  def change
    create_table :wagers do |t|
      t.integer: user_id
      t.integer: golfer_id
      t.integer: amount

      t.timestamps
    end
  end
end
