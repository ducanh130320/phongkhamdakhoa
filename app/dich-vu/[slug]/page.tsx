import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";

import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import {
  SERVICES,
  getOtherServices,
  getServiceBySlug,
} from "../../../lib/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) {
    return { title: "Dịch vụ" };
  }
  return {
    title: `${service.title} | TRUE HOPE`,
    description: service.metaDescription,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const others = getOtherServices(slug);

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Header />

      <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#e6f7ff] to-[#aee4ff] pt-6 pb-14 md:pb-16">
        <div className="container mx-auto max-w-6xl px-4">
          <nav
            className="mb-8 flex flex-wrap items-center gap-1 text-sm text-gray-600"
            aria-label="Breadcrumb"
          >
            <Link
              href="/"
              className="text-brand-blue hover:text-brand-dark font-medium transition-colors"
            >
              Trang chủ
            </Link>
            <ChevronRight className="h-4 w-4 shrink-0 text-gray-400" />
            <Link
              href="/#dich-vu"
              className="text-brand-blue hover:text-brand-dark font-medium transition-colors"
            >
              Dịch vụ
            </Link>
            <ChevronRight className="h-4 w-4 shrink-0 text-gray-400" />
            <span className="font-medium text-brand-dark">{service.title}</span>
          </nav>

          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div className="order-2 md:order-1">
              <h1 className="mb-4 text-3xl font-bold uppercase tracking-wide text-brand-dark md:text-4xl">
                {service.title}
              </h1>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                {service.shortDescription}
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:0985912711"
                  className="inline-flex items-center justify-center rounded-xl bg-[#0066b3] px-8 py-3.5 text-center text-sm font-bold uppercase text-white shadow-lg transition-colors hover:bg-[#005599]"
                >
                  Đặt lịch tư vấn
                </a>
                <Link
                  href="/#dich-vu"
                  className="inline-flex items-center justify-center rounded-xl border-2 border-brand-blue bg-white px-6 py-3.5 text-center text-sm font-bold uppercase text-brand-dark transition-colors hover:bg-brand-light/50"
                >
                  Xem dịch vụ khác
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative mx-auto aspect-[4/3] w-full max-w-lg overflow-hidden rounded-2xl border-4 border-[#3399ff]/30 bg-white shadow-xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="space-y-8 lg:col-span-2">
              <article className="rounded-2xl border-t-4 border-brand-blue bg-white p-6 shadow-lg md:p-8">
                <h2 className="mb-4 text-xl font-bold uppercase tracking-wide text-brand-dark">
                  Tổng quan
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  {service.overview.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </article>

              <article className="rounded-2xl border-t-4 border-brand-blue bg-white p-6 shadow-lg md:p-8">
                <h2 className="mb-4 text-xl font-bold uppercase tracking-wide text-brand-dark">
                  Quy trình
                </h2>
                <ol className="list-decimal space-y-3 pl-5 text-gray-600 leading-relaxed marker:font-semibold marker:text-brand-blue">
                  {service.procedure.map((step, i) => (
                    <li key={i}>{step}</li>
                  ))}
                </ol>
              </article>

              <article className="rounded-2xl border-t-4 border-brand-blue bg-white p-6 shadow-lg md:p-8">
                <h2 className="mb-4 text-xl font-bold uppercase tracking-wide text-brand-dark">
                  Lợi ích khi lựa chọn TRUE HOPE
                </h2>
                <ul className="space-y-3 text-gray-600 leading-relaxed">
                  {service.benefits.map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <span
                        className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brand-blue"
                        aria-hidden
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <div className="rounded-2xl bg-[#0066b3] p-6 text-center text-white shadow-xl md:p-8">
                <p className="mb-4 text-lg font-semibold">
                  Cần tư vấn trực tiếp về {service.title.toLowerCase()}?
                </p>
                <a
                  href="tel:0985912711"
                  className="inline-block rounded-xl bg-brand-red px-8 py-3.5 font-bold uppercase shadow-md transition-colors hover:bg-red-600"
                >
                  Gọi 0985.912.711
                </a>
              </div>
            </div>

            <aside className="lg:col-span-1">
              <div className="sticky top-24 space-y-4">
                <h2 className="text-lg font-bold uppercase tracking-wide text-brand-dark">
                  Dịch vụ khác
                </h2>
                <ul className="space-y-4">
                  {others.map((item) => (
                    <li key={item.slug}>
                      <Link
                        href={`/dich-vu/${item.slug}`}
                        className="group flex gap-3 rounded-xl border border-gray-100 bg-white p-3 shadow-md transition-all hover:-translate-y-0.5 hover:border-brand-blue/40 hover:shadow-lg"
                      >
                        <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded-lg">
                          <Image
                            src={item.image}
                            alt=""
                            fill
                            className="object-cover transition-transform group-hover:scale-105"
                            sizes="96px"
                          />
                        </div>
                        <div className="min-w-0 flex-1 py-0.5">
                          <span className="line-clamp-2 font-bold text-brand-dark group-hover:text-brand-blue">
                            {item.title}
                          </span>
                          <span className="mt-1 line-clamp-2 text-xs text-gray-500">
                            {item.shortDescription}
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
