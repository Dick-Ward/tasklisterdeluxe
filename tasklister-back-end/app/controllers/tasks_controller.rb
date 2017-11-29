class TasksController < ApplicationController
    def index
      @tasks = Task.all
      render json:@tasks
    end

    # def new
    #   redirect_to './tasklister-front-end/new.html'
    # end

    def create
      @task = Task.find_or_create_by(task_params)
      if @task.save
        render json:@task
      else
        render json:@task.errors
      end
    end

    # def edit
    #   @task = Task.find(params[:id])
    # end

    def update
      @task = Task.find(params[:id])
      if @task.update(task_params)
        render json:@task
      else
        render json:@task.errors
      end
    end

    def show
      @task = Task.find(params[:id])
      render json:@task
    end

    def destroy
      @task = Task.find(params[:id])
      @task.destroy
    end

  private

    def task_params
      params.require(:task).permit(:name, :description, :list_id)
    end

end
