exports.seed = function (knex) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          id: '105969ff-348c-41b7-b7f0-ef1105e80a09',
          name: 'Gislaine Costa Pereira',
          email: 'gislaine@email.com',
          address: 'Servidão Anhatomirim, 71 - Ponta das Canas, Florianópolis - SC, 88056-685',
          phone: '(48)999889989',
          password: '$2a$10$fQC2DSyTvA2DRLK9Dx9RX.hLbIrWnbrz33hjjDqWeMV9OFhCLbHFa'
        },
        {
          id: '11170083-eceb-4a29-b1a0-a72b7d5a7fee',
          name: 'Luciano Coelho de Souza',
          email: 'luciano@email.com',
          address: 'Rua Nossa Senhora Aparecida, 372 - Apto 502 - Barreiros, São José - SC, 88117-022',
          phone: '(48)999999989',
          password: '$2a$10$8o7QZfkz5UFZMzEuR4vF5.C3yk0UDsb3GY98qb1K.1kvfcClrfMeq'
        }
      ]);
    });
};