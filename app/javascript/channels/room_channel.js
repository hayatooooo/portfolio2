//クライアントサイドの処理（送信ボタンやサーバーから送られてくる情報）に反応するチャンネル
import consumer from './consumer'

$(document).on('turbolinks:load', function() {
  //指定のChannelにSubscriptionを作成→ConsumerがSubscriberになる
  //Consumerは、指定のChannelに対するSubscriberとして振る舞うことができる
  //Consumerはチャットルームを同時にいくつでもSubscribeできる
  const chatChannel = consumer.subscriptions.create({ channel: 'RoomChannel', room: $('#messages').data('room_id') }, {
    connected() {
    },

    disconnected() {
    },

    //サーバーサイドから送信された値を受け取る
    received: function(data) {
      return $('#messages').append(data['message']);
    },

    //room_channel.rbのspeakメソッドを実行できる
    //クライアントサイドからサーバーサイドへmessageを渡す
    speak: function(message) {
      return this.perform('speak', {
        message: message
      });
    }
  });

  //enterキーが押されたら、speakへ送信。その後テキストエリアをクリア。
  $(document).on('keypress', '[data-behavior~=room_speaker]', function(event) {
    if (event.keyCode === 13) {
      chatChannel.speak(event.target.value);
      event.target.value = '';
      return event.preventDefault();
    }
  });
});
