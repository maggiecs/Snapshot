class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    if params[:query] 
      @users = User.where("lower(username) LIKE ? or lower(full_name) LIKE ?", "%#{params[:query].downcase}%", "%#{params[:query].downcase}%")
    elsif params[:notFollowing]
      excluded_ids = current_user.followees.pluck(:id)
      # excluded_ids.push(current_user.id)
      @users = User.where.not(id: excluded_ids)
    else
      @users = User.all
    end
    render "api/users/index"
  end

  def show
    @user = User.find(params[:id])
    render "api/users/show"
  end

  def update
    @user = current_user
    if params[:user][:photo]
      @user.photo.attach(params[:user][:photo])
    end
    if @user.update(user_params)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :full_name, :website, :bio, :postIds)
  end

end


