const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const APP_PORT = 4000;

const app = express();
app.use(morgan('combined'));
app.use(cors());

app.get('/sayHello', function(req, res){
  res.send('Hello from the back-end.');
});

app.listen(APP_PORT);
console.log('Webserver listening to port', APP_PORT);
