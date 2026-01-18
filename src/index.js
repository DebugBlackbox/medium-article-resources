import app from "./app.js";
import knex from "knex";
import dotenv from "dotenv";
dotenv.config();

const db = knex({
    client: 'pg',
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
});

global.db = db;
const PORT = process.env.PORT || 3000;

const main = async () => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

main();