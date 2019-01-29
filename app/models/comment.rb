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