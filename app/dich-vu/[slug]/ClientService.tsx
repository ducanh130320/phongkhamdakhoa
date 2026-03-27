import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";

import Footer from "../../../components/Footer";
import {
    getOtherServices,
    getServiceBySlug,
} from "../../../lib/services";
import ReactMarkdown from "react-markdown";
import YouTubePlayer from "../../../components/YouTubePlayer";

const PremiumMarkdownBlock = ({ content }: { content: string }) => {
    const cleanContent = content.replace(/^[ 	]+/gm, '');
    return (
        <div className="mt-10 relative overflow-hidden rounded-[2.5rem] border border-brand-blue/30 bg-gradient-to-br from-[#f8fdff] via-white to-[#eef9ff] p-8 shadow-[0_20px_60px_-15px_rgba(0,102,179,0.1)] backdrop-blur-xl md:p-12">
            <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-blue/10 blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-green-500/10 blur-3xl pointer-events-none"></div>
            <div className="relative z-10">
                <ReactMarkdown
                    components={{
                        h1: ({ children }) => {
                            const text = children?.toString() || '';
                            const isWarning = text.includes('⚠️') || text.includes('❗') || text.includes('🛑') || text.includes('❗️');
                            const bgClass = isWarning
                            'bg-gradient-to-r from-red-600 to-red-500 shadow-red-500/30'
                            'bg-gradient-to-r from-[#0066b3] to-[#00a8e8] shadow-brand-blue/30';
                            return (
                                <h1 className={"mb-6 rounded-3xl p-6 text-center text-xl font-black uppercase text-white shadow-xl md:text-2xl lg:text-3xl tracking-wide " + bgClass}>
                                    {children}
                                </h1>
                            );
                        },
                        h2: ({ children }) => (
                            <h2 className="mb-6 mt-12 flex items-center gap-4 text-xl font-extrabold text-[#004a80] md:text-2xl">
                                <span className="flex h-10 w-3 shrink-0 rounded-full bg-gradient-to-b from-[#0066b3] to-green-400 shadow-sm"></span>
                                {children}
                            </h2>
                        ),
                        h3: ({ children }) => (
                            <h3 className="mb-4 mt-8 text-lg font-bold text-gray-800 md:text-xl">
                                {children}
                            </h3>
                        ),
                        hr: () => <hr className="my-10 border-t-2 border-dashed border-brand-blue/20" />,
                        ul: ({ children }) => (
                            <ul className="mb-10 grid gap-5 md:grid-cols-1 lg:grid-cols-1">
                                {children}
                            </ul>
                        ),
                        li: ({ children }) => {
                            return (
                                <li className="group relative list-none rounded-2xl border border-white/50 bg-white/60 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0066b3]/30 hover:bg-white hover:shadow-lg backdrop-blur-sm">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-green-400 to-green-600 text-white shadow-md shadow-green-500/30 ring-2 ring-white transition-transform group-hover:scale-110 group-hover:rotate-6">
                                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <div className="flex-1 text-gray-800 font-medium pt-0.5 leading-relaxed">
                                            {children}
                                        </div>
                                    </div>
                                </li>
                            );
                        },
                        strong: ({ children }) => (
                            <strong className="font-bold text-[#004a80] bg-yellow-100/50 px-1 py-0.5 rounded text-lg md:text-xl group-hover:text-[#0066b3] transition-colors">
                                {children}
                            </strong>
                        ),
                        p: ({ children }) => {
                            const text = Array.isArray(children) ? children.join('') : (children?.toString() || "");
                            const isWarning = text.includes('⚠️') || text.includes('❗') || text.includes('🛑') || text.includes('❗️');

                            if (isWarning) {
                                return (
                                    <p className="text-base leading-relaxed md:text-[1.15rem] mb-6 shadow-sm font-semibold text-red-700 flex items-start gap-3 bg-red-50/80 backdrop-blur-sm p-5 rounded-2xl border border-red-200/60 last:mb-0">
                                        <span className="flex-1">{children}</span>
                                    </p>
                                );
                            }

                            return (
                                <p className="text-gray-700 text-base leading-relaxed md:text-[1.1rem] mb-5 last:mb-0">
                                    {children}
                                </p>
                            );
                        },
                        a: ({ children, href }) => {
                            const content = children?.toString().toUpperCase() || "";
                            const isCTA = content.includes("TIN NHẮN") || content.includes("LIÊN HỆ") || content.includes("ĐẶT LỊCH") || content.includes("ĐÂY") || content.includes("KHÁM");

                            if (isCTA) {
                                return (
                                    <a
                                        href={href || "https://zalo.me/0985912711"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#0066b3] to-[#0181df] px-8 py-5 text-center text-xl font-black uppercase tracking-widest text-white shadow-xl shadow-blue-500/30 transition-all hover:scale-[1.02] hover:shadow-2xl active:scale-95"
                                    >
                                        {children}
                                        <svg className="h-6 w-6 animate-bounce-x" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </a>
                                );
                            }
                            return (
                                <a
                                    href={href || "https://zalo.me/0985912711"}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-bold text-[#0066b3] underline hover:text-[#004a80] transition-colors"
                                >
                                    {children}
                                </a>
                            );
                        },
                    }}
                >
                    {cleanContent}
                </ReactMarkdown>
            </div>
        </div>
    );
};

const StandardMarkdownBlock = ({ content }: { content: string }) => {
    const cleanContent = content.replace(/^[ 	]+/gm, '');
    return (
        <div className="w-full">
            <ReactMarkdown
                components={{
                    h1: ({ children }) => (
                        <h1 className="mb-6 text-2xl font-black uppercase text-brand-dark md:text-3xl">
                            {children}
                        </h1>
                    ),
                    h2: ({ children }) => (
                        <h2 className="mb-5 mt-10 flex items-center gap-3 text-xl font-extrabold text-[#0066b3] md:text-2xl border-l-4 border-green-500 pl-4 bg-[#0066b3]/5 py-3 rounded-r-xl">
                            {children}
                        </h2>
                    ),
                    h3: ({ children }) => (
                        <h3 className="mb-4 mt-8 text-lg font-bold text-gray-800 md:text-xl">
                            {children}
                        </h3>
                    ),
                    ul: ({ children }) => (
                        <ul className="mb-8 space-y-4">
                            {children}
                        </ul>
                    ),
                    li: ({ children }) => (
                        <li className="flex items-start gap-4 bg-gray-50/80 p-5 rounded-xl border border-gray-100 hover:border-[#0066b3]/20 transition-colors shadow-sm">
                            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0066b3]/10 text-[#0066b3]">
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </span>
                            <div className="flex-1 text-gray-700 leading-relaxed">
                                {children}
                            </div>
                        </li>
                    ),
                    strong: ({ children }) => (
                        <strong className="block text-green-700 font-bold mb-1.5 text-[1.05rem]">
                            {children}
                        </strong>
                    ),
                    p: ({ children }) => (
                        <p className="text-gray-600 text-[1.05rem] leading-relaxed mb-5 last:mb-0">
                            {children}
                        </p>
                    ),
                    img: (props) => (
                        <span className="block my-8 overflow-hidden rounded-2xl border border-gray-200 shadow-md">
                            <img {...props} className="w-full h-auto object-cover max-h-[500px]" alt={props.alt || ''} />
                        </span>
                    ),
                }}
            >
                {cleanContent}
            </ReactMarkdown>
        </div>
    );
};

export default async function ClientService({ slug }: { slug: string }) {
    const service = await getServiceBySlug(slug);
    if (!service) notFound();
    const others = await getOtherServices(slug);

    return (
        <main className="flex min-h-screen flex-col bg-white">
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

            <section className="bg-white py-14 md:py-10">
                <div className="container mx-auto max-w-6xl px-4">
                    <div className="grid gap-10 lg:grid-cols-3">
                        <div className="space-y-8 lg:col-span-2">
                            {
                                service.youtubeVideoId && (
                                    <div className="relative w-full overflow-hidden rounded-2xl border-4 border-[#3399ff]/30 bg-white shadow-xl ">
                                        <YouTubePlayer videoId={service.youtubeVideoId} />
                                    </div>
                                )
                            }
                            {service.expression && (
                                <div className="space-y-8 lg:col-span-2">
                                    <h2 className="text-lg font-bold uppercase tracking-wide text-brand-dark" style={{
                                        color: '#fff',
                                        lineHeight: '1.5',
                                        fontWeight: '700',
                                        width: '100%',
                                        padding: '7px 20px',
                                        fontSize: '22px',
                                        borderRadius: '5px',
                                        background: '#0cab55',
                                        borderLeft: '5px solid #ec3724',
                                        margin: '25px 0',
                                        backgroundImage: 'linear-gradient(to right, #009647, #1ea155)',
                                        fontFamily: 'Roboto',
                                        textTransform: 'uppercase',
                                    }}>
                                        {service.expression}
                                    </h2>
                                </div>
                            )
                            }

                            {service.expressionContent && (
                                <StandardMarkdownBlock content={service.expressionContent} />
                            )}
                            {service.expressionImage && (
                                <Image
                                    src={service.expressionImage}
                                    alt={service.title}
                                    width={500}
                                    height={500}
                                    className="object-cover mx-auto"
                                />
                            )}

                            {service.expressionSymptomsTitle && (
                                <div className="space-y-8 lg:col-span-2">
                                    <h2 className="text-lg font-bold uppercase tracking-wide text-brand-dark" style={{
                                        color: '#fff',
                                        lineHeight: '1.5',
                                        fontWeight: '700',
                                        width: '100%',
                                        padding: '7px 20px',
                                        fontSize: '22px',
                                        borderRadius: '5px',
                                        background: '#0cab55',
                                        borderLeft: '5px solid #ec3724',
                                        margin: '25px 0',
                                        backgroundImage: 'linear-gradient(to right, #009647, #1ea155)',
                                        fontFamily: 'Roboto',
                                        textTransform: 'uppercase',
                                    }}>
                                        {service.expressionSymptomsTitle}
                                    </h2>
                                </div>
                            )
                            }

                            {service.expressionSymptomsContent && (
                                <PremiumMarkdownBlock content={service.expressionSymptomsContent} />
                            )}


                            {service.expressionSupport && (
                                <div className="space-y-8 lg:col-span-2">
                                    <h2 className="text-lg font-bold uppercase tracking-wide text-brand-dark" style={{
                                        color: '#fff',
                                        lineHeight: '1.5',
                                        fontWeight: '700',
                                        width: '100%',
                                        padding: '7px 20px',
                                        fontSize: '22px',
                                        borderRadius: '5px',
                                        background: '#0cab55',
                                        borderLeft: '5px solid #ec3724',
                                        margin: '25px 0',
                                        backgroundImage: 'linear-gradient(to right, #009647, #1ea155)',
                                        fontFamily: 'Roboto',
                                        textTransform: 'uppercase',
                                    }}>
                                        {service.expressionSupport}
                                    </h2>
                                </div>
                            )
                            }

                            {service.expressionSupportContent && (
                                <PremiumMarkdownBlock content={service.expressionSupportContent} />
                            )}

                            {service.expressionSale && (
                                <PremiumMarkdownBlock content={service.expressionSale} />
                            )}

                            {/* Bệnh trĩ */}
                            {service.hemorrhoidsTitle && (
                                <StandardMarkdownBlock content={service.hemorrhoidsTitle} />
                            )
                            }

                            {service.hemorroidsOfTypesSale && (
                                <PremiumMarkdownBlock content={service.hemorroidsOfTypesSale} />
                            )
                            }

                            {/* Nam khoa */}
                            {service.whatIsTheMaleDepartment && (
                                <div className="space-y-8 lg:col-span-2">
                                    <h2 className="text-lg font-bold uppercase tracking-wide text-brand-dark" style={{
                                        color: '#fff',
                                        lineHeight: '1.5',
                                        fontWeight: '700',
                                        width: '100%',
                                        padding: '7px 20px',
                                        fontSize: '22px',
                                        borderRadius: '5px',
                                        background: '#0cab55',
                                        borderLeft: '5px solid #ec3724',
                                        margin: '25px 0',
                                        backgroundImage: 'linear-gradient(to right, #009647, #1ea155)',
                                        fontFamily: 'Roboto',
                                        textTransform: 'uppercase',
                                    }}>
                                        {service.whatIsTheMaleDepartment}
                                    </h2>
                                </div>
                            )
                            }

                            {service.whatIsTheMaleDepartmentContent && (
                                <StandardMarkdownBlock content={service.whatIsTheMaleDepartmentContent} />
                            )
                            }

                            {service.whatIsTheMaleDepartmentImage && (
                                <Image
                                    src={service.whatIsTheMaleDepartmentImage}
                                    alt={service.title}
                                    width={500}
                                    height={500}
                                    className="object-cover mx-auto"
                                />
                            )}

                            {/* Lợi ích của việc khám nam khoa định kỳ */}
                            {service.whyIsTheMaleDepartmentPeriodic && (
                                <div className="space-y-8 lg:col-span-2">
                                    <h2 className="text-lg font-bold uppercase tracking-wide text-brand-dark" style={{
                                        color: '#fff',
                                        lineHeight: '1.5',
                                        fontWeight: '700',
                                        width: '100%',
                                        padding: '7px 20px',
                                        fontSize: '22px',
                                        borderRadius: '5px',
                                        background: '#0cab55',
                                        borderLeft: '5px solid #ec3724',
                                        margin: '25px 0',
                                        backgroundImage: 'linear-gradient(to right, #009647, #1ea155)',
                                        fontFamily: 'Roboto',
                                        textTransform: 'uppercase',
                                    }}>
                                        {service.whyIsTheMaleDepartmentPeriodic}
                                    </h2>
                                </div>
                            )}

                            {/* Nội dung của việc khám nam khoa định kỳ */}
                            {service.whyIsTheMaleDepartmentPeriodicContent && (
                                <PremiumMarkdownBlock content={service.whyIsTheMaleDepartmentPeriodicContent} />
                            )}

                            {service.whyIsTheMaleDepartmentPeriodicSale && (
                                <PremiumMarkdownBlock content={service.whyIsTheMaleDepartmentPeriodicSale} />
                            )}
                            <StandardMarkdownBlock content={service.content || ''} />
                            {service.whatIsTheFoeskin && (
                                <div className="space-y-8 lg:col-span-2">
                                    <h2 className="text-lg font-bold uppercase tracking-wide text-brand-dark" style={{
                                        color: '#fff',
                                        lineHeight: '1.5',
                                        fontWeight: '700',
                                        width: '100%',
                                        padding: '7px 20px',
                                        fontSize: '22px',
                                        borderRadius: '5px',
                                        background: '#0cab55',
                                        borderLeft: '5px solid #ec3724',
                                        margin: '25px 0',
                                        backgroundImage: 'linear-gradient(to right, #009647, #1ea155)',
                                        fontFamily: 'Roboto',
                                        textTransform: 'uppercase',
                                    }}>
                                        {service.whatIsTheFoeskin}
                                    </h2>
                                </div>
                            )
                            }

                            {service.reason && (
                                <div className="space-y-8 lg:col-span-2">
                                    <h2 className="text-lg font-bold uppercase tracking-wide text-brand-dark" style={{
                                        color: '#fff',
                                        lineHeight: '1.5',
                                        fontWeight: '700',
                                        width: '100%',
                                        padding: '7px 20px',
                                        fontSize: '22px',
                                        borderRadius: '5px',
                                        background: '#0cab55',
                                        borderLeft: '5px solid #ec3724',
                                        margin: '25px 0',
                                        backgroundImage: 'linear-gradient(to right, #009647, #1ea155)',
                                        fontFamily: 'Roboto',
                                        textTransform: 'uppercase',
                                    }}>
                                        {service.reason}
                                    </h2>
                                </div>
                            )
                            }
                            {service.titleReason && (
                                <StandardMarkdownBlock content={service.titleReason} />
                            )}
                            {service.imageReason && (
                                <Image
                                    src={service.imageReason}
                                    alt={service.title}
                                    width={500}
                                    height={500}
                                    className="object-cover mx-auto"
                                />
                            )}

                            {service.roleFoeskin && (
                                <div className="space-y-8 lg:col-span-2">
                                    <h2 className="text-lg font-bold uppercase tracking-wide text-brand-dark" style={{
                                        color: '#fff',
                                        lineHeight: '1.5',
                                        fontWeight: '700',
                                        width: '100%',
                                        padding: '7px 20px',
                                        fontSize: '22px',
                                        borderRadius: '5px',
                                        background: '#0cab55',
                                        borderLeft: '5px solid #ec3724',
                                        margin: '25px 0',
                                        backgroundImage: 'linear-gradient(to right, #009647, #1ea155)',
                                        fontFamily: 'Roboto',
                                        textTransform: 'uppercase',
                                    }}>
                                        {service.roleFoeskin}
                                    </h2>
                                </div>
                            )
                            }
                            {service.foeskinDiseases && (
                                <StandardMarkdownBlock content={service.foeskinDiseases} />
                            )}

                            {service.foeskinDiseasesContent && (
                                <PremiumMarkdownBlock content={service.foeskinDiseasesContent} />
                            )}
                            {service.reasonContent && (
                                <StandardMarkdownBlock content={service.reasonContent} />
                            )}
                            {service.symptomsTitle && (
                                <div className="space-y-8 lg:col-span-2">
                                    <h2 className="text-lg font-bold uppercase tracking-wide text-brand-dark" style={{
                                        color: '#fff',
                                        lineHeight: '1.5',
                                        fontWeight: '700',
                                        width: '100%',
                                        padding: '7px 20px',
                                        fontSize: '22px',
                                        borderRadius: '5px',
                                        background: '#0cab55',
                                        borderLeft: '5px solid #ec3724',
                                        margin: '25px 0',
                                        backgroundImage: 'linear-gradient(to right, #009647, #1ea155)',
                                        fontFamily: 'Roboto',
                                        textTransform: 'uppercase',
                                    }}>
                                        {service.symptomsTitle}
                                    </h2>
                                </div>
                            )}
                            {service.reasonContent && (
                                <StandardMarkdownBlock content={service.symptomsContent || ''} />
                            )}

                            {service.treatmentContent && (
                                <div className="space-y-8 lg:col-span-2">
                                    <h2 className="text-lg font-bold uppercase tracking-wide text-brand-dark" style={{
                                        color: '#fff',
                                        lineHeight: '1.5',
                                        fontWeight: '700',
                                        width: '100%',
                                        padding: '7px 20px',
                                        fontSize: '22px',
                                        borderRadius: '5px',
                                        background: '#0cab55',
                                        borderLeft: '5px solid #ec3724',
                                        margin: '25px 0',
                                        backgroundImage: 'linear-gradient(to right, #009647, #1ea155)',
                                        fontFamily: 'Roboto',
                                        textTransform: 'uppercase',
                                    }}>
                                        {service.treatmentContent}
                                    </h2>
                                </div>
                            )}

                            {service.treatmentProcedure && (
                                <StandardMarkdownBlock content={service.treatmentProcedure || ''} />
                            )}

                            {service.salesContent && (
                                <PremiumMarkdownBlock content={service.salesContent} />
                            )}


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
