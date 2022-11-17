
# todo

- 可開關的文字輸入介面，並且可以從後端選擇要顯示的提示 譬如說 此回合發言次數已用完
- 替物品攔每區製作小標題 像是以下  並且要配套的改API
-- 武器 ----
刀 劍 槍 
-- 食物 ----
S級雜燴兔肉
-- 雜項 ---
冒險者卡片 

- 可由後端強制停止使用者無限嘗試重新連線，或是轉址到其他網站

# functions

應該要提供的功能：

- 自訂義顏色訊息 
- 自訂義裝飾訊息
- snackbar
- alert
- switch
- slider
- modal
- button
- text field
- number input
- text
- title
- subtitle

應該呈現的資訊：

- 環境
    - 區域名稱
    - 區域描述
    - 可見目標
    - 可及目標
- 玩家
    - 角色狀態
    - 可做動作
    - 包包？
    - 裝備欄？
- 實況
    - 環境實況 (可能之後可以做玩家自定義分類)

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

接收按鈕變動

可以透過BtnsView或是ListView輸出
```js
{
    type: 'target', // type in targe, reachable, action
    buttons: [
        {
            text: 'text1',
			description: 'description',
            disabled: false, //optional
            action: '', //optional
            icon: '', //optional, click to trigger default event
            id: 'btn1',
            color: 'primary',
            list: [
                {text: 'text', value: 'value', disabled: false, //optional},
                {text: 'text2', value: 'value2'},
                {text: 'text3', value: 'value3'},
            ]
        },
        {
            text: 'text2',
            id: 'btn2',
            color: 'error',
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

