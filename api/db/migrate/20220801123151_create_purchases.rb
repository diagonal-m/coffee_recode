class CreatePurchases < ActiveRecord::Migration[6.0]
  def change
    create_table :purchases do |t|
      t.datetime :purchase_date, comment: '購入日'
      t.string :menu, comment: '商品名'
      t.integer :coffee_type, comment: '購入タイプ'
      t.string :volume, comment: '量/サイズ'
      t.integer :price, comment: '値段'
      t.references :user, null: false, foreign_key: true
      t.references :store, null: false, foreign_key: true

      t.timestamps
    end
  end
end
