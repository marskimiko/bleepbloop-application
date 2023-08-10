class SetupsController < ApplicationController
  # before_action :authorize

  # def index
  #   render json: Setup.all, status: :ok
  # end

  def index
    setups = current_user.setups
    render json: setups
  end

   # def show
  #   setup = Setup.find(params[:id])
  #   render json: setup
  # end

  def show
    setup = current_user.setups.find_by(id: params[:id])

    if setup
      render json: setup
    else
      render json: { error: "Not Found" }, status: :unauthorized
    end

  end


  def create
    setup = current_user.setups.create(setup_params)
    if setup.valid?
      render json: setup
    else
      render json: { errors: setup.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    setup = Setup.find(params[:id])
    if setup && setup.user_id === current_user.id
      setup.destroy
      head :no_content
    else 
      render json: "Invalid Credentioals", status: :unauthorized
    end 
  end



  private

  def current_user
    User.find_by(id: session[:user_id])
  end

  def setup_params
    params.permit(:name, :description, :photo, :genre)
  end

  # def authorize
  #   return render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
  # end

end
