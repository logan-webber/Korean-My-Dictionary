const { generateHash } = require('authenticare/server')

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all(
        [
     
        { id: 1, username: 'admin', first_name: 'Admin', last_name: 'Admin', password: 'admin123', admin: true, time: "1616993655" },
        { id: 2, username: 'user', first_name: 'Logan', last_name: 'Webber', password: 'yeet', admin: false, time: "1616993655" },
        ].map(user => {
          return generateHash(user.password)
          .then(hash => {
            console.log(hash)
            user.password = hash
            return user
          })
        }))
        .then(users => {
          return knex('users').insert(users)
        })
    })
}
    