const express = require('express');
const router = express.Router();
const genresApiController = require('../../controllers/api/genresApiController');

//RUTAS API
// TODOS LO GENEROS
router.get('/', genresApiController.list);
// DETALLE DE UN GENERO  
router.get('/:id', genresApiController.detail);
// // PELICULAS POR GENERO
// router.get('/:id/movies', genresApiController.genreMovies);

module.exports = router;