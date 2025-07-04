"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Container from "../Container";
import { useTranslations } from 'next-intl';

const Hero: React.FC = () => {
  const t = useTranslations('Home');

  return (
    <div className="relative w-full overflow-hidden pt-[72px]">
      <Image
        src="/group_bg.png"
        alt="Background"
        fill
        className="object- object-center z-0"
        priority
      />
      <Container className="relative z-10 flex flex-col lg:flex-row items-center lg:items-stretch mt-12 md:mt-24 lg:mt-36 justify-center min-h-[calc(100vh)] lg:min-h-[calc(100vh+150px) py-12 md:py-0 gap-6">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start text-cente 2xl:pt-12">
          <h1 className="text-4xl lg:text-[46px] xl:text-[54px] font-semibold text-white mb-6 leading-tight">
            {t('heroTitle')}
          </h1>
          <p className="text-lg md:text-2xl text-white/90 mb-8 max-w-2xl">
            {t('heroSubtitle')}
          </p>
          <button className="bg-[#010101] text-white rounded-[32px] px-6 py-4 hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50">
            {t('getStarted')}
          </button>
        </div>

        {/* Right Content - Animation */}
        <div className="relative w-full md:w-1/2 h-[50vh] md:h-[calc(100vh+72px) flex items-center justify-center pointer-events-none">
          <div className="absolute w-[660px] h-[600px] scale-[0.5] sm:scale-[0.7] md:scale-[0.8] lg:scale-100">
            <div className="absolute -right-16 top-[60%] -translate-y-1/2 z-30 flex items-center justify-center" style={{ width: 660, height: 600 }}>
              <motion.div
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 size-[560px] 2xl:size-[660px]"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 100, ease: "linear" }}
              >
                <Image
                  src="/spinner.svg"
                  alt="Spinner"
                  width={660}
                  height={660}
                  priority
                />
              </motion.div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  size-[400px] 2xl:size-[470px]">
                <Image
                  src="/cloud/circle.png"
                  alt="Circle"
                  width={470}
                  height={470}
                  className="w-full h-full"
                />
                <Image
                  src="/icons/brain-ai.svg"
                  alt="Brain AI"
                  width={178}
                  height={150}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
            <Image
              src="/cloud/cloud-cube.png"
              alt="Cloud Cube"
              width={90}
              height={90}
              className="absolute right-[460px] top-[80%] 2xl:top-[85%] z-30"
            />
            <Image
              src="/cloud/cloud-infinity.png"
              alt="Cloud Infinity"
              width={259}
              height={240}
              className="absolute right-[120px] 2xl:right-[80px] -bottom-[50px] 2xl:-bottom-[130px] z-30 2xl:w-[381px] 2xl:h-[240px]"
            />
            <Image
              src="/cloud/cloud-sheld.png"
              alt="Cloud Shield"
              width={259}
              height={240}
              className="absolute right-[350px] top-[43%] 2xl:top-[30%] z-30 2xl:w-[381px] 2xl:h-[275px]"
            />
            <Image
              src="/cloud/cloud.png"
              alt="Cloud"
              width={120}
              height={120}
              className="absolute right-[410px] 2xl:right-[320px] top-[30%] z-30 2xl:top-[15%] 2xl:w-[163px] 2xl:h-[84px]"
            />
            <Image
              src="/cloud/cloud-aws.png"
              alt="CLoud Aws"
              width={90}
              height={90}
              className="absolute right-[80px] top-[10%] 2xl:top-[2%] z-30 "
            />
            <Image
              src="/cloud/cloud-stat.png"
              alt="CLoud Stat"
              width={259}
              height={240}
              className="absolute -right-[100px] 2xl:-right-[220px] top-[30%] 2xl:top-[20%] z-30 2xl:w-[381px] 2xl:h-[275px]"
            />
             <Image
              src="/cloud/cloud.png"
              alt="Cloud"
              width={120}
              height={120}
              className="absolute -right-[20px] 2xl:-right-[100px] top-[70%] z-30 2xl:w-[163px] 2xl:h-[84px]"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
