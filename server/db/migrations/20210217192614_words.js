
exports.up = function (knex) {
    return knex.schema.createTable('words', (table) => {
        table.increments('id').primary()
        table.string('word')
        table.string('meaning')
        table.integer('user_id')
        table.integer('language_id')
    })

};

exports.down = function (knex) {
    return knex.schema.dropTable('words')
};
