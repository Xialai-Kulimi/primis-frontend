import {mapMutations} from "vuex";

export const WS = {
    data(){
        return{
            ws:null,
            timeout: 250
        }
    },
    methods:{
        ...mapMutations(['setWsData', 'setConnectState']),
        initWebsocket(){
            let url = `ws://${window.location.host}/api/ws`
            this.ws = new WebSocket(url)
            this.ws.onopen = ()=>{
                this.timeout = 250
                this.setConnectState(true)
                console.log("ws connected")
            }
            this.ws.onerror = (e)=>{console.error("ws connection fail",e);this.setConnectState(false)}
            this.ws.onmessage = (e)=>{
                let _data = e.data;
                this.setWsData(_data)
            }
            this.ws.onclose = ()=>{
                this.setConnectState(false)
                console.log("ws reconnecting...")
                setTimeout(this.initWebsocket,Math.min(10000,this.timeout+=this.timeout))
            }
        },
        wsSend(data){
            this.ws.send(data)
        }
    }
}