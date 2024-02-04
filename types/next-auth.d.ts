/**
 * Configured using this guide in this link
 * https://reacthustle.com/blog/extend-user-session-nextauth-typescript?expand_article=1
 */

import NextAuth, { DefaultSession } from "next-auth";

interface UserWithRole extends DefaultUser {
  role: string;
  userId: number;
}

declare module "next-auth" {
  interface User extends UserWithRole {}

  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session extends DefaultSession {
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends UserWithRole {}
}
