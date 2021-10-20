var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', author: 'Ovando Rodriguez Joaquin Aaron',
  appName:'WebApp', company: 'Pila Completa 2' });
});

/* Agregaremos una ruta */
router.get('/greeting', function(req, res, next){
  res.send('Hola Como esta la Clase De Fullstack Web')
})
  
module.exports = router;
