class User < ApplicationRecord
  #email_required? メソッドをオーバーライド
  #emailのバリデーションを行わない
  def email_required?
    false
  end

  #database_authenticatable	DBに保存するパスワードの暗号化(必須)
  #registerable	サインアップ処理
  #recoverable	パスワードリセット
  #rememberable	クッキーにログイン情報を保持
  #validatable	メールアドレスとパスワードのバリデーション
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  validates :name,:presence=>true,:length=>{:maximum=>20}
  has_many :messages
end
