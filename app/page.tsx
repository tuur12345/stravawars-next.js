import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import StravaLogin from "@/components/StravaLogin";

export default async function Home() {
  const session = await getServerSession(authOptions);
  
  if (session) {
    return (
      <main>
        <h1>welcome {session.stravaId} {session.accessToken} {session.refreshToken}</h1>
        <h2>sigma {session.user?.name}</h2>
        <img src={session.user?.image as string} className="rounded w-20 h-20"></img>
      </main>
    )
  }
  return (
    <main>
      <StravaLogin />
    </main>
  )
}
