import React from "react";
import Container from "../Container";

const solutionCards = [
  {
    title: "Optimize Operations",
    description: "Leverage cloud technology for efficiency and cost savings",
    icon: "/cloud.svg",
  },
  {
    title: "Enhance Security",
    description:
      "Protect sensitive data with industry-leading security measures",
    icon: "/icons/enhance.svg",
  },
  {
    title: "Boost Performance",
    description:
      "Improve speed, scalability, and reliability with cloud-based solutions",
    icon: "/icons/speedometer.svg",
  },
  {
    title: "Enable Innovation",
    description: "Utilize AI, automation, and analytics to stay ahead",
    icon: "/icons/idea.svg",
  },
];

const Cloud = () => {
  return (
    <section className="py-16 sm:py-16 lg:pt-32 relative ">
      <div className="absolute min-h-[130vh] w-full -top-[15rem] -z-10">
        <img
          src="./bg-home.png"
          alt="Background"
          className=" inset-0 w-full min-h-[130vh] "
        />
      </div>
      <Container className="relative z-10">
        <div className="text-center mb-6">
          <h2 className="text-[#764af1] text-base sm:text-xl font-bold tracking-[1.60px] mb-2 sm:mb-4 uppercase">
            CLOUD SOLUTIONS FOR EVERY BUSINESS
          </h2>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#3b3f48] leading-tight">
            Empower your business with seamless cloud transformation
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-6">
          {solutionCards.map((card, index) => (
            <div
              key={index}
              className="  p-6 flex flex-col items-center text-center "
            >
              {/* Icon above the title */}
              <img src={card.icon} alt="" className="w-12 h-12 mb-4" />
              <h4 className="text-lg sm:text-xl font-medium text-[#010101] mb-2">
                {card.title}
              </h4>
              <p className="text-[#686e7b] text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            className="bg-[#764af1] text-white rounded-[32px] px-6 py-4 font-semibold hover:bg-purple-800 transition-colors duration-300 ease-in-out cursor-pointer"
          >
            Start Your Cloud Journey
          </button>
        </div>
      </Container>
    </section>
  );
};

export default Cloud;
