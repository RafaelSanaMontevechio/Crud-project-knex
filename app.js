const init = db => {

    const express = require('express');
    const bodyParser = require('body-parser');
    const path = require('path');

    const app = express();
    
    const routes = require('./routes');

    app.use(express.static(path.join(__dirname, 'public')));
    app.use(bodyParser.urlencoded({ extended: false }));

    /* View engine */
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));

    app.use(routes(db));

    return app;
}

module.exports = init
