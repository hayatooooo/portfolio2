module ApplicationCable
  class Connection < ActionCable::Connection::Base
    #コネクションを識別するキー
    identified_by :current_user

    #コネクションの接続時に呼ばれるメソッド
    def connect
      self.current_user = find_verified_user
    end

    private

    #deviseはwardenのラッパー
    #session情報はenv[warden]オブジェクト。このオブジェクトを用いて、認証を行うことができる。
    def find_verified_user
      verified_user = User.find_by(id: env['warden'].user.id)
      return reject_unauthorized_connection unless verified_user
      verified_user
    end
  end
end
