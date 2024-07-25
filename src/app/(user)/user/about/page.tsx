import React from "react";
import { cmuAuthOptions } from "@/app/api/auth/cmu-auth-options";
import { getServerSession } from "next-auth";

import CoreValues from "./components/CoreValues";
import Vision from "./components/Vision";
import Mission from "./components/Mission";
import SignOut from "./components/SignOut";

async function About() {
  
  const session = await getServerSession(cmuAuthOptions);
  return (
    <main className="flex-1 overflow-y-auto md:pt-4 pt-4 px-6 bg-base-200 min-h-screen">
      <div className="flex">
        <div className="flex-1">🎉 ยินดีต้อนรับคุณ {session?.user.name}</div>
        <div className="flex-1 text-end">
          <SignOut/>
        </div>
      </div>
      <CoreValues />
      <Vision />
      <Mission />
    </main>
  );
}

export default About;
