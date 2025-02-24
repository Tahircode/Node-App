import pkg from 'pg';
const { Client } = pkg;

const client=new Client({
 connectionString:"postgresql://neondb_owner:npg_C7Nk9ZxshQEf@ep-still-tree-a853qi12-pooler.eastus2.azure.neon.tech/neondb?sslmode=require"
})

async function CreateTable(){
    try{
    await client.connect();
const result1= await client.query(`
      CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      username VARCHAR(50) UNIQUE NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,

      created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP

      )
    `);
   const result2= await client.query(`
     CREATE TABLE addresses (
        id SERIAL PRIMARY KEY,
        user_id INTEGER NOT NULL,
        city VARCHAR(100) NOT NULL,
        country VARCHAR(100) NOT NULL,
        street VARCHAR(255) NOT NULL,
        pincode VARCHAR(20),
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            )
        `);
        console.log("table created successfullly");
   } catch(err){
    console.log("error while creating the table",err);
   }finally{
    await client.end();
   }
}
CreateTable();


