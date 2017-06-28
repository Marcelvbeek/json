import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import api from './routing'
import userSetter from './auth/setupUsers'
import AuthController from './auth/authController'
const authController = new AuthController();

const app = express()
const config = {}
app.server = http.createServer(app)

// parse application/json
app.use(
  bodyParser.json({})
);

const router = require('./routing');

app.use('/api/private', authController.verifyToken)
app.use('/api/private', api.private());
app.use('/api/public', api.public());

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

//userSetter.setUsers();

export default app;