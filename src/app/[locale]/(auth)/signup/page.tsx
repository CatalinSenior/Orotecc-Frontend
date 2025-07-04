"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { useTranslations } from 'next-intl';

type SignUpFormData = {
  email: string;
  accountName: string;
};

type VerificationFormData = {
  verificationCode: string;
};

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

const SignUp = () => {
  const t = useTranslations('Auth.Signup');
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<"signup" | "verify">("signup");
  const [userEmail, setUserEmail] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({});

  const {
    register: registerVerification,
    handleSubmit: handleVerificationSubmit,
    formState: { errors: verificationErrors },
  } = useForm<VerificationFormData>({});

  const onSubmitSignUp = (data: SignUpFormData) => {
    console.log("Submitted sign-up data:", data);
    setUserEmail(data.email);
    setCurrentStep("verify");
  };

  const onSubmitVerification = (data: VerificationFormData) => {
    console.log("Submitted verification data:", data);
    router.push("/complete-signup");
  };

  const handleResendCode = () => {
    console.log("Resending verification code to:", userEmail);
  };

  return (
    <div className="grid grid-cols-2 min-h-screen w-full">
      <div className=" text-white hidden md:flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-br from-[#6a4cff] to-[#5739d6]">
        <div className="relative z-10 mx-auto">
          <div className="max-w-[514px]">
            <h2 className="text-lg font-semibold mb-3">
              {t('exploreFreeTier')}
            </h2>
            <p className="text-sm text-[#e0e0e0]">
              {t('learnMore')}{' '}
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
        {currentStep === "signup" ? (
          <form
            onSubmit={handleSubmit(onSubmitSignUp)}
            className="w-full max-w-[520px] p-10 flex flex-col gap-5"
          >
            <h3 className="font-semibold text-[#3b3f48] text-lg sm:text-lg lg:text-2xl tracking-[0] lg:leading-[64.8px]">
              {t('signUpTitle')}
            </h3>

            <div className="flex flex-col gap-6">
              {/* Email field */}
              <div>
                <label className="block text-base font-semibold text-[#222] mb-1">
                  {t('emailLabel')}
                </label>
                <div className="text-sm text-[#686e7b] mb-2">
                  {t('emailHelp')}{' '}
                  <a
                    href="#"
                    className="text-[#764af1] hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('privacyNotice')}
                  </a>
                </div>
                <input
                  type="email"
                  {...register("email")}
                  className={`w-full mt-0.5 p-3 border ${
                    errors.email ? "border-red-500" : "border-[#e0e0e0]"
                  } rounded-lg text-base focus:outline-none focus:border-[#6a4cff]`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Account name field */}
              <div>
                <label className="block text-base font-semibold text-[#222] mb-1">
                  {t('accountNameLabel')}
                </label>
                <div className="text-sm text-[#686e7b] mb-2">
                  {t('accountNameHelp')}
                </div>
                <input
                  type="text"
                  {...register("accountName")}
                  className={`w-full mt-0.5 p-3 border ${
                    errors.accountName ? "border-red-500" : "border-[#e0e0e0]"
                  } rounded-lg text-base focus:outline-none focus:border-[#6a4cff]`}
                />
                {errors.accountName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.accountName.message}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#6a4cff] text-white rounded-3xl text-base font-semibold cursor-pointer mt-2 hover:bg-[#5739d6] transition"
            >
              {t('verifyEmail')}
            </button>

            <div className="flex items-center text-center my-4 text-[#686E7B] text-sm">
              <div className="flex-1 h-px bg-[#686E7B]" />
              <span className=" px-6 z-10">{t('or')}</span>
              <div className="flex-1 h-px bg-[#686E7B]" />
            </div>

            <button
              type="button"
              onClick={() => router.push("/signin")}
              className="w-full py-3 bg-white text-[#010101] border border-[#010101] rounded-3xl text-base font-semibold cursor-pointer hover:bg-[#f6f6fa] hover:text-[#6a4cff] hover:border-[#6a4cff] transition"
            >
              {t('signIn')}
            </button>
          </form>
        ) : (
          <form
            onSubmit={handleVerificationSubmit(onSubmitVerification)}
            className="w-full max-w-[520px] py-16 flex flex-col gap-5"
          >
            <h1 className="font-semibold text-[#3b3f48] text-lg sm:text-lg lg:text-2xl tracking-[0] ">
              {t('signUpForOrotecc')}
            </h1>
            <h3 className="text-lg font-semibold ">
              {t('confirmIdentity')}
            </h3>
            <p className="text-sm text-[#686e7b]">
              {t('securityMessage')}
            </p>
            <p className="text-sm text-[#686e7b] mb-2">
              {t('sentEmailWithCode')} <span className="font-semibold text-[#222]">{userEmail}</span> {t('notYou')}
            </p>
            <p className="text-sm text-[#686e7b] mb-4">
              {t('enterCodeToConfirm')}
            </p>

            <div className="flex flex-col gap-6">
              {/* Verification Code field */}
              <div>
                <label className="block text-base font-semibold  mb-1">
                  {t('verificationCodeLabel')}
                </label>
                <input
                  type="text"
                  maxLength={6}
                  {...registerVerification("verificationCode")}
                  className={`w-full mt-0.5 p-3 border ${
                    verificationErrors.verificationCode
                      ? "border-red-500"
                      : "border-[#e0e0e0]"
                  } rounded-lg text-base  focus:outline-none focus:border-[#6a4cff]`}
                  placeholder={t('verificationCodePlaceholder')}
                />
                {verificationErrors.verificationCode && (
                  <p className="text-red-500 text-sm mt-1">
                    {verificationErrors.verificationCode.message}
                  </p>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#6a4cff] text-white rounded-3xl text-base font-semibold cursor-pointer mt-2 hover:bg-[#5739d6] transition"
            >
              {t('verify')}
            </button>

            <button
              type="button"
              onClick={handleResendCode}
              className="w-full py-3 bg-white text-[#6a4cff] border border-[#6a4cff] rounded-3xl text-base font-semibold cursor-pointer hover:bg-[#f6f6fa] transition"
            >
              {t('resendCode')}
            </button>

            <div className="text-sm text-[#686e7b] mt-4">
              <p className="font-semibold mb-1">{t('didntGetCode')}</p>
              <ul className="list-disc list-inside">
                <li>{t('codesCanTakeTime')}</li>
                <li>{t('checkSpam')}</li>
              </ul>
            </div>
          </form>
        )}

        <div className="mt-8 text-center text-sm text-[#aaa]">
          <a href="#" className="text-[#6a4cff] hover:underline mx-1">
            Privacy Policy
          </a>
          |
          <a href="#" className="text-[#6a4cff] hover:underline mx-1">
            Terms of Use
          </a>
        </div>
        <p className="text-[#686E7B] text-sm mt-2">
          © 2025 Orotecc Web Services or its affiliates. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default SignUp;
