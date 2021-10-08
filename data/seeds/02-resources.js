
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('resources').del()
      .then(function () {
        // Inserts seed entries
        return knex('resources').insert([
          {resource_id: 1, resource_name: 'Still dont know'},
          {resource_id: 2, resource_name: 'Module Projects', resource_description: 'Remember all those projects you completed this week? Yeah, those are all great resources!'},
        ]);
      });
  };
  