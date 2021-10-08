
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {project_id: 1, project_name: 'IDK Yet Man'},
        {project_id: 2, project_name: 'WEB46 U4 Sprint 2', project_description: 'Code, code, code, code, code, and code some more before you code.', project_completed: true}
      ]);
    });
};
