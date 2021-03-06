// Update with your config settings.

module.exports = {

    development: {
        client: 'sqlite3',
        connection: {
            filename: './src/database/dev.sqlite'
        },
        useNullAsDefault: true,
        migrations: {
            directory: "./src/database/migrations"
        }
    },
};