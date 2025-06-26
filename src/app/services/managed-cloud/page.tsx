import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Image from "next/image";

const keyComponents = [
  {
    icon: "/managed-cloud-page/cloud.png",
    title: "24/7 Cloud Monitoring & Alerts",
    description: "Proactive system monitoring with instant alerts and resolution.",
  },
  {
    icon: "/managed-cloud-page/security.png",
    title: "Security Updates & Patch Management",
    description: "Keep systems secure and up-to-date automatically.",
  },
  {
    icon: "/managed-cloud-page/performance.png",
    title: "Performance Optimization",
    description: "Fine-tune cloud environments for speed, efficiency, and reliability.",
  },
  {
    icon: "/managed-cloud-page/recovery.png",
    title: "Disaster Recovery Management",
    description: "Ensure business continuity with backup and failover solutions.",
  },
];

const useCases = [
  {
    title: "24/7 Monitoring for SaaS App",
    description:
      "A SaaS company offloads monitoring and incident response to a managed provider, ensuring fast issue resolution and 99.99% uptime.",
  },
  {
    title: "MSP Support for Multi-Cloud Environments",
    description:
      "An enterprise spans AWS and Azure. A managed provider handles health checks, logging, and cross-platform policy enforcement.",
  },
  {
    title: "Monthly Cost Reporting & Governance",
    description:
      "A nonprofit receives monthly usage analytics and cost reports, helping them stay within grant budgets while maintaining performance.",
  },
  {
    title: "Proactive Maintenance & Scaling",
    description:
      "An EdTech platform experiences seasonal spikes. The managed cloud team proactively scales resources and pre-tunes performance for traffic surges.",
  },
];

export default function ManagedCloudPage() {
  return (
    <main className="w-full ">
      <Hero
        title="Managed Cloud"
        subtitle="Reliable cloud operations — monitored, maintained, and supported"
        bannerImage="/Layer_1.png"

        bannerAlt="Managed Cloud Banner"
        bannerImageClassName="right-30 top-0 w-fit scale-[75%] h-full"

      />

      {/* What is Managed Cloud */}
      <section className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h2 className="max-w-[949px] mx-auto font-semibold text-[#3b3f48] text-3xl sm:text-4xl lg:text-5xl  text-center tracking-[0] lg:leading-[64.8px] mt-2">What is Managed Cloud?</h2>
        <p className="max-w-[949px] mx-auto font-normal text-[#686e7b] text-base lg:text-lg text-center tracking-[0] leading-[27px] mt-4 lg:mt-6">
          Managed cloud services provide full operational support for your cloud infrastructure, including monitoring, updates, backups, and cost optimization, so your team can focus on innovation.
        </p>
      </section>

      {/* Key Service Components */}
      <section className="bg-[#F6F5FE] py-12 sm:py-16 lg:py-24 px-2 sm:px-4">
        <Container>
          <h3 className="max-w-[949px] mx-auto font-semibold text-[#3b3f48] text-2xl sm:text-3xl lg:text-5xl  text-center tracking-[0] lg:leading-[64.8px] mb-6 sm:mb-8">Key Service Components</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 xl:gap-8">
            {keyComponents.map((comp, idx) => (
              <div key={idx} className="bg-white rounded-[12px] py-5 sm:py-6 px-4 sm:px-[22px] flex flex-col gap-[10px] border border-[#E5E7EB]">
                <Image src={comp.icon} alt={comp.title} width={48} height={48} className="" />
                <h4 className="font-semibold text-base sm:text-lg leading-5.5">{comp.title}</h4>
                <p className="text-[#686E7B] text-sm sm:text-base">{comp.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Use Cases */}
      <section className="py-10 sm:py-14 lg:py-16 ">
        <Container>
          <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-6 md:mb-10 text-gray-900">Use cases</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {useCases.map((use, idx) => (
              <div key={idx} className="bg-white rounded-[12px] p-4 md:p-6 border border-[#E5E7EB]">
                <h4 className="font-bold text-base md:text-lg text-[#010101]">{use.title}</h4>
                <p className="text-gray-600 text-xs md:text-sm">{use.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
