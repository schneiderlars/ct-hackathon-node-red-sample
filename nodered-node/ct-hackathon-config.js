module.exports = function (RED) {
  function HackathonConfigNode(n) {
    RED.nodes.createNode(this, n);
    this.host = n.host;
    this.port = n.port;

  }
  RED.nodes.registerType("ct-hackathon-config", HackathonConfigNode);
};