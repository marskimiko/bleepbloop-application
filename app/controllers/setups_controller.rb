class SetupsController < ApplicationController
  before_authorize :authorize
  belongs_to :user
  has_many :instrument_setups
end
