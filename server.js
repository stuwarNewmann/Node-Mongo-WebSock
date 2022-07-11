const express = require('express');
const bodyParser = require('body-parser');

const router = require('./network/routes');

let app = express();
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

router(app)




// app.use('/', (req, res) => {
//     res.send('Hello World');
// });



//Servir static files
app.use('/app', express.static('public'));
//Servir static files

app.listen(3000);
console.log('Server is running on port 3000');