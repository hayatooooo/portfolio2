class Message < ApplicationRecord
    validates :content, presence: true
    #ActiveRecordのcreateまたはcreate!メソッドが呼び出されてデータベースへのコミットが正常終了した後に、
    #{}で指定したブロックが後処理として呼び出される
    #perform_laterメソッドを通じてjobを呼び出す
    after_create_commit { MessageBroadcastJob.perform_later self }
    belongs_to :user
    belongs_to :room
end
