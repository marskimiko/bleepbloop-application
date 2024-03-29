class ApplicationController < ActionController::API
  before_action :authorize
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  # def current_user
  #   @current_user ||= User.find_by(id: session[:user_id])
  # end

  def authorize
    render json: { errors: ["Not authorized"] }, status: :unauthorized unless current_user 
  end

  private

  def current_user
    User.find_by(id: session[:user_id])
  end

  def render_unprocessable_entity_response(exception)
    # byebug
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

  def render_not_found(error)
    render json: {errors: {error.model => "Not Found"}}, status: :not_found
  end
  
end
