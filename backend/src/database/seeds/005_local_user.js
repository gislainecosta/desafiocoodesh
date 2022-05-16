exports.seed = function (knex) {
  return knex('local_user').del()
    .then(function () {
      return knex('local_user').insert([
        {
          local_id: '5e052bb5-48c1-4722-a36d-ae566dfd2af7',
          user_id: '105969ff-348c-41b7-b7f0-ef1105e80a09'
        }
      ]);
    });
};