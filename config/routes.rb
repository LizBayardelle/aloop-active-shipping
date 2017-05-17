Rails.application.routes.draw do

  get 'orders/update'

  devise_for :users, :controllers => { registrations: 'registrations' }
  resources :users, only: [:show, :update]

  get 'home/index'
  root 'home#index'

  get 'home/info'
  get 'home/export'
  get 'home/kits'

  get 'kits/XR250_XR400'
  get 'kits/XR600'
  get 'kits/XR650L'
  get 'kits/replacement'
  get 'kits/rear_fenders_1'
  get 'kits/rear_fenders_2'
  get 'kits/graphics'

  get 'other/xr400mx'

  resources :products
  get 'tags/:tag', to: 'products#index', as: :tag
  resource :cart, only: [:show]
  resources :order_items, only: [:create, :update, :destroy]
  resources :orders, only: [:update, :edit, :show, :create]

  resources :contacts
  put "contacts/:id/archive" => "contacts#archive", as: "archive_contact"
  put "contacts/:id/unarchive" => "contacts#unarchive", as: "unarchive_contact"

  resources :photos
  put "photos/:id/approve" => "photos#approve", as: "approve_photo"
  put "photos/:id/unapprove" => "photos#unapprove", as: "unapprove_photo"

  resources :charges, only: [:new, :create]
  get 'charges/address'
  get 'charges/shipping'
  post 'charges/update_order'
end
