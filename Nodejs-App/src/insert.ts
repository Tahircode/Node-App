import { Client } from "pg";

async function insertData(
    username:string,
    email:string,
    password:string,
    city:string,
    country:string,
    street:string,
    pincode:string
){
const client=new Client({
 connectionString:"postgresql://neondb_owner:npg_C7Nk9ZxshQEf@ep-still-tree-a853qi12-pooler.eastus2.azure.neon.tech/neondb?sslmode=require"
})
try{
    await client.connect();
    const insertUserData="INSERT INTO users (username , email, password) VALUES ($1,$2,$3) RETURNING id"
    const values=[username,email,password];
    const res1=await client.query(insertUserData,values);
    const userid=res1.rows[0].id;

    const insertAddressData="INSERT INTO addresses (user_id, city, country, street, pincode) VALUES ($1,$2,$3,$4,$5)"
       const val2=[userid,city, country, street, pincode]
    const res2=await client.query(insertAddressData,val2);

//    console.log("UserData",res1);
//    console.log("AddressData",res2);
   console.log("data inserted successfully");
}
catch(e){
   console.log("error during the insertion",e);
}finally{
    await client.end();
}
}
insertData("userT","tahir@gmail.com","122ww22","srinagar","kashmir","khanNagar","253121").catch(console.error);




