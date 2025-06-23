import * as React from "react";
import { SVGProps } from "react";
const WelcomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={92}
    height={93}
    fill="none"
    {...props}
  >
    <path
      fill="#fff"
      d="M46 .5c25.405 0 46 20.595 46 46s-20.595 46-46 46-46-20.595-46-46S20.595.5 46 .5Zm2 28c-7.853 0-14.531 5.029-16.99 12.042-.333-.028-.67-.042-1.01-.042-6.627 0-12 5.373-12 12s5.373 12 12 12h36a8 8 0 1 0 0-16l-.111.002c.072-.657.111-1.325.111-2.002 0-9.941-8.059-18-18-18Z"
      opacity={0.8}
    />
  </svg>
);
export default WelcomeIcon;
