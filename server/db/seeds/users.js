
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { id: 1, username: 'admin', first_name: 'Admin', last_name: 'Admin', password: 'admin123', admin: true, time: "1616993655" },
        { id: 2, username: 'user', first_name: 'Logan', last_name: 'Webber', password: 'yeet', admin: false, time: "1616993655" },
      ]);
    });
};
