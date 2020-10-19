var myArgs = process.argv.slice(2);
var dmxlib = require('@stefang/dmxnet');

class strategyArtnetBsBridge {
  constructor(options) {
    this.dmxnet = new dmxlib.dmxnet({
      verbose: 0,
    });

    this.sender = dmxnet.newSender({
      ip: options.host,
      port: options.port,
      subnet: 0,
      universe: 0,
      net: 0,
    });
  }

  sendArtnet(msg) {
    console.log(msg);
    for (const [key, value] of Object.entries(msg)) {
      this.sender.prepChannel(parseInt(key), value);
    }
    this.sender.transmit();
  }
}