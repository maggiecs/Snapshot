Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
     resources :users, only: [:create, :show, :update, :index] do
       resources :posts, only: [:index]
       resources :follows, only: [:index, :create, :show]
     end

     resource :session, only: [:create, :destroy]
     resources :posts, only: [:create, :show, :update, :index, :destroy] do
      resources :comments, only: [:create, :index]
      post '/likes', to: 'likes#create'
      delete '/likes', to: 'likes#destroy'
     end

     resources :comments, only: [:destroy]
     resources :follows, only: [:destroy]
  end

  root "static_pages#root"
end
