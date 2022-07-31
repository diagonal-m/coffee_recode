module Mutations
  class CreateCoffeeBean < BaseMutation
    graphql_name 'CreateCoffeeBean'

    field :coffee_bean, Types::CoffeeBeanType, null: true

    argument :name, String, required: true
    argument :processing, String, required: false
    argument :country, String, required: false
    argument :varietal, String, required: false
    argument :roast_level, Integer, required: false
    argument :tasting, String, required: false
    argument :evaluation, Integer, required: false

    argument :store, String, required: true
    argument :station, String, required: false


    def resolve(name:, processing:, country:, varietal:, roast_level:, tasting:, evaluation:, store:, station:)
      current_user = context[:current_user]

      store = current_user&.stores&.find_or_create_by(name: store) do |s|
        s.station = station
      end

      coffee_bean = current_user&.coffee_beans&.create(
        name: name,
        processing: processing,
        country: country,
        varietal: varietal,
        roast_level: roast_level,
        tasting: tasting,
        evaluation: evaluation,
        store_id: store&.id
      )
      { 
        coffee_bean: coffee_bean
      }
    end
  end
end
