class SetupsController < ApplicationController
  skip_before_action :authorize, only: [:index]
  before_action :authorize, only: [:show]

  def index
    render json: Setup.all, status: :ok
  end

  # def index
  #   setups = current_user.setups
  #   render json: setups
  # end

  def show
    setup = Setup.find(params[:id])
    render json: setup
  end

  # def show
  #   setup = current_user.setups.find_by(id: params[:id])
  #   if setup
  #     render json: setup
  #   else
  #     render json: { error: "Not Found" }, status: :unauthorized
  #   end

  # end


  def create
    setup = @current_user.setups.create!(setup_params)
    if setup.valid?

      # params[:instrument_ids].each{|instrument_id| InstrumentSetup.create(setup_id: setup.id, instrument_id: instrument_id)}
      params[:instrument_ids].each do |instrument_id|
        InstrumentSetup.create(setup_id: setup.id, instrument_id: instrument_id)
      end 
      render json: setup
    else
      render json: { errors: setup.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def update
    setup = Setup.find(params[:id])
    if setup && setup.user_id == @current_user.id
      setup.update!(setup_params)
      render json: setup, status: :created
    else
      render json: "Invalid Credentials", status: :unauthorized
    end
  end

  def destroy
    setup = Setup.find(params[:id])
    if setup && setup.user_id == @current_user.id
      setup.destroy
      head :no_content
    else 
      render json: "Invalid Credentials", status: :unauthorized
    end 
  end



  private

  # def current_user
  #   User.find_by(id: session[:user_id])
  # end

  def setup_params
    params.permit(:name, :description, :photo, :genre, :instrument_ids)
  end

  def authorize
    return render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
  end

end
