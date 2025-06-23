"use client";
import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export interface FlyoutLinkProps {
  children: React.ReactNode;
  href?: string;
  FlyoutContent: React.ComponentType<any>;
  flyoutProps?: any;
  className?: string;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

const FlyoutLink: React.FC<FlyoutLinkProps> = ({
  children,
  href = "#",
  FlyoutContent,
  flyoutProps,
  className,
  isOpen,
  onOpenChange,
}) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const open = typeof isOpen === "boolean" ? isOpen : internalOpen;
  const ref = useRef<HTMLDivElement>(null);
  const showFlyout = !!FlyoutContent && open;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        if (onOpenChange) onOpenChange(false);
        else setInternalOpen(false);
      }
    };
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open, onOpenChange]);

  return (
    <div ref={ref} className="relative w-fit h-fit">
      <a
        href={href}
        className={`relative text-white no-underline cursor-pointer ${className || ""}`}
        onClick={e => {
          e.preventDefault();
          if (onOpenChange) onOpenChange(!open);
          else setInternalOpen((prev) => !prev);
        }}
      >
        {children}
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2 top-12 bg-white text-black z-50 rounded-md shadow-[1px_1px_8px_0px_#00000040]"
          >
            <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
            <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
            <FlyoutContent {...flyoutProps} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FlyoutLink;
