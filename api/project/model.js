const db = require('../../data/dbConfig')

function get() {
    return db('projects')
}

function getById(project_id) {
    return db('projects')
    .where('project_id', project_id)
}

async function insert(project) {
    const [id] = await db('projects')
    .insert(project)
    return getById(id)
}


module.exports = {
    get,
    getById,
    insert,
  }
