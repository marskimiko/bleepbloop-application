class InstrumentSetupsController < ApplicationController

  def index
    render json: InstrumentSetup.all, status: :ok
  end
  
end
