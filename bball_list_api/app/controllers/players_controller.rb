class PlayersController < ApplicationController
    # take in list_id and name from front end.
    def create
        @location = Location.find_by_id(params[:locationId])
        @last_list = @location.lists.last
        if @last_list && @last_list.players.length < 5
            @player = Player.create(list: @last_list, name:params[:name])
        else
            @list = List.create(location: @location)
            @player = Player.create(list: @list, name:params[:name])
        end
        render json: @player
    end
end
