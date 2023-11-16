var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModels');

/* GET home page. */
router.get('/', async function(req, res, next) {
 
    var novedades = await novedadesModel.getNovedades();
    res.render('admin/novedades', {
      layout: 'admin/layout',
      persona: req.session.nombre,
      novedades
    });
});

router.get('/logout', function (req, res, next) {
  req.session.destroy();
  res.render('admin/login',{
    layout:'admin/layout'
  });
});

router.get('/agregar', (req, res, next) => {
res.render('admin/agregar',{
  layout: 'admin/layout'
  });
});

router.post('/agregar', async (req, res, next)=>{
  try {
    if (req.body.titulo !="" && req.body.subtitulo != "" && req.body.cuerpo != "" ){
      await novedadesModel.insertNovedades(req.body);
      res.redirect('/admin/novedades')
    } else{
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true, message: 'todos los campo son requeridos'
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar',{
      layout: 'admin/layout',
      error: true, message: 'No se cargo la novedad'
    })
  }
});

router.get('/eliminar/:id', async (req, res, next)=>{
  var id = req.params.id;
  await novedadesModel.deletNovedadById(id);
  res.redirect('/admin/novedades')
});

router.get('/modificar/:id', async (req, res, next)=> {
  let id = req.params.id;
  let novedad = await novedadesModel.getNovedadesById(id);
  res.render('admin/modificar',{
    layout: 'admin/layout',
    novedad
  });
});

router.post('/modificar',async (req, res, next) => {
  try {
    let obj = {
      titulo : req.body.titulo,
      subtitulo: req.body.subtitulo,
      cuerpo: req.body.cuerpo
    }
    await novedadesModel.modificarNovedadById(obj, req.body.id);
    res.redirect('/admin/novedades');
  } 
  catch (error) {
    console.log(error)
    res.render('admin/modificar',{
      layout: 'admin/layout',
      error: true, message: 'no de modifico la novedad'
    });
  }
});

module.exports = router;