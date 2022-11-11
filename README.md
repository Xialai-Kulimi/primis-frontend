
# todo

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

