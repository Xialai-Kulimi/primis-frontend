from typing import List
from fastapi import FastAPI, WebSocket, WebSocketDisconnect

import asyncio
from rich.console import Console
from datetime import datetime
console = Console()

app = FastAPI()


class ConnectionManager:
    def __init__(self):
        self.active_connections: List[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)

    def disconnect(self, websocket: WebSocket):
        self.active_connections.remove(websocket)


manager = ConnectionManager()


async def main():
    status = console.status("starting")
    status.start()
    while True:
        await asyncio.sleep(1)
        status.update(f'connect: {len(manager.active_connections)}')
        for i in manager.active_connections:
            await i.send_json({'type': 'surrounding', 'message': [{'style': 'info--text', 'message': '又一秒過去了'}, ]})
            await i.send_json({'type': 'status', 'message': [{'style': 'info--text', 'message': str(datetime.now())}, ]})
            await i.send_json({
                'type': 'reachable',
                'buttons': [

                    {
                        'text': str(datetime.now()),
                        'id': 'btn3231',
                        'style': 'primary--text',
                        'description': '這是測試敘述',
                        'list': [
                            {'text': 'text', 'value': 'value'},
                            {'text': 'text2', 'value': 'value2'},
                            {'text': 'text3', 'value': 'value3'},
                        ]
                    },
                    {
                        'text': 'text2',
                        'id': 'btn22323',
                        'style': 'info--text',
                        'description': '對，應該是測試敘述',
                        'list': [
                            {'text': 'text', 'value': 'value78'},
                            {'text': 'text2', 'value': 'value27878'},
                            {'text': 'text3', 'value': 'value37878'},
                        ]
                    },
                ]*20
            })

@app.on_event("startup")
async def startup_event():
    asyncio.create_task(main())

@app.get('/api/auth/me')
async def login():
    return {
            "_id": "409635353893404685",
            "accent_color": None,
            "avatar": "a_cd69bf72da89e7dd4e1f039aaf1e6fcc",
            "avatar_decoration": None,
            "banner": "5ab8516be12ae9652a5a2918fce35088",
            "banner_color": None,
            "create_time": 1668676799.255981,
            "discriminator": "8775",
            "flags": 0,
            "id": "409635353893404685",
            "locale": "zh-TW",
            "mfa_enabled": True,
            "premium_type": 2,
            "public_flags": 0,
            "username": "ItisCaleb"
      }


@app.websocket("/api/ws")
async def websocket_endpoint(websocket: WebSocket):
    await manager.connect(websocket)
    try:
        while True:

            data = await websocket.receive_json()
            console.log(data)
            if data.get('content'):
                await websocket.send_json({'type': 'caption', 'message': [{'style': '', 'message': f'你說：「{data["content"]}」'}, ]})
                # continue
            await websocket.send_json({'type': 'caption', 'message': [{'style': 'primary--text', 'message': 'primary style test'}, ]})
            await websocket.send_json({'type': 'surrounding', 'message': [{'style': 'primary--text', 'message': 'primary style test'}, ]})
            await websocket.send_json({'type': 'status', 'message': [{'style': 'primary--text', 'message': 'primary style test'}, ]})
            await websocket.send_json({
                'type': 'target',
                'buttons': [
                    {
                        'text': 'text1',
                        'id': 'btn1',
                        'style': 'primary--text',
                        'description': '這個東西，大概是拿來測試用的',
                        'action': '10m',
                        'icon': 'mdi-walk',
                        'value': 'walk',
                        'list': [
                            {'text': 'text', 'value': 'value'},
                            {'text': 'text2', 'value': 'value2'},
                            {'text': 'text3', 'value': 'value3'},
                        ]
                    },
                    {
                        'text': 'text2',
                        'id': 'btn2',
                        'style': 'error--text',
                        
                        'description': '這個東西，可能只是拿來測試不同的顏色用的',
                        # 'list': [
                        #     {'text': 'text', 'value': 'value'},
                        #     {'text': 'text2', 'value': 'value2'},
                        #     {'text': 'text3', 'value': 'value3'},
                        # ]
                    },
                    {
                        'text': '上鎖的箱子',
                        'id': 'btn2',
                        'style': 'info--text',
                        'disabled': True,
                        'description': '順便測試個disabled',
                        'list': [
                            {'text': '開啟', 'value': 'value', 'disabled': True},
                            {'text': 'text2', 'value': 'value2'},
                            {'text': 'text3', 'value': 'value3'},
                        ]
                    },
                    {
                        'text': 't',
                        'id': 'btn1',
                        'style': 'primary--text',
                        'description': '',
                        'action': '10m',
                        'icon': 'mdi-walk',
                        'value': 'walk',
                        'list': [
                            {'text': 'text', 'value': 'value'},
                            {'text': 'text2', 'value': 'value2'},
                            {'text': 'text3', 'value': 'value3'},
                        ]
                    },
                ]
            })
            
            await websocket.send_json({
                'type': 'player',
                'buttons': [

                    {
                        'text': 'text1',
                        'id': 'btn3231',
                        'style': 'primary--text',
                        'description': '這是測試敘述',
                        'list': [
                            {'text': 'text', 'value': 'value'},
                            {'text': 'text2', 'value': 'value2'},
                            {'text': 'text3', 'value': 'value3'},
                        ]
                    },
                    {
                        'text': 'text2',
                        'id': 'btn22323',
                        'style': 'info--text',
                        'description': '對，應該是測試敘述',
                        'list': [
                            {'text': 'text', 'value': 'value78'},
                            {'text': 'text2', 'value': 'value27878'},
                            {'text': 'text3', 'value': 'value37878'},
                        ]
                    },
                ]*20
            })
            await websocket.send_json({
                'type': 'inventory',
                'buttons': [
                    {
                        'text': '上鎖的箱子',
                        'id': 'btn2',
                        'style': 'info--text',
                        'disabled': True,
                        'description': '順便測試個disabled',
                        'list': [
                            {'text': '開啟', 'value': 'value', 'disabled': True},
                            {'text': 'text2', 'value': 'value2'},
                            {'text': 'text3', 'value': 'value3'},
                        ]
                    },
                    {
                        'text': 'text1',
                        'id': 'btn3231',
                        'style': 'primary--text',
                        'description': '這是測試敘述',
                        'list': [
                            {'text': 'text', 'value': 'value'},
                            {'text': 'text2', 'value': 'value2'},
                            {'text': 'text3', 'value': 'value3'},
                        ]
                    },
                    {
                        'text': 'text2',
                        'id': 'btn22323',
                        'style': 'info--text',
                        'description': '對，應該是測試敘述',
                        'list': [
                            {'text': 'text', 'value': 'value78'},
                            {'text': 'text2', 'value': 'value27878'},
                            {'text': 'text3', 'value': 'value37878'},
                        ]
                    },
                ]*20
            })
            if data.get('content') == 'operation':
                await websocket.send_json({
                    'type': 'operation',
                    'alert': {
                        'text': 'asdfas\nfd\ndfasdfasdf',
                        'style': 'error'
                    },
                    'dialog': {
                        'title': 'asdfas',
                        'text': 'asdfaasl\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\ndfasdf'
                    },
                    'snackbar': {
                        'text': 'asdfsadfasdfasdfsadf',
                        'style': 'success'
                    },
                    'input': {
                        'id': 'input_asdfasdfasdf',
                        'title': "asdfasdfasdf",
                        'subtitle': 'asdfasdf',
                        'persistent': True,
                        'inputs': [
                            {'type': 'text', 'label': 'pls input text', 'id': 'text1'},
                            {'type': 'textfield', 'label': 'pls input text',
                                'id': 'textfield1'},
                            {'type': 'select', 'label': 'pls input text', 'id': 'select1', 'config': {
                                'options': [{'text': 'label1', 'value': '1'}, {'text': 'label2', 'value': '2'}]}},
                            {'type': 'slider', 'label': 'pls input text',
                                'id': 'slider1', 'config': {'min': 0, 'max': 10}},
                            {'type': "radio", 'label': "label", 'id': "radio_id", 'config': {'options': [
                                {'text': 'label1', 'value': '1'}, {'text': 'label2', 'value': '2'}]}},
                        ]
                    },
                    'text': {'title': '123123123', 'subtitle': 'asdfasdf'},
                    'list': {
                        'title': "asdfasdf",
                        'subtitle': "asdfasdf",
                        'id': "list_asdfasdfasdfasdfasd f",
                        'list': [{'text': "123123123", 'style': "primary--text", 'id': "123123123"}, {'text': "123123123", 'style': "primary--text", 'id': "123123123"}, {'text': "關閉", 'style': "error--text", 'id': "123123123"}],
                    },
                })
            # await manager.send_personal_message(f"You wrote: {data}", websocket)
            # await manager.broadcast(f"Client #{client_id} says: {data}")
    except WebSocketDisconnect:
        manager.disconnect(websocket)
        # await manager.broadcast(f"Client #{client_id} left the chat")
