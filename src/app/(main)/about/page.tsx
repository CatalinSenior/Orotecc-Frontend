import Testimonial from "@/components/Home/Testimonial";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/About/WhoWeAre";
import WhyChooseUs from "@/components/About/WhyChooseUs";
import MeetOurTeam from "@/components/About/MeetOurTeam";

const whyChooseUsData = [
  {
    title: "Security & Uptime",
    description:
      "Enterprise-grade security measures, ensuring 99.99% uptime and data protection",
    icon: "/cloud.svg",
  },
  {
    title: "Cloud Expertise",
    description: "Certified cloud professionals, years of experience",
    icon: "/icons/enhance.svg",
  },
  {
    title: "Scalability",
    description: "Flexible solutions designed for all businesses of all sizes",
    icon: "/icons/speedometer.svg",
  },
  {
    title: "24/7 Support",
    description: "Dedicated 24/7 expert cloud assistance anytime",
    icon: "/icons/idea.svg",
  },
];

const teamMembers = [
  {
    name: "Ahmed Milhem",
    role: "CEO",
    imageSrc: "/team/ahmed.png",
    description:
      "Support companies in scaling seamlessly with innovative cloud strategies. With a client-focused approach and industry-leading expertise, we help businesses of all sizes unlock the full potential of the cloud.",
  },
  {
    name: "John Doe",
    role: "Executive Director",
    imageSrc: "/team/john.png",
    description:
      "At Orotecc, we specialize in providing secure, scalable, and cutting-edge cloud solutions tailored to modern business needs. Our expertise spans cloud security, infrastructure, automation, and AI-driven analytics, enabling organizations to maximize efficiency and growth.",
  },
  {
    name: "Jane Doe",
    role: "Director",
    imageSrc: "/team/jane.png",
    description:
      "Jane, a former CIO at CardConnect, has spent over a decade helping ISOs, ISVs and Merchants develop applications and manage integrations in the payments space. To RUN, Jane brings extensive knowledge in many core facets of the payments ecosystem.",
  },
  {
    name: "Irfan Sheikh",
    role: "Marketing",
    imageSrc: "/team/irfan.png",
    description:
      "Support companies in scaling seamlessly with innovative cloud strategies. With a client-focused approach and industry-leading expertise, we help businesses of all sizes unlock the full potential of the cloud.",
  },
  {
    name: "Rashid Sen",
    role: "AWS Technology Manager",
    imageSrc: "/team/rashid.png",
    description:
      "At Orotecc, we specialize in providing secure, scalable, and cutting-edge cloud solutions tailored to modern business needs. Our expertise spans cloud security, infrastructure, automation, and AI-driven analytics, enabling organizations to maximize efficiency and growth.",
  },
  {
    name: "Arifa",
    role: "Head - Cloud Services",
    imageSrc: "/team/arifa.png",
    description:
      "Jane, a former CIO at CardConnect, has spent over a decade helping ISOs, ISVs and Merchants develop applications and manage integrations in the payments space. To RUN, Jane brings extensive knowledge in many core facets of the payments ecosystem.",
  },
];

const About = () => {
  return (
    <main className=" w-full">
      <Hero
        title="Powering Secure & Scalable Cloud Solutions"
        subtitle="Driving innovation, security, and efficiency through cutting-edge cloud technology"
        bannerImage="/about-banner.png"
        bannerAlt="about banner"
        bannerImageClassName="right-0 top-0 w-[60%] h-full"
      />
      <WhoWeAre />
      <WhyChooseUs whyChooseUsData={whyChooseUsData} />
      <MeetOurTeam teamMembers={teamMembers} />
      <Testimonial />
    </main>
  );
};

export default About;
