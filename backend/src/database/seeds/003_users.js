exports.seed = function (knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          id: '105969ff-348c-41b7-b7f0-ef1105e80a09',
          username: 'teste@gmail.com',
          password: '$2a$10$J8ZfPJZLeQ6R66Ug.AvRyuQI901b837M5eofbgvdykpkfOyWH7su.'
        },
        {
          id: '4a89fa1b-1e05-4c17-8763-e0168ea2d6c9',
          username: 'usuario@gmail.com',
          password: '$2a$10$CUlwz2DGc6AklhkBdGN23O4cbIs9BmTqLT56f41B/NVwM5yBRcw3m'
        }
      ]);
    });
};