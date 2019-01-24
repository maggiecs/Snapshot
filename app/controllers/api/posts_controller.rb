class Api::PostsController < ApplicationController

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id
    if @post.save
      render "api/posts/show"
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def index

  end

  def show

  end

  def update
  end

  def delete

  end

  private

  def post_params
    params.require(:post).permit(:body)
  end

end