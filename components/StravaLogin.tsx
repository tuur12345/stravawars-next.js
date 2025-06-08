'use client';

import { signIn } from "next-auth/react";

export default function StravaLogin() {
  return (
    <button
      onClick={() => signIn("strava")}
      className="bg-[var(--primary)] p-3 cursor-pointer rounded"
    >
      Login with Strava
    </button>
  );
}
