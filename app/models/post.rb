# == Schema Information
#
# Table name: posts
#
#  id         :bigint(8)        not null, primary key
#  body       :text
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: 'User'


end
