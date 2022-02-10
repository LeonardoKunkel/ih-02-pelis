const express = require('express');
const router = express.Router();

const moviesCtrl = require('../controllers/movies.controller')

router.get('/', moviesCtrl.getMovies);

router.get('/create', moviesCtrl.createMovie);

router.post('/create', moviesCtrl.createMovieForm);

router.get('/:id', moviesCtrl.getSingleMovie);

router.post('/:id/delete', moviesCtrl.deleteMovie);

router.get('/:id/edit', moviesCtrl.editMovie);

router.post('/:id/edit', moviesCtrl.editMovieForm);

module.exports = router;