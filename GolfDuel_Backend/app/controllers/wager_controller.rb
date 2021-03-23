class WagerController < ApplicationController
    def index
      wager = Wager.all
      render json: wager
    end
  end
