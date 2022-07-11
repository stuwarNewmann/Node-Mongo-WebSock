const express = require('express');
const bodyParser = require('body-parser');

const response = require('../../network/response');

const router = express.Router();

router.get('/', (req, res) => {
    console.log(req.headers);
    res.header({
        'Custom-Header': 'Hello World',
    }); 
    if(req.query.error == 'ok')
    {
        response.error(req, res, 'Error message', 500);
    }else
    {
        response.success(req, res, 'Lista de mensajes: Ok');        
    }
    console.log('Message: List Ok.');
});

router.post('/', (req, res) =>{
    if(req.query.error == 'ok')
    {
        response.error(req, res, 'Error Simulado', 400);
    }else
    {
        response.success(req, res, 'Lista de mensajes: Mensaje agregado correctamente.', 201);
    }
    console.log('Message: Recived');
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