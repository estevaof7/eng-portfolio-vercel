const express = require('express');
const app = express();

const router = require('./routes');

app.use(express.json());

const path = require('path');
app.use(express.static(path.resolve(__dirname, 'frontend')));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs'); 

app.use(router);
app.listen(3001, () => {
    console.log('Servidor executando na porta 3001: http://localhost:3001')
});