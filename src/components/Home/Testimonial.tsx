import React from "react";
import Container from "../Container";
// import Quote from "/icons/quote.svg"
import Image from "next/image";


type AvatarProps = { className?: string; children?: React.ReactNode };
const Avatar: React.FC<AvatarProps> = ({ className = "", children }) => (
  <div
    className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}
  >
    {children ? (
      children
    ) : (
      <span className="flex h-full w-full items-center justify-center rounded-full bg-muted text-muted-foreground">
        <svg
          className="h-5 w-5 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 4a4 4 0 100 8 4 4 0 000-8zM6 14a6 6 0 016-6h0a6 6 0 016 6v2a2 2 0 01-2 2H8a2 2 0 01-2-2v-2z" />
        </svg>
      </span>
    )}
  </div>
);

type SeparatorProps = { className?: string };
const Separator: React.FC<SeparatorProps> = ({ className = "" }) => (
  <div
    className={`shrink-0 bg-border ${className}`}
    style={{ height: "1px" }}
  />
);

const Testimonial = () => {
  // Testimonials data
  const testimonials = [
    {
      quote:
        "Orotecc has completely transformed our cloud infrastructure. Their expertise in AWS and DevOps helped us scale seamlessly while maintaining top-notch security.",
      name: "John Smith",
      position: "CTO at TechCorp",
      rating: 5,
    },
    {
      quote:
        "Partnering with Orotecc was one of the best decisions for our business. Their cloud security solutions ensured our sensitive customer data remained protected.",
      name: "Sarah Johnson",
      position: "CEO of RetailFlow",
      rating: 5,
    },
    {
      quote:
        "We needed a reliable cloud partner, and Orotecc delivered beyond expectations. From migration to ongoing management, they handled everything with precision and efficiency.",
      name: "Michael Lee",
      position: "Head of IT at FinTrust",
      rating: 5,
    },
    {
      quote:
        "Orotecc provided us with a scalable multi-cloud solution that revolutionized how we manage student data and online learning platforms.",
      name: "Emily Carter",
      position: "Director at EduCloud",
      rating: 5,
    },
  ];

  // Placeholder for Star SVG icon
  const StarIcon = () => (
    <svg
      width="14"
      height="13"
      viewBox="0 0 14 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.86603 0.5L8.91745 4.67134L13.5661 5.38556L10.2161 8.65345L10.9688 13.25L6.86603 11.1345L2.76326 13.25L3.51593 8.65345L0.165926 5.38556L4.81459 4.67134L6.86603 0.5Z"
        fill="#F8BC18"
      />
    </svg>
  );

  return (
    <section className="mt-18">
      <Container className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-x-16 items-start">
        {" "}
        {/* Left Column: Text Content */}
        <div className="md:pr-8 lg:col-span-5 xl:col-span-6">
          {" "}
          {/* Added right padding for spacing from grid */}
          <div className="mb-8">
            <h2 className="text-[#764af1] text-lg font-bold tracking-wide uppercase mb-4">
              WHAT OUR CLIENTS SAY
            </h2>
            <h3 className="text-3xl md:text-4xl 2xl:text-5xl font-semibold text-[#3b3f48] leading-tight">
              Trusted by Businesses – See How Orotecc Delivers Excellence
            </h3>
          </div>
          <div className="mb-12">
            <div className="inline-flex flex-col items-start gap-2">
              <span className="font-bold text-[#3b3f48] text-lg relative after:absolute after:bottom-[-3px] after:right-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-100 after:bg-[#764AF1] after:transition-transform after:duration-700 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:scale-x-0 hover:text-[#764AF1] transition-colors duration-300 ease-in-out cursor-pointer">
                More Testimonials
              </span>
            </div>
          </div>
        </div>
        {/* Right Column: Testimonials Grid */}
        <div className="md:columns-2 md:gap-6 lg:col-span-7 xl:col-span-6">
          {" "}
          {/* Testimonials sub-grid */}
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-[#f6f5fe] rounded-[8px] py-6 md:py-8 px-4 md:px-4 flex flex-col gap-4 mb-6 break-inside-avoid
                ${index === 0 ? "md:mt-10" : ""}
              `}
            >
              <div className="">
                <div className="mb-4">
                  <Image src="/icons/quote.svg" width={38} height={24} alt="quote" />
                </div>
                <p className="text-[#686e7b] text-base leading-relaxed">
                  {testimonial.quote}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Avatar className="w-[56px] h-[56px] bg-[#764af1] rounded-full flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-[#3b3f48] text-lg">
                    {testimonial.name}
                  </h4>
                  <p className="text-[#686e7b] text-sm">
                    {testimonial.position}
                  </p>
                  <div className="flex gap-1 mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonial;
