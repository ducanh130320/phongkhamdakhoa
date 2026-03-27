import { getServiceBySlug, SERVICES } from '@/lib/services';
import ClientService from './ClientService'
import { Metadata } from 'next';


export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const service = getServiceBySlug(slug);
  if (!service) return { title: 'Dịch vụ' };

  return {
    title: `${service.title} | TRUE HOPE`,
    description: service.metaDescription,
  };
}

export default async function ClientServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ClientService slug={slug} />;
}