// eslint-disable-next-line
import NextAuth, { DefaultSession } from 'next-auth';
// import StrapiUser from '';

// declare module 'next-auth/adapters' {
//   interface AdapterUser extends StrapiUser {}
// }

declare module 'next-auth/core/types' {
  interface Session {
    user: DefaultSession['user'] & {
      id: string;
      // role: UserRole;
    };
  }
}
