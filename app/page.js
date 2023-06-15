"use client";

import Image from "next/image";
import { useSession, signIn } from "next-auth/react";
import HomePage from "@/components/HomePage";

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <HomePage />
      </div>
    );
  }

  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <Image
        src="/insta-mobile.png"
        width={400}
        height={200}
        className="hidden lg:inline-block"
      />
      <div className="flex flex-col items-center gap-10">
        <Image src="/Instagram-Logo.png" width={200} height={200} />
        <p className="italic">This app is used for Educational purpose only</p>
        <button
          type="button"
          onClick={() => signIn()}
          className="px-6 py-3 bg-red-400 rounded-md text-white hover:bg-red-500"
        >
          Sign In
        </button>
      </div>
    </main>
  );
}
