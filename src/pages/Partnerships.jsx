
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Handshake,
  GraduationCap,
  Lightbulb,
  Users,
  Globe2,
  Mail,
} from "lucide-react";

const partners = [
  {
    icon: Lightbulb,
    title: "Startups & innovators",
    description:
      "Share the journeys, lessons, and ideas of founders building solutions and new businesses.",
  },
  {
    icon: GraduationCap,
    title: "Universities & institutions",
    description:
      "Create opportunities for students and young professionals to learn from experienced voices.",
  },
  {
    icon: Globe2,
    title: "NGOs & development organizations",
    description:
      "Bring important conversations about innovation, opportunity, and community impact to a wider audience.",
  },
  {
    icon: Users,
    title: "Communities & networks",
    description:
      "Work together with professional communities, technology groups, and creative networks.",
  },
];

const collaborationIdeas = [
  "Co-hosted conversations and special episodes",
  "Community events, panels, and discussions",
  "Knowledge-sharing and educational initiatives",
  "Joint campaigns and storytelling projects",
  "Guest introductions and professional networking",
];

export default function Partnerships() {
  return (
    <main className="overflow-hidden bg-cream text-dark-brown">
      <section className="px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/work-with-us"
            className="mb-10 inline-flex items-center gap-2 text-sm text-dark-brown/60 transition hover:text-coffee"
          >
            <ArrowLeft size={16} />
            Work With Us
          </Link>

          <div className="grid items-center gap-14 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-coffee">
                Partnerships
              </p>
              <h1 className="mt-5 font-display text-5xl leading-[1.12] md:text-6xl">
                Better conversations. <em>Stronger connections.</em>
              </h1>
              <p className="mt-7 max-w-xl leading-8 text-dark-brown/70">
                We believe meaningful progress happens when people and
                organizations share knowledge, experiences, and opportunities.
                Let's collaborate to create conversations that matter.
              </p>
              <a
                href="mailto:hello@betweenthelinesafrica.com?subject=Partnership%20Enquiry"
                className="mt-9 inline-flex items-center gap-3 bg-dark-brown px-6 py-4 text-sm font-semibold text-cream transition hover:bg-coffee"
              >
                Explore a partnership
                <ArrowUpRight size={17} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              <img
                src="/images/between-the-lines-host-and-guest.webp"
                alt="A host and guest in conversation"
                className="h-[420px] w-full object-cover md:h-[520px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-dark-brown/10 bg-dark-brown px-6 py-16 text-cream md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <h2 className="font-display text-4xl md:text-5xl">
              Collaboration with purpose.
            </h2>
            <p className="leading-8 text-cream/70">
              Between the Lines is interested in working with organizations
              that value learning, creativity, entrepreneurship, technology,
              and the people shaping our communities.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-coffee">
              Who we work with
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Potential partners
            </h2>
            <p className="mt-5 leading-8 text-dark-brown/65">
              We welcome conversations with organizations across different
              sectors and communities.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {partners.map((partner, index) => {
              const Icon = partner.icon;

              return (
                <motion.article
                  key={partner.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="border border-dark-brown/15 p-7 md:p-9"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center bg-dark-brown text-cream">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-display text-2xl">{partner.title}</h3>
                  <p className="mt-4 leading-7 text-dark-brown/65">
                    {partner.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 md:px-10 md:pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 border-t border-dark-brown/15 pt-16 md:grid-cols-2 md:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-coffee">
              Ways to collaborate
            </p>
            <h2 className="mt-4 font-display text-4xl">
              What we can create together
            </h2>
          </div>

          <ul className="space-y-5">
            {collaborationIdeas.map((idea) => (
              <li
                key={idea}
                className="flex items-start gap-4 border-b border-dark-brown/10 pb-5"
              >
                <Handshake size={19} className="mt-1 shrink-0 text-coffee" />
                <span className="leading-7 text-dark-brown/75">{idea}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-dark-brown px-6 py-20 text-center text-cream md:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs uppercase tracking-[0.25em] text-cream/50">
            Let's work together
          </p>
          <h2 className="mt-5 font-display text-4xl md:text-5xl">
            Have an idea for a partnership?
          </h2>
          <p className="mt-5 leading-8 text-cream/70">
            Introduce your organization and tell us what you have in mind. We
            would be glad to explore the possibilities.
          </p>
          <a
            href="mailto:hello@betweenthelinesafrica.com?subject=Partnership%20Enquiry"
            className="mt-8 inline-flex items-center gap-3 bg-cream px-6 py-4 text-sm font-semibold text-dark-brown transition hover:bg-cream/85"
          >
            Contact us
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}
