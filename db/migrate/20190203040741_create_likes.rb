class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :post_id, null: false
      t.integer :liker_id, null: false

      t.timestamps
    end

    add_index :likes, [:liker_id, :post_id], unique: true
    add_index :likes, :liker_id
    add_index :likes, :post_id
  end
  
end
