const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');

module.exports = {
    list: (req, res) => {
        db.Genre.findAll()
            .then(genres => {
                res.status(200).json({
                    meta: {
                        status: 200,
                        total: genres.length,
                        url: 'api/genres'
                    },
                    data: genres
                })
            })
            .catch(error => res.send(error)) //  QUE DEVUELVA ALGO Y NO QUEDE LA MAQUINA COMPUTANDO
    },
    detail: (req, res) => {
        db.Genre.findByPk(req.params.id)
            .then(genre => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: genre.length,
                        url: '/api/genre/' + req.params.id
                    },
                    data: genre
                }
                res.json(respuesta);
            })
            .catch(error => res.send(error)) //  QUE DEVUELVA ALGO Y NO QUEDE LA MAQUINA COMPUTANDO
    },


}