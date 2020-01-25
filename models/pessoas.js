const create = async (db, data) => {
    await db('pessoas').insert({
        nome: data.name,
        nascimento: data.birth,
        cargo: data.jobRole
    });
}

const findAll = async (db) => {
    const pessoas = await db('pessoas').select('*');
    return pessoas;
}

const findById = async (db, id) => {
    const pessoa = await db('pessoas').where({ id: id }).select('*');
    if (pessoa.length > 0) {
        return pessoa[0]
    }
    return {};
}

const update = async (db, id, data) => {
    await db('pessoas').where({ id: id }).update({
        nome: data.name,
        nascimento: data.birth,
        cargo: data.jobRole

    });
}

const deleteOne = async (db, id) => {
    await db('pessoas').where({ id: id }).del();
}

module.exports = {
    create,
    findAll,
    findById,
    update,
    deleteOne
}