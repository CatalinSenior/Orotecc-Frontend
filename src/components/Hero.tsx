import Container from "@/components/Container";
import Image from "next/image";
import { useTranslations } from 'next-intl';

interface HeroProps {
  title: string;
  subtitle: string;
  bannerImage: string;
  bannerAlt?: string;
  bannerImageClassName?: string;
}

const Hero = ({ title, subtitle, bannerImage, bannerImageClassName = "" }: HeroProps) => {
  const t = useTranslations('Hero');
  return (
    <section className="relative z-10 w-full h-[400px] lg:h-[450px] 2xl:h-[500px] mt-[72px] overflow-hidden">
      <div className=" absolute -z-10 w-full h-full">
        <div className="relative   h-[500px]">
          <div className="h-full w-full">
            <Image
              src="/about-bg-2.png"
              alt={t('aboutBannerAlt')}
              width={1000}
              height={1000}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <div className={`absolute z-20 ${bannerImageClassName}`}>
            <Image
              src={bannerImage}
              alt={t('bannerAlt')}
              width={1000}
              height={1000}
              className={`object-cover  w-full h-full  bg-transparent `}
              priority
            />
          </div>
        </div>
        <div className="absolute w-[60%] h-full z-30 top-0 left-10">
          <svg
            viewBox="0 0 1154 520"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <path
              d="M0 0H1154L823.5 520H406.5L0 0Z"
              fill="url(#paint0_linear_2841_51006)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_2841_51006"
                x1="185"
                y1="172.834"
                x2="821"
                y2="172.834"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#7F5FF3" />
                <stop offset="1" stopColor="#663EE4" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute w-full h-full z-100 top-0 right-0 flex justify-end">
          <svg
            width="358"
            height="380"
            viewBox="0 0 358 380"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.7"
              d="M0 0H358V380L0 0Z"
              fill="url(#paint0_linear_188_2283)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_188_2283"
                x1="-63"
                y1="192.937"
                x2="253"
                y2="192.937"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#7A49DB" />
                <stop offset="1" stopColor="#623CDC" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <Container className=" h-full flex items-center">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl  font-semibold mb-4 leading-tight max-w-[700px]">
            {title}
          </h1>
          <p className="text-white text-xl lg:text-2xl max-w-[580px] font-semibold">
            {subtitle}
          </p>
        </div>
      </Container>
      {/* <div className="size-[500px] right-0">
        <Image
          src={bannerImage}
          alt={bannerAlt}
          width={1000}
          height={1000}
          className={`object-cover w-full h-full ${bannerImageClassName}`}
          priority
        />
      </div> */}
    </section>
  );
};

export default Hero; 