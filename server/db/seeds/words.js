exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('words').del()
    .then(function () {
      // Inserts seed entries
      return knex('words').insert([
        { id: 1, word: 'Annyeonghaseyo', meaning: 'Hello', user_id: 2, language_id: 2 },
        { id: 2, word: 'Gamsahabnida', meaning: 'Thank you', user_id: 2, language_id: 2  },
        { id: 3, word: 'Ppang', meaning: 'Bread', user_id: 2, language_id: 2  },
        { id: 4, word: 'Sarang', meaning: 'Love', user_id: 1, language_id: 2}
      ]);
    });
};
 