class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["Invalid username/password"], status: 401
    end
  end

  def destroy
    if current_user
      @user = current_user
      logout
      render "api/users/show"
    else
      render json: ["User is not signed in"], status: 404
    end

  end

end