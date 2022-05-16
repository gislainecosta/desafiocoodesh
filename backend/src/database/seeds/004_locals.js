exports.seed = function (knex) {
  return knex('locals').del()
    .then(function () {
      return knex('locals').insert([
        {
          id: '5e052bb5-48c1-4722-a36d-ae566dfd2af7',
          local_name: 'Praça do Cachorro',
          address: 'Rua Wilson Luz, 18 - Coqueiros, Florianópolis - SC, 88080-085',
          company_id: 2,
          admin_id: '105969ff-348c-41b7-b7f0-ef1105e80a09'
        }
      ]);
    });
};