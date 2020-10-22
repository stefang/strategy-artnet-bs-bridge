try {
  var dmxlib = require('@stefang/dmxnet');
  /**
   * Call when we know the host and port to connect to
   * @param options {host:string, port:string}
   */
  window.createBrightSignArtnetBridge = options => {
    const {host, port} = options;
    window.dmx = {};
    window.dmx.lib = new dmxlib.dmxnet({
      verbose: 0,
    });
    window.dmx.sender = window.dmx.lib.newSender({
      ip: host,
      port: port,
      subnet: 0,
      universe: 0,
      net: 0,
    });
    window.dmx.send = function(msg) {
      console.log(msg);
      for (const [key, value] of Object.entries(msg)) {
        window.dmx.sender.prepChannel(parseInt(key), value);
      }
      window.dmx.sender.transmit();
    };
  };
} catch (e) {
  console.log('strategy-artnet-bs-bridge only runs on BrightSign');
}