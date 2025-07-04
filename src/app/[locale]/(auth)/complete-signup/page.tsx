"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useForm } from "react-hook-form";
import Step1SetPassword from "./steps/Step1SetPassword";
import Step2ContactInformation from "./steps/Step2ContactInformation";
import Step3Billing from "./steps/Step3Billing";
import Step4VerifyIdentityPhone from "./steps/Step4VerifyIdentityPhone";
import Step5OtpCode from "./steps/Step5OtpCode";
import Step6Welcome from "./steps/Step6Welcome";

// Static Slider Component (copied from signup)
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
          className="z-10 rounded-[4px]"
        />
      </div>
    ))}
  </div>
);

const CompleteSignUp = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<Record<string, unknown>>({});
  const [phoneNumberForOtp, setPhoneNumberForOtp] = useState<string>("+971 555 555 5555");

  const { control, handleSubmit } = useForm();

  const handleNext = (stepData: Record<string, unknown>) => {
    setFormData((prevData) => ({ ...prevData, ...stepData }));
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSignIn = () => {
    router.push("/signin");
  };

  const handleResendCode = () => {
    console.log("Resending verification code to:", phoneNumberForOtp);
  };

  const handleGoToDashboard = () => {
    console.log("Final form data:", formData);
    router.push("/dashboard");
  };

  return (
    currentStep === 6 ? (
      <div className="min-h-screen w-full flex items-center justify-center relative bg-gradient-to-br from-[#6a4cff] to-[#5739d6]">
        <div
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
          style={{
            backgroundImage: "url(./Group_8.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <Step6Welcome onGoToDashboard={handleGoToDashboard} />
        </div>
      </div>
    ) : (
      <div className="grid grid-cols-2 min-h-screen w-full">
        <div className="text-white hidden md:flex flex-col pt-[50%] items-center relative overflow-hidden bg-gradient-to-br from-[#6a4cff] to-[#5739d6]">
          <div className="relative z-10 mx-auto">
            <div className="max-w-[414px]">
              {currentStep === 3 ? (
                <div className="w-full flex flex-col justify-center gap-6">
                  <h2 className="text-lg font-semibold mt-4 ">Secure verification</h2>
                  <p className="text-sm text-[#e0e0e0]">We provide 100% secure payments by:</p>
                  <Image src="/payment.png" alt="Payment" width={180} height={120} className="" />
                  
                </div>
              ) : currentStep === 2 ? (
                <div className="w-full rounded-xl p-6 text-white">
                  <h3 className="text-lg font-semibold mb-2">Free Tier offers</h3>
                  <p className="text-sm mb-5">All AWS accounts can explore 3 different types of free offers, depending on the product used.</p>
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-4">
                      <Image src="/free.png" alt="Always free" width={32} height={32} />
                      <div>
                        <div className="font-semibold">Always free</div>
                        <div className="text-xs opacity-80">Never expires</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Image src="/calendar.png" alt="12 months free" width={32} height={32} />
                      <div>
                        <div className="font-semibold">12 months free</div>
                        <div className="text-xs opacity-80">Start from initial sign-up date</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Image src="/timer.png" alt="Trials" width={32} height={32} />
                      <div>
                        <div className="font-semibold">Trials</div>
                        <div className="text-xs opacity-80">Start from service activation date</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="text-lg font-semibold mb-3">
                    Explore free Tier products with a new Orotecc account.
                  </h2>
                  <p className="text-sm text-[#e0e0e0]">
                    To learn more, visit {" "}
                    <a href="https://orotecc.com/free" className="underline text-white">orotecc.com/free</a>.
                  </p>
                  <StaticSlider />
                </>
              )}
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
          {currentStep === 1 && (
            <Step1SetPassword
              onNext={handleNext}
              onSignIn={handleSignIn}
            />
          )}
          {currentStep === 2 && (
            <Step2ContactInformation
              onNext={handleNext}
              onPrevious={handlePrevious}
            />
          )}
          {currentStep === 3 && (
            <Step3Billing
              onNext={handleNext}
              onPrevious={handlePrevious}
            />
          )}
          {currentStep === 4 && (
            <Step4VerifyIdentityPhone
              control={control}
              onSubmit={handleSubmit((data) => {
                setPhoneNumberForOtp(data.mobile || "");
                handleNext(data);
              })}
            />
          )}
          {currentStep === 5 && (
            <Step5OtpCode
              onNext={handleNext}
              onResendCode={handleResendCode}
              phoneNumber={phoneNumberForOtp}
            />
          )}
          {currentStep === 6 && (
            <Step6Welcome onGoToDashboard={handleGoToDashboard} />
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
    )
  );
};

export default CompleteSignUp; 