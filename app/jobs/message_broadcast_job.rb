#非同期でブロードキャストするジョブ
class MessageBroadcastJob < ApplicationJob
  #ジョブを実行するキューの名前を指定
  queue_as :default

  #ブロードキャストする処理
  def perform(message)
    ActionCable.server.broadcast "room_channel_#{message.room_id}", message: render_message(message)
  end

  private

  #ビューをレンダリング
  def render_message(message)
    ApplicationController.renderer.render partial: "messages/message", locals: { message: message }
  end
end
