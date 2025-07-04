import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Container: React.FC<ContainerProps> = ({ children, className = "", style }) => (
  <div className={`w-full max-w-6xl 2xl:max-w-[1440px] px-4 md:px-8 mx-auto ${className}`} style={style}>
    {children}
  </div>
);

export default Container; 