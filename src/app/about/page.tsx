import { RefreshCwIcon } from "lucide-react";
import Testimonial from "@/components/Home/Testimonial";
import Container from "@/components/Container";

const whyChooseUsData = [
  {
    title: "Security & Uptime",
    description:
      "Enterprise-grade security measures, ensuring 99.99% uptime and data protection",
  },
  {
    title: "Cloud Expertise",
    description: "Certified cloud professionals, years of experience",
  },
  {
    title: "Scalability",
    description: "Flexible solutions designed for all businesses of all sizes",
  },
  {
    title: "24/7 Support",
    description: "Dedicated 24/7 expert cloud assistance anytime",
  },
];

const teamMembers = [
  {
    name: "Ahmed Milhem",
    role: "CEO",
    imageSrc: "https://c.animaapp.com/mbw3uj4lEyyNHb/img/rectangle-76-2.svg",
    description:
      "Support companies in scaling seamlessly with innovative cloud strategies. With a client-focused approach and industry-leading expertise, we help businesses of all sizes unlock the full potential of the cloud.",
  },
  {
    name: "John Doe",
    role: "Executive Director",
    imageSrc: "https://c.animaapp.com/mbw3uj4lEyyNHb/img/rectangle-76-2.svg",
    description:
      "At Orotecc, we specialize in providing secure, scalable, and cutting-edge cloud solutions tailored to modern business needs. Our expertise spans cloud security, infrastructure, automation, and AI-driven analytics, enabling organizations to maximize efficiency and growth.",
  },
  {
    name: "Jane Doe",
    role: "Director",
    imageSrc: "https://c.animaapp.com/mbw3uj4lEyyNHb/img/rectangle-76.svg",
    description:
      "Jane, a former CIO at CardConnect, has spent over a decade helping ISOs, ISVs and Merchants develop applications and manage integrations in the payments space. To RUN, Jane brings extensive knowledge in many core facets of the payments ecosystem.",
  },
  {
    name: "Irfan Sheikh",
    role: "Marketing",
    imageSrc: "https://c.animaapp.com/mbw3uj4lEyyNHb/img/rectangle-76-2.svg",
    description:
      "Support companies in scaling seamlessly with innovative cloud strategies. With a client-focused approach and industry-leading expertise, we help businesses of all sizes unlock the full potential of the cloud.",
  },
  {
    name: "Rashid Sen",
    role: "AWS Technology Manager",
    imageSrc: "https://c.animaapp.com/mbw3uj4lEyyNHb/img/rectangle-76.svg",
    description:
      "At Orotecc, we specialize in providing secure, scalable, and cutting-edge cloud solutions tailored to modern business needs. Our expertise spans cloud security, infrastructure, automation, and AI-driven analytics, enabling organizations to maximize efficiency and growth.",
  },
  {
    name: "Arifa",
    role: "Head - Cloud Services",
    imageSrc: "https://c.animaapp.com/mbw3uj4lEyyNHb/img/rectangle-76-4.svg",
    description:
      "Jane, a former CIO at CardConnect, has spent over a decade helping ISOs, ISVs and Merchants develop applications and manage integrations in the payments space. To RUN, Jane brings extensive knowledge in many core facets of the payments ecosystem.",
  },
];

const About = () => {
  return (
    <main className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full relative">
        {/* Hero Section */}
        <section className="w-full h-[520px] mt-[72px] relative">
          <img src="./Group_6.png" className="w-full h-full" />

          <Container className="absolute max-w-[707px] top-[154px] font-semibold text-white text-5xl tracking-[0] leading-[64.8px]">
            Powering Secure &amp; Scalable Cloud Solutions
          </Container>
          <div className="absolute w-[581px] top-[300px] left-60 font-semibold text-white text-2xl tracking-[0] leading-[32.4px]">
            Driving innovation, security, and efficiency through cutting-edge
            cloud technology
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="mt-[120px] flex flex-col items-center">
          <div className="w-[463px] font-bold text-[#764af1] text-xl text-center tracking-[1.60px] leading-[30px]">
            WHO WE ARE
          </div>
          <h2 className="w-[949px] font-semibold text-[#3b3f48] text-5xl text-center tracking-[0] leading-[64.8px] mt-2">
            Experts in cloud transformation
          </h2>
          <p className="w-[949px] font-normal text-[#686e7b] text-lg text-center tracking-[0] leading-[27px] mt-6">
            At Orotecc, we specialize in delivering cutting-edge cloud solutions
            that help businesses scale, innovate, and secure their digital
            assets. With a team of certified cloud experts, we empower
            organizations to optimize their infrastructure, enhance security,
            and streamline operations.
            <br />
            <br />
            We provide secure, scalable, and efficient cloud solutions to drive
            business success.
          </p>
        </section>

        {/* Why Choose Us Section */}
        <section className="mt-[60px] relative">
          <img
            className="w-3xl h-[1363px]"
            alt="Background decoration"
            src="https://c.animaapp.com/mbw3uj4lEyyNHb/img/rectangle-33.svg"
          />

          <div className="absolute top-[488px] left-1/2 transform -translate-x-1/2 font-bold text-[#764af1] text-xl text-center tracking-[1.60px] leading-[30px]">
            WHY CHOOSE US?
          </div>

          <h2 className="absolute w-[949px] top-[526px] left-1/2 transform -translate-x-1/2 font-semibold text-[#3b3f48] text-5xl text-center tracking-[0] leading-[64.8px]">
            Reliable, secure, and expert-driven
          </h2>

          <div className="absolute w-full flex justify-center gap-12 top-[731px]">
            {whyChooseUsData.map((item, index) => (
              <div key={index} className="flex flex-col items-center w-[336px]">
                <h3 className="font-semibold text-[#3b3f48] text-2xl text-center tracking-[0] leading-[32.4px]">
                  {item.title}
                </h3>
                <p className="mt-3 font-normal text-[#686e7b] text-base text-center tracking-[0] leading-[21.6px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="absolute w-[1194px] h-[400px] top-2 left-1/2 transform -translate-x-1/2 bg-[#d9d9d9] rounded-xl" />

          <div className="flex flex-col w-[827px] items-start gap-5 px-10 py-[60px] absolute top-[1020px] left-[853px] rounded-xl [background:linear-gradient(135deg,rgba(118,74,241,1)_0%,rgba(68,0,198,1)_100%)] border-none">
            <div className="inline-flex flex-col items-start gap-2">
              <div className="relative w-fit font-bold text-white text-xl tracking-[1.60px] leading-[30px]">
                OUR MISSION
              </div>
              <h2 className="w-[747px] font-semibold text-white text-5xl tracking-[0] leading-[64.8px]">
                Experts in cloud transformation
              </h2>
            </div>
            <p className="mt-5 w-[747px] font-normal text-white text-base tracking-[0] leading-6">
              At Orotecc, our mission is to revolutionize how businesses
              operate in the cloud. We strive to provide reliable, secure, and
              scalable cloud solutions that drive digital transformation and
              long-term success. By prioritizing security, efficiency, and
              growth, we enable companies to optimize their IT infrastructure,
              automate critical workflows, and leverage data-driven insights
              for better decision-making. Our customer-centric approach
              ensures that every solution is designed to support business
              objectives while maintaining the highest standards of security
              and performance.
            </p>
          </div>
        </section>

        {/* Meet Our Team Section */}
        <section className="mt-[600px] flex flex-col items-center">
          <div className="font-bold text-[#764af1] text-xl text-center tracking-[1.60px] leading-[30px]">
            MEET OUR TEAM
          </div>
          <h2 className="w-[949px] font-semibold text-[#3b3f48] text-5xl text-center tracking-[0] leading-[64.8px] mt-2">
            Passionate cloud technology experts
          </h2>
          <p className="w-[949px] font-normal text-[#686e7b] text-lg text-center tracking-[0] leading-[27px] mt-6">
            Our skilled engineers, security specialists, and consultants are
            dedicated to your success.
          </p>

          <div className="grid grid-cols-3 gap-8 mt-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="w-[459px] h-[668px] rounded-xl border-8 border-solid border-[#f3f3f3] bg-white flex flex-col p-[30px] gap-6"
              >
                <div className="w-[399px] h-[520px] bg-[#d9d9d9] rounded-lg overflow-hidden">
                  <img
                    src={member.imageSrc}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-start gap-1">
                  <h3 className="font-semibold text-black text-2xl tracking-[0] leading-9">
                    {member.name}
                  </h3>
                  <p className="font-normal text-[#686e7b] text-base tracking-[0] leading-6">
                    {member.role}
                  </p>
                  <p className="mt-3 font-normal text-[#686e7b] text-base tracking-[0] leading-6">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonial />
      </div>
    </main>
  );
};

export default About;
