import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Image from "next/image";
import { useTranslations } from 'next-intl';

export default function CloudAppsPage() {
  const t = useTranslations('Services.CloudApps');
  return (
    <main className="w-full " style={{ direction: 'ltr' }}>
      <Hero
        title={t('heroTitle')}
        subtitle={t('heroSubtitle')}
        bannerImage="/Layer_1.png"
        bannerAlt={t('bannerAlt')}
        bannerImageClassName="right-30 2xl:right-50 top-0 w-fit scale-[75%] 2xl:scale-[85%] h-full"
      />
      {/* What is Cloud Apps */}
      <section className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h2 className="max-w-[949px] mx-auto font-semibold text-[#3b3f48] text-3xl sm:text-4xl lg:text-5xl  text-center tracking-[0] lg:leading-[64.8px] mt-2">{t('whatIsTitle')}</h2>
        <p className="max-w-[949px] mx-auto font-normal text-[#686e7b] text-base lg:text-lg text-center tracking-[0] leading-[27px] mt-4 lg:mt-6">
          {t('whatIsDesc')}
        </p>
      </section>
      {/* Key Service Components */}
      <section className="bg-[#F6F5FE] py-12 sm:py-16 lg:py-24 px-2 sm:px-4">
        <Container>
          <h3 className="max-w-[949px] mx-auto font-semibold text-[#3b3f48] text-2xl sm:text-3xl lg:text-5xl  text-center tracking-[0] lg:leading-[64.8px] mb-6 sm:mb-8">{t('keyComponentsTitle')}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 xl:gap-8">
            {[0,1,2,3].map(idx => (
              <div key={idx} className="bg-white rounded-[12px] py-5 sm:py-6 px-4 sm:px-[22px] flex flex-col gap-[10px] border border-[#E5E7EB]">
                <Image src={t(`keyComponents.${idx}.icon`)} alt={t(`keyComponents.${idx}.title`)} width={48} height={48} className="" />
                <h4 className="font-semibold text-base sm:text-lg leading-5.5">{t(`keyComponents.${idx}.title`)}</h4>
                <p className="text-[#686E7B] text-sm sm:text-base">{t(`keyComponents.${idx}.description`)}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      {/* Use Cases */}
      <section className="py-10 sm:py-14 lg:py-16 ">
        <Container>
          <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-6 md:mb-10 text-gray-900">{t('useCasesTitle')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[0,1,2,3].map(idx => (
              <div key={idx} className="bg-white rounded-[12px] p-4 md:p-6 border border-[#E5E7EB]">
                <h4 className="font-bold text-base md:text-lg text-[#010101]">{t(`useCases.${idx}.title`)}</h4>
                <p className="text-gray-600 text-xs md:text-sm">{t(`useCases.${idx}.description`)}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
