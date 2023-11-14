var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/novedades', {
    layout: 'admin/layout',
    persona: req.session.nombre
  });
});

router.get('/logout', function (req, res, next) {
  req.session.destroy();
  res.render('admin/login',{
    layout:'admin/layout'
  });
});

module.exports = router;