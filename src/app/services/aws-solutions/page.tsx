import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Image from "next/image";

const keyComponents = [
  {
    icon: "/aws-solution-page/aws.png",
    title: "Cloud Architecture & Deployment",
    description: "Design AWS environments built for scale, security, and cost control.",
  },
  {
    icon: "/aws-solution-page/migration.png",
    title: "AWS Application Migration",
    description: "Move workloads to AWS with minimal disruption and maximum efficiency.",
  },
  {
    icon: "/aws-solution-page/serverless.png",
    title: "Serverless Development (Lambda)",
    description: "Build applications without managing servers using event-driven functions.",
  },
  {
    icon: "/aws-solution-page/cost.png",
    title: "Cost Optimization & Performance Tuning",
    description: "Monitor, analyze, and reduce cloud spending while enhancing performance.",
  },
];

const useCases = [
  {
    title: "E-Commerce Optimization",
    description:
      "An e-commerce brand is hosted on AWS EC2 and its media assets on S3, while using CloudFront for global delivery. The architecture ensures fast page loads and fault tolerance.",
  },
  {
    title: "Serverless Architecture",
    description:
      "A mobile startup builds its backend with AWS Lambda and DynamoDB. This eliminates the need to manage servers while automatically scaling functions based on traffic.",
  },
  {
    title: "Enterprise Migration",
    description:
      "A global insurance firm migrates its core systems to AWS using AWS Migration Hub. Legacy data is transferred securely, and downtime is minimized through phased rollouts.",
  },
  {
    title: "Cost Optimization",
    description:
      "A startup using multiple AWS services implements AWS Cost Explorer and uses auto-scaling with spot instances to cut monthly costs by 35% without sacrificing performance.",
  },
];

export default function AwsSolutionsPage() {
  return (
    <main className="w-full ">
      <Hero
        title="AWS Solutions"
        subtitle="End-to-end AWS expertise for growth, migration, and optimization"
        bannerImage="/Layer_1.png"
        bannerAlt="AWS Solutions Banner"
        bannerImageClassName="right-30 top-0 w-fit scale-[75%] h-full"

      />

      {/* What is AWS Solutions */}
      <section className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h2 className="max-w-[949px] mx-auto font-semibold text-[#3b3f48] text-3xl sm:text-4xl lg:text-5xl  text-center tracking-[0] lg:leading-[64.8px] mt-2">What is AWS Solutions?</h2>
        <p className="max-w-[949px] mx-auto font-normal text-[#686e7b] text-base lg:text-lg text-center tracking-[0] leading-[27px] mt-4 lg:mt-6">
          AWS offers scalable, on-demand services for compute, storage, AI, and DevOps. Our AWS experts help design, migrate, manage, and optimize your cloud workloads with proven architectures and automation.
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
