import { Client } from "pg"
import { connectToLocalPostgresDb } from "./connect"



export const getUser = async () =>{

    const client = new Client(connectToLocalPostgresDb)
    await client.connect()

    console.log("i will search all users")
    const result = await client.query(`
        SELECT * FROM users;
    `)
    console.log(`✅ Data fetched successfully!`, result)
}

getUser();