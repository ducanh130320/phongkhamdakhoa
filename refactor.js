const fs = require('fs');
const path = require('path');

const filePath = path.join('d:', 'pkdk', 'app', 'dich-vu', '[slug]', 'ClientService.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const premiumMarkdownBlock = `
const PremiumMarkdownBlock = ({ content }: { content: string }) => {
    const cleanContent = content.replace(/^[ \\t]+/gm, '');
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
                              ? 'bg-gradient-to-r from-red-600 to-red-500 shadow-red-500/30' 
                              : 'bg-gradient-to-r from-[#0066b3] to-[#00a8e8] shadow-brand-blue/30';
                            return (
                                <h1 className={"mb-8 rounded-3xl p-6 text-center text-xl font-black uppercase text-white shadow-xl md:text-2xl lg:text-3xl tracking-wide " + bgClass}>
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
                        hr: () => <hr className="my-12 border-t-2 border-dashed border-brand-blue/20" />,
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
`;

if (!content.includes('const PremiumMarkdownBlock')) {
    content = content.replace('export default function ClientService', premiumMarkdownBlock + '\nexport default function ClientService');
}

// Ensure the regex covers everything including the {children} property correctly 
const blockRegex = /<div className="mt-10 rounded-3xl border border-brand-blue\/20[^>]*>[\s\S]*?<ReactMarkdown[\s\S]*?>\s*\{service\.([a-zA-Z0-9_]+)\}\s*<\/ReactMarkdown>\s*<\/div>/g;

content = content.replace(blockRegex, (match, propName) => {
    console.log('Replacing property block:', propName);
    return '<PremiumMarkdownBlock content={service.' + propName + '} />';
});

fs.writeFileSync(filePath, content);
console.log('Done refactoring ClientService.tsx');
