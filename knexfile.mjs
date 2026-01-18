import dotenv from "dotenv";
dotenv.config();

const db = {
    development: {
        client: "pg",
        connection: {
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            port: process.env.DB_PORT,
        },
        migrations: {
            tableName: "knex_migrations", // Optional: specify the migrations table name (It maintains the migration history)
            directory: "./db-migration/migrations", // Path to the migrations directory (Stores migration files)
            loadExtensions: ['.mjs'], // Load .mjs files for migrations (ESM support, be default it loads .js files)
        },
    }
};

export default db;