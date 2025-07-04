import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useTranslations } from 'next-intl';
import Link from 'next/link';

type Step6WelcomeProps = {
  onGoToDashboard: () => void;
};

const Step6Welcome = ({ onGoToDashboard }: Step6WelcomeProps) => {
  const t = useTranslations('Auth.CompleteSignup.Step6Welcome');
  return (
    <div className="w-full flex flex-col items-center justify-center gap-6">
      <div className="flex flex-col items-center gap-4 py-48">
        <Image src="/Subtract.png" alt={t('imageAlt')} width={80} height={80} className="mb-2" />
        <div className="flex flex-col gap-2">
          <h2 className="text-xl md:text-2xl font-bold text-white text-center">{t('title')}</h2>
          <h3 className="text-lg font-semibold text-white text-center">{t('thankYou')}</h3>
        </div>
        <p className="text-base text-[#F6F5FE] text-center max-w-xl mt-2">
          {t('description')}
        </p>
        <Button
          className="mt-6 px-8 py-3 rounded-full bg-[#764AF1] text-white font-semibold text-base hover:bg-white/30 transition"
          onClick={onGoToDashboard}
        >
          {t('goToDashboard')}
        </Button>
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 mt-4">
          <Link href="/signup" className="underline text-white/90 hover:text-white font-medium">{t('signupAgain')}</Link>
          <span className="hidden md:inline text-white/50">{t('or')}</span>
          <Link href="/contact" className="underline text-white/90 hover:text-white font-medium">{t('contactSupport')}</Link>
        </div>
      </div>
      <div className="mt-10 mb-4 text-white text-sm text-center">
        <a href="#" className="underline hover:text-white">{t('Footer.privacy')}</a>
        <span className="mx-2">|</span>
        <a href="#" className="underline hover:text-white">{t('Footer.terms')}</a>
        <div className="mt-2">{t('Footer.copyright')}</div>
      </div>
    </div>
  );
};

export default Step6Welcome; 