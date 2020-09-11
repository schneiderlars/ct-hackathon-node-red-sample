export default class EventServiceController {

    #socket = null;

    activate() {
        const socket = this.#socket = new WebSocket("ws://localhost:1880/ws/mapapps");
        socket.onopen = (e) => {
            this.send("WebSocket connection established.");
        };
    }

    handleEvent(event) {
        if(this.#socket.readyState === 1) {
            this.sendObject({
                topic: event.getTopic(),
                reason: event.getTopicReason()
            });
        }
    }

    send(message) {
        this.sendObject({
            message: message
        });
    }

    sendObject(object) {
        this.#socket.send(JSON.stringify(object));
    }

}
