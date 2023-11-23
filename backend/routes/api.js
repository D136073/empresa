var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novedadesModels');
const util = require('util');
const cloudinary = require('cloudinary').v2;


/* GET home page. */
router.get('/novedades', async function(req, res, next) {

  var novedades = await novedadesModel.getNovedades();

  novedades = novedades.map(novedad => {
    if (novedad.img_id){
      const imagen = cloudinary.url(novedad.img_id,{ 
        crop:"fill", 
      });
      return {
        ...novedad,
          imagen
      }
    } else {
      return {
        ...novedad,
        imagen: ''
      }
    }
  });

  res.json(novedades);
});
module.exports = router;