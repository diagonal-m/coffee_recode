module Mutations
  class UpdateCoffeeBean < BaseMutation
    graphql_name 'UpdateCoffeeBean'
    field :coffee_bean, Types::CoffeeBeanType, null: true

    argument :id, ID, required: true
    argument :name, String, required: true
    argument :processing, String, required: false
    argument :country, String, required: false
    argument :varietal, String, required: false
    argument :roast_level, Integer, required: false
    argument :tasting, String, required: false
    argument :evaluation, Integer, required: false

    def resolve(id:, name:, processing:, country:, varietal:, roast_level:, tasting:, evaluation:)
      current_user = context[:current_user]
      coffee_bean = current_user&.coffee_beans.find(id)
      coffee_bean&.update!(
        name: name,
        processing: processing,
        country: country,
        varietal: varietal,
        roast_level: roast_level,
        tasting: tasting,
        evaluation: evaluation
      )
      {
        coffee_bean: coffee_bean
      }
    end
  end
end
