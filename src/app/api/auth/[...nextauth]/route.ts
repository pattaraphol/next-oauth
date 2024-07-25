import NextAuth from "next-auth/next";
import { cmuAuthOptions } from "../cmu-auth-options";

const handler = NextAuth(cmuAuthOptions);
export { handler as GET, handler as POST};