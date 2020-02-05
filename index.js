const db = require('knex')({
    client: 'mysql2',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'cadastro'
    }
});

const app = require('./app')(db);

const port = process.env.PORT || 3000;

app.listen(port, (err) => {
    if(err) {
        console.log('It could not initiate the application: ', err);
    }else{ 
        console.log('App is running on port:' + port);
    }
});
