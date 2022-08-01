class AddColumnCoffeeBeans < ActiveRecord::Migration[6.0]
  def change
    add_column :coffee_beans, :country, :string, comment: '生産国'
    add_column :coffee_beans, :varietal, :string, comment: '品種'
    add_column :coffee_beans, :roast_level, :integer, comment: '焙煎度'
    add_reference :coffee_beans, :store, foreign_key: true
  end
end
