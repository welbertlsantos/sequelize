const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const {User} = require('./app/models');

User.create({name: 'admin', email: 'admin@admin', password: '123456'});

app.use(express.urlencoded({extended :false}));



app.get('/',(req, res) => {
    res.send('Sequelize teste!');
});

app.listen(3000);
console.log('Servidor rodando na porta 3000');
