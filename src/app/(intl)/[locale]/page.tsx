import { notFound } from 'next/navigation';
import HomeSections from '@/components/HomeSections';
import { isLocale } from '@/lib/i18n';

export default async function LocalizedHomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <HomeSections locale={locale} />;
}
