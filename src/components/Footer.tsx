"use client"
import Schedule from "./Home/Schedule";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTranslations } from 'next-intl';

interface FooterProps {
  schedule?: boolean;
}
  
  // Footer links data
  interface FooterLinks {
    [key: string]: string[];
    company: string[];
    services: string[];
    resources: string[];
  }
  
  export const Footer = ({ schedule = true }: FooterProps  ) => {
    const pathname = usePathname();
    const tCommon = useTranslations('Common');
    const tFooter = useTranslations('Footer');
    const tServices = useTranslations('Services');
    const tContact = useTranslations('Contact');
    const tSignin = useTranslations('Auth.Signin');

    const footerLinks: FooterLinks = {
      company: [tCommon('home'), tFooter('about'), tFooter('contact')],
      services: [
        tServices('cloudInfrastructureTitle'),
        tServices('cloudSecurity'),
        tServices('awsSolutions'),
        tServices('devOps'),
        tServices('dataAnalytics'),
        tServices('managedCloud'),
        tServices('cloudApps'),
        tServices('multiCloud'),
      ],
      resources: [tFooter('sitemap')],
    };
    
    const serviceLinkMap: { [key: string]: string } = {
      [tServices('cloudInfrastructureTitle')]: "/services/cloud-infrastructure",
      [tServices('cloudSecurity')]: "/services/cloud-security",
      [tServices('awsSolutions')]: "/services/aws-solutions",
      [tServices('devOps')]: "/services/devops-automation",
      [tServices('dataAnalytics')]: "/services/data-analytics-ai",
      [tServices('managedCloud')]: "/services/managed-cloud",
      [tServices('cloudApps')]: "/services/cloud-apps",
      [tServices('multiCloud')]: "/services/multi-cloud-solutions",
    };
    
    const companyLinkMap: { [key: string]: string } = {
      [tCommon('home')]: '/',
      [tFooter('about')]: '/about',
      [tFooter('contact')]: '/contact',
    };

    const footerCategoryLabels: Record<string, string> = {
      company: tFooter('company'),
      services: tFooter('services'),
      resources: tFooter('resources'),
    };

    return (
      <div className="relative overflow-hidden">
        {schedule && pathname !== "/free-consultation" && <Schedule />}

        <footer className="w-full bg-[#121d4e] relative pt-[4rem]  lg:pt-[8rem]">
          <Container className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16">
              {/* Logo and Contact */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <div className="w-[221px] h-10">
                  <Image
                    className="w-[221px] h-10"
                    alt={tFooter('logoAlt') || 'Orotecc Logo'}
                    src="https://c.animaapp.com/mbw3crr3UaRZYv/img/vector-41.svg"
                    width={221}
                    height={40}
                  />
                </div>
  
                <div className="flex gap-3 mt-8 md:mt-12">
                  <Image src="/map-pin.svg" alt={tFooter('addressAlt') || 'Address'} width={18} height={18} className="w-[18px] h-[18px]" />
                  <span className="opacity-80 font-normal text-white text-base tracking-[0.80px] leading-[21.6px]">
                    {tContact('addressText')}
                  </span>
                </div>
  
                <div className="flex gap-3 mt-4">
                  <Image src="/phone-call.svg" alt={tFooter('phoneAlt') || 'Phone'} width={18} height={18} className="w-[18px] h-[18px]" />
                  <Image src="/phone-call.svg" alt={tFooter('phoneAlt') || 'Phone'} width={18} height={18} className="w-[18px] h-[18px]" />
                  <span className="opacity-80 font-normal text-white text-base tracking-[0.80px] leading-[21.6px]">
                    +971 556677555
                  </span>
                </div>
  
                <div className="flex gap-3 mt-4">
                  <Image src="/mail.svg" alt={tFooter('mailAlt') || 'Mail'} width={18} height={18} className="w-[18px] h-[18px]" />
                  <span className="opacity-80 font-normal text-white text-base tracking-[0.80px] leading-[21.6px]">
                    info@orotecc.com
                  </span>
                </div>
  
                <div className="font-bold text-white text-base tracking-[0.80px] leading-[21.6px] mt-8 md:mt-12">
                  {tFooter('social').toUpperCase()}
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
                    {footerCategoryLabels[category]}
                  </h3>
                  <div className="flex flex-col gap-3 mt-6 md:mt-10">
                    {footerLinks[category].map((link: string, linkIndex: number) => (
                      <div key={linkIndex} className="">
                        <Link
                          href={
                            category === "services"
                              ? serviceLinkMap[link]
                              : category === "company"
                              ? companyLinkMap[link] || "#"
                              : "#"
                          }
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
                {tSignin('copyright')}
              </div>
  
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                <a
                  href="#"
                  className="font-normal text-white text-sm tracking-[0] leading-[18.9px] hover:text-[#764af1] transition-colors"
                >
                  {tFooter('terms')}
                </a>
                <span className="hidden sm:inline-block font-normal text-white text-sm tracking-[0] leading-[18.9px]">
                  |
                </span>
                <a
                  href="#"
                  className="font-normal text-white text-sm tracking-[0] leading-[18.9px] hover:text-[#764af1] transition-colors"
                >
                  {tFooter('disclaimer')}
                </a>
                <span className="hidden sm:inline-block font-normal text-white text-sm tracking-[0] leading-[18.9px]">
                  |
                </span>
                <a
                  href="#"
                  className="font-normal text-white text-sm tracking-[0] leading-[18.9px] hover:text-[#764af1] transition-colors"
                >
                  {tFooter('privacy')}
                </a>
              </div>
            </Container>
          </div>
        </footer>
      </div>
    );
  };
  