import React from "react";
import Container from "../Container";
import Image from "next/image";
import { useTranslations } from 'next-intl';

const Cloud = () => {
  const t = useTranslations('Home.CloudSolution');
  const solutionCards = [
    {
      title: t('cards.0.title'),
      description: t('cards.0.description'),
      icon: "/cloud.svg",
    },
    {
      title: t('cards.1.title'),
      description: t('cards.1.description'),
      icon: "/icons/enhance.svg",
    },
    {
      title: t('cards.2.title'),
      description: t('cards.2.description'),
      icon: "/icons/speedometer.svg",
    },
    {
      title: t('cards.3.title'),
      description: t('cards.3.description'),
      icon: "/icons/idea.svg",
    },
  ];
  return (
    <section className="py-16 sm:py-16 lg:pt-32 relative ">
      <div className="absolute min-h-[130vh] w-full -top-[15rem] -z-10">
        <Image
          src="/bg-home.png"
          alt="Background"
          fill
          className="inset-0 w-full min-h-[130vh]"
          sizes="100vw"
        />
      </div>
      <Container className="relative z-10" style={{ direction: 'ltr' }}>
        <div className="text-center mb-6">
          <h2 className="text-[#764af1] text-base sm:text-xl font-bold tracking-[1.60px] mb-2 sm:mb-4 uppercase">
            {t('title')}
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3b3f48] leading-tight">
            {t('subtitle')}
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-6">
          {solutionCards.map((card, index) => (
            <div
              key={index}
              className="  p-6 flex flex-col items-center text-center "
            >
              {/* Icon above the title */}
              <Image src={card.icon} alt={card.title} width={48} height={48} className="w-12 h-12 mb-4" />
              <h4 className="text-lg sm:text-xl font-medium text-[#010101] mb-2">
                {card.title}
              </h4>
              <p className="text-[#686e7b] text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            className="bg-[#764af1] text-white rounded-[32px] px-6 py-4 font-semibold hover:bg-purple-800 transition-colors duration-300 ease-in-out cursor-pointer"
          >
            {t('cta')}
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Cloud;
