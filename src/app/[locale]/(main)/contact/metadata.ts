import { getMessages } from '../../../../i18n/request';

export async function generateMetadata({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const messages = await getMessages(locale);
  return {
    title: messages.Contact.seo.title,
    description: messages.Contact.seo.description,
  };
} 