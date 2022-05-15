exports.seed = function (knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          id: '105969ff-348c-41b7-b7f0-ef1105e80a09',
          username: 'teste@gmail.com',
          password: '$2a$10$J8ZfPJZLeQ6R66Ug.AvRyuQI901b837M5eofbgvdykpkfOyWH7su.'
        }
      ]);
    });
};