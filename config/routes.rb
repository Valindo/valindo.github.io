Rails.application.routes.draw do
	devise_for :users, :controllers => { :registrations => :registrations, :sessions => :sessions }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :venues
  resources :caterers
  resources :planners
  resources :decorators
  resources :reviews
  # post 'venues/add_form_field' => 'venues#add_form_field', :as => :add_form_field_venue
  devise_scope :user do
  	get 'sign_in', to: 'devise/sessions#new'
  	unauthenticated :user do
  		root :to => 'devise/sessions#new', as: :unauthenticated_root
  	end
  	authenticated :user do
  		root :to => 'dashboard#index', as: :authenticated_root
  	end
  end

  get 'dashboard/venues' => 'dashboard#venue'
  get 'dashboard/caterers' => 'dashboard#caterer'
  get 'dashboard/planners' => 'dashboard#planner'
  get 'dashboard/decorators' => 'dashboard#decorator'
  get 'dashboard/profile/:id' => 'dashboard#profile', as: 'dashboard_profile'
  get 'dashboard/all_users' => 'dashboard#all_users', as: 'all_users'
  match 'all_users/:id' => 'dashboard#destroy', :via => :delete, :as => :admin_destroy_user
  match 'all_users/:id' => 'dashboard#block_user', :via => :post, :as => :admin_block_user
  get 'dashboard/search' => 'search#search'
end
