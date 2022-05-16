
exports.seed = function(knex) {
  return knex('companies').del()
    .then(function () {
      return knex('companies').insert([
        { 
          company_name: 'Dev Gislaine Costa',
          cnpj: '99.999.999/0001-99',
          company_description: 'Planejamento, criação e manutenção de sites',
          company_admin: '105969ff-348c-41b7-b7f0-ef1105e80a09'
        },
        { 
          company_name: 'Delícias da tia Gi',
          cnpj: '99.999.888/0001-99',
          company_description: 'Fábrica de Petiscos caseiros para cães e gatos',
          company_admin: '105969ff-348c-41b7-b7f0-ef1105e80a09'
        }
      ]);
    });
};