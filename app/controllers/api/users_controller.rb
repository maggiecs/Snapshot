class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      # @user.photo.attach(io: File.open("#{Rails.root}/app/assets/images/default_user.png"), filename: 'default_user.png')
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    #if params query 
    @users = User.where("username LIKE '#{params[:query]}%'")
    #else @users = Users.all
    render "api/users/index"
  end

  def show
    @user = User.find(params[:id])
    render "api/users/show"
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :full_name, :website, :bio, :photo)
  end

end


