//load dependenncies
const express= require('express');
const  app = express();
const path = require('path')

//set the engne to ejs
app.set('views', path.join(__dirname, '/src/views/'));

app.set('view engine', 'ejs');

app.use('/', require('./src/router/router'));

app.listen(8080);
console.log('8080 is the magic port');
