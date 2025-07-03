import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Image from "next/image";

const keyComponents = [
  {
    icon: "/multi-cloud/cross.png",
    title: "Cross-Cloud Strategy & Integration",
    description: "Architect solutions that leverage multiple cloud providers effectively.",
  },
  {
    icon: "/multi-cloud/data.png",
    title: "Data Synchronization Across Clouds",
    description: "Keep data consistent across AWS, Azure, GCP, and others.",
  },
  {
    icon: "/multi-cloud/compliance.png",
    title: "Compliance-Driven Deployments",
    description: "Align cloud usage with local laws and industry regulations.",
  },
  {
    icon: "/multi-cloud/recovery.png",
    title: "Disaster Recovery & Failover",
    description: "Ensure resilience with cloud-to-cloud replication and failover.",
  },
];

const useCases = [
  {
    title: "Avoiding Vendor Lock-in",
    description:
      "A tech firm runs front-end services on AWS while hosting analytics on GCP, gaining flexibility and leveraging the strengths of each provider.",
  },
  {
    title: "Compliance-Driven Strategy",
    description:
      "A multinational corporation stores customer data on region-specific clouds (Azure in the EU, AWS in the US) to meet data residency laws.",
  },
  {
    title: "Cross-Cloud Data Syncing",
    description:
      "A fintech startup syncs customer data between GCP (analytics) and AWS (app logic) to optimize both cost and performance.",
  },
  {
    title: "High Availability Architecture",
    description:
      "A media company uses Azure and AWS in parallel, with auto-failover systems ensuring zero downtime even if one provider goes down.",
  },
];

export default function MultiCloudSolutionsPage() {
  return (
    <main className="w-full ">
      <Hero
        title="Multi-Cloud Solutions"
        subtitle="Smart strategies for resilient, flexible cloud deployments"
        bannerImage="/Layer_1.png"

        bannerAlt="Multi-Cloud Solutions Banner"
        bannerImageClassName="right-30 2xl:right-50 top-0 w-fit scale-[75%] 2xl:scale-[85%] h-full"

      />

      {/* What is Multi-Cloud Solutions */}
      <section className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h2 className="max-w-[949px] mx-auto font-semibold text-[#3b3f48] text-3xl sm:text-4xl lg:text-5xl  text-center tracking-[0] lg:leading-[64.8px] mt-2">What is Multi-Cloud Solutions?</h2>
        <p className="max-w-[949px] mx-auto font-normal text-[#686e7b] text-base lg:text-lg text-center tracking-[0] leading-[27px] mt-4 lg:mt-6">
          Multi-cloud refers to using services from multiple cloud providers to increase reliability, avoid vendor lock-in, and ensure compliance. We help architect, deploy, and manage integrated multi-cloud environments.
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
