import { Client } from "pg";

async function getAllData(userId: Number){
    const client=new Client({
        connectionString:"postgresql://neondb_owner:npg_C7Nk9ZxshQEf@ep-still-tree-a853qi12-pooler.eastus2.azure.neon.tech/neondb?sslmode=require"
       })

       try{
    await client.connect();
    
    const query =`SELECT u.id , u.username, u.email, a.city,a.country
     FROM users u
      JOIN addresses a
       ON u.id =a.user_id
        WHERE u.id=$1`;

        const result = await client.query(query, [userId]);
        if(result.rows.length>0){
            console.log("User and its Address :", result.rows[0])
            return result.rows[0];
        }
        else{
            console.log('No user or address found with the given ID')
            return null;
        }
       }   catch(err){
        console.log("error while fetching the data",err);
        return err;
       }finally{
        await client.end();
       }

}
getAllData(1);