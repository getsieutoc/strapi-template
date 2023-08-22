import NextAuth, { type NextAuthOptions } from 'next-auth';

if (!process.env.NEXTAUTH_SECRET) {
  throw new Error('Environment variables are not defined');
}

export const authOptions: NextAuthOptions = {
  providers: [],

  secret: process.env.NEXTAUTH_SECRET,

  pages: {
    signIn: '/signin',
  },

  callbacks: {
    // Due to the fact that we extend the next-auth's Session type in next-auth.d.ts
    // the Session's User type here is actually the DefaultSession['user'] with basic properties
    // like `name`, 'email' and 'image' only! That's why we have to add `id` and `role` here.
    session: async ({ session, user }) => {
      return {
        ...session,
        user: {
          ...session.user,
          ...user,
        },
      };
    },
  },
};

export default NextAuth(authOptions);
