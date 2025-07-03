import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Image from "next/image";

const keyComponents = [
  {
    icon: "/devops-automation-page/pipeline.png",
    title: "CI/CD Pipeline Implementation",
    description: "Enable faster, reliable releases through continuous integration and delivery.",
  },
  {
    icon: "/devops-automation-page/infrastructure.png",
    title: "Infrastructure Automation",
    description: "Manage infrastructure at scale with declarative automation tools.",
  },
  {
    icon: "/devops-automation-page/monitoring.png",
    title: "Monitoring & Alerting",
    description: "Track system health and respond quickly with real-time insights.",
  },
  {
    icon: "/devops-automation-page/container.png",
    title: "Container Orchestration",
    description: "Package and manage applications across environments seamlessly.",
  },
];

const useCases = [
  {
    title: "CI/CD For FinTech App",
    description:
      "A FinTech startup uses GitHub Actions and Docker containers to build, test, and deploy updates multiple times a day, reducing release cycles from weeks to hours.",
  },
  {
    title: "Infrastructure Automation for Agencies",
    description:
      "A digital agency automates infrastructure setup for multiple clients using Terraform and Ansible, eliminating manual errors and reducing provisioning time by 80%.",
  },
  {
    title: "Blue/Green Deployments",
    description:
      "A telecom company implements blue/green deployment to release new versions with zero downtime and instant rollback options in case of issues.",
  },
  {
    title: "Automated Testing & QA",
    description:
      "A gaming company integrates automated testing in its CI pipeline. Every code change triggers end-to-end tests, cutting QA overhead and improving release confidence.",
  },
];

export default function DevOpsAutomationPage() {
  return (
    <main className="w-full ">
      <Hero
        title="DevOps & Automation"
        subtitle="Streamlined workflows and faster delivery through smart automation"
        bannerImage="/Layer_1.png"

        bannerAlt="DevOps & Automation Banner"
        bannerImageClassName="right-30 2xl:right-50 top-0 w-fit scale-[75%] 2xl:scale-[85%] h-full"

      />

      {/* What is DevOps & Automation */}
      <section className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h2 className="max-w-[949px] mx-auto font-semibold text-[#3b3f48] text-3xl sm:text-4xl lg:text-5xl  text-center tracking-[0] lg:leading-[64.8px] mt-2">What is DevOps & Automation?</h2>
        <p className="max-w-[949px] mx-auto font-normal text-[#686e7b] text-base lg:text-lg text-center tracking-[0] leading-[27px] mt-4 lg:mt-6">
          DevOps integrates software development and IT operations, emphasizing automation, collaboration, and continuous delivery. By automating code integration, testing, and deployment, teams release faster with fewer errors.
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
