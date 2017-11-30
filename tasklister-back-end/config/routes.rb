Rails.application.routes.draw do
  resources :lists
  resources :tasks
  get '/lists/:id/tasks', to: 'lists#tasks'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
