
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Handshake,
  Mic2,
  Megaphone,
  FileText,
  Sparkles,
} from "lucide-react";

const opportunities = [
  {
    number: "01",
    title: "Sponsorship",
    description:
      "Connect your brand with meaningful conversations. Explore opportunities to support episodes, feature your brand and become part of the stories we tell.",
    icon: Mic2,
    link: "/sponsorship",
    linkText: "Explore sponsorship",
  },
  {
    number: "02",
    title: "Partnerships",
    description:
      "Build meaningful relationships with a growing media platform. We welcome collaborations with organizations, institutions, businesses and communities.",
    icon: Handshake,
    link: "/partnerships",
    linkText: "Explore partnerships",
  },
  {
    number: "03",
    title: "Advertise With Us",
    description:
      "Introduce your products, services and ideas to our audience through thoughtful brand placements, promotional content and advertising collaborations.",
    icon: Megaphone,
    link: "/advertise",
    linkText: "Explore advertising",
  },
  {
    number: "04",
    title: "Media Kit",
    description:
      "Learn more about our podcast, its vision, content direction and collaboration opportunities through our media presentation.",
    icon: FileText,
    link: "/media-kit",
    linkText: "Explore media kit",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
};

export default function WorkWithUs() {
  return (
    <main className="overflow-hidden bg-cream">

      {/* Hero Section */}
      <section className="relative px-6 pb-20 pt-8 md:px-10 md:pb-28 md:pt-12">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-coffee" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-coffee">
                Work With Us
              </span>
            </div>

            <h1 className="max-w-2xl font-display text-5xl font-medium leading-[1.12] tracking-tight text-dark-brown sm:text-6xl lg:text-7xl">
              Stories are better when we{" "}
              <span className="italic text-coffee">
                build together.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-dark-brown/70 md:text-lg">
              Between the Lines brings people, ideas and experiences
              into meaningful conversations. We welcome brands,
              organizations and individuals who believe in the power
              of stories and want to create something meaningful
              together.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-5">
              <a
                href="#opportunities"
                className="inline-flex items-center gap-3 bg-dark-brown px-7 py-4 text-sm font-medium text-cream transition duration-300 hover:bg-coffee"
              >
                Explore opportunities
                <ArrowUpRight size={17} />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-dark-brown transition hover:text-coffee"
              >
                Talk to us
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -right-5 -top-5 h-32 w-32 border border-coffee/20 md:-right-8 md:-top-8" />

            <div className="relative overflow-hidden">
              <img
                src="/images/host-studio.webp"
                alt="Between the Lines podcast recording studio"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>

            <div className="absolute -bottom-7 -left-4 max-w-[260px] bg-dark-brown p-6 text-cream md:-left-10 md:p-8">
              <Sparkles size={22} className="mb-4 text-cream/70" />

              <p className="font-display text-xl italic leading-relaxed md:text-2xl">
                Beyond the title. Behind the story.
              </p>

              <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-cream/55">
                Between the Lines Podcast
              </p>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Introduction Section */}
      <section className="border-y border-dark-brown/10 bg-[#F8F0E3] px-6 py-20 md:px-10 md:py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-coffee">
            Meaningful Connections
          </span>

          <h2 className="mt-6 font-display text-4xl font-medium leading-tight text-dark-brown md:text-5xl lg:text-6xl">
            More than conversations.
            <span className="block italic text-coffee">
              Opportunities to connect.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-dark-brown/70 md:text-lg">
            We believe meaningful conversations can open doors,
            share knowledge and bring communities closer. Through
            Between the Lines, we create space for stories that
            inspire, ideas that matter and connections that last.
          </p>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-dark-brown/70">
            Whether you are a company looking to connect with an
            audience, an organization interested in collaboration
            or a brand with a story to tell, there is room for us
            to explore something together.
          </p>
        </motion.div>
      </section>

      {/* Opportunities Section */}
      <section
        id="opportunities"
        className="px-6 py-24 md:px-10 md:py-32"
      >
        <div className="mx-auto max-w-7xl">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="mb-16 max-w-2xl"
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-coffee" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-coffee">
                Explore Opportunities
              </span>
            </div>

            <h2 className="font-display text-4xl font-medium leading-tight text-dark-brown md:text-5xl">
              Find the right way to{" "}
              <span className="italic text-coffee">work together.</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-dark-brown/65">
              Explore the different ways to connect with Between
              the Lines and discover opportunities that align
              with your organization's goals.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">
            {opportunities.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={fadeUp}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.1,
                  }}
                  className="group flex flex-col border border-dark-brown/10 bg-[#F8F0E3] p-8 transition duration-300 hover:border-coffee/40 hover:bg-white/50 md:p-10"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-lg italic text-coffee">
                      {item.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center border border-coffee/20 text-coffee transition duration-300 group-hover:bg-dark-brown group-hover:text-cream">
                      <Icon size={21} strokeWidth={1.5} />
                    </div>
                  </div>

                  <h3 className="mt-9 font-display text-3xl font-medium text-dark-brown md:text-4xl">
                    {item.title}
                  </h3>

                  <p className="mt-5 flex-1 text-sm leading-7 text-dark-brown/65 md:text-base">
                    {item.description}
                  </p>

                  <Link
                    to={item.link}
                    className="mt-9 inline-flex w-fit items-center gap-3 border-b border-coffee/30 pb-2 text-sm font-semibold text-dark-brown transition duration-300 hover:gap-5 hover:border-coffee hover:text-coffee"
                  >
                    {item.linkText}
                    <ArrowUpRight size={17} />
                  </Link>
                </motion.article>
              );
            })}
          </div>

        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-dark-brown px-6 py-24 text-cream md:px-10 md:py-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-cream/55">
            Let's Start a Conversation
          </span>

          <h2 className="mt-7 font-display text-4xl font-medium leading-tight md:text-6xl">
            Have an idea?
            <span className="block italic text-cream/65">
              Let's bring it to life.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-cream/65">
            Every meaningful collaboration starts with a conversation.
            Tell us what you have in mind and let's explore the
            possibilities together.
          </p>

          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 bg-cream px-8 py-4 text-sm font-semibold text-dark-brown transition duration-300 hover:bg-coffee hover:text-cream"
          >
            Get in touch
            <ArrowUpRight size={18} />
          </Link>
        </motion.div>
      </section>

    </main>
  );
}
