class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "http://www.chemistry.uwc.ac.za/users/eiwuoha/default_profile.jpg"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/
  has_many :venues, dependent: :destroy
  has_many :caterers, dependent: :destroy
  has_many :planners, dependent: :destroy
  has_many :decorators, dependent: :destroy
  has_one :image
  accepts_nested_attributes_for :venues, :caterers, :planners, :image
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
