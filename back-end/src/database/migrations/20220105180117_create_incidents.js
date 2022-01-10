
exports.up = function (knex) {
  return knex.schema.createTable('incidents', function (table) {
    table.increments();
    table.string('nome').notNullable();
    table.string('sexo', 1).notNullable();
    table.float('idade').notNullable();
    table.string('ong_id').notNullable();

    table.string('custos').notNullable();
    table.string('historico').notNullable();

    table.foreign('ong_id').references('id').inTable('ongs');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('incidents');
};
