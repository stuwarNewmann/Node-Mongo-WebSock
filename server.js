const express = require('express');
const bodyParser = require('body-parser');

const response = require('./network/response');

const router = express.Router();

let app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);


router.get('/message', (req, res) => {
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

router.post('/message', (req, res) =>{
    if(req.query.error == 'ok')
    {
        response.error(req, res, 'Error Simulado', 400);
    }else
    {
        response.success(req, res, 'Lista de mensajes: Mensaje agregado correctamente.', 201);
    }
    console.log('Message: Recived');
});

router.delete('/message', (req, res) =>{
    console.log(req.query);
    console.log(req.body);
    if(req.query.error == 'ok')
    {
        response.error(req, res, 'Error Simulado', 400);
    }else
    {
        response.success(req, res, 'Nombre eliminado correctamente: ' + req.body.name, 201);
    }
    console.log('Message: Deleted');
}); 

// app.use('/', (req, res) => {
//     res.send('Hello World');
// });



//Servir static files
app.use('/app', express.static('public'));
//Servir static files

app.listen(3000);
console.log('Server is running on port 3000');