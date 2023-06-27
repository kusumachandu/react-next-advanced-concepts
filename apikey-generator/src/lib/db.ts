import { PrismaClient } from '@prisma/client'

declare global {
  // eslint-disable-next-line no-var, no-unused-vars
  var cachedPrisma: PrismaClient
}

let prisma: PrismaClient
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient()
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient()
  }
  prisma = global.cachedPrisma
}

export const db = prisma

// import { MongoClient } from "mongodb";

// export const connectToDatabase = async () => {
//   try {
//     const client = new MongoClient(process.env.DATABASE_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
  
//     if (!client.isConnected()) {
//       await client.connect();
//     }
  
//     return client.db();
//   } catch(error) {
//     console.log(error.message);
//   }
// }