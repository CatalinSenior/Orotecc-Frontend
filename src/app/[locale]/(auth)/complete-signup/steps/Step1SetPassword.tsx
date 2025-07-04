import React from "react";
import { useTranslations } from 'next-intl';

type Step1SetPasswordProps = {
  onNext: (data: Record<string, unknown>) => void;
  onSignIn: () => void;
};

const Step1SetPassword = ({ onNext, onSignIn }: Step1SetPasswordProps) => {
  const t = useTranslations('Auth.CompleteSignup.Step1SetPassword');
  return (
    <form
      className="w-full max-w-[520px] p-10 flex flex-col gap-5 rounded-xl"
      onSubmit={e => { e.preventDefault(); onNext({}); }}
    >
      <h3 className="font-semibold text-[#3b3f48] text-lg sm:text-lg lg:text-2xl tracking-[0] lg:leading-[64.8px]">
        {t('signUpTitle')}
      </h3>
      <div>
        <h4 className="text-lg font-semibold text-[#222] mb-1">{t('createPasswordTitle')}</h4>
        <p className="text-sm text-[#686e7b] mb-4">{t('createPasswordDesc')}</p>
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <label className="block text-base font-semibold text-[#222] mb-1">{t('rootPasswordLabel')}</label>
          <input
            type="password"
            className="w-full mt-0.5 p-3 border border-[#e0e0e0] rounded-lg text-base focus:outline-none focus:border-[#6a4cff]"
            placeholder=""
          />
        </div>
        <div>
          <label className="block text-base font-semibold text-[#222] mb-1">{t('confirmRootPasswordLabel')}</label>
          <input
            type="password"
            className="w-full mt-0.5 p-3 border border-[#e0e0e0] rounded-lg text-base focus:outline-none focus:border-[#6a4cff]"
            placeholder=""
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full py-3 bg-[#6a4cff] text-white rounded-3xl text-base font-semibold cursor-pointer mt-2 hover:bg-[#5739d6] transition"
      >
        {t('continue')}
      </button>
      <div className="flex items-center text-center my-4 text-[#686E7B] text-sm">
        <div className="flex-1 h-px bg-[#686E7B]" />
        <span className="px-6 z-10">{t('or')}</span>
        <div className="flex-1 h-px bg-[#686E7B]" />
      </div>
      <button
        type="button"
        onClick={onSignIn}
        className="w-full py-3 bg-white text-[#010101] border border-[#010101] rounded-3xl text-base font-semibold cursor-pointer hover:bg-[#f6f6fa] hover:text-[#6a4cff] hover:border-[#6a4cff] transition"
      >
        {t('signIn')}
      </button>
    </form>
  );
};

export default Step1SetPassword; 