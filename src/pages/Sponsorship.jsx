
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Mic2,
  Star,
  Building2,
  Mail,
} from "lucide-react";

const opportunities = [
  {
    level: "Episode Sponsor",
    description:
      "Support an individual episode and connect your brand with a focused conversation.",
    deliverables: [
      "Sponsor acknowledgement during the episode",
      "Brand mention in episode descriptions",
      "Logo placement on selected promotional materials",
      "Social media recognition",
    ],
  },
  {
    level: "Season Partner",
    description:
      "Build a consistent presence across a series of conversations and stories.",
    deliverables: [
      "Recognition across selected episodes",
      "Recurring brand mentions",
      "Visibility across season promotional content",
      "Collaboration on relevant campaign themes",
    ],
  },
  {
    level: "Strategic Sponsor",
    description:
      "Develop a broader relationship with the podcast through a tailored sponsorship collaboration.",
    deliverables: [
      "Custom sponsorship arrangement",
      "Integrated brand storytelling opportunities",
      "Co-branded promotional content",
      "Planning and coordination with our team",
    ],
  },
];

export default function Sponsorship() {
  return (
    <main className="overflow-hidden bg-cream text-dark-brown">
      <section className="relative px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/work-with-us"
              className="mb-10 inline-flex items-center gap-2 text-sm text-dark-brown/60 transition hover:text-coffee"
            >
              <ArrowLeft size={16} />
              Work With Us
            </Link>

            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-coffee">
              Sponsorship opportunities
            </p>

            <h1 className="max-w-2xl font-display text-5xl leading-[1.12] md:text-6xl">
              Support conversations that <em>move ideas forward.</em>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-dark-brown/70">
              Partner with Between the Lines to support meaningful
              conversations with the people building, creating, and shaping
              technology and business.
            </p>

            <a
              href="mailto:hello@betweenthelinesafrica.com?subject=Sponsorship%20Enquiry"
              className="mt-9 inline-flex items-center gap-3 bg-dark-brown px-6 py-4 text-sm font-semibold text-cream transition hover:bg-coffee"
            >
              Discuss sponsorship
              <ArrowUpRight size={17} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src="/images/host-studio.webp"
              alt="Podcast recording studio"
              className="h-[420px] w-full object-cover md:h-[540px]"
            />
            <div className="absolute bottom-5 left-5 bg-cream p-5 md:bottom-8 md:left-8">
              <p className="font-display text-2xl">Between the Lines</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-coffee">
                Beyond the title. Behind the story.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-dark-brown/10 bg-dark-brown px-6 py-16 text-cream md:px-10 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1fr_2fr] md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-cream/50">
              Why sponsor us
            </p>
            <h2 className="mt-4 font-display text-4xl">
              More than a logo placement.
            </h2>
          </div>
          <p className="max-w-3xl text-base leading-8 text-cream/70">
            Sponsorship is an opportunity to associate your organization with
            thoughtful discussions, useful perspectives, and stories from
            people making an impact. We aim to create partnerships that feel
            relevant to our conversations and valuable to our listeners.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-coffee">
              Ways to collaborate
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Sponsorship opportunities
            </h2>
            <p className="mt-5 leading-8 text-dark-brown/65">
              Each opportunity can be discussed and tailored to the goals of
              your organization.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {opportunities.map((item, index) => (
              <motion.article
                key={item.level}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1 }}
                className="flex flex-col border border-dark-brown/15 p-7 md:p-8"
              >
                <div className="mb-7 flex h-12 w-12 items-center justify-center bg-dark-brown text-cream">
                  {index === 0 ? (
                    <Mic2 size={21} />
                  ) : index === 1 ? (
                    <Star size={21} />
                  ) : (
                    <Building2 size={21} />
                  )}
                </div>

                <h3 className="font-display text-2xl">{item.level}</h3>
                <p className="mt-4 min-h-20 text-sm leading-7 text-dark-brown/65">
                  {item.description}
                </p>

                <div className="my-7 border-t border-dark-brown/10" />

                <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-coffee">
                  Potential deliverables
                </p>

                <ul className="space-y-4">
                  {item.deliverables.map((deliverable) => (
                    <li
                      key={deliverable}
                      className="flex items-start gap-3 text-sm leading-6 text-dark-brown/75"
                    >
                      <Check
                        size={17}
                        className="mt-1 shrink-0 text-coffee"
                      />
                      {deliverable}
                    </li>
                  ))}
                </ul>

                <a
                  href={`mailto:hello@betweenthelinesafrica.com?subject=${encodeURIComponent(
                    item.level + " Enquiry"
                  )}`}
                  className="mt-auto flex items-center gap-2 pt-9 text-sm font-semibold text-coffee transition hover:text-dark-brown"
                >
                  Enquire about this option
                  <ArrowUpRight size={16} />
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 md:px-10">
        <div className="mx-auto max-w-7xl bg-dark-brown px-8 py-14 text-center text-cream md:px-16 md:py-20">
          <p className="text-xs uppercase tracking-[0.25em] text-cream/50">
            Start a conversation
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl md:text-5xl">
            Let's create a meaningful partnership.
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-cream/65">
            Tell us about your organization and what you would like to achieve
            through sponsorship.
          </p>
          <a
            href="mailto:hello@betweenthelinesafrica.com?subject=Sponsorship%20Enquiry"
            className="mt-8 inline-flex items-center gap-3 bg-cream px-6 py-4 text-sm font-semibold text-dark-brown transition hover:bg-cream/85"
          >
            <Mail size={17} />
            Contact our team
            <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </main>
  );
}
