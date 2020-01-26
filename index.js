const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const pessoasRouter = require('./routes/pessoas');
const projetosRouter = require('./routes/projetos');

const db = require('knex')({
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'cadastro'
    }
});

const dependencies = {
    db
}

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

/* View engine */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('home'));
app.use('/pessoas', pessoasRouter(dependencies));
app.use('/projetos', projetosRouter(dependencies));

app.listen(port, () => console.log('App is running on port: ', + port));
