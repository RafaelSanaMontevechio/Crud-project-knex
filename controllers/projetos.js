const projetosModel = require('../models/projetos');

const index = async (db, req, res) => {
    const projetos = await projetosModel.findAll(db);
    res.render('projetos/index', { projetos });
}

const createForm = (req, res) => {
    res.render('projetos/create');
}

module.exports = {
    index,
    createForm
}