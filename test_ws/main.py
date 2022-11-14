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


@app.on_event("startup")
async def startup_event():
    asyncio.create_task(main())


@app.websocket("/api/ws")
async def websocket_endpoint(websocket: WebSocket):
    await manager.connect(websocket)
    try:
        while True:

            data = await websocket.receive_json()
            console.log(data)
            if data.get('content'):
                await websocket.send_json({'type': 'caption', 'message': [{'style': '', 'message': f'你說：「{data["content"]}」'}, ]})
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
                ]
            })
            await websocket.send_json({
                'type': 'reachable',
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
                        'text': 'text1',
                        'id': 'btn3231',
                        'style': 'primary',
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
                        'style': 'info',
                        'description': '對，應該是測試敘述',
                        'list': [
                            {'text': 'text', 'value': 'value78'},
                            {'text': 'text2', 'value': 'value27878'},
                            {'text': 'text3', 'value': 'value37878'},
                        ]
                    },
                ]*20
            })
            # await manager.send_personal_message(f"You wrote: {data}", websocket)
            # await manager.broadcast(f"Client #{client_id} says: {data}")
    except WebSocketDisconnect:
        manager.disconnect(websocket)
        # await manager.broadcast(f"Client #{client_id} left the chat")
