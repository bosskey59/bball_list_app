class LocationsController < ApplicationController

    def index
        @locations = Location.all
        render json: @locations, include: ['lists.players']
    end

    def show
        @location = Location.find_by_id(params[:id])
        render json: @location
    end


end
