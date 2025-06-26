import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Image from "next/image";

const keyComponents = [
    {
      icon: "/services-page/machine.png",
      title: "Virtual Machines & Compute Resources",
      description: "Deploy scalable virtual servers tailored to your application workloads.",
    },
    {
      icon: "/services-page/storage.png",
      title: "Cloud Storage Solutions",
      description: "Store and access data with high durability and performance.",
    },
    {
      icon: "/services-page/load.png",
      title: "Network Architecture & Load Balancing",
      description: "Design reliable cloud networks and distribute traffic intelligently.",
    },
    {
      icon: "/services-page/code.png",
      title: "Infrastructure as Code (IaC)",
      description: "Automate provisioning and configuration using tools like Terraform.",
    },
  ];

const useCases = [
  {
    title: "SaaS Startup Deployment",
    description:
      "A startup launches its SaaS platform using containerized infrastructure and scalable compute resources. The cloud ensures low-latency performance, automatic scaling, and rapid global expansion without upfront hardware investment.",
  },
  {
    title: "Legacy System Modernization",
    description:
      "A large enterprise migrates legacy applications to a cloud environment. By leveraging virtual networks and IAC, they reduce infrastructure overhead, eliminate downtime from aging hardware, and modernize operations.",
  },
  {
    title: "Event-Based Scaling",
    description:
      "An online ticketing platform prepares for peak traffic during high-profile events. Cloud-based auto-scaling ensures that server capacity increases automatically under load, guaranteeing uninterrupted service.",
  },
{
    title: "Disaster Recovery Architecture",
    description:
      "A financial institution sets up a cloud-based disaster recovery environment across multiple regions, ensuring data redundancy and instant failover capabilities in case of infrastructure failure.",
  },
];

export default function CloudInfrastructurePage() {
  return (
    <main className="w-full ">
      <Hero
  title="Cloud Infrastructure"
  subtitle="Scalable, high-performance foundations for modern digital systems"
  bannerImage="/clouds.png"
  bannerAlt="Cloud Infrastructure Banner"
  bannerImageClassName="-right-33 top-0 w-fit scale-[55%] h-full" 
/>

      {/* What is Cloud Infrastructure */}
      <section className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h2 className="max-w-[949px] mx-auto font-semibold text-[#3b3f48] text-3xl sm:text-4xl lg:text-5xl  text-center tracking-[0] lg:leading-[64.8px] mt-2">What is Cloud Infrastructure?</h2>
        <p className="max-w-[949px] mx-auto font-normal text-[#686e7b] text-base lg:text-lg text-center tracking-[0] leading-[27px] mt-4 lg:mt-6">
          Cloud infrastructure delivers computing, storage, and networking capabilities over the internet. It replaces traditional on-premise systems with scalable, flexible resources that adapt to demand. Businesses benefit from lower upfront costs, higher availability, faster deployments, and seamless scalability.
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