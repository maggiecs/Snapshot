class Api::CommentsController < ApplicationController
  
  def index
    @comments = Post.where(post_id: params[:id])
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    @comment.save
    render "api/comments/show"
  end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy
    render "api/comments/show"
  end

  private
  def comment_params
    params.require(:comment).permit(:post_id, :author_id, :body)
  end
end