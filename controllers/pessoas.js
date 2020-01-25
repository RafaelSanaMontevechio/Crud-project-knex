const pessoasModel = require('../models/pessoas');

const index = async (db, req, res) => {
    const results = await pessoasModel.findAll(db);
    res.render('pessoas/index', { pessoas: results });
}

const createForm = (req, res) => {
    res.render('pessoas/create');
}

const createProcess = async (db, req, res) => {
    await pessoasModel.create(db, req.body);
    res.redirect('/pessoas');
}

const updateForm = async (db, req, res) => {
    const pessoa = await pessoasModel.findById(db, req.params.id);
    res.render('pessoas/update', { pessoa });
}

const updateProcess = async (db, req, res) => {
    await pessoasModel.update(db, req.params.id, req.body);
    res.redirect('/pessoas');
}

const deleteOne = async (db, req, res) => {
    await pessoasModel.deleteOne(db, req.params.id);
    res.redirect('/pessoas');
}

module.exports = {
    index,
    createForm,
    createProcess,
    updateForm,
    updateProcess,
    deleteOne
}
