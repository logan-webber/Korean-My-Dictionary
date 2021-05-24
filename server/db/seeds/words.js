exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('words').del()
    .then(function () {
      // Inserts seed entries
      return knex('words').insert([
        { id: 1, word: 'Annyeonghaseyo', meaning: 'Hello', language_id: 2, user_id: 2 },
        { id: 2, word: 'Gamsahabnida', meaning: 'Thank you', language_id: 2, user_id: 2  },
        { id: 3, word: 'Ppang', meaning: 'Bread', language_id: 2, user_id: 2  },
        { id: 4, word: 'Sarang', meaning: 'Love', language_id: 2, user_id: 1}
      ]);
    });
};
