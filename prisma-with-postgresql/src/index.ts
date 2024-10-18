// connecting with the database and creating table 

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

     import { PrismaClient } from "@prisma/client";
import { log } from "console";

     const prisma = new PrismaClient();
     const User = prisma.user;
     
//      async function insertUser(username: string, password: string, firstName: string, lastName: string) {
//             const res = await User.create({
//               data:{
//                 username,
//                 password ,
//                 firstName ,
//                 lastName
//               }
//             }) 
//             console.log(res);
            
//      }
    
     
// insertUser("admin2", "123456", "harkirat", "singh")
// insertUser("admin3", "123456", "harkirat", "singh")
// insertUser("admin4", "123456", "harkirat", "singh")







interface UpdateParams {
  username: string
  firstName: string;
  lastName: string;
}
 

async function updateUser({username,firstName,lastName} :UpdateParams ) {

  const res = await User.update({
    where:{
      username 
    },
    data:{
      firstName,
      lastName
    }

  })
  
}
updateUser( {
  username:"admin1",
  firstName: "nitin",
  lastName: "awari"
})