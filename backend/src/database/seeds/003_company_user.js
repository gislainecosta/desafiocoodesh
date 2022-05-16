exports.seed = function (knex) {
  return knex('company_user').del()
    .then(function () {
      return knex('company_user').insert([
        {
          company_id: 1,
          user_id: '105969ff-348c-41b7-b7f0-ef1105e80a09'
        },
        {
          company_id: 2,
          user_id: '11170083-eceb-4a29-b1a0-a72b7d5a7fee'
        },
        {
          company_id: 2,
          user_id: '105969ff-348c-41b7-b7f0-ef1105e80a09'
        }
      ]);
    });
};