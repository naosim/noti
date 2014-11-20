# ノティ
ブラウザに任意の通知を表示する

## できること(予定)
- プッシュキーを管理する
  - キーの登録(取得)
  - キーの削除
- プッシュする
- プッシュを待ち受ける

## MVP
- プッシュを受けたら全員に通知する

## 今後やる
- プシュキーによる送信者管理
- ユーザ管理

## API

### push管理と待ち受け画面
この画面を表示しておくとプッシュが来る
- アドレス : /web
- レスポンス: HTML

### プッシュ
- アドレス : /push
- メソッド : GET
- パラメータ
  - title (string) : タイトル
  - message (string) : 本文。200文字まで。

### プッシュキーリストの取得
- アドレス : /getlist
- メソッド : GET
- レスポンス
```
  {
    "result": {
      "status": "ok"
      "error_mssage": ""
    },
    "data": {
      [
        {
          "name": "hoge",
          "pushkey": "abc123",
        }
        ,...
      ]
    }
  }
```

### プッシュキーの新規追加
- アドレス : /add
- メソッド : GET
- パラメータ
  - name (int): 任意の名前
- レスポンス
```
  {
    "result": {
      "status": "ok"
      "error_mssage": ""
    },
    "data": {
      "name" : "hoge",
      "pushkey" : "abc123"
    }
  }
```

### プッシュキーの削除
- アドレス : /delete
- メソッド : GET
- パラメータ
  - push (int): 削除するpushkey
- レスポンス
```
  {
    "result": {
      "status": "ok"
      "error_mssage": ""
    },
    "data": {
    // 削除後のリスト
    [
      {
        "name": "hoge",
        "pushkey": "abc123",
      }
      ,...
    ]
  }
}
```

### WebSocket
- アドレス : ws://.../notify
- 送信
  - ping : キープアライブ。通信が切れるので定期的に呼ぶこと。
- 受信
  - notify : プッシュを受信した
