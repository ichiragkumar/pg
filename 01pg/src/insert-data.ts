import { Client } from "pg"
import { connectToLocalPostgresDb } from "./connect"

export const insertData = async () =>{
    const client = new Client(connectToLocalPostgresDb)
    await client.connect()
    const result = await client.query(`
        INSERT INTO users (username, email, password)
        VALUES ('ichiragkumar', 'ichiragkumar@gmail.com', '123456');
    `)
    console.log(`✅ Data inserted successfully!`, result)
}

insertData();