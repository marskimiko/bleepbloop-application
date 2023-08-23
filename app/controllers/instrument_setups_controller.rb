class InstrumentSetupsController < ApplicationController
  before_action :authorize

  def index
    render json: InstrumentSetup.all, status: :ok
  end
  
end
