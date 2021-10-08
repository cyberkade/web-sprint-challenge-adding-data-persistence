
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('tasks').del()
      .then(function () {
        // Inserts seed entries
        return knex('tasks').insert([
          {
            task_id: 1,
            task_description: 'Figure out a project to make',
            project_id:1
          },
          {
            task_id: 2,
            task_description: 'Map out the correct way to create the database',
            task_completed: true,
            project_id:2
          },
          {
            task_id: 3,
            task_description: 'Write the API endpoints for requests',
            task_notes: 'Be patient and use debugger reigiously',
            task_completed: false,
            project_id:2
          },
          {
            task_id: 4,
            task_description: 'Write helper functions to use CRUD methods to alter the database',
            task_notes: 'Use knex, look at the docs, read errors!',
            task_completed: false,
            project_id:2
          }
        ]);
      });
  };
  