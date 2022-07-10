const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

let app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(router);

router.get('/', (req, res) => {
    res.send('Hello desde el get!');
});

router.post('/', (req, res) =>{
    res.send('Hello desde el post!');
});

router.get('/message', (req, res) => {
    console.log(req.headers);
    res.header({
        'Custom-Header': 'Hello World',
    }); 
    res.send('Lista de mensajes: Ok');
    console.log('Message: List Ok.');
});

router.post('/message', (req, res) =>{
    res.send('Lista de mensajes: Mensaje agregado correctamente.');
    console.log('Message: Recived');
});

router.delete('/message', (req, res) =>{
    console.log(req.query);
    console.log(req.body);
    res.status(201).send({
        errror: '', 
        message: 'Nombre eliminado correctamente.' + req.body.name
    } );
    console.log('Message: Deleted');
}); 

// app.use('/', (req, res) => {
//     res.send('Hello World');
// });

app.listen(3000);
console.log('Server is running on port 3000');