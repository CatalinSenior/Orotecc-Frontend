"use client";

import { ChevronDownIcon, MenuIcon, XIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import FlyoutLink from "./FlyoutLinks";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Button = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <button
    className={`px-6 py-3 rounded-[32px] font-bold text-white transition-colors cursor-pointer duration-200 ${className}`}
  >
    {children}
  </button>
);

interface NavLink {
  name: string;
  hasDropdown: boolean;
  path: string;
}

const navLinksData: NavLink[] = [
  { name: "Home", hasDropdown: false, path: "/" },
  { name: "Services", hasDropdown: true, path: "/services" },
  { name: "Solutions", hasDropdown: true, path: "/solutions" },
  { name: "About", hasDropdown: false, path: "/about" },
  { name: "Resources", hasDropdown: true, path: "/resources" },
  { name: "Contact", hasDropdown: false, path: "/contact" },
];

const services = [
  {
    title: "Cloud Infrastructure",
    description: "Scalable and reliable cloud computing solutions",
    icon: "/services/infrastructure.svg",
  },
  {
    title: "Cloud Security",
    description: "Advanced protection to secure your data",
    icon: "/services/security.svg",
  },
  {
    title: "AWS Solutions",
    description: "Expert AWS consulting, migration, and optimization",
    icon: "/services/solutions.svg",
  },
  {
    title: "DevOps & Automation",
    description: "Efficient CI/CD pipelines and automated workflows",
    icon: "/services/devops.svg",
  },
  {
    title: "Data Analytics & AI",
    description: "AI-driven insights for smarter business decisions",
    icon: "/services/data.svg",
  },
  {
    title: "Managed Cloud",
    description: "24/7 cloud monitoring, maintenance, and support",
    icon: "/services/managed.svg",
  },
  {
    title: "Cloud Apps",
    description: "Custom cloud apps for performance and scalability",
    icon: "/services/apps.svg",
  },
  {
    title: "Multi-Cloud Solutions",
    description: "Flexible cloud strategies for seamless integration",
    icon: "/services/multi.svg",
  },
];

const solutions = [
  {
    title: "Media Crowd",
    description: "Media monitoring with an AI-powered state-of-the-art solution",
    icon: "/solutions/media.svg",
  },
  {
    title: "Cloud Security",
    description: "Advanced protection to secure your data",
    icon: "/solutions/security.svg",
  },
];

const resources = [
  {
    title: "Blogs",
    description: "Insights, updates, and best practices from our experts",
    icon: "/resources/blogs.svg",
  },
  {
    title: "Security",
    description: "Guides and resources to keep your data safe",
    icon: "/resources/security.svg",
  },
];

const ServicesFlyout = () => (
  <div className="p-4 min-w-[680px] bg-white rounded-xl shadow-xl">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
      {services.map((service, idx) => (
        <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#f6f5fe] transition-colors cursor-pointer">
          <div className="flex-shrink-0 size-[18px] flex items-center justify-center bg-[#f6f5fe] rounded-full">
            <Image src={service.icon} alt={service.title + ' icon'} width={18} height={18} />
          </div>
          <div>
            <div className="font-semibold text-[#3b3f48] text-base leading-tight">{service.title}</div>
            <div className="text-sm text-[#686e7b] mt-1 leading-snug">{service.description}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const SolutionsFlyout = () => (
  <div className="p-4 min-w-[400px] bg-white rounded-xl shadow-xl">
    <div className="grid grid-cols-1 gap-2">
      {solutions.map((solution, idx) => (
        <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#f6f5fe] transition-colors cursor-pointer">
          <div className="flex-shrink-0 size-[18px] flex items-center justify-center bg-[#f6f5fe] rounded-full">
            <Image src={solution.icon} alt={solution.title + ' icon'} width={18} height={18} />
          </div>
          <div>
            <div className="font-semibold text-[#3b3f48] text-base leading-tight">{solution.title}</div>
            <div className="text-sm text-[#686e7b] mt-1 leading-snug">{solution.description}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ResourcesFlyout = () => (
  <div className="p-4 min-w-[400px] bg-white rounded-xl shadow-xl">
    <div className="grid grid-cols-1 gap-2">
      {resources.map((resource, idx) => (
        <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-[#f6f5fe] transition-colors cursor-pointer">
          <div className="flex-shrink-0 size-[18px] flex items-center justify-center bg-[#f6f5fe] rounded-full">
            <Image src={resource.icon} alt={resource.title + ' icon'} width={18} height={18} />
          </div>
          <div>
            <div className="font-semibold text-[#3b3f48] text-base leading-tight">{resource.title}</div>
            <div className="text-sm text-[#686e7b] mt-1 leading-snug">{resource.description}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const Header = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Close on ESC
  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  // Focus trap
  useEffect(() => {
    if (mobileOpen && mobileMenuRef.current) {
      mobileMenuRef.current.focus();
    }
  }, [mobileOpen]);

  return (
    <header className="flex w-full h-[72px] items-center justify-between px-4 md:px-8 py-4 fixed top-0 left-0 shadow-[0px_1px_1px_#00000014] z-100 bg-white">
      {/* Logo Section */}
      <div className="flex items-center gap-[3px]">
        <Image src="/icons/Logo.svg" alt="Logo" width={200} height={40} />
      </div>
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center justify-center gap-4 2xl:gap-6 relative flex-1 grow">
        {navLinksData.map((link, index) => (
          <div
            key={index}
            className={`inline-flex flex-col items-center justify-end 0 relative flex-[0_0_auto]`}
          >
            {link.hasDropdown ? (
              <FlyoutLink
                href={link.path}
                FlyoutContent={
                  link.name === "Services"
                    ? ServicesFlyout
                    : link.name === "Solutions"
                    ? SolutionsFlyout
                    : link.name === "Resources"
                    ? ResourcesFlyout
                    : () => <div>No Content</div>
                }
                className={`relative after:absolute after:bottom-[-3px] after:right-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-0 dark:after:bg-white after:bg-[#764AF1] after:transition-transform after:duration-1000 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100 flex gap-1 items-center${openDropdown === link.name || pathname === link.path ? " after:scale-x-100" : ""}`}
                isOpen={openDropdown === link.name}
                onOpenChange={(open: boolean) => setOpenDropdown(open ? link.name : null)}
              >
                <div className={`font-sans text-base leading-6 font-semibold transition-colors duration-300 ease-in-out relative w-fit mt-[-1.00px] whitespace-nowrap flex items-center gap-1 ${pathname === link.path ? "text-[#764AF1]" : "text-[#3b3f48]"}`}>
                  {link.name}
                  <ChevronDownIcon className={`relative w-4 h-4 ml-1 ${pathname === link.path ? "text-[#764AF1]" : "text-[#3b3f48]"}`} />
                </div>
              </FlyoutLink>
            ) : (
              <Link href={link.path} className={`flex gap-1 items-center relative after:absolute after:bottom-[-3px] after:right-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-0 dark:after:bg-white after:bg-[#764AF1] after:transition-transform after:duration-700 after:ease-[cubic-bezier(0.65_0.05_0.36_1)] hover:after:origin-bottom-left hover:after:scale-x-100${pathname === link.path ? " after:scale-x-100" : ""}`}>
                <div className={`font-sans text-base leading-6 font-semibold transition-colors duration-300 ease-in-out relative w-fit mt-[-1.00px] whitespace-nowrap ${pathname === link.path ? "text-[#764AF1]" : "text-[#3b3f48]"}`}>
                  {link.name}
                </div>
              </Link>
            )}
          </div>
        ))}
      </div>
      <div className="hidden lg:flex flex-col items-end justify-center">
        <Button className="w-full bg-[#764af1] hover:bg-purple-800 transition-all duration-1000 ease-in-out transform hover:scale-95 origin-left hover:origin-right delay-150">Get Started</Button>
      </div>

      {/* Hamburger for mobile */}
      <button
        className="lg:hidden flex items-center justify-center p-2 rounded-full hover:bg-gray-100 transition-colors"
        aria-label="Open menu"
        onClick={() => setMobileOpen(true)}
      >
        <MenuIcon className="w-7 h-7 text-[#3b3f48]" />
      </button>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[200] flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Overlay */}
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setMobileOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              ref={mobileMenuRef}
              tabIndex={-1}
              className="relative w-[85vw] max-w-xs h-full bg-white shadow-xl flex flex-col px-6 py-6 outline-none"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
            >
              {/* Close button */}
              <button
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <XIcon className="w-6 h-6 text-[#3b3f48]" />
              </button>
              {/* Logo */}
              <div className="mb-8 flex items-center gap-2">
                <Image src="/icons/Logo.svg" alt="Logo" width={160} height={32} />
              </div>
              {/* Nav links */}
              <nav className="flex flex-col gap-2 mt-2">
                {navLinksData.map((link, idx) => (
                  <div key={idx} className="w-full">
                    {link.hasDropdown ? (
                      <>
                        <button
                          className="flex items-center justify-between w-full py-3 px-2 font-semibold text-[#3b3f48] hover:text-[#764AF1] transition-colors"
                          onClick={() => setMobileDropdown(mobileDropdown === link.name ? null : link.name)}
                          aria-expanded={mobileDropdown === link.name}
                          aria-controls={`mobile-dropdown-${link.name}`}
                        >
                          <span>{link.name}</span>
                          <ChevronDownIcon className={`w-5 h-5 ml-2 transition-transform ${mobileDropdown === link.name ? "rotate-180" : "rotate-0"}`} />
                        </button>
                        <AnimatePresence initial={false}>
                          {mobileDropdown === link.name && (
                            <motion.div
                              id={`mobile-dropdown-${link.name}`}
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden pl-4"
                            >
                              <div className="py-2">
                                {link.name === "Services" && <ServicesFlyout />}
                                {link.name === "Solutions" && <SolutionsFlyout />}
                                {link.name === "Resources" && <ResourcesFlyout />}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={link.path}
                        className={`block py-3 px-2 font-semibold text-[#3b3f48] hover:text-[#764AF1] transition-colors`}
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
              {/* Get Started button at bottom */}
              <div className="mt-auto pt-8">
                <Button className="w-full bg-[#764af1] hover:bg-[#6a3fd5] transition-all duration-700 ease-in-out transform hover:scale-95 origin-right hover:origin-left">Get Started</Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
