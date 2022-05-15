
exports.seed = function(knex) {
  return knex('companies').del()
    .then(function () {
      return knex('companies').insert([
        { 
          company_name: 'Home',
          cnpj: '99.999.999/0001-99',
          company_description: 'Empresa criada em casa mesmo',
          company_admin: 1
        },
        { 
          company_name: 'Delícias da tia Gi',
          cnpj: '99.999.888/0001-99',
          company_description: 'Fábrica de Petiscos caseiros para cães e gatos',
          company_admin: 2
        }
      ]);
    });
};