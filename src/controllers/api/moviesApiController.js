const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;

// IMPORTAR DB
const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;

module.exports = {

    store: (req, res) => {
        // return res.json(req.body) // COMPROBAR POR POSTMAN U THUNDER U OTRO...
        Movies
            .create(req.body)
            // .create({
            //     title: req.body.title,
            //     rating: req.body.rating,
            //     awards: req.body.awards,
            //     release_date: req.body.release_date,
            //     length: req.body.length,
            //     genre_id: req.body.genre_id
            // })
            .then(movie => {
                return res.status(200).json({
                    meta: {
                        status: 200,
                        total: movie.length,
                        url: 'api/movies/create',
                        created: 'ok'
                    },
                    data: {
                        movie
                    }
                })
            })
            .catch(error => res.send(error))
    },
    destroy: (req, res) => {
        // return res.json(req.body) // COMPROBAR POR POSTMAN U THUNDER U OTRO...
        Movies
            .destroy({
                where: {
                    id: req.params.id
                }
            })
            .then(response => {
                return res.status(200).json({
                    meta: {
                        status: 200,
                        id: req.params.id,
                        peli_borrada: 'ok'
                    }
                })
            })
    }



} // module.exports /