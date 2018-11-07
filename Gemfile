source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.5.0'

gem 'rails', '~> 5.2.0'

# Old Aloop (pre 5.2)
gem 'meta-tags'
gem 'ckeditor'
gem 'ionicons-rails'
gem 'autonumeric-rails'
gem 'activemerchant'
gem 'active_shipping'

# Copied in 5.2 Transition
gem 'puma', '~> 3.11'
gem 'puma_worker_killer'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'coffee-rails', '~> 4.2'
gem 'jbuilder', '~> 2.5'
gem 'mini_magick'
gem 'jquery-rails'
gem 'devise'
gem 'bootsnap'
gem 'jquery-ui-rails'
gem 'sprockets-rails'
gem 'bootstrap-sass'
gem 'bcrypt', '~> 3.1.7'
gem 'friendly_id', '~> 5.2.0'
gem 'stripe'
gem 'figaro'
gem 'magnific-popup-rails', '~> 1.1.0'
gem 'simple_form'
gem 'acts-as-taggable-on', '~> 6.0' #must be this version for Rails5
gem 'aws-sdk' , '~> 3'
gem 'aws-sdk-s3', require: false
gem 'simple_form_extension'
gem 'recaptcha', require: "recaptcha/rails"
gem 'font-awesome-rails'
gem 'trix-rails', require: 'trix'
gem 'rack-tracker'
gem 'high_voltage', '~> 3.1'
gem 'convertkit-ruby', require: 'convertkit'
gem 'dotenv-rails'
gem 'acts_as_list'
gem "wysiwyg-rails"
gem "font-awesome-sass"

group :production do
  gem 'pg', '~> 0.20.0'
end

group :development, :test do
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
  gem 'sqlite3'
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'binding_of_caller'
  gem 'better_errors'
end

group :test do
  gem 'capybara', '>= 2.15', '< 4.0'
  gem 'selenium-webdriver'
  gem 'chromedriver-helper'
end
