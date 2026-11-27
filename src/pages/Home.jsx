
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { topics } from "../data/topics";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="overflow-hidden bg-cream px-6 pb-12 pt-6 md:px-10 md:pb-16 md:pt-8 lg:px-12 lg:pb-16 lg:pt-4">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">

          {/* Hero text */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:py-4"
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-coffee">
              An independent conversation-based podcast
            </p>

            <h1 className="font-display text-4xl leading-[1.05] font-medium text-dark-brown sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4.25rem]">
              Beyond the title.
              <br />
              <span className="italic text-coffee">
                Behind the story.
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-7 text-dark-brown/70 md:text-lg md:leading-8">
              Every person has a story beyond their professional title.
              We explore the journeys, experiences and ideas behind
              people shaping technology, business and the world around us.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                to="/episodes"
                className="inline-flex items-center gap-3 bg-dark-brown px-6 py-3.5 text-sm font-medium text-cream transition hover:bg-coffee"
              >
                Explore Conversations
                <ArrowUpRight size={17} />
              </Link>

              <Link
                to="/work-with-us"
                className="inline-flex items-center gap-2 border border-dark-brown/30 px-6 py-3.5 text-sm font-semibold text-dark-brown transition hover:border-coffee hover:bg-coffee hover:text-cream"
              >
                Partner With Us
                <ArrowUpRight size={17} />
              </Link>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-12 bg-coffee/50" />
              <p className="text-xs uppercase tracking-[0.2em] text-coffee">
                Starting in Juba, South Sudan
              </p>
            </div>
          </motion.div>

          {/* Host photograph */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative w-full pt-0 lg:pt-2"
          >
            <img
              src="/images/host-studio.webp"
              alt="Between the Lines podcast host in the recording studio"
              className="block aspect-[4/3] w-full object-cover object-center shadow-xl"
            />

            <div className="mt-4 flex items-center justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.2em] text-coffee">
                Behind every story, a conversation.
              </p>
              <span className="h-px flex-1 bg-coffee/30" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="bg-dark-brown px-6 py-24 text-cream md:px-12">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cream/60">
              The idea behind the conversations
            </p>

            <h2 className="mt-7 font-display text-4xl leading-tight md:text-6xl">
              There is always more to the story.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-cream/70">
              A job title tells us what someone does. It rarely tells us
              how they started, what they overcame, what they learned or
              what keeps them moving forward.
            </p>

            <p className="mt-6 text-base leading-8 text-cream/70">
              Between the Lines creates space for those conversations,
              bringing the human experiences behind professional journeys
              into focus.
            </p>

            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cream hover:text-white"
            >
              More about us <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Topics introduction */}
      <section className="bg-cream px-6 py-24 md:px-12">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-coffee">
            Conversations that matter
          </p>

          <h2 className="mt-6 max-w-3xl font-display text-4xl leading-tight text-dark-brown md:text-6xl">
            People, ideas and experiences worth exploring.
          </h2>

          <div className="mt-12 flex flex-wrap gap-3">
            {topics.map((topic) => (
              <span
                key={topic.title}
                className="border border-dark-brown/20 px-5 py-3 text-sm text-dark-brown"
              >
                {topic.title}
              </span>
            ))}
          </div>

          <Link
            to="/topics"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-coffee hover:text-dark-brown"
          >
            Explore all topics <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>

      {/* Guest invitation */}
      <section className="bg-coffee px-6 py-24 text-cream md:px-12">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cream/70">
            Your story matters
          </p>

          <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl leading-tight md:text-6xl">
            You don't have to be famous to have a story worth telling.
          </h2>

          <p className="mx-auto mt-7 max-w-xl leading-8 text-cream/75">
            If you're building, learning, creating or solving problems,
            we'd love to hear your journey.
          </p>

          <Link
            to="/be-a-guest"
            className="mt-9 inline-flex items-center gap-3 bg-cream px-7 py-4 text-sm font-semibold text-dark-brown transition hover:bg-white"
          >
            Share Your Story <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
