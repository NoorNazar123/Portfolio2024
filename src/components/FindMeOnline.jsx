import React from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const FindMeOnline = () => {
    const links = [
        {
            label: "Google",
            description: "Search M Noor e Nazar",
            href: "https://www.google.com/search?q=M+Noor+e+Naza+web+dev",
            icon: <FaGoogle />,
        },
        {
            label: "LinkedIn",
            description: "Professional profile",
            href: "https://www.linkedin.com/in/noor-nazar-dev/",
            icon: <FaLinkedinIn />,
        },
        {
            label: "GitHub",
            description: "Code & projects",
            href: "https://github.com/NoorNazar123",
            icon: <FaGithub />,
        },
    ];

    return (
        <section className="relative overflow-hidden bg-[#0a0a0a] py-20 text-white">
            {/* Background Glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-150px] top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-purple-600/10 blur-[120px]" />

                <div className="absolute bottom-[-150px] right-[-100px] h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-[120px]" />
            </div>

            <div className="layout relative z-10">
                <motion.div
                    className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl sm:p-10 lg:p-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    {/* Header */}
                    <div className="max-w-2xl">
                        <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
                            Find me online
                        </p>

                        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                            M Noor e Nazar
                        </h2>

                        <p className="mt-4 text-base leading-8 text-gray-400 sm:text-lg">
                            Search my name to find my professional presence across Google,
                            LinkedIn, and GitHub.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="mt-8 grid gap-4 md:grid-cols-3">
                        {links.map((link, index) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`${link.label} - ${link.description}`}
                                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06]"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                            >
                                <div className="flex items-center gap-4">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-lg text-gray-300 transition group-hover:text-white">
                                        {link.icon}
                                    </div>

                                    <div>
                                        <p className="font-medium text-gray-200 group-hover:text-white">
                                            {link.label}
                                        </p>

                                        <p className="mt-1 text-xs text-gray-500">
                                            {link.description}
                                        </p>
                                    </div>
                                </div>

                                <FaArrowUpRightFromSquare className="text-xs text-gray-600 transition group-hover:text-gray-300" />
                            </motion.a>
                        ))}
                    </div>

                    {/* Google Search CTA */}
                    <div className="mt-8 border-t border-white/10 pt-6">
                        <p className="text-sm text-gray-500">
                            You can also search{" "}
                            <span className="font-medium text-gray-300">
                                &quot;M Noor e Nazar&quot;
                            </span>{" "}
                            on Google.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FindMeOnline;