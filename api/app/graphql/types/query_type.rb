module Types
  class QueryType < Types::BaseObject
    # Add `node(id: ID!) and `nodes(ids: [ID!]!)`
    include GraphQL::Types::Relay::HasNodeField
    include GraphQL::Types::Relay::HasNodesField

    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # TODO: remove me
    field :test_field, String, null: false,
      description: "An example field added by the generator"
    def test_field
      "Hello World!"
    end

    field :current_user, Types::UserType, null: true
    def current_user
      @current_user ||= context[:current_user]
    end

    field :my_beans, [Types::CoffeeBeanType], null: false
    def my_beans
      current_user&.coffee_beans&.order(created_at: "DESC")
    end

    field :monthly_purchases, [Types::PurchaseType], null: false do
      argument :month, String, required: true
    end
    def monthly_purchases(month:)
      current_user&.purchases.where(purchase_date: month.to_date.all_month).order(purchase_date: "DESC")
    end
  end
end
