module.exports = function(RED) {
    function HackathonSampleNode(config) {
        RED.nodes.createNode(this,config);
        
        this.hackathonConfiguration = RED.nodes.getNode(config.hackathonConfiguration);
        
        var node = this;
        node.on('input', function(msg) {
            msg.payload = msg.payload.toLowerCase();
            node.send(msg);
        });

        node.status({fill:"green",shape:"dot",text: this.hackathonConfiguration.host});
    }
    RED.nodes.registerType("ct-hackathon-sample",HackathonSampleNode);
};
