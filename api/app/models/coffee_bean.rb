# == Schema Information
#
# Table name: coffee_beans
#
#  id          :integer          not null, primary key
#  country     :string
#  evaluation  :integer
#  name        :string           not null
#  processing  :string
#  roast_level :integer
#  store       :string
#  tasting     :string
#  varietal    :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  store_id    :integer
#  user_id     :integer          not null
#
# Indexes
#
#  index_coffee_beans_on_store_id  (store_id)
#  index_coffee_beans_on_user_id   (user_id)
#
# Foreign Keys
#
#  store_id  (store_id => stores.id)
#  user_id   (user_id => users.id)
#
class CoffeeBean < ApplicationRecord
  belongs_to :user
  belongs_to :store
end
