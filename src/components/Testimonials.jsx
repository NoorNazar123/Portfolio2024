import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaQuoteLeft } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import linkedinRecommendation from "../assets/linkedin-recommendation.png";

const Testimonials = () => {
    return (
        <section className="relative overflow-hidden bg-[#0a0a0a] py-20 text-white">
            {/* Background Glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-[-150px] top-[20%] h-[350px] w-[350px] rounded-full bg-purple-600/10 blur-[120px]" />

                <div className="absolute bottom-[-150px] right-[-100px] h-[350px] w-[350px] rounded-full bg-blue-600/10 blur-[120px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    className="mx-auto max-w-2xl text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <p className="text-sm font-medium uppercase tracking-[0.3em] text-gray-500">
                        Testimonials
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                        What people say
                    </h2>

                    <p className="mt-4 text-base leading-8 text-gray-400 sm:text-lg">
                        A genuine recommendation from someone I’ve had the opportunity to
                        work with.
                    </p>
                </motion.div>

                {/* Testimonial */}
                <motion.div
                    className="mx-auto mt-12 max-w-4xl rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-2xl backdrop-blur-xl sm:p-10 lg:p-12"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Quote Icon */}
                    <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05] text-gray-400">
                        <FaQuoteLeft />
                    </div>

                    {/* Recommendation */}
                    <blockquote className="text-xl leading-9 text-gray-200 sm:text-2xl sm:leading-10">
                        “I really enjoyed working with M Noor e Nazar. He’s a hardworking
                        and dependable person who takes his work seriously and is always
                        willing to learn and improve.”
                    </blockquote>

                    {/* Author */}
                    <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <p className="font-semibold text-white">M Shadab Khan</p>

                            <p className="mt-1 text-sm text-gray-500">
                                Software Engineer · Freelancer
                            </p>

                            <p className="mt-2 text-xs text-gray-600">
                                Professional collaboration
                            </p>
                        </div>

                        <a
                            href="https://www.linkedin.com/in/m-shadab-khan-96b8a2199/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-medium text-gray-300 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                        >
                            <FaLinkedinIn />
                            View on LinkedIn
                            <FaArrowUpRightFromSquare className="text-xs" />
                        </a>
                    </div>

                    {/* LinkedIn Screenshot */}
                    <motion.div
                        className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-black/20"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="border-b border-white/10 px-5 py-4">
                            <p className="text-sm font-medium text-gray-300">
                                LinkedIn Recommendation
                            </p>

                            <p className="mt-1 text-xs text-gray-600">
                                Original recommendation
                            </p>
                        </div>

                        <img
                            src={linkedinRecommendation}
                            alt="LinkedIn recommendation from M Shadab Khan for M Noor e Nazar"
                            className="mx-auto h-auto max-h-[700px] w-full rounded-lg object-contain"
                            loading="lazy"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;