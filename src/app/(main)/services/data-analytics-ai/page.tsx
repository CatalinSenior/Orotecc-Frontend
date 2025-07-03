import Container from "@/components/Container";
import Hero from "@/components/Hero";
import Image from "next/image";

const keyComponents = [
  {
    icon: "/data-analytics-page/data.png",
    title: "Data Lakes & Warehousing",
    description: "Centralize structured and unstructured data for analytics at scale.",
  },
  {
    icon: "/data-analytics-page/model.png",
    title: "Machine Learning & Model Training",
    description: "Develop predictive models to solve real-world business challenges.",
  },
  {
    icon: "/data-analytics-page/predictive.png",
    title: "Predictive & Prescriptive Analytics",
    description: "Anticipate trends and recommend actions using advanced analytics.",
  },
  {
    icon: "/data-analytics-page/ai.png",
    title: "AI Chatbots & NLP Applications",
    description: "Build conversational bots and intelligent assistants with NLP.",
  },
];

const useCases = [
  {
    title: "Customer Behavior Prediction",
    description:
      "A retail chain uses machine learning to identify customer preferences and predict purchases. This informs personalized campaigns and boosts sales.",
  },
  {
    title: "Real-Time Fraud Detection",
    description:
      "A digital bank uses AI to monitor transactions in real-time. Suspicious patterns are flagged instantly, and automated workflows freeze accounts to prevent fraud.",
  },
  {
    title: "Operational Dashboards",
    description:
      "A logistics firm aggregates GPS and IoT data into dashboards for real-time fleet tracking, improving delivery performance and route efficiency.",
  },
  {
    title: "AI Chatbot for Support",
    description:
      "A tech platform deploys an NLP-powered chatbot for 24/7 customer support, handling 60% of queries and reducing ticket resolution time significantly.",
  },
];

export default function DataAnalyticsAIPage() {
  return (
    <main className="w-full ">
      <Hero
        title="Data Analytics & AI"
        subtitle="Unlock insights and make smarter decisions with AI-driven data"
        bannerImage="/Layer_1.png"

        bannerAlt="Data Analytics & AI Banner"
        bannerImageClassName="right-30 2xl:right-50 top-0 w-fit scale-[75%] 2xl:scale-[85%] h-full"

      />

      {/* What is Data Analytics & AI */}
      <section className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h2 className="max-w-[949px] mx-auto font-semibold text-[#3b3f48] text-3xl sm:text-4xl lg:text-5xl  text-center tracking-[0] lg:leading-[64.8px] mt-2">What is Data Analytics & AI?</h2>
        <p className="max-w-[949px] mx-auto font-normal text-[#686e7b] text-base lg:text-lg text-center tracking-[0] leading-[27px] mt-4 lg:mt-6">
          Data Analytics & AI helps businesses convert raw data into insights using machine learning, predictive models, and real-time analytics. It powers decisions, automation, and personalized customer experiences.
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
