
exports.up = function(knex) {
    return (
        knex.schema.alterTable('categories', function(table) {
            table.integer('user_id').notNullable();
            table.foreign('user_id').references('id').inTable('users');    
        }),
        knex.schema.alterTable('bills', function(table) {
            table.integer('user_id').notNullable();
            table.foreign('user_id').references('id').inTable('users');    
        }),
        knex.schema.alterTable('moves', function(table) {
            table.integer('user_id').notNullable();
            table.foreign('user_id').references('id').inTable('users');    
        }),
        knex.schema.alterTable('estimates', function(table) {
            table.integer('user_id').notNullable();
            table.foreign('user_id').references('id').inTable('users');    
        }),
        knex.schema.alterTable('payment_types', function(table) {
            table.integer('user_id').notNullable();
            table.foreign('user_id').references('id').inTable('users');    
        }),
        knex.schema.alterTable('invoices', function(table) {
            table.integer('user_id').notNullable();
            table.foreign('user_id').references('id').inTable('users');    
        })
    );
};

exports.down = function(knex) {
    return (
        knex.schema.alterTable('categories', function(table) {
            table.dropForeign('user_id');
            table.dropColumn('user_id');
        }),
        knex.schema.alterTable('bills', function(table) {
            table.dropForeign('user_id');
            table.dropColumn('user_id');
        }),
        knex.schema.alterTable('moves', function(table) {
            table.dropForeign('user_id');
            table.dropColumn('user_id');
        }),
        knex.schema.alterTable('estimates', function(table) {
            table.dropForeign('user_id');
            table.dropColumn('user_id');
        }),
        knex.schema.alterTable('payment_types', function(table) {
            table.dropForeign('user_id');
            table.dropColumn('user_id');
        }),
        knex.schema.alterTable('invoices', function(table) {
            table.dropForeign('user_id');
            table.dropColumn('user_id');
        })
    );
};
