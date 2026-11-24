
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mic2,
  MessageCircle,
  Lightbulb,
} from "lucide-react";

const initialForm = {
  fullName: "",
  email: "",
  location: "",
  profession: "",
  background: "",
  topic: "",
  reason: "",
  socialLink: "",
};

export default function BeGuest() {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Frontend preview only. Connect a submission service before launch.
    setSubmitted(true);
  }

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
              Become a guest
            </p>

            <h1 className="mt-8 max-w-5xl font-display text-5xl leading-[1.12] text-dark-brown md:text-7xl lg:text-8xl">
              Your story deserves
              <span className="text-coffee"> to be heard.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-dark-brown/65">
              Every journey carries lessons. If you have experiences,
              ideas or perspectives worth sharing, we would love to
              hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Invitation */}
      <section className="bg-dark-brown px-6 py-20 text-cream md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
          <div>
            <Mic2 size={28} strokeWidth={1.3} />
            <h2 className="mt-6 font-display text-2xl">
              Meaningful conversations
            </h2>
            <p className="mt-4 text-sm leading-7 text-cream/65">
              We want honest discussions that go beyond headlines and
              professional titles.
            </p>
          </div>

          <div>
            <Lightbulb size={28} strokeWidth={1.3} />
            <h2 className="mt-6 font-display text-2xl">
              Different perspectives
            </h2>
            <p className="mt-4 text-sm leading-7 text-cream/65">
              We welcome people from different industries, backgrounds
              and stages of their journeys.
            </p>
          </div>

          <div>
            <MessageCircle size={28} strokeWidth={1.3} />
            <h2 className="mt-6 font-display text-2xl">
              Your experience matters
            </h2>
            <p className="mt-4 text-sm leading-7 text-cream/65">
              You do not need to be famous. A valuable story begins
              with something worth sharing.
            </p>
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-coffee">
              Guest application
            </p>

            <h2 className="mt-6 font-display text-4xl leading-tight text-dark-brown md:text-5xl">
              Tell us a little about yourself.
            </h2>

            <p className="mt-7 text-base leading-8 text-dark-brown/65">
              Share some information about your background and the
              conversation you would like to have with us.
            </p>

            <div className="mt-10 border-t border-dark-brown/15 pt-7">
              <p className="text-sm font-semibold text-dark-brown">
                What happens next?
              </p>
              <p className="mt-3 text-sm leading-7 text-dark-brown/60">
                We will review your introduction and consider whether
                your proposed conversation fits the podcast's direction.
              </p>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="border border-coffee/20 p-8 md:p-12">
                <h3 className="font-display text-3xl text-dark-brown">
                  Form preview completed.
                </h3>
                <p className="mt-5 text-sm leading-7 text-dark-brown/65">
                  Your details have not been sent or stored. This form
                  is currently a frontend preview. We will connect a
                  submission service before accepting real applications.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setForm(initialForm);
                    setSubmitted(false);
                  }}
                  className="mt-8 text-sm font-semibold text-coffee underline underline-offset-4"
                >
                  Fill in another response
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid gap-7 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-dark-brown">
                      Full name *
                    </label>
                    <input
                      required
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="mt-3 w-full border-b border-dark-brown/25 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-dark-brown/35 focus:border-coffee"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-dark-brown">
                      Email address *
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="mt-3 w-full border-b border-dark-brown/25 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-dark-brown/35 focus:border-coffee"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-dark-brown">
                      Location *
                    </label>
                    <input
                      required
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      placeholder="City and country"
                      className="mt-3 w-full border-b border-dark-brown/25 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-dark-brown/35 focus:border-coffee"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-dark-brown">
                      Profession or area of work *
                    </label>
                    <input
                      required
                      name="profession"
                      value={form.profession}
                      onChange={handleChange}
                      placeholder="e.g. Entrepreneur, Developer"
                      className="mt-3 w-full border-b border-dark-brown/25 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-dark-brown/35 focus:border-coffee"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-dark-brown">
                    Tell us about yourself *
                  </label>
                  <textarea
                    required
                    rows={4}
                    name="background"
                    value={form.background}
                    onChange={handleChange}
                    placeholder="Your background, experience and journey..."
                    className="mt-3 w-full resize-y border-b border-dark-brown/25 bg-transparent px-0 py-3 text-sm leading-7 outline-none transition placeholder:text-dark-brown/35 focus:border-coffee"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-dark-brown">
                    What would you like to discuss? *
                  </label>
                  <textarea
                    required
                    rows={3}
                    name="topic"
                    value={form.topic}
                    onChange={handleChange}
                    placeholder="Tell us about your proposed conversation..."
                    className="mt-3 w-full resize-y border-b border-dark-brown/25 bg-transparent px-0 py-3 text-sm leading-7 outline-none transition placeholder:text-dark-brown/35 focus:border-coffee"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-dark-brown">
                    Why would this conversation matter to our audience? *
                  </label>
                  <textarea
                    required
                    rows={3}
                    name="reason"
                    value={form.reason}
                    onChange={handleChange}
                    placeholder="What lessons, ideas or perspectives could listeners take away?"
                    className="mt-3 w-full resize-y border-b border-dark-brown/25 bg-transparent px-0 py-3 text-sm leading-7 outline-none transition placeholder:text-dark-brown/35 focus:border-coffee"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-dark-brown">
                    Website or social media link
                    <span className="ml-2 font-normal text-dark-brown/45">
                      (Optional)
                    </span>
                  </label>
                  <input
                    name="socialLink"
                    type="url"
                    value={form.socialLink}
                    onChange={handleChange}
                    placeholder="https://..."
                    className="mt-3 w-full border-b border-dark-brown/25 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-dark-brown/35 focus:border-coffee"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-dark-brown px-8 py-4 text-sm font-medium text-cream transition hover:bg-coffee"
                >
                  Submit guest interest
                  <ArrowUpRight size={17} />
                </button>

                <p className="text-xs leading-6 text-dark-brown/45">
                  This is a frontend preview. Your information is not
                  transmitted until a submission service is connected.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
