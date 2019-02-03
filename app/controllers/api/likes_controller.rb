class Api::LikesController < ApplicationController

  def create
    @like = Like.new(like_params)
    @like.liker_id = current_user.id
    if @like.save
      @post = Post.find(params[:post_id])
      render "api/likes/show"
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @like =  Like.where(liker_id: current_user.id).where(post_id: params[:post_id])[0]
    @post = Post.find(@like.post_id)
    @like.destroy
    render "api/likes/show"
  end

  private
  def like_params
    params.require(:like).permit(:post_id, :liker_id)
  end
end