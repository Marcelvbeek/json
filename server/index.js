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

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use('/api/private', authController.verifyToken)
app.use('/api/private', api.private());
app.use('/api/public', api.public());

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

//userSetter.setUsers();

export default app;