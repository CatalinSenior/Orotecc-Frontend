import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Home/Header";
import { Footer } from "@/components/Footer";
import { useTranslations } from 'next-intl';

const NotFound = () => {
  const t = useTranslations('NotFound');

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <div className="flex items-center justify-center text-9xl font-bold text-primary">
          <span>4</span>
          <Image src="/icons/404.svg" alt="404" width={100} height={100} />
          <span>4</span>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl font-bold">{t('title')}</h1>
          <p className="text-lg">
            {t('description')}
          </p>
          <Link href="/">
            <Button variant="outline">{t('returnHome')}</Button>
          </Link>
        </div>
      </div>
      <Footer schedule={false} />
    </>
  );
};

export default NotFound;
