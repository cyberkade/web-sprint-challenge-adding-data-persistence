const db = require('../../data/dbConfig')

function get() {
    return db('resources')
}

function getById(resource_id) {
    return db('resources')
    .where('resource_id', resource_id)
}

async function insert(resource) {
    const [id] = await db('resources')
    .insert(resource)
    return getById(id)
}


module.exports = {
    get,
    getById,
    insert,
  }