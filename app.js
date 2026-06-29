//hasta arriba las de terceros exportaciones
require('dotenv').config();

const Server = require('./models/server');


const server = new Server();


server.listen();