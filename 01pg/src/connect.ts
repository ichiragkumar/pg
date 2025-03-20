import { Client } from "pg";



export const connectToLocalPostgresDb = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'mysecretpassword',
    database: 'postgres',
})



