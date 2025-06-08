import NextAuth from "next-auth"

declare module "next-auth" {
  interface Session {
    stravaId?: string
    accessToken?: string
    refreshToken?: string
  }
  interface JWT {
    stravaId?: string
    accessToken?: string
    refreshToken?: string
  }
}