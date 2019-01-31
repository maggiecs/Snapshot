class Api::CommentsController < ApplicationController
  
  def index
    # @comments = Post.where(id: params[:post_id]).comments
    if params[:post_id]
      @post = Post.find(params[:post_id])
      @comments = @post.comments
      render "api/comments/index"
    else
      @comments = Comment.where(post_id: params[:post_id])
      render "api/comments/index"
    end
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id
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