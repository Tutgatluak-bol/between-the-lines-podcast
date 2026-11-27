
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Megaphone,
  Mic2,
  Share2,
  Package,
  Check,
  Mail,
} from "lucide-react";

const formats = [
  {
    icon: Mic2,
    title: "Sponsored episodes",
    description:
      "Support a full episode or selected conversation, with your brand acknowledged as part of the experience.",
    details: [
      "Sponsor acknowledgement",
      "Relevant brand integration",
      "Episode description recognition",
    ],
  },
  {
    icon: Megaphone,
    title: "Brand mentions",
    description:
      "Introduce your organization, service, or campaign through selected podcast mentions.",
    details: [
      "Host-read brand mentions",
      "Campaign or service introduction",
      "Relevant episode placement",
    ],
  },
  {
    icon: Package,
    title: "Product placement",
    description:
      "Feature a relevant product or service within podcast content and promotional material.",
    details: [
      "Product or service visibility",
      "Contextual integration",
      "Selected promotional recognition",
    ],
  },
  {
    icon: Share2,
    title: "Promotional campaigns",
    description:
      "Collaborate on coordinated promotional content across suitable podcast communication channels.",
    details: [
      "Campaign-focused content",
      "Social media promotion",
      "Coordinated campaign messaging",
    ],
  },
];

export default function Advertise() {
  return (
    <main className="overflow-hidden bg-cream text-dark-brown">
      <section className="px-6 pb-20 pt-16 md:px-10 md:pb-28 md:pt-24">
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

            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-coffee">
              Advertise with us
            </p>
            <h1 className="mt-5 font-display text-5xl leading-[1.12] md:text-6xl">
              Give your brand a place in the <em>conversation.</em>
            </h1>
            <p className="mt-7 max-w-xl leading-8 text-dark-brown/70">
              Connect your brand with conversations around technology,
              entrepreneurship, business, creativity, and the people shaping
              the future.
            </p>
            <a
              href="mailto:hello@betweenthelinesafrica.com?subject=Advertising%20Enquiry"
              className="mt-9 inline-flex items-center gap-3 bg-dark-brown px-6 py-4 text-sm font-semibold text-cream transition hover:bg-coffee"
            >
              Discuss an advertising opportunity
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
              src="/images/about-microphone.webp"
              alt="Microphone prepared for a podcast recording"
              className="h-[420px] w-full object-cover md:h-[540px]"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-dark-brown px-6 py-16 text-cream md:px-10 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <h2 className="font-display text-4xl md:text-5xl">
              Advertising that belongs in the story.
            </h2>
            <p className="leading-8 text-cream/70">
              We want advertising to feel relevant, thoughtful, and aligned
              with the conversations we create. We consider each opportunity
              carefully so that brand messages fit naturally into the podcast.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-coffee">
              Advertising formats
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Ways to feature your brand
            </h2>
            <p className="mt-5 leading-8 text-dark-brown/65">
              Choose an approach that fits your communication goals. Specific
              placements and deliverables can be discussed with our team.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {formats.map((format, index) => {
              const Icon = format.icon;

              return (
                <motion.article
                  key={format.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="border border-dark-brown/15 p-7 md:p-9"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center bg-dark-brown text-cream">
                      <Icon size={22} />
                    </div>
                    <span className="font-display text-3xl text-dark-brown/20">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-7 font-display text-2xl">
                    {format.title}
                  </h3>
                  <p className="mt-4 leading-7 text-dark-brown/65">
                    {format.description}
                  </p>

                  <ul className="mt-7 space-y-3">
                    {format.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-center gap-3 text-sm text-dark-brown/75"
                      >
                        <Check size={16} className="shrink-0 text-coffee" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-dark-brown/10 px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-coffee">
              Our approach
            </p>
            <h2 className="mt-4 font-display text-4xl">
              Relevance comes first.
            </h2>
          </div>
          <p className="leading-8 text-dark-brown/70">
            We review advertising proposals based on their relevance to our
            content, audience interests, and editorial direction. Advertising
            arrangements are discussed individually, and sponsored content is
            identified appropriately.
          </p>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl bg-dark-brown px-8 py-14 text-center text-cream md:px-16 md:py-20">
          <p className="text-xs uppercase tracking-[0.25em] text-cream/50">
            Advertise with us
          </p>
          <h2 className="mx-auto mt-5 max-w-2xl font-display text-4xl md:text-5xl">
            Tell us about your campaign.
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-8 text-cream/70">
            Share your brand, objectives, and the kind of visibility you are
            looking for. We can explore a suitable approach together.
          </p>
          <a
            href="mailto:hello@betweenthelinesafrica.com?subject=Advertising%20Enquiry"
            className="mt-8 inline-flex items-center gap-3 bg-cream px-6 py-4 text-sm font-semibold text-dark-brown transition hover:bg-cream/85"
          >
            <Mail size={17} />
            Send an enquiry
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}
