const express = require('express');
const app = express();

const routes = require('./routes');

app.set('views', './src/templates/pages/');
app.set('view engine', 'pug');



app.use(express.static('./docs/'));
app.use('/', routes);


app.use(function(req, res, next) {
  var err = new Error(404, 'Sorry, Page Not Found');
  console.log(err);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})