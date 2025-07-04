import { getMessages } from '../../../../i18n/request';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const messages = await getMessages(locale);
  return {
    title: messages.FreeConsultation.seo.title,
    description: messages.FreeConsultation.seo.description,
  };
} 