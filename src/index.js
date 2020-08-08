const TempClient = require('./Structures/TempClient');
const config = require('../config.json');

const client = new TempClient(config);
client.start();
