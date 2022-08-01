# frozen_string_literal: true

module Types
  class PurchaseType < Types::BaseObject
    field :id, ID, null: false
    field :purchase_date, GraphQL::Types::ISO8601DateTime
    field :menu, String
    field :coffee_type, Integer
    field :volume, String
    field :price, Integer
    field :user_id, Integer, null: false
    field :store_id, Integer, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
