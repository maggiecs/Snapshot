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

    if params[:user_id]
      @user = User.find(params[:user_id])
      @posts = @user.posts
    else
      @posts = Post.all
    end
    render "api/posts/index"
  end

  def show
    @post = Post.with_attached_photos.find(params[:id])
    render "api/posts/show"
  end

  def update
    @post = current_user.posts.find(params[:id])
    if @post.update_attributes(post_params)
      render "api/posts/show"
    else
       render json: @post.errors.full_messages, status: 422
    end
  end

  def delete
    @post = Post.find(params[:id])
    @post.destroy
    render "api/posts/index"
  end

  private

  def post_params
    params.require(:post).permit(:body, :photo)
  end

end