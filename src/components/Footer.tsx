
import Schedule from "./Home/Schedule";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
  
  // Footer links data
  interface FooterLinks {
    [key: string]: string[];
    company: string[];
    services: string[];
    resources: string[];
  }
  const footerLinks: FooterLinks = {
    company: ["Home", "About", 
      // "Team", "Testimonials", "Careers", 
      "Contact"],
    services: [
      "Cloud Infrastructure",
      "Cloud Security",
      "AWS Solutions",
      "DevOps & Automation",
      "Data Analytics & AI",
      "Managed Cloud",
      "Cloud Apps",
      "Multi-Cloud Solutions",
    ],
    resources: [
      // "Blog", "News and Events", "Support", "FAQ", 
      "Sitemap"],
  };
  
  const serviceLinkMap: { [key: string]: string } = {
    "Cloud Infrastructure": "/services/cloud-infrastructure",
    "Cloud Security": "/services/cloud-security",
    "AWS Solutions": "/services/aws-solutions",
    "DevOps & Automation": "/services/devops-automation",
    "Data Analytics & AI": "/services/data-analytics-ai",
    "Managed Cloud": "/services/managed-cloud",
    "Cloud Apps": "/services/cloud-apps",
    "Multi-Cloud Solutions": "/services/multi-cloud-solutions",
  };
  
  export const Footer = () => {
    return (
      <div className="relative overflow-hidden">
            <Schedule />

        <footer className="w-full bg-[#121d4e] relative pt-[4rem]  lg:pt-[8rem]">
          <Container className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
              {/* Logo and Contact */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-[221px] h-10">
                  <Image
                    className="w-[221px] h-10"
                    alt="Orotecc Logo"
                    src="https://c.animaapp.com/mbw3crr3UaRZYv/img/vector-41.svg"
                    width={221}
                    height={40}
                  />
                </div>
  
                <div className="flex gap-3 mt-8 md:mt-12">
                  <Image src="/map-pin.svg" alt="Address" width={18} height={18} className="w-[18px] h-[18px]" />
                  <span className="opacity-80 font-normal text-white text-base tracking-[0.80px] leading-[21.6px]">
                    Al Manama Tower, Office 2313, Business Bay, Dubai
                  </span>
                </div>
  
                <div className="flex gap-3 mt-4">
                  <Image src="/phone-call.svg" alt="Phone" width={18} height={18} className="w-[18px] h-[18px]" />
                  <span className="opacity-80 font-normal text-white text-base tracking-[0.80px] leading-[21.6px]">
                    +971 556677555
                  </span>
                </div>
  
                <div className="flex gap-3 mt-4">
                  <Image src="/mail.svg" alt="Mail" width={18} height={18} className="w-[18px] h-[18px]" />
                  <span className="opacity-80 font-normal text-white text-base tracking-[0.80px] leading-[21.6px]">
                    info@orotecc.com
                  </span>
                </div>
  
                <div className="font-bold text-white text-base tracking-[0.80px] leading-[21.6px] mt-8 md:mt-12">
                  JOIN OUR NETWORK
                </div>
  
                <div className="flex gap-3 mt-4">
                  <div className="w-9 h-9 bg-[#764af1] rounded-full flex items-center justify-center transition-colors hover:bg-purple-700">
                    <Image src="/facebook.png" alt="Facebook" width={24} height={24} className="w-6 h-6" />
                  </div>
                  <div className="w-9 h-9 bg-[#764af1] rounded-full flex items-center justify-center transition-colors hover:bg-purple-700">
                    <Image src="/youtube.png" alt="YouTube" width={24} height={24} className="w-6 h-6" />
                  </div>
                  <div className="w-9 h-9 bg-[#764af1] rounded-full flex items-center justify-center transition-colors hover:bg-purple-700">
                    <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} className="w-6 h-6" />
                  </div>
                </div>
              </div>
  
              {Object.keys(footerLinks).map((category: string, catIndex: number) => (
                <div
                  key={catIndex}
                  className="flex flex-col items-center md:items-start text-center md:text-left"
                >
                  <h3 className="font-bold text-white text-base tracking-[0.80px] leading-[21.6px] uppercase">
                    {category}
                  </h3>
                  <div className="flex flex-col gap-3 mt-6 md:mt-10">
                    {footerLinks[category].map((link: string, linkIndex: number) => (
                      <div key={linkIndex} className="">
                        <Link
                          href={category === "services" ? serviceLinkMap[link] : "#"}
                          className="inline-block opacity-80 font-normal text-white text-base tracking-[0] leading-[21.6px] hover:opacity-100 transition-colors relative after:absolute after:bottom-[-3px] after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-0 after:bg-[#764AF1] after:transition-transform after:duration-700 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100"
                        >
                          {link}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Container>
  
          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row w-full justify-between px-4 sm:px-6 lg:px-8 py-5 mt-10 md:mt-16 bg-[#0c1744] text-center md:text-left">
            <Container className="flex flex-col md:flex-row justify-between w-full ">
              <div className="font-normal text-white text-sm tracking-[0] leading-[18.9px] mb-4 md:mb-0">
                © 2025 Orotecc. All rights reserved.
              </div>
  
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                <a
                  href="#"
                  className="font-normal text-white text-sm tracking-[0] leading-[18.9px] hover:text-[#764af1] transition-colors"
                >
                  Terms &amp; Conditions
                </a>
                <span className="hidden sm:inline-block font-normal text-white text-sm tracking-[0] leading-[18.9px]">
                  |
                </span>
                <a
                  href="#"
                  className="font-normal text-white text-sm tracking-[0] leading-[18.9px] hover:text-[#764af1] transition-colors"
                >
                  Disclaimer
                </a>
                <span className="hidden sm:inline-block font-normal text-white text-sm tracking-[0] leading-[18.9px]">
                  |
                </span>
                <a
                  href="#"
                  className="font-normal text-white text-sm tracking-[0] leading-[18.9px] hover:text-[#764af1] transition-colors"
                >
                  Privacy Policy
                </a>
              </div>
            </Container>
          </div>
        </footer>
      </div>
    );
  };
  