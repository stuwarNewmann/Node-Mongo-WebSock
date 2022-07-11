const express = require('express');
const bodyParser = require('body-parser');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.get('/', (req, res) => {
    controller.getMessage()
        .then(messageList => {
            response.success(req, res, messageList);
        })
        .catch(err => {
            response.error(req, res, 'Error al obtener los mensajes', 500, err);
        })
});

router.post('/', (req, res) =>{
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201);
        })
        .catch(() => {
            response.error(req, res, 'Informacion Invalida', 400, 'Error en el controller');
        })
});

router.delete('/', (req, res) =>{
    console.log(req.query);
    console.log(req.body);
    if(req.query.error == 'ok')
    {
        response.error(req, res, 'Error inesperado', 400, 'Es solo una simulacion de error');
    }else
    {
        response.success(req, res, 'Nombre eliminado correctamente: ' + req.body.name, 201);
    }
    console.log('Message: Deleted');
}); 

module.exports = router;