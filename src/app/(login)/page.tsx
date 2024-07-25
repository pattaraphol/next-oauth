"use client";
import { useEffect } from "react";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

function Login() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const router = useRouter();

  const clientID = "hH7ZdeaHRcDPtEPtn8E62T8H07NhrEb7RKKzaKC0"
  const cmuOAuthUrl = `https://oauth.cmu.ac.th/v2/Authorize.aspx?response_type=code&client_id=${clientID}&redirect_uri=${encodeURIComponent('http://localhost:3000')}`;

  useEffect(() => {
    const handleSignIn = async () => {
      if (!code) {
        router.push(cmuOAuthUrl);
      }

      const result = await signIn("credentials", { code, redirect: false });
      if (result?.ok) {
        router.push("/user/about");
      } 
    };

    handleSignIn();
  }, [cmuOAuthUrl, code, router]);
  return null
}

export default Login;
