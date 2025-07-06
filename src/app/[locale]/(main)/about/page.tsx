
import Testimonial from "@/components/Home/Testimonial";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/About/WhoWeAre";
import WhyChooseUs from "@/components/About/WhyChooseUs";
import MeetOurTeam from "@/components/About/MeetOurTeam";
import { useTranslations } from 'next-intl';
import { getMessages } from '../../../../i18n/request';


export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = await getMessages(locale);
  return {
    title: messages.About.seo.title,
    description: messages.About.seo.description,
  };
}


const About = () => {
  const t = useTranslations('About');

  const whyChooseUsData = [
    {
      title: t('securityTitle'),
      description: t('securityDesc'),
      icon: "/cloud.svg",
    },
    {
      title: t('expertiseTitle'),
      description: t('expertiseDesc'),
      icon: "/icons/enhance.svg",
    },
    {
      title: t('scalabilityTitle'),
      description: t('scalabilityDesc'),
      icon: "/icons/speedometer.svg",
    },
    {
      title: t('supportTitle'),
      description: t('supportDesc'),
      icon: "/icons/idea.svg",
    },
  ];

  // const teamMembers = [
  //   {
  //     name: "Ahmed Milhem",
  //     role: t('ceo'),
  //     imageSrc: "/team/ahmed.png",
  //     description: t('ahmedDesc'),
  //   },
  //   {
  //     name: "John Doe",
  //     role: t('executiveDirector'),
  //     imageSrc: "/team/john.png",
  //     description: t('johnDesc'),
  //   },
  //   {
  //     name: "Jane Doe",
  //     role: t('director'),
  //     imageSrc: "/team/jane.png",
  //     description: t('janeDesc'),
  //   },
  //   {
  //     name: "Irfan Sheikh",
  //     role: t('marketing'),
  //     imageSrc: "/team/irfan.png",
  //     description: t('irfanDesc'),
  //   },
  //   {
  //     name: "Rashid Sen",
  //     role: t('awsManager'),
  //     imageSrc: "/team/rashid.png",
  //     description: t('rashidDesc'),
  //   },
  //   {
  //     name: "Arifa",
  //     role: t('cloudHead'),
  //     imageSrc: "/team/arifa.png",
  //     description: t('arifaDesc'),
  //   },
  // ];

  return (
    <main className=" w-full">
      <Hero
        title={t('heroTitle')}
        subtitle={t('heroSubtitle')}
        bannerImage="/about-banner.png"
        bannerAlt="about banner"
        bannerImageClassName="right-0 top-0 w-[60%] h-full"
      />
      <WhoWeAre />
      <WhyChooseUs whyChooseUsData={whyChooseUsData} />
      <MeetOurTeam />
      <Testimonial />
    </main>
  );
};

export default About;
