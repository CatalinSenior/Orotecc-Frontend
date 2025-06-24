import Container from "@/components/Container";
import Image from "next/image";

const AboutHero = () => (
  <section className="relative w-full h-[500px] mt-[72px] overflow-hidden">
      <div className=" absolute -z-10 w-full h-full">
      {/* <svg width="1920" height="520" viewBox="0 0 1920 520" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="1920" height="520" fill="url(#paint0_linear_8_14)"/>
      <path opacity="0.7" d="M1561 0H1919V380L1561 0Z" fill="url(#paint1_linear_8_14)"/>
      <path d="M27 0H1181L850.5 520H433.5L27 0Z" fill="url(#paint2_linear_8_14)"/>
      <defs>
      <linearGradient id="paint0_linear_8_14" x1="0" y1="0" x2="1423.84" y2="1139.8" gradientUnits="userSpaceOnUse">
      <stop stop-color="#764AF1"/>
      <stop offset="1" stop-color="#4400C6"/>
      </linearGradient>
      <linearGradient id="paint1_linear_8_14" x1="1498" y1="192.937" x2="1814" y2="192.937" gradientUnits="userSpaceOnUse">
      <stop stop-color="#7A49DB"/>
      <stop offset="1" stop-color="#623CDC"/>
      </linearGradient>
      <linearGradient id="paint2_linear_8_14" x1="212" y1="172.834" x2="848" y2="172.834" gradientUnits="userSpaceOnUse">
      <stop stop-color="#7F5FF3"/>
      <stop offset="1" stop-color="#663EE4"/>
      </linearGradient>
      </defs>
      </svg> */}
      <div className="relative grid grid-cols-2 h-[500px]">
      <Image
           src="/about-bg-2.png"
              alt="about banner"
              width={1000}
              height={1000}
              className="object-cover w-full h-full"
              priority
            />
      <Image
           src="/about-banner.png"
              alt="about banner"
              width={1000}
              height={1000}
              className="object-cover  w-full h-full"
              priority
            />
      </div>
      <div className=" w-[20%] h-full z-10">
  <Image
    src="/about-bg1.png"
    alt="about background"
    fill
    className="object-contain"
    priority
  />
</div>

      </div>
    <Container className=" h-full flex justify-center items-center">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl  font-semibold mb-4 leading-tight">
            Powering Secure &amp; Scalable<br />Cloud Solutions
          </h1>
          <p className="text-white text-xl lg:text-2xl font-semibold">
            Driving innovation, security, and efficiency<br />
            through cutting-edge cloud technology
          </p>
        </div>
    </Container>
    <div className="size-[500px] right-0">
      <Image
              src="/about-banner.png"
              alt="about banner"
              width={1000}
              height={1000}
              className="object-cover w-full h-full"
              priority
            />
    
    </div>
  </section>
);

export default AboutHero;

