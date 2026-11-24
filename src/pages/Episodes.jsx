
import { motion } from "framer-motion";
import { ArrowUpRight, Headphones, Mic2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Episodes() {
  return (
    <main className="bg-cream">
      {/* Introduction */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-coffee">
              The conversations
            </p>

            <h1 className="mt-8 max-w-5xl font-display text-5xl leading-[1.12] text-dark-brown md:text-7xl lg:text-8xl">
              Stories worth
              <span className="text-coffee"> listening to.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-dark-brown/65">
              Every conversation opens a window into someone's experience,
              ideas and perspective. Explore the conversations of Between
              the Lines.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Episode collection */}
      <section className="bg-[#EDE2D0] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 border-b border-dark-brown/15 pb-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-coffee">
                Episode archive
              </p>
              <h2 className="mt-5 font-display text-4xl text-dark-brown md:text-5xl">
                The latest conversations
              </h2>
            </div>

            <p className="max-w-sm text-sm leading-7 text-dark-brown/60">
              A growing collection of conversations about people, ideas,
              experiences and the journeys behind them.
            </p>
          </div>

          {/* Empty state */}
          <div className="flex min-h-[420px] flex-col items-center justify-center py-20 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-coffee/25 text-coffee">
              <Headphones size={32} strokeWidth={1.2} />
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-coffee">
              Coming soon
            </p>

            <h3 className="mt-5 max-w-xl font-display text-3xl leading-tight text-dark-brown md:text-5xl">
              Our first conversations are taking shape.
            </h3>

            <p className="mt-6 max-w-lg text-sm leading-8 text-dark-brown/60">
              We're preparing thoughtful conversations with people whose
              experiences, ideas and journeys deserve to be heard.
              The first episodes will be available here.
            </p>

            <Link
              to="/be-a-guest"
              className="mt-9 inline-flex items-center gap-3 bg-dark-brown px-7 py-4 text-sm font-medium text-cream transition hover:bg-coffee"
            >
              Be part of a conversation
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* Listening platforms */}
      <section className="px-6 py-24 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <Mic2 size={30} strokeWidth={1.3} className="text-coffee" />

            <h2 className="mt-7 font-display text-4xl leading-tight text-dark-brown md:text-5xl">
              Good conversations deserve to travel.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-dark-brown/65">
              Our goal is to make these stories accessible to audiences
              wherever they listen. Details about our listening platforms
              will be shared as episodes are released.
            </p>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-coffee">
              Starting in Juba. Connecting stories beyond borders.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
