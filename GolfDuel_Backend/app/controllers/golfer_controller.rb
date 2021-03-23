class GolferController < ApplicationController
    def index
      golfer = Golfer.all
      render json: golfer
    end
  end
  