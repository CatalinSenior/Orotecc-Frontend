import Image from "next/image";
import Container from "../Container";
import { useTranslations } from 'next-intl';

type WhyChooseUsProps = {
  whyChooseUsData: { title: string; description: string, icon: string }[];
};

const WhyChooseUs = ({ whyChooseUsData }: WhyChooseUsProps) => {
  const t = useTranslations('About');
  return (
    <section className="py-16 relative">
      {/* Background image */}
      <div className="hidden lg:block absolute min-h-[250vh] lg:min-h-[200vh] w-full -top-[25rem] lg:-top-[19rem] -z-10">
        <Image
          src="/bg-home.png"
          alt={t('whyChooseUsBgAlt')}
          fill
          className="inset-0 w-full min-h-[200vh]"
          sizes="100vw"
        />
      </div>
      <Container className="relative z-10">
        <div className="text-center mb-6">
          <h2 className="font-bold text-[#764af1] text-xl tracking-[1.60px] leading-[30px] mb-2 uppercase">
            {t('whyChooseUsTitle')}
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3b3f48] leading-tight mb-6">
            {t('whyChooseUsHeading')}
          </h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-8 mb-6">
          {whyChooseUsData.map((card, index) => (
            <div
              key={index}
              className=" p-2 md:p-6 flex flex-col items-center text-center "
            >
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
        <div className="relative mt-8">
          {/* Image container */}
          <div className="lg:w-[800px] h-[300p] ">
            <Image
              src="/mission.png"
              width={800}
              height={600}
              className="w-full h-auto object-cover rounded-xl"
              alt={t('whyChooseUsMissionAlt')}
            />
          </div>
          <div className="w-full lg:max-w-3xl bg-[#4e2bbd] rounded-xl p-8 xl:p-12 mt-16 lg:mt-0 lg:absolute lg:top-8 lg:right-0">
            <h2 className="text-white text-sm font-bold tracking-[1.60px] mb-2 uppercase">
              {t('whyChooseUsAboutTitle')}
            </h2>
            <h3 className="text-3xl xl:text-4xl font-semibold text-white mb-4 leading-tight">
              {t('whyChooseUsAboutHeading')}
            </h3>
            <p className="text-white/90 mb-6 text-base">
              {t('whyChooseUsAboutDescription')}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChooseUs; 