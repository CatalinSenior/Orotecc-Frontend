import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

type Step6WelcomeProps = {
  onGoToDashboard: () => void;
};

const Step6Welcome = ({ onGoToDashboard }: Step6WelcomeProps) => (
  <div className="w-full flex flex-col items-center justify-center gap-6">
    <div className="flex flex-col items-center gap-4 py-48">
      <Image src="/Subtract.png" alt="Cloud" width={80} height={80} className="mb-2" />
      <div className="flex flex-col gap-2">
        <h2 className="text-xl md:text-2xl font-bold text-white text-center">Welcome to Orotecc!</h2>
        <h3 className="text-lg font-semibold text-white text-center">Thanks for joining us.</h3>

      </div>
      <p className="text-base text-[#F6F5FE] text-center max-w-xl mt-2">
        We&apos;re setting up your account now — this usually takes just a few minutes. You&apos;ll receive a confirmation email once everything is ready.
      </p>
      <Button
        className="mt-6 px-8 py-3 rounded-full bg-[#764AF1] text-white font-semibold text-base hover:bg-white/30 transition"
        onClick={onGoToDashboard}
      >
        Go to Orotecc Dashboard
      </Button>
      <div className="flex flex-col md:flex-row items-center justify-center gap-2 mt-4">
        <a href="/signup" className="underline text-white/90 hover:text-white font-medium">Create another account</a>
        <span className="hidden md:inline text-white/50">or</span>
        <a href="/contact" className="underline text-white/90 hover:text-white font-medium">Get in touch with Sales</a>
      </div>
    </div>
    <div className="mt-10 mb-4 text-white text-sm text-center">
      <a href="#" className="underline hover:text-white">Privacy Policy</a>
      <span className="mx-2">|</span>
      <a href="#" className="underline hover:text-white">Terms of Use</a>
      <div className="mt-2">© 2025 Orotecc Web Services or its affiliates. All rights reserved.</div>
    </div>
  </div>
);

export default Step6Welcome; 