
# todo

* 一個介面存取看到的，摸不到的距離的物件 target
* 一個介面存取 手摸得道的物件 reachable 物品欄和設定之類的 

* 在某處建立一個WS連線 `/api/ws` 並且更新store
* 把API接起來

* 增加一個list的operation

# API
這邊只列出ws內的
## 接收
接收字幕
```js
{
    type: 'type',  // type in caption, status, surrounding
    message: [],
}
```

接收指令
```js
{
    type: 'operation',
    alert: {},
    dialog: {},
    ...
}
```

接收實體變動
```
還沒想好
```
## 發送
還沒想好
