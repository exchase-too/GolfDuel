Rails.application.routes.draw do
  # get 'user/show'
  # get 'golfer/index'

  resources :user
  resources :golfer
  resources :wager

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
