export default class EventServiceController {

    #socketReceive = null;
    #socketPublish = null;

    activate() {
        const socketReceive = this.#socketReceive = new WebSocket("ws://localhost:1880/ws/mapapps/receive");
        const socketPublish = this.#socketPublish = new WebSocket("ws://localhost:1880/ws/mapapps/publish");

        socketPublish.onopen = function() {
            var message = {
              'cmd': 'Client connected'
            };
            socketReceive.send(JSON.stringify(message));
          };

          socketPublish.onmessage = function(event) {
            debugger;
          };
        
    }

    handleEvent(event) {
        if(this.#socketReceive.readyState === 1) {
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
        this.#socketReceive.send(JSON.stringify(object));
    }

}
