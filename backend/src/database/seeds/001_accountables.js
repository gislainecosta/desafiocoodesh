exports.seed = function (knex) {
  return knex('accountables').del()
    .then(function () {
      return knex('accountables').insert([
        {
          name: 'Natasha', 
          address: 'Rua Nossa Senhora Aparecida, 372 - Apto 502 - Barreiros, São José - SC, 88117-022',
          phone: '(48)999999989'
        },
        {
          name: 'Padmé',
          address: 'Servidão Anhatomirim, 71 - Ponta das Canas, Florianópolis - SC, 88056-685',
          phone: '(48)999889989'
        },
        {
          name: 'Saxa',
          address: 'Rua Alcino Guanabara, 156 - Casa B - Vila Hauer, Curitiba - PR, 816110-110',
          phone: '(41)997889989'
        }
      ]);
    });
};