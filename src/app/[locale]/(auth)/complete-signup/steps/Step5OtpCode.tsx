import React, { useRef } from "react";
import { useTranslations } from 'next-intl';

type Step5OtpCodeProps = {
  onNext: (data: Record<string, unknown>) => void;
  onResendCode: () => void;
  phoneNumber: string;
};

const Step5OtpCode = ({ onNext, onResendCode, phoneNumber }: Step5OtpCodeProps) => {
  const t = useTranslations('Auth.CompleteSignup.Step5OtpCode');
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const [otp, setOtp] = React.useState(Array(6).fill(""));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const value = e.target.value.replace(/[^0-9]/g, "").slice(0, 1);
    const newOtp = [...otp];
    newOtp[idx] = value;
    setOtp(newOtp);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, idx: number) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0) {
      inputsRef.current[idx - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext({ otp: otp.join("") });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-[420px] p-10 flex flex-col gap-4  mx-auto">
      <h3 className="font-semibold text-[#3b3f48] text-lg sm:text-lg lg:text-2xl tracking-[0] lg:leading-[64.8px]">
        {t('title')}
      </h3>
      <div className="flex flex-col gap-1 mb-2">
        <span className="text-lg font-semibold text-[#222]">Verify your identity</span>
      </div>
        <span className="text-sm text-[#686e7b] font-normal">
          {t('enterCode')} {phoneNumber}
        </span>
      <div className="flex gap-2 justify-center mb-2">
        {otp.map((digit, idx) => (
          <input
            key={idx}
            ref={el => {
              inputsRef.current[idx] = el;
            }}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={digit}
            onChange={e => handleChange(e, idx)}
            onKeyDown={e => handleKeyDown(e, idx)}
            className="w-12 h-12 text-center text-lg border border-[#E5E7EB] rounded-[4px] focus:outline-none focus:ring-2 focus:ring-[#7B3AED]"
          />
        ))}
      </div>
      <button type="submit" className="w-full py-3 bg-[#7B3AED] text-white rounded-full text-base font-semibold cursor-pointer mt-2 hover:bg-[#6a4cff] transition">
        {t('continue')}
      </button>
      <div className="text-sm text-[#686e7b] mt-2">
        {t('didNotGetCode')}
        <button type="button" className="text-[#7B3AED] underline" onClick={onResendCode}>
          {t('clickResend')}
        </button>
      </div>
    </form>
  );
};

export default Step5OtpCode; 