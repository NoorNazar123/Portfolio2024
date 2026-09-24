import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";

export const experience = [
    {
        role: "Frontend Developer",
        company: "JTechsight",
        period: "2025 – Present",
        description:
            "Working on real-world web applications using React and Next.js, implementing Figma designs, integrating REST APIs, and improving UI/UX and frontend performance.",
        highlights: [
            "React & Next.js development",
            "Figma to responsive UI",
            "REST API integration",
            "UI/UX improvements",
            "Performance optimization",
            "Git, Trello & Slack collaboration",
        ],
    },
    {
        role: "Freelance Frontend Developer",
        company: "Upwork",
        period: "2025 – Present",
        description:
            "Working with clients through Upwork to build, maintain, and improve modern web applications and frontend experiences.",
        highlights: [
            "Client website development",
            "Figma to React implementation",
            "Responsive UI development",
            "Feature development",
            "Bug fixing & maintenance",
            "Performance & UX improvements",
        ],
    },
];

export const workValues = [
    {
        title: "Performance-Minded",
        description:
            "I focus on responsive interfaces, clean implementation, and practical performance improvements.",
    },
    {
        title: "Pixel-Accurate UI",
        description:
            "I turn Figma designs into responsive interfaces while staying close to the intended design.",
    },
    {
        title: "API Integration",
        description:
            "I integrate REST APIs and connect frontend applications with real backend services.",
    },
    {
        title: "Responsive by Default",
        description:
            "I build interfaces that work smoothly across desktop, tablet, and mobile devices.",
    },
    {
        title: "Clean & Maintainable Code",
        description:
            "I focus on understandable components, reusable patterns, and maintainable project structure.",
    },
    {
        title: "Clear Communication",
        description:
            "I keep communication straightforward and provide clear updates throughout the work.",
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
        >
            <div className="mx-auto max-w-6xl">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto mb-16 max-w-2xl text-center"
                >
                    <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.2em] text-white/50">
                        My Journey
                    </span>

                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        Experience
                    </h2>

                    <p className="mt-4 text-base leading-7 text-white/60 sm:text-lg">
                        Professional experience building real-world web applications,
                        working with clients, and continuously expanding my technical
                        capabilities.
                    </p>
                </motion.div>

                {/* Experience Timeline */}
                <div className="relative mb-24">
                    <div className="absolute left-4 top-0 hidden h-full w-px bg-white/10 md:block" />

                    <div className="space-y-10">
                        {experience.map((item, index) => (
                            <motion.article
                                key={`${item.company}-${item.role}`}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                }}
                                className="relative md:pl-12"
                            >
                                {/* Timeline Icon */}
                                <div className="absolute left-0 top-0 hidden h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-md md:flex">
                                    <Briefcase size={16} />
                                </div>

                                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-colors duration-300 hover:bg-white/[0.07] sm:p-8">

                                    {/* Header */}
                                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                                        <div>
                                            <h3 className="text-xl font-semibold text-white sm:text-2xl">
                                                {item.role}
                                            </h3>

                                            <p className="mt-1 text-sm font-medium text-white/60">
                                                {item.company}
                                            </p>
                                        </div>

                                        <span className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/50">
                                            {item.period}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <p className="mt-5 max-w-3xl text-sm leading-7 text-white/60 sm:text-base">
                                        {item.description}
                                    </p>

                                    {/* Highlights */}
                                    <div className="mt-6 grid gap-3 sm:grid-cols-2">
                                        {item.highlights.map((highlight) => (
                                            <div
                                                key={highlight}
                                                className="flex items-start gap-2 text-sm text-white/60"
                                            >
                                                <CheckCircle2
                                                    size={17}
                                                    className="mt-0.5 shrink-0 text-white/70"
                                                />

                                                <span>{highlight}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>

                {/* What You Can Expect */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="mx-auto mb-10 max-w-2xl text-center">
                        <span className="mb-4 inline-block text-sm font-medium uppercase tracking-[0.2em] text-white/50">
                            Working With Me
                        </span>

                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            What You Can Expect
                        </h2>

                        <p className="mt-4 text-base leading-7 text-white/60">
                            Practical development, attention to detail, and clear
                            communication from start to finish.
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {workValues.map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.08,
                                }}
                                whileHover={{ y: -4 }}
                                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl transition-colors duration-300 hover:bg-white/[0.07]"
                            >
                                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                                    <CheckCircle2
                                        size={18}
                                        className="text-white/70 transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>

                                <h3 className="text-lg font-semibold text-white">
                                    {value.title}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-white/60">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-16 text-center"
                >
                    <p className="text-lg font-medium text-white sm:text-xl">
                        Have a project in mind?
                    </p>

                    <p className="mt-2 text-sm text-white/50">
                        Let&apos;s build something useful, responsive, and well-designed.
                    </p>

                    <a
                        href="/contact"
                        className="mt-6 inline-flex items-center rounded-full border border-white/10 bg-white px-6 py-3 text-sm font-semibold text-black transition-transform duration-300 hover:scale-105"
                    >
                        Start a Project
                    </a>
                </motion.div>

            </div>
        </section>
    );
}