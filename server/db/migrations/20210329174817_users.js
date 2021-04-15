exports.up = function(knex) {
    return knex.schema.createTable('users', table => {
        table.increments('id')
        table.string('username')
        table.string('first_name')
        table.string('last_name')
        table.string('password')
        table.boolean('admin')
        table.bigint('time')
        // table.integer('word_id')
        // table.integer('language_id')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')
};
