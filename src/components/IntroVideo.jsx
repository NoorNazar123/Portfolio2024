import { motion } from "framer-motion";

export default function IntroVideo() {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-full max-w-4xl px-4 py-16"
        >
            <div className="mb-6 text-center">
                <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-white/50">
                    Get to know me
                </p>

                <h2 className="text-3xl font-bold text-white sm:text-4xl">
                    40 Seconds About Me
                </h2>

                <p className="mx-auto mt-3 max-w-2xl text-white/60">
                    A quick introduction to who I am, what I build, and where I’m heading.
                </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
                <video
                    src="/noor-e-nazar-dev-intro.mp4"
                    controls
                    playsInline
                    preload="metadata"
                    className="aspect-video w-full object-cover"
                />
            </div>
        </motion.section>
    );
}