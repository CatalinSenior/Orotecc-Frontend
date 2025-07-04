import Image from "next/image";
import Container from "../Container";
import { useTranslations } from 'next-intl';

const WhoWeAre = () => {
  const t = useTranslations('About');
  return (
    <section className="mt-[80px] lg:mt-[120px] flex flex-col items-center">
      <Container className="">
        <div className="max-w-[463px] mx-auto font-bold text-[#764af1] text-xl text-center tracking-[1.60px] leading-[30px]">
          {t('whoWeAreTitle')}
        </div>
        <h2 className="max-w-[949px] mx-auto font-semibold text-[#3b3f48] text-3xl sm:text-4xl lg:text-5xl  text-center tracking-[0] lg:leading-[64.8px] mt-2">
          {t('whoWeAreHeading')}
        </h2>
        <p className="max-w-[949px] mx-auto font-normal text-[#686e7b] text-base lg:text-lg text-center tracking-[0] leading-[27px] mt-4 lg:mt-6">
          {t('whoWeAreDescription')}
        </p>
        <div className="mt-6 max-w-[600px] md:max-w-[900px] mx-auto  relative z-10">
          <Image src="/transformation.png" width={1194} height={400} alt="transformation" />
        </div>
      </Container>
    </section>
  );
};

export default WhoWeAre; 