import { AboutOroteccSection } from "@/components/Home/About";
import AwsPartner from "@/components/Home/AwsPartner";
import Cloud from "@/components/Home/CloudSolution";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Testimonial from "@/components/Home/Testimonial";

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
