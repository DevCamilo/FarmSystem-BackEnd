'use strict'

const ClientController = require('../controllers/ClientController');
const { celebrate, Joi } = require('celebrate');
const express = require('express');
const api = express.Router();

api.post('/create-client', celebrate({
    body: Joi.object().keys({
        name: Joi.string().required(),
        lastName: Joi.string().required(),
        telephone: Joi.string().required(),
        document: Joi.string().required(),
        typeUser: Joi.number().integer().required(),
        userName: Joi.string().required(),
        password: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(300).send({status: false, message: 'Faltan datos por enviar o no son correctos'});
}, ClientController.createClient);

api.get('/list-client', ClientController.listClient);

api.get('/list-client-id/:id?', celebrate({
    query: Joi.object({
        id: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(300).send({status: false, message: 'Faltan datos por enviar o no son correctos'});
}, ClientController.listClientByID);

api.post('/update-client/:id?', celebrate({
    query: Joi.object({
        id: Joi.string().required()
    }).unknown(),
    body: Joi.object().keys({
        name: Joi.string(),
        lastName: Joi.string(),
        telephone: Joi.string(),
        document: Joi.string(),
        typeUser: Joi.number().integer()
    }).unknown()
}), (err, req, res, next) => {
    res.status(300).send({status: false, message: 'Faltan datos por enviar o no son correctos'});
}, ClientController.updateClient);

api.get('/delete-client/:id?', celebrate({
    query: Joi.object({
        id: Joi.string().required()
    }).unknown()
}), (err, req, res, next) => {
    res.status(300).send({status: false, message: 'Faltan datos por enviar o no son correctos'});
}, ClientController.deleteClient);

module.exports = api;