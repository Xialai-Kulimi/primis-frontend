import {mapMutations} from "vuex";

export const WS = {
    data(){
        return{
            ws:null
        }
    },
    methods:{
        ...mapMutations(['setWsData']),
        initWebsocket(){
            let url = `ws://${window.location.host}/api/ws`
            this.ws = new WebSocket(url)
            this.ws.onopen = ()=>console.log("ws connected")
            this.ws.onerror = (e)=>console.error("ws connection fail",e)
            this.ws.onmessage = (e)=>{
                let _data = e.data;
                this.setWsData(_data)
            }
        },
        wsSend(data){
            this.ws.send(data)
        }
    }
}