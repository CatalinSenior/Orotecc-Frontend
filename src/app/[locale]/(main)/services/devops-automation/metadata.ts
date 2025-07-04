import { getMessages } from 'next-intl/server';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = params;
  const messages = await getMessages({ locale });
  const seo = messages.DevOpsAutomation?.seo;
  return {
    title: seo?.title,
    description: seo?.description
  };
} 