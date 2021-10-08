const db = require('../../data/dbConfig')

function get() {
    return db('tasks as t')
    .leftJoin('projects as p', 't.project_id', 'p.project_id' )
    .select('p.project_name', 'p.project_description', 't.*')
}

function getById(task_id) {
    return db('tasks')
    .where('task_id', task_id)
}

async function insert(task) {
    const [id] = await db('tasks')
    .insert(task)
    return getById(id)
}


module.exports = {
    get,
    getById,
    insert,
  }
