"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
function insertData(username, email, password, city, country, street, pincode) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new pg_1.Client({
            connectionString: "postgresql://neondb_owner:npg_C7Nk9ZxshQEf@ep-still-tree-a853qi12-pooler.eastus2.azure.neon.tech/neondb?sslmode=require"
        });
        try {
            yield client.connect();
            const insertUserData = "INSERT INTO users (username , email, password) VALUES ($1,$2,$3) RETURNING id";
            const values = [username, email, password];
            const res1 = yield client.query(insertUserData, values);
            const userid = res1.rows[0].id;
            const insertAddressData = "INSERT INTO addresses (user_id, city, country, street, pincode) VALUES ($1,$2,$3,$4,$5)";
            const res2 = yield client.query(insertAddressData, [userid, city, country, street, pincode]);
            //    console.log("UserData",res1);
            //    console.log("AddressData",res2);
            console.log("data inserted successfully");
        }
        catch (e) {
            console.log("error during the insertion", e);
        }
        finally {
            yield client.end();
        }
    });
}
insertData("userT", "tahir@gmail.com", "122ww22", "srinagar", "kashmir", "khanNagar", "253121").catch(console.error);
