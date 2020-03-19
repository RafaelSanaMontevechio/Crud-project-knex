const init = db => {

    const express = require('express');
    const router = express.Router();
    const pessoasController = require('../controllers/pessoas')(db);

    router.get('/', pessoasController.index.bind(null));
    router.get('/create', pessoasController.createForm);
    router.post('/create', pessoasController.createProcess.bind(null));
    router.get('/update/:id', pessoasController.updateForm.bind(null));
    router.post('/update/:id', pessoasController.updateProcess.bind(null));
    router.get('/delete/:id', pessoasController.deleteOne.bind(null));
    return router;
}

module.exports = init
