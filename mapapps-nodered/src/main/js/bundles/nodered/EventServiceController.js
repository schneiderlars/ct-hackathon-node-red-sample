export default class EventServiceController {

    #socket = null;

    activate() {
        const socket = this.#socket = new WebSocket("ws://localhost:1880/ws/mapapps");
        socket.onopen = function (e) {
            socket.send("My name is John");
        };
    }

    handleEvent(event) {
        // topic = 'ct/map/EXTENT_CHANGE'
        let topic = event.getTopic();

        // reason is 'EXTENT_CHANGE' (the last topic part)
        let reason = event.getTopicReason();
    }

    sendWebSocketMessage(message) {
        this.#socket.send(message);
    }

}
