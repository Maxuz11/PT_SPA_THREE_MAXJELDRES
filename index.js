const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
const arbolesController = require('./controllers/arboles.js');
app.use(cors(
    {
        origin: '*'
        ,methods: ['GET','POST']
    }
));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/arboles', async (req, res) => {
    try {
      const arboles = await arbolesController.ObtArboles();
      res.json(arboles);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener arboles' });
    }
  });

  app.get('/api/ubicacionArbol/:id', async (req, res) => {
    try {
        //recibir el id...
        let id = req.params.id;
      const ubi = await arbolesController.ObtUbicacionArb(id);
      res.json(ubi);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener arboles' });
    }
  }); 

  app.get('/api/fotoArbol/:id', async (req, res) => {
    try {
        //recibir el json del con el id...
        let id = req.params.id;
      const foto = await arbolesController.fotoArbol(id);
      res.json(foto);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener arboles' });
    }
  });  

  app.get('/api/ubicacionId/:id', async (req, res) => {
    try {
        let id = req.params.id;
      const idUbi = await arbolesController.ObtIdUbicacion(id);
      res.json(idUbi);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener id Ubicación' });
    }
  });  
  

app.listen(port, () => {
    console.log('Backend corriendo en el puerto ' + port);
    console.log('En localhost:'+ port);
  });

