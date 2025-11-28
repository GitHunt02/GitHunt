import NextAuth, { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";

const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    // ... add more providers here
  ],
  // Add other configurations (e.g., database adapter, callbacks) as needed
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };