import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

const { GITHUB_ID, GITHUB_SECRET } = process.env;

export default NextAuth({
  providers: GITHUB_ID && GITHUB_SECRET
    ? [GitHubProvider({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })]
    : [],
  secret: process.env.NEXTAUTH_SECRET,
  session: { strategy: 'jwt' },
});
