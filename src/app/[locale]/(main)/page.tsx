import { AboutOroteccSection } from "@/components/Home/About";
import AwsPartner from "@/components/Home/AwsPartner";
import Cloud from "@/components/Home/CloudSolution";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Testimonial from "@/components/Home/Testimonial";
import { getMessages } from '../../../i18n/request';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const messages = await getMessages(locale);
  return {
    title: messages.Home.seo.title,
    description: messages.Home.seo.description,
  };
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Cloud />
      <AboutOroteccSection />
      <AwsPartner />
      <Testimonial />
    </main>
  );
}
