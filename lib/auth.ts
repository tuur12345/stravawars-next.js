import StravaProvider from "next-auth/providers/strava";
import { NextAuthOptions } from "next-auth";
import type { StravaProfile } from "next-auth/providers/strava";

const authOptions: NextAuthOptions = {
    providers: [
        StravaProvider({
            clientId: process.env.STRAVA_CLIENT_ID!,
            clientSecret: process.env.STRAVA_CLIENT_SECRET!,
            profile(profile) {
                return {
                    id: profile.id,
                    name: `${profile.firstname} ${profile.lastname}`,
                    image: profile.profile_medium,
                }
            },
        })
    ],
    callbacks: {
        async session({ session, token}) {
            session.stravaId = token.stravaId as string;
            session.accessToken = token.accessToken as string;
            session.refreshToken = token.refreshToken as string;
            return session;
        },
        async jwt({ token, account, profile}) {
            if (account && profile) {
                console.log(account)
                token.stravaId = (profile as StravaProfile).id;
                token.accessToken = account.access_token;
                token.refreshToken = account.refresh_token;
            }
            return token;
        }
    }
}

export default authOptions;