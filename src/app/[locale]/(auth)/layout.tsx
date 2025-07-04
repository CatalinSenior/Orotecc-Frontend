import React from "react";
import AuthHeader from "@/components/AuthHeader";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col ">
      <AuthHeader />
      <main className="flex-1 flex items-center justify-center">{children}</main>
    </div>
  );
}