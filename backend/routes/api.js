var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novedadesModels');
const util = require('util');
const cloudinary = require('cloudinary').v2;
const nodemailer = require('nodemailer');



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

router.post('/contacto', async (req, res) =>{
  const mail = {
    from: req.body.email,
    to: 'diegotetesta@gmail.com',
    subject: 'Contacto desde la web',
    html: `${req.body.nombre} ${req.body.apellido} se contacto a través del formulario web y dejó el siguiente mensaje: ${req.body.mensaje} <br>
    Su email es: ${req.body.email} y su teléfono es: ${req.body.telefono}`
  }
  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });
  await transport.sendMail(mail)

  res.status(201).json({
    error:false,
    message: 'Mensaje Enviado'
  });
});


module.exports = router;