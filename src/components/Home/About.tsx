import React from "react";
import Container from "../Container";
import Image from "next/image";

interface AboutOroteccSectionProps {}

export const AboutOroteccSection: React.FC<AboutOroteccSectionProps> = () => {
  return (
    <Container className="py-16">
      <div className="relative">
        {/* Image container */}
        <div className="lg:w-[800px]">
            <Image
                src="/image-landing.png"
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-xl"
                alt="Orotecc Landing"
            />
        </div>

        {/* Text Card: Stacks on mobile, absolute on lg+ */}
        <div className="w-full lg:max-w-2xl bg-[#4e2bbd] rounded-xl p-8 md:p-12 mt-8 lg:mt-0 lg:absolute lg:top-12 lg:right-0">
          <h2 className="text-white text-sm font-bold tracking-[1.60px] mb-2 uppercase">
            ABOUT OROTECC
          </h2>
          <h3 className="text-3xl xl:text-4xl font-semibold text-white mb-4 leading-tight">
            Innovative Cloud Solutions for a Secure and Scalable Future
          </h3>
          <p className="text-white/90 mb-6 text-base">
            At Orotecc, we specialize in cutting-edge cloud solutions that drive
            business growth and innovation. With a team of certified experts, we
            help businesses harness the power of cloud computing, ensuring
            security, scalability, and efficiency. Whether it's cloud migration,
            DevOps, AI-driven analytics, or multi-cloud management, we provide
            tailored solutions to meet your needs. Empower your business with
            seamless cloud transformation.
          </p>
          <button className="bg-black text-white rounded-full px-6 py-3 text-lg font-semibold shadow hover:bg-[#764AF1] transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </Container>
  );
};
