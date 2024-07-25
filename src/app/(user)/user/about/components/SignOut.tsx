"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { GoSignOut } from "react-icons/go";

function SignOut() {
  const Logout = async () => {
    await signOut({ callbackUrl: "/", redirect: true });
  };

  return <button className="btn btn-error btn-sm text-white font-normal" onClick={Logout}><GoSignOut /> Logout</button>;
}

export default SignOut;
