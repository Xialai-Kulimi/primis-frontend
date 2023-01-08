import { mapMutations } from "vuex";

export const WS = {
  data() {
    return {
      ws: null,
      timeout: 250,
    };
  },
  methods: {
    ...mapMutations([
      "setWsData",
      "setConnectState",
      "setOperation",
      "pushTexts",
      "setButtons",
    ]),
    initWebsocket() {
      // if ws is CONNECTING or OPEN then don't initialize ws
      if (this.ws && (this.ws.readyState == 0 || this.ws.readyState == 1)) {
        return;
      }

      let url = `wss://${window.location.host}/api/ws`;
      this.ws = new WebSocket(url);
      this.ws.onopen = () => {
        this.timeout = 2500;
        this.setConnectState(true);
        console.log("ws connected");
      };
      this.ws.onerror = (e) => {
        console.error("ws connection fail", e);
        this.setConnectState(false);
      };
      this.ws.onmessage = (e) => {
        let _data = e.data;
        let recv = JSON.parse(_data);
        // console.log(recv.type)
        if (recv.type === "operation") {
          this.setOperation(recv);
        } else if (["caption", "surrounding", "status"].includes(recv.type)) {
          this.pushTexts(recv);
        } else if (
          ["target", "reachable", "inventory", "player"].includes(recv.type)
        ) {
          this.setButtons(recv);
        }
      };
      this.ws.onclose = () => {
        this.setConnectState(false);
        console.log("ws reconnecting...");
        setTimeout(
          this.initWebsocket,
          Math.max(5000, (this.timeout += this.timeout))
        );
      };
    },
    wsSend(data) {
      this.ws.send(data);
    },
  },
};
