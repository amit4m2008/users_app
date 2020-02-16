class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  ## Validations
  validates_presence_of :email, :first_name, :last_name, :country
  validates :email, format: { with: Devise::email_regexp, message: "Email is invalid" }


  ## Method returns country name based on country code.
  def country_name
    c = ISO3166::Country[country]
    c.translations[I18n.locale.to_s] || c.name
  end
end
