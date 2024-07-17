const express = require('express');
const app = express();
const routesApp = require('./routes.js');

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use('/', routesApp);

let port = 3000;

app.listen(port, () => {
  console.log('🚀 ~ file: app.js:45 ~ app.listen :' + port);
});
