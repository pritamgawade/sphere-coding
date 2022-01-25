
exports.up = function(knex) {
  return knex.schema.createTable('testusers', (table) => {
     table.increments('id');
     table.text('email').notNullable().unique();
     table.text('first_name').notNullable();
     table.text('last_name').notNullable();
     table.text('country').notNullable();
     table.timestamps(true, true);
     table.index(['id']);
  }) 
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
