const express = require('express');
const projetosController = require('../controllers/projetos');

const projetosRouter = ({ db }) => {
    const router = express.Router();
    router.get('/', projetosController.index.bind(null, db));
    router.get('/create', projetosController.createForm);
    return router;
}

module.exports = projetosRouter