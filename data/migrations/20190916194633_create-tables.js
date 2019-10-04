
exports.up = function(knex) {
    return knex.schema.createTable('zoos', tbl => {
        tbl.increments();
        tbl.string('zoo_name', 128).notNullable();
        tbl.string('address', 128).notNullable().unique();
    })
    .createTable('species', tbl => {
        tbl.increments();
        tbl.string('species_name', 128).notNullable.unique();
    })
    .createTable('anmials', tbl => {
        tbl.increments();
        tbl.string('animal_name', 128).notNullable();
        // foregin key setup using knex
        tbl.integer('species_id')
            .unsigned() // integar should be positive
            .notNullable()
            .references('id') 
            .inTable('species') // this table must exist
    })
    .createTable('zoo_animals', tbl => {
        tbl.integer('zoo_id')
            .unsigned() // integar should be positive
            .notNullable()
            .references('id') 
            .inTable('zoos'); 
        tbl.integer('animal_id')
            .unsigned() // integar should be positive
            .notNullable()
            .references('id') 
            .inTable('animals');
        tbl.primary(['zoo_id', 'animal_id']) 
    });
};

exports.down = function(knex) {
    // reverse order of creation
    return knex.schems
        .dropTableIfExists('zoo_animals')
        .dropTableIfExists('animals')
        .dropTableIfExists('species')
        .dropTableIfExists('zoos')
};
