"use strict";
// connecting with the database and creating table 
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
// import { Client } from 'pg';
// // Async function to insert data into a table
// async function getUser(email: string) {
//   const client = new Client({
//    connectionString : "postgresql://demodb_owner:zm28ElfUsKAw@ep-shrill-hat-a582158b.us-east-2.aws.neon.tech/demodb?sslmode=require"
//   });
//   try {
//          await client.connect(); // Ensure client connection is established
//          const query = 'SELECT * FROM users WHERE email = $1';
//          const values = [email];
//          const result = await client.query(query, values);
//          if (result.rows.length > 0) {
//            console.log('User found:', result.rows[0]); // Output user data
//            return result.rows[0]; // Return the user data
//          } else {
//            console.log('No user found with the given email.');
//            return null; // Return null if no user was found
//          }
//        } catch (err) {
//          console.error('Error during fetching user:', err);
//          throw err; // Rethrow or handle error appropriately
//        } finally {
//          await client.end(); // Close the client connection
//        }
//      }
//      // Example usage
//      getUser('user5@example.com').catch(console.error);
//prisma
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const User = prisma.user;
function updateUser(_a) {
    return __awaiter(this, arguments, void 0, function* ({ username, firstName, lastName }) {
        const res = yield User.update({
            where: {
                username
            },
            data: {
                firstName,
                lastName
            }
        });
    });
}
updateUser({
    username: "admin1",
    firstName: "nitin",
    lastName: "awari"
});
