
exports.up = function (knex) {
    return knex.schema.createTable('words', (table) => {
        table.increments('id').primary()
        table.string('word')
        table.string('meaning')
    })

};

exports.down = function (knex) {
    return knex.schema.dropTable('words')
};
