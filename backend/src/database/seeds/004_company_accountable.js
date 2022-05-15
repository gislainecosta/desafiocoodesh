exports.seed = function (knex) {
  return knex('company_accountable').del()
    .then(function () {
      return knex('company_accountable').insert([
        {
          company_id: 1,
          accountable_id: 2
        },
        {
          company_id: 1,
          accountable_id: 1
        },
        {
          company_id: 2,
          accountable_id: 1
        },
        {
          company_id: 2,
          accountable_id: 3
        }
      ]);
    });
};