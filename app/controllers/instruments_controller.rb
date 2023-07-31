class InstrumentsController < ApplicationController
  before_action :authorize

  def index
    instruments = current_user.instruments
    render json: instruments
  end
  
  def create
    instrument = current_user.instruments.create(instrument_params)
    if instrument.valid?
      render json: instrument
    else
      render json: { errors: instrumnet.errors.full_messages}, satus: :unprocessable_entity
    end
  end

  def show
    instrument = current_user.instruments.find_by(id: params[:id])

    if instrument
      render json: instrument
    else
      render json: { error: "Not Found" }, status: :unauthorized
    end
  end

  private

  def current_user
    User.find_by(id: session[:user_id])
  end

  def instrument_params
    params.permit(:name, :brand, :photo, :category)
  end

  def authorize
    return render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
  end

end
