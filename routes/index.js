const init = db => {
    const router = require('express').Router();
    
    const home = require('../controllers/home');

    const pessoasRouter = require('./pessoas');
    const projetosRouter = require('./projetos');

    router.get('/', home.getIndex);

    router.use('/pessoas', pessoasRouter(db));
    router.use('/projetos', projetosRouter(db));

    return router;

}

module.exports = init
