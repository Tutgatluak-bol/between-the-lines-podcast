
import { motion } from "framer-motion";
import { ArrowUpRight, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { topics } from "../data/topics";

export default function Topics() {
  return (
    <main className="bg-cream">
      <section className="px-6 pb-20 pt-24 md:px-10 md:pb-28 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-coffee">
              What we explore
            </p>

            <h1 className="mt-6 max-w-4xl font-display text-5xl leading-tight text-dark-brown md:text-7xl">
              Ideas that move conversations.
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-dark-brown/65 md:text-lg">
              Between the Lines explores the experiences, ideas and
              perspectives behind technology, business, careers,
              creativity and everyday life.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-dark-brown/10 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our conversation themes"
            title="Different subjects. Real stories."
            description="These themes guide our conversations without limiting where a meaningful story can take us."
          />

          <div className="mt-16">
            {topics.map((topic, index) => (
              <motion.article
                key={topic.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="grid gap-5 border-t border-dark-brown/15 py-9 md:grid-cols-[100px_1fr_1fr] md:items-center md:gap-10"
              >
                <span className="text-sm text-coffee">
                  0{index + 1}
                </span>

                <h2 className="font-display text-2xl text-dark-brown md:text-3xl">
                  {topic.title}
                </h2>

                <p className="text-sm leading-7 text-dark-brown/65">
                  {topic.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-dark-brown px-6 py-24 text-cream md:px-10">
        <div className="mx-auto max-w-7xl">
          <Lightbulb size={30} strokeWidth={1.4} />

          <h2 className="mt-8 max-w-3xl font-display text-4xl leading-tight md:text-6xl">
            The best conversations go beyond the obvious.
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-8 text-cream/65">
            Have an idea, experience or perspective worth sharing?
            We would love to hear from you.
          </p>

          <Link
            to="/contact"
            className="mt-9 inline-flex items-center gap-3 border-b border-cream/50 pb-2 text-sm"
          >
            Start a conversation
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
