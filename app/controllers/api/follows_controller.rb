class FollowsController < ApplicationController

  def index
    @user = User.find(params[:user_id])
    if params[:followers]
      @follows = Follow.where(followee_id: @user.id)
    else
      @follows = Follow.where(follower_id: @user.id)
    end
  end

  def create
    @follow = Follow.new(follow_params)
    @follow.follower_id = current_user.id
    if @follow.save
      render "api/follows/show"
    else
      render json: @follow.errors.full_messages, status: 422
    end
  end

  def destroy
    @follow = Follow.where(followee_id: params[:user_id]).where(follower_id: current_user.id)[0]
    @follow.destroy
    render :show
  end

  private
  def follows_params
    params.permit(:follow).permit(:followee_id, :follower_id)
  end

end