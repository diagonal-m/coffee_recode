module Mutations
  class CreatePurchase < BaseMutation
    graphql_name 'CreatePurchase'

    field :purchase, Types::PurchaseType, null: true

    argument :purchase_date, String, required: true
    argument :menu, String, required: true
    argument :coffee_type, Integer, required: true
    argument :volume, String, required: true
    argument :price, Integer, required: true

    argument :store, String, required: true
    argument :station, String, required: false

    def resolve(purchase_date:, menu:, coffee_type:, volume:, price:, store:, station:)
      current_user = context[:current_user]

      store = current_user&.stores&.find_or_create_by(name: store) do |s|
        s.station = station
      end

      purchase = current_user&.purchases&.create(
        purchase_date: Date.parse(purchase_date),
        menu: menu,
        coffee_type: coffee_type,
        volume: volume,
        price: price,
        store_id: store&.id
      )

      # コーヒー豆購入時は登録する
      if purchase.BEAN?
        coffee_bean = current_user&.coffee_beans.find_or_initialize_by(name: menu) do |coffee_bean|
          coffee_bean.store_id = store&.id
        end
        coffee_bean&.save!
      end

      {
        purchase: purchase
      }
    end
  end
end
