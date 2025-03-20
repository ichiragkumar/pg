import { Client } from "pg";
import { connectToLocalPostgresDb } from "./connect";


export const createUsersTable = async () =>{
        const client = new Client(connectToLocalPostgresDb)
        await client.connect()
        const result = await client.query(`
            CREATE TABLE books (
                id SERIAL PRIMARY KEY,
                username VARCHAR(50) UNIQUE NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
            );
        `)
        console.log(`✅ Table created successfully!`, result)


}

createUsersTable();

