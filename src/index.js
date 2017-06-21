import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import api from './routing';

const app = express()
const config = {}
app.server = http.createServer(app)

// parse application/json
app.use(bodyParser.json({
}));

const router = require('./routing');

app.use('/api', api({ config }));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

export default app;