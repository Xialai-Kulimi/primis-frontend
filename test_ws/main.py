from fastapi import FastAPI, WebSocket
from fastapi.responses import HTMLResponse
from rich.console import Console
console = Console()

app = FastAPI()


@app.websocket("/api/ws")
async def websocket_endpoint(websocket: WebSocket):
    console.log('connect')
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        console.print(data)
        await websocket.send_text(f"Message text was: {data}")