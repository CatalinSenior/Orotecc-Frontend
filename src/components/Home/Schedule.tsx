"use client";
import React from 'react';
import Container from '../Container';
import Image from "next/image";
import { useTranslations } from 'next-intl';

const Schedule = () => {
  const t = useTranslations('Schedule');
  return (
    <section className='relative'>
        <div className="absolute top-10 inset-0 w-full h-full">
            <Image
            className=""
            alt="Background"
            src="/triangle.png"
            fill
            sizes="100vw"
            />
        </div>
    <Container className="w-full  flex items-center justify-center py-10 md:py-0 mt-12 lg:mt-24">
    <div className="relative z-10 w-full px-4 sm:px-6 py-10  rounded-[12px] [background:linear-gradient(135deg,rgba(118,74,241,1)_0%,rgba(68,0,198,1)_100%)] flex flex-col items-center text-center">
      <div className="flex flex-col items-center gap-5 w-full max-w-3xl">
        <div className="flex flex-col items-center gap-2 w-full">
          <div className="font-bold text-white text-base sm:text-xl tracking-[0.08em] sm:tracking-[1.60px] leading-[1.5] sm:leading-[30px] uppercase">
            {t('headline')}
          </div>
          <div className="font-semibold text-white text-3xl md:text-4xl 2xl:text-5xl leading-[1.2] md:leading-[64.8px]">
            {t('title')}
          </div>
        </div>
        <div className="font-normal text-white text-sm sm:text-base leading-[1.5] sm:leading-6">
          {t('description')}
        </div>
        <button className="bg-[#010101] text-white rounded-[32px] px-6 py-4 hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
          {t('cta')}
        </button>
      </div>
    </div>
  </Container>
  </section>
  )
}

export default Schedule;