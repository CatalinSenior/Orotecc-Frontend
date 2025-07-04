"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useTranslations } from 'next-intl';

const slideData = [
  {
    id: 3,
    backgroundImage: "/group_bg.png",
    frameImage: "/home-image.png",
    altTextFrame: "Frame 3",
  },
];

const StaticSlider = () => (
  <div className="flex gap-4 mt-8 w-full justify-center">
    {slideData.map((slide) => (
      <div
        key={slide.id}
        className="relative size-full flex items-center justify-center"
      >
        <Image
          src={slide.frameImage}
          alt={slide.altTextFrame}
          width={700}
          height={500}
          className="z-10 rounded-lg"
        />
      </div>
    ))}
  </div>
);

const SignIn = () => {
  const router = useRouter();
  const t = useTranslations('Auth.Signin');
  const [role, setRole] = useState("root");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    // Handle sign in logic here
    router.push("/dashboard");
  };

  return (
    <div className="grid grid-cols-2 min-h-screen w-full">
      <div className=" text-white hidden md:flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-[#6a4cff] to-[#5739d6]">
        <div className="relative z-10 mx-auto">
          <div className="max-w-[414px]">
            <h2 className="text-lg font-semibold mb-3">
              {t('exploreFreeTier')}
            </h2>
            <p className="text-sm text-[#e0e0e0]">
              {t('learnMore')}{" "}
              <a
                href="https://orotecc.com/free"
                className="underline text-white"
              >
                orotecc.com/free
              </a>
              .
            </p>
            <StaticSlider />
          </div>
        </div>
        <div
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          style={{
            backgroundImage: "url(./Group_8.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      <div className="flex flex-col justify-center items-center relative py-16">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-[520px] p-10 flex flex-col gap-5"
        >
          <h3 className="font-semibold text-[#3b3f48] text-lg sm:text-lg lg:text-2xl tracking-[0] lg:leading-[64.8px]">
            {t('signInTitle')}
          </h3>

          {/* Role selection */}
          <RadioGroup value={role} onValueChange={setRole} className="flex flex-col gap-2 mb-2">
            <div className={`flex items-start gap-3 border rounded-lg px-4 py-3 ${role === "root" ? "bg-[#F6F5FE] border-[#764af1]" : "bg-white border-[#e0e0e0]"}`}>
              <RadioGroupItem value="root" id="role-root" />
              <div>
                <label htmlFor="role-root" className="font-semibold text-[#3b3f48] cursor-pointer">
                  {t('accountOwner')}
                </label>
                <div className="text-xs text-[#686e7b] mt-1">
                  {t('accountOwnerDesc')}
                </div>
              </div>
            </div>
            <div className={`flex items-start gap-3 border rounded-lg px-4 py-3 ${role === "team" ? "bg-[#F6F5FE] border-[#764af1]" : "bg-white border-[#e0e0e0]"}`}>
              <RadioGroupItem value="team" id="role-team" />
              <div>
                <label htmlFor="role-team" className="font-semibold text-[#3b3f48] cursor-pointer">
                  {t('teamMember')}
                </label>
                <div className="text-xs text-[#686e7b] mt-1">
                  {t('teamMemberDesc')}
                </div>
              </div>
            </div>
          </RadioGroup>

          {/* Email field */}
          <div>
            <label className="block text-base font-semibold text-[#222] mb-1">
              {t('emailLabel')}
            </label>
            <input
              type="email"
              {...register("email")}
              className={`w-full mt-0.5 p-3 border ${
                errors.email ? "border-red-500" : "border-[#e0e0e0]"
              } rounded-lg text-base focus:outline-none focus:border-[#6a4cff]`}
            />
          </div>

          {/* Password field */}
          <div>
            <label className="block text-base font-semibold text-[#222] mb-1">
              {t('passwordLabel')}
            </label>
            <input
              type="password"
              {...register("password")}
              className={`w-full mt-0.5 p-3 border ${
                errors.password ? "border-red-500" : "border-[#e0e0e0]"
              } rounded-lg text-base focus:outline-none focus:border-[#6a4cff]`}
            />
            <div className="flex justify-end mt-1">
              <a href="#" className="text-xs text-[#764af1] hover:underline">
                {t('forgotPassword')}
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-[#6a4cff] text-white rounded-3xl text-base font-semibold cursor-pointer mt-2 hover:bg-[#5739d6] transition"
          >
            {t('signIn')}
          </button>

          <div className="flex items-center text-center my-4 text-[#686E7B] text-sm">
            <div className="flex-1 h-px bg-[#686E7B]" />
            <span className=" px-6 z-10">{t('or')}</span>
            <div className="flex-1 h-px bg-[#686E7B]" />
          </div>

          <button
            type="button"
            className="w-full py-3 bg-white text-[#010101] border border-[#010101] rounded-3xl text-base font-semibold cursor-pointer hover:bg-[#f6f6fa] hover:text-[#6a4cff] hover:border-[#6a4cff] transition"
            onClick={() => router.push("/signup")}
          >
            {t('createAccount')}
          </button>
        </form>
        <div className="mt-8 text-center text-sm text-[#aaa]">
          <a href="#" className="text-[#6a4cff] hover:underline mx-1">
            {t('privacyPolicy')}
          </a>
          |
          <a href="#" className="text-[#6a4cff] hover:underline mx-1">
            {t('termsOfUse')}
          </a>
        </div>
        <p className="text-[#686E7B] text-sm mt-2">
          {t('copyright')}
        </p>
      </div>
    </div>
  );
};

export default SignIn;
