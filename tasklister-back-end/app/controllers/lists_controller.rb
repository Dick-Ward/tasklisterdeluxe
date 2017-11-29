class ListsController < ApplicationController

  def index
    @lists = List.all
    render json:@lists
  end

  # def new
  #   @list = List.new
  # end

  def create
    @list = List.find_or_create_by(list_params)
    if @list.save
      render json:@list
    else
      render json:@list.errors
    end
  end

  def show
    @list = List.find(params[:id])
    render json:@list
  end

  # def edit
  #   @list = List.find(params[:id])
  # end

  def update
    @list = List.find(params[:id])
    if @list.update(list_params)
      render json:@list
    else
      render json:@list.errors
    end
  end

  def destroy
    @list = List.find(params[:id])
    @list.destroy
  end

private

  def list_params
    params.require(:list).permit(:name)
  end


end
