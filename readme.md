# ノティ
ブラウザに任意の通知を表示する

## MVP
- プッシュを受けたら全員に通知する


## API

### push管理と待ち受け画面
この画面を表示しておくとプッシュが来る
- アドレス : /web
- レスポンス: HTML

### 通知する
- アドレス : /notify
- メソッド : GET
- パラメータ
  - appname (string) : アプリ名。
  - title (string) : タイトル。
  - message (string) : 本文。200文字まで。

## Socket.io
- 送信
  - join : appnameの追加
    - パラメータ: アプリ名の配列([string])
- 受信
  - notify : プッシュを受信した
    - パラメータ
      - appname (string) : アプリ名。
      - title (string) : タイトル。
      - message (string) : 本文。200文字まで。
      - tag (number) : 識別子。実態は時刻。
