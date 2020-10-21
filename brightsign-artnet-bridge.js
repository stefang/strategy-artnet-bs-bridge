var dmxlib = require('@stefang/dmxnet');

export class strategyArtnetBsBridge {
  constructor(options) {
    this.dmxnet = new dmxlib.dmxnet({
      verbose: 0,
    });

    this.sender = this.dmxnet.newSender({
      ip: options.host,
      port: options.port,
      subnet: 0,
      universe: 0,
      net: 0,
    });
  }

  send(msg) {
    console.log(msg);
    for (const [key, value] of Object.entries(msg)) {
      this.sender.prepChannel(parseInt(key), value);
    }
    this.sender.transmit();
  }
}