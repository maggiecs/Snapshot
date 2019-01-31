# == Schema Information
#
# Table name: comments
#
#  id         :bigint(8)        not null, primary key
#  body       :text             not null
#  author_id  :integer          not null
#  post_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: 'User'

  belongs_to :post,
  primary_key: :id,
  foreign_key: :post_id,
  class_name: 'Post'

  has_one :receiver,
  through: :post,
  source: :author
end
