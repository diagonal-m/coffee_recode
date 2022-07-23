# == Schema Information
#
# Table name: coffee_beans
#
#  id         :integer          not null, primary key
#  evaluation :integer
#  name       :string           not null
#  processing :string
#  store      :string
#  tasting    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer          not null
#
# Indexes
#
#  index_coffee_beans_on_user_id  (user_id)
#
# Foreign Keys
#
#  user_id  (user_id => users.id)
#
class CoffeeBean < ApplicationRecord
  belongs_to :user
end
