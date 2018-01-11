var express = require('express');
var router = express.Router();


// middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
//   console.log('Time: ', Date.now());
//   next()
// });

router.get('/', function (req, res) {
  //res.send('Hello World!'
  res.render('index', { title: 'Hey', message: 'Hello there!' })
});
router.get('/about', function (req, res) {
  //res.send('Hello World!')
  res.render('about', { title: 'Hey', message: 'Hello there!' })
});
router.get('/admin', function (req, res) {
  //res.send('Hello World!')
  res.render('admin', { title: 'Hey', message: 'Hello there!' })
});
router.get('/blog', function (req, res) {
  //res.send('Hello World!')
  res.render('blog', { title: 'Hey', message: 'Hello there!' })
});
router.get('/my-works', function (req, res) {
  //res.send('Hello World!')
  res.render('my-works', { title: 'Hey', message: 'Hello there!' })
});


module.exports = router


