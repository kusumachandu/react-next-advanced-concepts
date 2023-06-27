import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import { db } from '@/lib/db';
import { PrismaAdapter }  from '@next-auth/prisma-adapter';

function getGoogleCredentinals() {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CLEINT_SECRET;

  if(!clientId || clientId.length === 0){ 
    throw new Error("client id is undefined");
  }

  if(!clientSecret || clientSecret.length === 0) {
    throw new Error("clinet secret is undeifned")
  }

  return {clientId, clientSecret};
}

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  providers: [
    GoogleProvider({
      clientId: getGoogleCredentinals().clientId,
      clientSecret: getGoogleCredentinals().clientSecret,
    }),
    // Credentials({
    //   name: 'credentials',
    //   credentials: {
    //     email: {label: 'Email', type: 'email'},
    //     password: {label: 'Password', type: 'text'},
    //   },
    //   authorize: async (credentials) => {
    //     const db = await connectToDatabase();

    //     const users = db?.collection('users');

    //     const user = await users?.findOne({email: credentials?.email});
    //     if(user && user.password === credentials?.password) {
    //       const { _id, ...userData } = user;
    //       return Promise.resolve({ id: _id.toString(), ...userData });
    //     }

    //     return Promise.resolve(null);
    //   }
    // })
  ],
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/signin'
  },
  callbacks :{
    async session({token, session}) {
      if(token) {
        session.user.id = token.id
        session.user.name = token.name
        session.user.email = token.email
        session.user.image = token.picture
      }

      return session
    },

    // async jwt({token, user}) {
    //   const dbUser = await db
    // }
  }
}