class SetupsController < ApplicationController
  belongs_to :user
  has_many :instrument_setups
end
