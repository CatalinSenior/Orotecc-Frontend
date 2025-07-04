"use client";
import React from "react";
import Container from "../Container";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export const AboutOroteccSection = () => {
  const t = useTranslations('About');
  return (
    <Container className="py-16">
      <div className="relative">
        {/* Image container */}
        <div className="lg:w-[800px]">
            <Image
                src="/about.png"
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-xl"
                alt="Orotecc Landing"
            />
        </div>

        {/* Text Card: Stacks on mobile, absolute on lg+ */}
        <div className="w-full lg:max-w-2xl bg-[#4e2bbd] rounded-xl p-8 md:p-12 mt-8 lg:mt-0 lg:absolute lg:top-12 lg:right-0">
          <h2 className="text-white text-sm font-bold tracking-[1.60px] mb-2 uppercase">
            {t('sectionLabel')}
          </h2>
          <h3 className="text-3xl xl:text-4xl font-semibold text-white mb-4 leading-tight">
            {t('headline')}
          </h3>
          <p className="text-white/90 mb-6 text-base">
            {t('description')}
          </p>
          <button className="bg-black text-white rounded-full px-6 py-3 text-lg font-semibold shadow hover:bg-[#764AF1] transition-colors">
            {t('learnMoreButton')}
          </button>
        </div>
      </div>
    </Container>
  );
};
