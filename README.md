
# todo

* 聊天的訊息如果輸入重複內容有機會卡住
* 新增的訊息會出現在視線外(視窗不會自動往下滾到最新)
* 更好的重新連接



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

接收target變動
```js
{
    type: 'target',
    buttons: [
        {
            text: 'text1',
            id: 'btn1',
            list: [
                {text: 'text', value: 'value'},
                {text: 'text2', value: 'value2'},
                {text: 'text3', value: 'value3'},
            ]
        },
        {
            text: 'text2',
            id: 'btn2'
            list: [
                {text: 'text', value: 'value'},
                {text: 'text2', value: 'value2'},
                {text: 'text3', value: 'value3'},
            ]
        },
    ]
}
```

reachable
```js
{
    type: 'reachable',
    buttons: [
        {
            text: 'text1',
            id: 'btn1',
            list: [
                {text: 'text', value: 'value'},
                {text: 'text2', value: 'value2'},
                {text: 'text3', value: 'value3'},
            ]
        },
        {
            text: 'text2',
            id: 'btn2'
            list: [
                {text: 'text', value: 'value'},
                {text: 'text2', value: 'value2'},
                {text: 'text3', value: 'value3'},
            ]
        },
    ]
}
```

## 發送

chat
```js
{
    type: 'chat',
    content: 'text'
}
```

click
```js
{
    type: 'click',
    payload: {
        id: '',
        value: ''
    }
}
```

answer (form)
```js
{
    type: 'answer',
    payload: {
        // some form answer here
    }
}
```

