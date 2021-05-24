exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('words').del()
    .then(function () {
      // Inserts seed entries
      return knex('words').insert([
        { id: 1, word: 'annyeonghaseyo', meaning: 'Hello', language_id: '2', user_id: 2 },
        { id: 2, word: 'gamsahabnida', meaning: 'Thank you', language_id: '2', user_id: 2  },
        { id: 3, word: 'ppang', meaning: 'Bread', language_id: '2', user_id: 2  },
        { id: 4, word: 'sarang', meaning: 'love', language_id: '2', user_id: 1}
      ]);
    });
};
