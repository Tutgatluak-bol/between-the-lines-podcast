
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, PenLine } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  "Technology",
  "Business",
  "Entrepreneurship",
  "Sales",
  "Creativity and Brand",
  "Personal Growth",
];

export default function Blog() {
  return (
    <main className="bg-cream">
      {/* Hero */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-coffee">
              The journal
            </p>

            <h1 className="mt-8 max-w-5xl font-display text-5xl leading-[1.12] text-dark-brown md:text-7xl lg:text-8xl">
              Thoughts beyond
              <span className="text-coffee"> the conversation.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-dark-brown/65">
              Ideas, reflections and perspectives on technology,
              business, creativity, entrepreneurship and the experiences
              that shape our world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Editorial statement */}
      <section className="bg-dark-brown px-6 py-20 text-cream md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <BookOpen size={32} strokeWidth={1.3} />

            <h2 className="mt-7 font-display text-4xl leading-tight md:text-5xl">
              Some conversations continue long after they end.
            </h2>
          </div>

          <p className="text-base leading-8 text-cream/65">
            The journal will extend the conversations beyond the microphone.
            Through articles and reflections, we will explore important
            ideas in greater depth and share lessons worth revisiting.
          </p>
        </div>
      </section>

      {/* Coming soon */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-coffee">
            From the journal
          </p>

          <div className="mt-10 border-y border-dark-brown/15 py-20 text-center md:py-28">
            <PenLine
              size={34}
              strokeWidth={1.2}
              className="mx-auto text-coffee"
            />

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-coffee">
              Coming soon
            </p>

            <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl leading-tight text-dark-brown md:text-5xl">
              New perspectives are being written.
            </h2>

            <p className="mx-auto mt-6 max-w-lg text-sm leading-8 text-dark-brown/60">
              Our journal is taking shape. Soon, you'll find thoughtful
              articles, practical insights and stories that go deeper
              into the subjects we explore.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial themes */}
      <section className="bg-[#EDE2D0] px-6 py-24 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-coffee">
              What to expect
            </p>

            <h2 className="mt-6 font-display text-4xl leading-tight text-dark-brown md:text-5xl">
              Ideas across different fields.
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-8 text-dark-brown/65">
              From practical lessons to fresh perspectives, the journal
              will cover subjects that matter to people building,
              learning and creating.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <span
                key={category}
                className="border border-dark-brown/20 px-5 py-3 text-sm text-dark-brown/75"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="px-6 py-24 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="max-w-3xl font-display text-4xl leading-tight text-dark-brown md:text-6xl">
            Keep exploring. Keep questioning. Keep learning.
          </h2>

          <Link
            to="/episodes"
            className="mt-9 inline-flex items-center gap-3 bg-dark-brown px-7 py-4 text-sm font-medium text-cream transition hover:bg-coffee"
          >
            Explore conversations
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
