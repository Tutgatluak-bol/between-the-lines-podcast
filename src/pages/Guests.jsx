
import { motion } from "framer-motion";
import { ArrowUpRight, Users, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const guestTypes = [
  {
    number: "01",
    title: "Entrepreneurs",
    description:
      "People turning ideas into businesses, creating opportunities and learning through experience.",
  },
  {
    number: "02",
    title: "Technology professionals",
    description:
      "Developers, digital innovators and problem-solvers shaping how we live and work.",
  },
  {
    number: "03",
    title: "Business leaders",
    description:
      "People leading teams, building organisations and navigating important decisions.",
  },
  {
    number: "04",
    title: "Educators and researchers",
    description:
      "People sharing knowledge, challenging ideas and contributing to their communities.",
  },
  {
    number: "05",
    title: "Creators and storytellers",
    description:
      "Individuals using creativity, communication and original thinking to make an impact.",
  },
  {
    number: "06",
    title: "Everyday changemakers",
    description:
      "People with experiences, lessons and perspectives that others can learn from.",
  },
];

export default function Guests() {
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
              The people behind the stories
            </p>

            <h1 className="mt-8 max-w-5xl font-display text-5xl leading-[1.12] text-dark-brown md:text-7xl lg:text-8xl">
              Every person
              <span className="text-coffee"> has a story.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-dark-brown/65">
              We bring people from different backgrounds and professions
              together to share the experiences, decisions and lessons
              that have shaped their journeys.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Guest philosophy */}
      <section className="bg-dark-brown px-6 py-24 text-cream md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-24">
          <div>
            <Users size={32} strokeWidth={1.3} className="text-cream/70" />

            <h2 className="mt-8 font-display text-4xl leading-tight md:text-6xl">
              Beyond positions. Beyond recognition.
            </h2>
          </div>

          <div className="space-y-7 text-base leading-8 text-cream/70">
            <p>
              We don't believe a meaningful story needs a famous name,
              an impressive title or a large following.
            </p>

            <p>
              What matters is the experience, the thinking, the challenges
              overcome and the lessons that can help someone else.
            </p>

            <p>
              Whether you are building a company, developing a skill,
              solving a community problem or pursuing a personal ambition,
              your journey may offer something worth sharing.
            </p>
          </div>
        </div>
      </section>

      {/* Who we welcome */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-coffee">
            Who we welcome
          </p>

          <h2 className="mt-6 max-w-3xl font-display text-4xl leading-tight text-dark-brown md:text-6xl">
            Different journeys. Different perspectives.
          </h2>

          <div className="mt-16 grid gap-x-14 gap-y-12 border-t border-dark-brown/15 pt-10 md:grid-cols-2 lg:grid-cols-3">
            {guestTypes.map((guest) => (
              <motion.div
                key={guest.number}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
              >
                <span className="text-xs tracking-[0.2em] text-coffee">
                  {guest.number}
                </span>

                <h3 className="mt-5 font-display text-2xl text-dark-brown">
                  {guest.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-dark-brown/60">
                  {guest.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guest invitation */}
      <section className="bg-[#EDE2D0] px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <MessageCircle
            size={32}
            strokeWidth={1.3}
            className="text-coffee"
          />

          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-coffee">
            Your story matters
          </p>

          <h2 className="mt-6 max-w-4xl font-display text-4xl leading-tight text-dark-brown md:text-6xl">
            You don't have to be famous to have a story worth telling.
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-dark-brown/65">
            If you have an experience, an idea or a journey that could
            inspire, inform or challenge someone's thinking, we'd love
            to hear from you.
          </p>

          <Link
            to="/be-a-guest"
            className="mt-10 inline-flex items-center gap-3 bg-dark-brown px-7 py-4 text-sm font-medium text-cream transition hover:bg-coffee"
          >
            Tell us about yourself
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
