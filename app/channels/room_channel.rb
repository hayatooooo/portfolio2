#サーバーサイドの処理（保存）に反応するチャンネル
class RoomChannel < ApplicationCable::Channel

  #接続された時
  #room_channel(paramsのルーム番号)ごとのstream
  def subscribed
    stream_from "room_channel_#{params["room"]}"
  end

  #切断された時
  def unsubscribed
  end

  #引数dataでメッセージを受け取る。そして、保存。
  def speak(data)
    Message.create! content: data["message"], user_id: current_user.id, room_id: params["room"]
  end
end
