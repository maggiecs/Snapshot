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
      render "api/posts/user_index"
    else
      @posts = Post.all.includes(:author).order(id: :desc).limit(params[:limit]).offset(params[:offset])
      render "api/posts/index"
    end  
  end

  def show
    @post = Post.with_attached_photo.find(params[:id])
    render "api/posts/show"
  end

  def update
    @post = current_user.posts.find(params[:id])
    if @post.update(body: post_params[:body])
      render "api/posts/show"
    else
       render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render "api/posts/show"
  end

  private

  def post_params
    params.require(:post).permit(:body, :photo)
  end
end

