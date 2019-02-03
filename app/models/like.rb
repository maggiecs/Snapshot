# == Schema Information
#
# Table name: likes
#
#  id         :bigint(8)        not null, primary key
#  post_id    :integer          not null
#  liker_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord

  belongs_to :liker,
  primary_key: :id,
  foreign_key: :liker_id,
  class_name: 'User'

  belongs_to :post,
  primary_key: :id,
  foreign_key: :post_id,
  class_name: 'Post'


end
