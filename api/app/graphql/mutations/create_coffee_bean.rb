module Mutations
  class CreateCoffeeBean < BaseMutation
    graphql_name 'CreateCoffeeBean'

    field :coffee_bean, Types::CoffeeBeanType, null: true

    argument :name, String, required: true
    argument :processing, String, required: false
    argument :tasting, String, required: false
    argument :store, String, required: false
    argument :evaluation, Integer, required: false  

    def resolve(name:, processing:, tasting:, store:, evaluation:)
      current_user = context[:current_user]
      coffee_bean = current_user&.coffee_beans&.create(
        name: name,
        processing: processing,
        tasting: tasting,
        store: store,
        evaluation: evaluation,
      )
      { 
        coffee_bean: coffee_bean 
      }
    end
  end
end
