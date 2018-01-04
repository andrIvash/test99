var express = require('express');
var router = express.Router();


// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now());
  next()
});

router.get('/', function (err, req, res) {
  //res.send('Hello World!'
  //res.render('index', { title: 'Hey', message: 'Hello there!' })
});

router.get('/admin', function (req, res) {

  //res.send('Hello World!')
  res.render('admin', { title: 'Hey', message: 'Hello there!' })

});


module.exports = router


