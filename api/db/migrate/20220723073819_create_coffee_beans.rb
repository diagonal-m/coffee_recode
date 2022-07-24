class CreateCoffeeBeans < ActiveRecord::Migration[6.0]
  def change
    create_table :coffee_beans do |t|
      t.string :name, null: false, comment: 'コーヒー豆名称'
      t.string :processing, comment: '加工法'
      t.string :tasting, comment: '味特徴'
      t.string :store, comment: '購入店'
      t.integer :evaluation, comment: '評価'
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
