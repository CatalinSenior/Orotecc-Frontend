import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Image from "next/image";

const keyComponents = [
  {
    icon: "/cloud-security-page/identity.png",
    title: "Identity & Access Management (IAM)",
    description: "Define and enforce secure access policies for users and apps.",
  },
  {
    icon: "/cloud-security-page/transit.png",
    title: "Encryption at Rest and In Transit",
    description: "Protect sensitive data with end-to-end encryption mechanisms.",
  },
  {
    icon: "/cloud-security-page/threat.png",
    title: "Threat Monitoring and Response",
    description: "Detect and respond to threats in real time using intelligent tools.",
  },
  {
    icon: "/cloud-security-page/thrust.png",
    title: "Zero Trust Architecture",
    description: "Secure your network with continuous verification and segmentation.",
  },
];

const useCases = [
  {
    title: "Regulatory Compliance for Healthcare",
    description:
      "A health-tech firm secures patient records by enforcing role-based access, encrypting data at rest and in transit, and implementing logging and auditing for HIPAA compliance.",
  },
  {
    title: "Zero Trust Architecture for Remote Teams",
    description:
      "A distributed organization rolls out a zero-trust framework to secure access to critical systems. Every user and device is verified before access, reducing insider threats.",
  },
  {
    title: "Threat Detection and Response",
    description:
      "A retail company integrates cloud-native SIEM tools to detect anomalous login behavior and unauthorized access attempts. Automated alerts and responses minimize breach risk.",
  },
  {
    title: "Secure Cloud Migration",
    description:
      "A logistics provider transitions to the cloud with end-to-end encryption and identity controls, ensuring a secure environment during and after migration.",
  },
];

export default function CloudSecurityPage() {
  return (
    <main className="w-full ">
      <Hero
        title="Cloud Security"
        subtitle="Advanced security strategies for a cloud-first world"
        bannerImage="/Layer_1.png"
        bannerAlt="Cloud Security Banner"
        bannerImageClassName="right-30 2xl:right-50 top-0 w-fit scale-[75%] 2xl:scale-[85%] h-full"
      />

      {/* What is Cloud Security */}
      <section className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h2 className="max-w-[949px] mx-auto font-semibold text-[#3b3f48] text-3xl sm:text-4xl lg:text-5xl  text-center tracking-[0] lg:leading-[64.8px] mt-2">What is Cloud Security?</h2>
        <p className="max-w-[949px] mx-auto font-normal text-[#686e7b] text-base lg:text-lg text-center tracking-[0] leading-[27px] mt-4 lg:mt-6">
          Cloud security comprises technologies and best practices that protect cloud infrastructure, applications, and data. It involves identity control, encryption, threat detection, compliance, and real-time protection from evolving cyber threats.
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
