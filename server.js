const express = require('express');
const app = express();

const router = require('./routes');

app.use(express.json()); //NÃO SEI SE VOU PRECISAR

const path = require('path');
// app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(express.static(path.resolve(__dirname, 'frontend')));
// app.use(express.static(path.resolve(__dirname, '..', 'src', 'views')));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs'); 

app.use(router); //
app.listen(3000, () => { //
    console.log('Servidor executando na porta 3000: http://localhost:3000')
});