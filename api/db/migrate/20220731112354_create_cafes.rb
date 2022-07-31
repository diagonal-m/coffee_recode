class CreateCafes < ActiveRecord::Migration[6.0]
  def change
    create_table :cafes do |t|
      t.string :name, null: false, comment: '店名'
      t.string :station, null: false, comment: '駅名'
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
