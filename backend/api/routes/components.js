const express = require('express');
const controllerComponent = require('../controllers/component');
const camino  = express.Router();

camino.post('/createcomponent',controllerComponent.post);
camino.get('/getcomponent/:name', controllerComponent.getComponent)

module.exports = camino;