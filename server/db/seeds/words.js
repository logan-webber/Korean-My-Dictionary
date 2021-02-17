exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('words').del()
    .then(function () {
      // Inserts seed entries
      return knex('words').insert([
        { id: 1, word: 'annyeonghaseyo', meaning: 'Hello' },
        { id: 2, word: 'gamsahabnida', meaning: 'Thank you' },
        { id: 3, word: 'ppang', meaning: 'Bread' }
      ]);
    });
};
