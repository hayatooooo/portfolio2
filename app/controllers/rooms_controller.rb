class RoomsController < ApplicationController
  before_action :authenticate_user!

  def index
    @rooms = Room.all.order(:id)
    @room = Room.new
  end
  
  def create
    @room = Room.new(room_params)
    @room.save
    redirect_to root_path
  end

  def show
    @room = Room.find(params[:id])
    @messages = @room.messages
  end

  private

  def room_params
    params.require(:room).permit(:name)
  end
end