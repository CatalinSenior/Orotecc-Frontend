"use client";

import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
  } from "@/components/ui/dropdown-menu";
import { Globe, ChevronDown } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from 'next/navigation';

const locales = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' }
];

const AuthHeader = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Get current locale from the first segment of the path
  const pathSegments = pathname.split('/');
  const currentLocale = (pathSegments[1] === 'en' || pathSegments[1] === 'ar') ? pathSegments[1] : 'en';

  const handleLocaleChange = (newLocale: string) => {
    if (newLocale !== currentLocale) {
      // Store in localStorage for persistence
      localStorage.setItem('i18n-locale', newLocale);
      // Replace the locale in the current path
      const segments = [...pathSegments];
      if (segments[1] === 'en' || segments[1] === 'ar') {
        segments[1] = newLocale;
      } else {
        segments.splice(1, 0, newLocale);
      }
      const newPath = segments.join('/') || '/';
      router.replace(newPath);
    }
  };

  const currentLocaleData = locales.find(l => l.code === currentLocale) || locales[0];

  return (
    <header className="flex w-full h-[72px] items-center justify-between px-16 py-4 fixed top-0 left-0 bg-white shadow-[0px_1px_1px_#00000014] z-50">
      <div className="mr-8 md:mr-0 cursor-pointer">
        <Link href={`/${currentLocale}`} className="flex items-center gap-[3px]">
          <Image src="/icons/Logo.svg" alt="Logo" width={200} height={40} />
        </Link>
      </div>

      <div className="flex items-center justify-center gap-6 relative flex-1 grow" />

      <div className="flex flex-col items-end justify-center flex-1 mt-[-2.00px] mb-[-2.00px]">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 px-4 py-2   bg-white text-[#3b3f48] font-medium text-base  hover:bg-[#f6f6fa]">
              <Globe className="w-5 h-5" />
              {currentLocaleData.label}
              <ChevronDown className="w-4 h-4 ml-1" />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-36">
            {locales.map(l => (
              <DropdownMenuItem key={l.code} className="flex items-center gap-2" onClick={() => handleLocaleChange(l.code)}>
                <span role="img" aria-label={l.label}>{l.flag}</span> {l.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default AuthHeader;
  