const express = require('express');
const router = express.Router();
const { store, destroy } = require('../../controllers/api/moviesApiController'); // NO FUNCIONA DELETE
// const moviesApiController = require('../../controllers/api/moviesApiController'); // FUNCIONA DELETE
// API ROUTES

// CREATE
router.post('/store', store);

// UPDATE

// DESTROY
router.delete('/delete/:id', destroy);



module.exports = router;
