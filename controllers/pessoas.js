const init = db => {

    const pessoasModel = require('../models/pessoas')(db);

    const index = async (req, res) => {
        const results = await pessoasModel.findAll();
        res.render('pessoas/index', { pessoas: results });
    }

    const createForm = (req, res) => {
        res.render('pessoas/create');
    }

    const createProcess = async (req, res) => {
        await pessoasModel.create(req.body);
        res.redirect('/pessoas');
    }

    const updateForm = async (req, res) => {
        const pessoa = await pessoasModel.findById(db, req.params.id);
        res.render('pessoas/update', { pessoa });
    }

    const updateProcess = async (req, res) => {
        await pessoasModel.update(req.params.id, req.body);
        res.redirect('/pessoas');
    }

    const deleteOne = async (req, res) => {
        await pessoasModel.deleteOne(req.params.id);
        res.redirect('/pessoas');
    }
    return {
        index,
        createForm,
        createProcess,
        updateForm,
        updateProcess,
        deleteOne
    }
}

module.exports = init
