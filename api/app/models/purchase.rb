# == Schema Information
#
# Table name: purchases
#
#  id            :integer          not null, primary key
#  coffee_type   :integer
#  menu          :string
#  price         :integer
#  purchase_date :datetime
#  volume        :string
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  store_id      :integer          not null
#  user_id       :integer          not null
#
# Indexes
#
#  index_purchases_on_store_id  (store_id)
#  index_purchases_on_user_id   (user_id)
#
# Foreign Keys
#
#  store_id  (store_id => stores.id)
#  user_id   (user_id => users.id)
#
class Purchase < ApplicationRecord
  belongs_to :user
  belongs_to :store

  enum coffee_type: { BEAN: 0, CAFE: 1 }
end
