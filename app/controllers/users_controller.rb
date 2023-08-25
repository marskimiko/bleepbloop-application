class UsersController < ApplicationController
  skip_before_action :authorize, only: [:show]
  # before_action :authorize, only: [:show]
  # before_action :authorize

  def index
    users = User.all.with_attached_image
    render json: users, status: :ok
  end

  # def create
  #   # user = User.create!(user_params)
  #   user = User.create(user_params)
  #   if user.valid?
  #     session[:user_id] = user.id
  #     render json: user, status: :created
  #   else
  #     render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
  #   end
  # end

  def create
    # byebug
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { error: "Not Authorized"}, status: :unauthorized
    end
  end

  # def show
  #   render json: current_user, status: :ok
  # end


  private

  # def current_user
  #   User.find_by(id: session[:user_id])
  # end

  def user_params
    params.permit(:name, :username, :password, :password_confirmation, :image)
  end


end
