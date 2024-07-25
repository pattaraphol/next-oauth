import NextAuth from "next-auth"

declare module "next-auth" {
  interface User {
    id?: string;
    Role?: string;
  }

  interface Session {
    user: {
      id?: string;
      Role?: string;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    Role?: string;
  }
}