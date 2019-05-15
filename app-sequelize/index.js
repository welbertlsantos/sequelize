const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const {User} = require('./app/models');

app.use(express.urlencoded({extended :false}));
app.use(bodyParser.json());

app.get('/',(req, res) => {
    res.send('Sequelize teste!');
});

app.listen(3000);
console.log('Servidor rodando na porta 3000');


app.get('/users', async(req, res) => {
    const user = await User.findAll();
    res.json(user);
});

app.post('/users', async(req, res) => {
    const user = await User.create(req.body);
    res.json(user);
});

app.get('/users:id', (req, res) => {});
app.put('/users:id', (req, res) => {});
app.delete('/users:id', (req, res) => {}); 


/* implementando os métodos */

app.post('/register', async(req, res) => {
    const user = await User.create(req.body);
    res.json(user);
});


