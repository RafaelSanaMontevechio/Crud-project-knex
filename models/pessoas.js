const init = db => {

    const create = async (data) => {
        await db('pessoas').insert({
            nome: data.name,
            nascimento: data.birth,
            cargo: data.jobRole
        });
    }

    const findAll = async () => {
        const pessoas = await db('pessoas').select('*');
        return pessoas;
    }

    const findById = async (id) => {
        const pessoa = await db('pessoas').where({ id: id }).select('*');
        if (pessoa.length > 0) {
            return pessoa[0]
        }
        return {};
    }

    const update = async (id, data) => {
        await db('pessoas').where({ id: id }).update({
            nome: data.name,
            nascimento: data.birth,
            cargo: data.jobRole

        });
    }

    const deleteOne = async (id) => {
        await db('pessoas').where({ id: id }).del();
    }
    return {
        create,
        findAll,
        findById,
        update,
        deleteOne
    }
}

module.exports = init