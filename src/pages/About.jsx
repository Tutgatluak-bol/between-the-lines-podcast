
import { motion } from "framer-motion";
import { ArrowUpRight, Mic2 } from "lucide-react";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { topics } from "../data/topics";

export default function About() {
  return (
    <main className="bg-cream">
      {/* Page introduction */}
      <section
        className="relative isolate flex min-h-[75vh] items-center overflow-hidden bg-dark-brown px-6 py-24 md:min-h-[85vh] md:px-10 md:py-32"
        style={{
          backgroundImage: "url('/images/about-microphone.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 -z-10 bg-dark-brown/35" />

        {/* Gradient for text readability */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-dark-brown/95 via-dark-brown/75 to-dark-brown/10" />

        <div className="mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cream/80">
              About the podcast
            </p>

            <h1 className="mt-8 font-display text-5xl leading-[1.12] text-cream md:text-7xl lg:text-8xl">
              Every story has
              <span className="text-cream/70"> another side.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-cream/80">
              Between the Lines is a conversation platform exploring the
              people, experiences, ideas and lessons behind the stories
              we often hear but rarely take time to understand.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main story */}
      <section className="bg-dark-brown px-6 py-24 text-cream md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cream/50">
              Why we exist
            </p>

            <h2 className="mt-7 font-display text-4xl leading-tight md:text-6xl">
              The story is bigger than the headline.
            </h2>
          </div>

          <div className="space-y-7 text-base leading-8 text-cream/70">
            <p>
              Behind every achievement is a journey. Behind every business
              is an idea. Behind every innovation is someone who dared to
              begin, faced challenges and kept learning.
            </p>

            <p>
              Yet many of these experiences remain untold. We believe
              meaningful conversations can reveal the lessons, decisions,
              setbacks and perspectives that make every journey valuable.
            </p>

            <p>
              That is why Between the Lines exists: to create space for
              honest conversations that go beyond titles, public images
              and surface-level success.
            </p>
          </div>
        </div>
      </section>

      {/* Founder and host */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="/images/host-studio.webp"
              alt="Tut Gatluak Bol, founder and host of Between the Lines"
              className="aspect-[4/5] w-full object-cover object-center shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-coffee">
              The person behind the microphone
            </p>

            <h2 className="mt-7 font-display text-4xl leading-tight text-dark-brown md:text-6xl">
              Meet the Founder.
            </h2>

            <h3 className="mt-5 text-lg font-semibold text-coffee">
              Tut Gatluak Bol
            </h3>

            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.25em] text-dark-brown/50">
              Founder & Host
            </p>

            <p className="mt-7 text-base leading-8 text-dark-brown/70">
              Between the Lines was founded by Tut Gatluak Bol with a
              simple vision: to create a platform where people can share
              the stories, experiences, ideas and lessons that often go
              beyond their public titles.
            </p>

            <p className="mt-6 text-base leading-8 text-dark-brown/70">
              As founder and host, Tut leads conversations that explore
              the human experiences behind professional journeys,
              entrepreneurship, technology, creativity and everyday life.
            </p>

            <p className="mt-6 text-base leading-8 text-dark-brown/70">
              Starting in Juba, South Sudan, the vision is to connect
              authentic African stories and perspectives with wider
              audiences, one conversation at a time.
            </p>

            <div className="mt-9 border-l-2 border-coffee pl-5">
              <p className="font-display text-xl italic text-dark-brown">
                Beyond the title. Behind the story.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What we explore */}
      <section className="bg-[#EDE2D0] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our conversations"
            title="Curiosity without boundaries."
            description="We explore the ideas, people and experiences shaping our communities and the wider world."
          />

          <div className="mt-16">
            {topics.map((topic) => (
              <article
                key={topic.title}
                className="grid gap-4 border-t border-dark-brown/15 py-8 md:grid-cols-[1fr_1.1fr] md:items-center md:gap-12"
              >
                <h3 className="font-display text-2xl text-dark-brown">
                  {topic.title}
                </h3>

                <p className="text-sm leading-7 text-dark-brown/65">
                  {topic.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Our approach */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-coffee">
              Our approach
            </p>

            <h2 className="mt-7 font-display text-4xl leading-tight text-dark-brown md:text-6xl">
              Real people. Honest conversations. Meaningful lessons.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-dark-brown/70">
            <p>
              We are interested in more than job titles and impressive
              biographies. We want to understand the person behind the
              profession and the journey behind the achievement.
            </p>

            <p>
              Our guests can be entrepreneurs, professionals, innovators,
              educators, creators, students or individuals with experiences
              worth sharing.
            </p>

            <p>
              You do not have to be famous to have a story worth telling.
            </p>
          </div>
        </div>
      </section>

      {/* Closing invitation */}
      <section className="bg-dark-brown px-6 py-24 text-cream md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl border-t border-cream/20 pt-12">
          <Mic2 size={32} strokeWidth={1.3} className="text-cream/80" />

          <h2 className="mt-8 max-w-3xl font-display text-4xl leading-tight md:text-6xl">
            There is a story worth hearing in every journey.
          </h2>

          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              to="/be-a-guest"
              className="inline-flex items-center gap-3 bg-cream px-7 py-4 text-sm font-medium text-dark-brown transition hover:bg-white"
            >
              Share your story
              <ArrowUpRight size={17} />
            </Link>

            <Link
              to="/episodes"
              className="inline-flex items-center gap-3 border border-cream/30 px-7 py-4 text-sm font-medium text-cream transition hover:border-cream hover:text-white"
            >
              Explore episodes
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
