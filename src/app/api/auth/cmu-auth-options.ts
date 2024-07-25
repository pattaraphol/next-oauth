import { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import axios from "axios";

export const cmuAuthOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 1 * 24 * 60 * 60, // 1 day
  },
  pages: {
    signIn: "/",
  },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialProvider({
      credentials: {
        code: { label: "code", type: "text" },
      },
      async authorize(credentials) {
        const clientId = process.env.CMU_CLIENT_ID;
        const clientSecret = process.env.CMU_CLIENT_SECRET;
        const uriToken = "https://oauth.cmu.ac.th/v2/GetToken.aspx";
        const uriDataBasicInfo ="https://misapi.cmu.ac.th/cmuitaccount/v1/api/cmuitaccount/basicinfo";
        const redirectURI = "http://localhost:3000/api/oauth";

        if (!clientId) {
          throw new Error("Client ID is not defined");
        }

        if (!credentials?.code) {
          return null;
        }

        // request access_token
        if (clientId !== null) {
          const tokenResponse = await axios.post(
            uriToken,
            {
              code: credentials.code,
              client_id: clientId,
              client_secret: clientSecret,
              redirect_uri: redirectURI,
              grant_type: "authorization_code",
            },
            {
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
            }
          );

          // access_token
          const { access_token } = tokenResponse.data;
          console.log("access token : " + access_token);

          // get user info
          const userInfoResponse = await axios.get(uriDataBasicInfo, {
            headers: { Authorization: `Bearer ${access_token}` },
          });
          const userData = userInfoResponse.data;
          //console.log(userData)

          // ส่งค่า session
          return {
            id: access_token,
            name: `${userData.firstname_TH} ${userData.lastname_TH}`,
            email: userData.cmuitaccount,
            Role: userData.organization_name_TH,
          };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.Role = user.Role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.Role = token.Role;
      }
      return session;
    },
  },

  //debug: process.env.NODE_ENV === "development",
};
