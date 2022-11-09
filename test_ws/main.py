from typing import List
from fastapi import FastAPI, WebSocket, WebSocketDisconnect

import asyncio
from rich.console import Console
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
    while True:
        await asyncio.sleep(1)
        console.log(manager.active_connections)
        for i in manager.active_connections:
            await i.send_json({'type': 'surrounding', 'message': [{'class': 'info--text', 'message': '又一秒過去了'},]})

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
            await websocket.send_json({'type': 'caption', 'message': [{'class': '', 'message': f'你說：「{data["content"]}」'},]})
            await websocket.send_json({'type': 'caption', 'message': [{'class': 'primary--text', 'message': 'primary color test'},]})
            await websocket.send_json({'type': 'surrounding', 'message': [{'class': 'primary--text', 'message': 'primary color test'},]})
            await websocket.send_json({'type': 'status', 'message': [{'class': 'primary--text', 'message': 'primary color test'},]})
            # await manager.send_personal_message(f"You wrote: {data}", websocket)
            # await manager.broadcast(f"Client #{client_id} says: {data}")
    except WebSocketDisconnect:
        manager.disconnect(websocket)
        # await manager.broadcast(f"Client #{client_id} left the chat")
