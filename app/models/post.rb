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

  # validate :ensure_photo

  belongs_to :author,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: 'User'

  has_many :comments,
    primary_key: :id,
    foreign_key: :post_id,
    class_name: 'Comment',
    dependent: :destroy

  has_one_attached :photo

  # def ensure_photo
  #   unless self.photo.attached?
  #     errors[:photo] << "must be attached"
  #   end
  # end
end
