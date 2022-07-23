# frozen_string_literal: true

module Types
  class CoffeeBeanType < Types::BaseObject
    field :id, ID, null: false
    field :name, String, null: false
    field :processing, String
    field :tasting, String
    field :store, String
    field :evaluation, Integer
    field :user_id, Integer, null: false
    field :created_at, GraphQL::Types::ISO8601DateTime, null: false
    field :updated_at, GraphQL::Types::ISO8601DateTime, null: false
  end
end
