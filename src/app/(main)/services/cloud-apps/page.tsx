import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Image from "next/image";

const keyComponents = [
  {
    icon: "/cloud-app-page/cloud-native.png",
    title: "Cloud-Native App Development",
    description: "Build robust applications optimized for cloud performance.",
  },
  {
    icon: "/cloud-app-page/saas.png",
    title: "SaaS Product Engineering",
    description: "Develop scalable, subscription-based software platforms.",
  },
  {
    icon: "/cloud-app-page/microservices.png",
    title: "Microservices Architecture",
    description: "Create flexible, decoupled services for modern app delivery.",
  },
  {
    icon: "/cloud-app-page/api-design.png",
    title: "API Design & Integration",
    description: "Connect systems and services with secure, well-structured APIs.",
  },
];

const useCases = [
  {
    title: "Custom CRM on Cloud",
    description:
      "A B2B company replaces spreadsheets with a tailored CRM application, built on cloud-native architecture with real-time collaboration and mobile support.",
  },
  {
    title: "SaaS Product Development",
    description:
      "A startup launches a cloud-based task management app with subscription billing, multi-user access, and seamless scalability.",
  },
  {
    title: "Internal Business Tools",
    description:
      "A manufacturing company digitizes production tracking and team coordination via internal cloud apps integrated with their ERP.",
  },
  {
    title: "Hybrid App Backend",
    description:
      "A company building a mobile platform hosts the backend in the cloud using Firebase and custom APIs, enabling real-time user sync and fast content delivery.",
  },
];

export default function CloudAppsPage() {
  return (
    <main className="w-full ">
      <Hero
        title="Cloud Apps"
        subtitle="Purpose-built applications designed for speed, scale, and performance"
        bannerImage="/Layer_1.png"
        bannerAlt="Cloud Apps Banner"
        bannerImageClassName="right-30 2xl:right-50 top-0 w-fit scale-[75%] 2xl:scale-[85%] h-full"

      />

      {/* What is Cloud Apps */}
      <section className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h2 className="max-w-[949px] mx-auto font-semibold text-[#3b3f48] text-3xl sm:text-4xl lg:text-5xl  text-center tracking-[0] lg:leading-[64.8px] mt-2">What is Cloud Apps?</h2>
        <p className="max-w-[949px] mx-auto font-normal text-[#686e7b] text-base lg:text-lg text-center tracking-[0] leading-[27px] mt-4 lg:mt-6">
          Cloud apps are built for the cloud from day one. They&apos;re scalable, secure, and accessible from anywhere. We develop custom cloud-native apps tailored to business goals, powered by APIs, microservices, and modern UX.
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
