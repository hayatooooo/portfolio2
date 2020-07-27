// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `rails generate channel` command.

import { createConsumer } from "@rails/actioncable"
//Consumer→1つのActionCableのサーバが、複数ハンドリングするためのもの
export default createConsumer()
