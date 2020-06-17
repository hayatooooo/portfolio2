class User < ApplicationRecord
  def email_required?
    false
  end

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  validates :name,:presence=>true,:length=>{:maximum=>20}
  has_many :messages
end
