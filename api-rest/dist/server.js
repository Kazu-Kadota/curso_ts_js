"use strict";var _app = require('./app');

const port = process.env.APP_PORT

const app = new (0, _app.App)(port)

app.listen()
