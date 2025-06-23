import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => (
  <div className={`w-full max-w-6xl px-4 md:px-8 mx-auto ${className}`}>
    {children}
  </div>
);

export default Container; 