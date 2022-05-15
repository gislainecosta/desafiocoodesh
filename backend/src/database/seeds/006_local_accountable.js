exports.seed = function (knex) {
  return knex('local_accountable').del()
    .then(function () {
      return knex('local_accountable').insert([
        {
          local_id: '5e052bb5-48c1-4722-a36d-ae566dfd2af7',
          accountable_id: 3
        },
        {
          local_id: '5e052bb5-48c1-4722-a36d-ae566dfd2af7',
          accountable_id: 2
        }
      ]);
    });
};