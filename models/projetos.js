const findAll = async (db) => {
    const projetos = await db('projetos').select('*');
    return projetos
}

module.exports = {
    findAll
}