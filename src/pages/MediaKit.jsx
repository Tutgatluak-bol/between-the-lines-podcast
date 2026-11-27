
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Download,
  Mic2,
  Globe2,
  MessageCircle,
  Users,
  Mail,
} from "lucide-react";

const topics = [
  "Technology and innovation",
  "Entrepreneurship and startups",
  "Business and professional growth",
  "Creativity and digital careers",
  "Leadership experiences and personal journeys",
  "Ideas shaping communities and industries",
];

const opportunities = [
  "Sponsorship",
  "Strategic partnerships",
  "Advertising and brand campaigns",
  "Guest appearances",
  "Community collaborations",
];

export default function MediaKit() {
  const handlePrint = () => window.print();

  return (
    <main className="overflow-hidden bg-cream text-dark-brown">
      <section className="px-6 pb-16 pt-16 md:px-10 md:pb-20 md:pt-24 print:pt-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-between gap-5 print:hidden">
            <Link
              to="/work-with-us"
              className="inline-flex items-center gap-2 text-sm text-dark-brown/60 transition hover:text-coffee"
            >
              <ArrowLeft size={16} />
              Work With Us
            </Link>

            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-3 border border-dark-brown/20 px-5 py-3 text-sm font-semibold transition hover:bg-dark-brown hover:text-cream"
            >
              <Download size={17} />
              Print / Save as PDF
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-14 grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center print:mt-8"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-coffee">
                Official media kit
              </p>
              <h1 className="mt-5 font-display text-6xl leading-[1.05] md:text-7xl">
                Between
                <br />
                the Lines.
              </h1>
              <p className="mt-7 font-display text-2xl italic text-coffee">
                Beyond the title. Behind the story.
              </p>
              <p className="mt-7 max-w-xl leading-8 text-dark-brown/70">
                Between the Lines is a conversation-based podcast exploring
                the people, experiences, ideas, and journeys behind technology,
                business, entrepreneurship, and creativity.
              </p>
              <p className="mt-5 text-sm font-semibold uppercase tracking-widest text-dark-brown/55">
                Juba, South Sudan · African perspectives · Global conversations
              </p>
            </div>

            <div>
              <img
                src="/images/host-studio.webp"
                alt="Between the Lines podcast studio"
                className="h-[380px] w-full object-cover md:h-[470px]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-dark-brown/10 bg-dark-brown px-6 py-12 text-cream md:px-10 md:py-16 print:bg-dark-brown print:text-cream">
        <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-3">
          <div>
            <Mic2 size={25} className="mb-5 text-cream/70" />
            <h2 className="font-display text-2xl">The format</h2>
            <p className="mt-3 text-sm leading-7 text-cream/65">
              Thoughtful, conversation-led interviews and discussions.
            </p>
          </div>
          <div>
            <Globe2 size={25} className="mb-5 text-cream/70" />
            <h2 className="font-display text-2xl">Our perspective</h2>
            <p className="mt-3 text-sm leading-7 text-cream/65">
              Rooted in Juba, South Sudan, with an interest in stories and
              ideas from across Africa and beyond.
            </p>
          </div>
          <div>
            <MessageCircle size={25} className="mb-5 text-cream/70" />
            <h2 className="font-display text-2xl">Our purpose</h2>
            <p className="mt-3 text-sm leading-7 text-cream/65">
              Connecting emerging talent with experienced voices through
              knowledge-sharing conversations.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-coffee">
              About the podcast
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              The stories behind the titles.
            </h2>
            <p className="mt-6 leading-8 text-dark-brown/70">
              Every professional journey has a story beyond a job title.
              Between the Lines creates space for founders, professionals,
              creators, and emerging voices to share the experiences, lessons,
              challenges, and ideas that shape their work.
            </p>
            <p className="mt-5 leading-8 text-dark-brown/70">
              Our goal is to make useful knowledge and real experiences
              accessible through honest, engaging conversations.
            </p>
          </div>

          <div className="border border-dark-brown/15 p-7 md:p-9">
            <Users size={25} className="text-coffee" />
            <h3 className="mt-6 font-display text-3xl">Who we speak with</h3>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-dark-brown/70">
              {[
                "Technology professionals and developers",
                "Founders and entrepreneurs",
                "Business and industry professionals",
                "Designers and creative professionals",
                "Data and innovation practitioners",
                "People with meaningful professional journeys",
              ].map((person) => (
                <li
                  key={person}
                  className="border-b border-dark-brown/10 pb-3"
                >
                  {person}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-dark-brown/10 px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-coffee">
              Editorial direction
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Conversations we explore
            </h2>
            <p className="mt-5 leading-8 text-dark-brown/65">
              Our topics reflect the people, industries, and ideas that
              influence how we work, build, learn, and create.
            </p>
          </div>

          <ul className="space-y-4">
            {topics.map((topic) => (
              <li
                key={topic}
                className="border-b border-dark-brown/10 pb-4 text-base text-dark-brown/80"
              >
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-coffee">
              Work with us
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Opportunities for collaboration
            </h2>
            <p className="mt-5 leading-8 text-dark-brown/65">
              We welcome organizations and individuals interested in
              supporting conversations and sharing meaningful stories.
            </p>
          </div>

          <div className="space-y-5">
            {opportunities.map((opportunity) => (
              <div
                key={opportunity}
                className="flex items-center justify-between gap-4 border-b border-dark-brown/10 pb-4"
              >
                <span className="text-base text-dark-brown/80">
                  {opportunity}
                </span>
                <ArrowUpRight size={17} className="shrink-0 text-coffee" />
              </div>
            ))}
            <Link
              to="/work-with-us"
              className="inline-flex items-center gap-2 pt-3 text-sm font-semibold text-coffee transition hover:text-dark-brown print:hidden"
            >
              Explore all opportunities
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-dark-brown px-6 py-16 text-cream md:px-10 md:py-20 print:bg-dark-brown print:text-cream">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-cream/50">
              Get in touch
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Let's start a conversation.
            </h2>
            <p className="mt-5 text-cream/65">
              For sponsorship, partnerships, advertising, and media enquiries.
            </p>
          </div>

          <a
            href="mailto:hello@betweenthelinesafrica.com"
            className="inline-flex items-center gap-3 self-start bg-cream px-6 py-4 text-sm font-semibold text-dark-brown transition hover:bg-cream/85 md:self-auto print:hidden"
          >
            <Mail size={17} />
            hello@betweenthelinesafrica.com
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="mx-auto mt-12 max-w-7xl border-t border-cream/20 pt-6 text-xs uppercase tracking-widest text-cream/45">
          Between the Lines · Beyond the title. Behind the story.
        </div>
      </section>

      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 14mm;
          }

          body {
            background: #FDF6E9 !important;
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }

          nav,
          footer {
            display: none !important;
          }

          section {
            break-inside: avoid;
          }

          .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>
    </main>
  );
}
