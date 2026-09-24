import { motion } from "framer-motion";
import Paragraph from "./Paragraph";
import Skill from "./Skill";
import Heading from "./Heading";

const OfferSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-24 text-white">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="layout relative z-10">
        {/* Section heading */}
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
            What I Build With
          </p>

          <Heading
            className="text-4xl md:text-6xl"
            labelText="Technology Behind the Work"
          />

          <Paragraph
            className="mx-auto mt-6 max-w-2xl text-base text-zinc-400 md:text-lg"
            labelText="The tools I use to build responsive interfaces, full-stack applications, and AI-powered product features."
          />
        </motion.div>

        {/* Technology slider */}
        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <Skill />
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;