
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Send,
} from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  subject: "General enquiry",
  message: "",
};

export default function Contact() {
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
              Get in touch
            </p>

            <h1 className="mt-8 max-w-5xl font-display text-5xl leading-[1.12] text-dark-brown md:text-7xl lg:text-8xl">
              Every great conversation
              <span className="text-coffee"> starts somewhere.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-dark-brown/65">
              Have a question, a story idea, a collaboration proposal
              or simply want to say hello? We'd be glad to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact information */}
      <section className="bg-dark-brown px-6 py-20 text-cream md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">
          <div>
            <Mail size={27} strokeWidth={1.3} />
            <h2 className="mt-6 font-display text-2xl">Email</h2>
            <p className="mt-3 text-sm leading-7 text-cream/65">
              For enquiries and collaboration opportunities.
            </p>
            <p className="mt-5 text-sm text-cream/80">
              Add your official podcast email here.
            </p>
          </div>

          <div>
            <MapPin size={27} strokeWidth={1.3} />
            <h2 className="mt-6 font-display text-2xl">Our starting point</h2>
            <p className="mt-3 text-sm leading-7 text-cream/65">
              Based in Juba, South Sudan, with a vision to connect
              stories across Africa and beyond.
            </p>
          </div>

          <div>
            <ArrowUpRight size={27} strokeWidth={1.3} />
            <h2 className="mt-6 font-display text-2xl">Connect online</h2>
            <p className="mt-3 text-sm leading-7 text-cream/65">
              Follow the podcast and join our growing community.
            </p>
            <p className="mt-5 text-sm text-cream/80">
              Official social media links will appear here.
            </p>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-coffee">
              Send a message
            </p>

            <h2 className="mt-6 font-display text-4xl leading-tight text-dark-brown md:text-5xl">
              Let's start a conversation.
            </h2>

            <p className="mt-7 text-base leading-8 text-dark-brown/65">
              Whether you are interested in appearing on the podcast,
              partnering with us, suggesting a topic or asking a question,
              use the form to reach out.
            </p>
          </div>

          <div>
            {submitted ? (
              <div className="border border-coffee/20 p-8 md:p-12">
                <h3 className="font-display text-3xl text-dark-brown">
                  Message preview completed.
                </h3>

                <p className="mt-5 text-sm leading-7 text-dark-brown/65">
                  Your message has not been sent or stored. We will connect
                  a submission service before the website goes live.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setForm(initialForm);
                    setSubmitted(false);
                  }}
                  className="mt-8 text-sm font-semibold text-coffee underline underline-offset-4"
                >
                  Write another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid gap-7 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-dark-brown">
                      Your name *
                    </label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full name"
                      className="mt-3 w-full border-b border-dark-brown/25 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-dark-brown/35 focus:border-coffee"
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
                      className="mt-3 w-full border-b border-dark-brown/25 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-dark-brown/35 focus:border-coffee"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-dark-brown">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="mt-3 w-full border-b border-dark-brown/25 bg-transparent px-0 py-3 text-sm outline-none focus:border-coffee"
                  >
                    <option>General enquiry</option>
                    <option>Guest application</option>
                    <option>Partnership and sponsorship</option>
                    <option>Media and press</option>
                    <option>Topic suggestion</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-dark-brown">
                    Your message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what you have in mind..."
                    className="mt-3 w-full resize-y border-b border-dark-brown/25 bg-transparent px-0 py-3 text-sm leading-7 outline-none placeholder:text-dark-brown/35 focus:border-coffee"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-3 bg-dark-brown px-8 py-4 text-sm font-medium text-cream transition hover:bg-coffee"
                >
                  Send message
                  <Send size={16} />
                </button>

                <p className="text-xs leading-6 text-dark-brown/45">
                  This is a frontend preview. Messages are not transmitted
                  until a submission service is connected.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Social links placeholder */}
        <section className="bg-[#EDE2D0] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-coffee">
            Stay connected
            </p>

            <h2 className="mt-5 font-display text-4xl text-dark-brown md:text-5xl">
            Follow the conversation.
            </h2>

            <p className="mt-5 text-sm leading-7 text-dark-brown/60">
            Our official social media links will be published here.
            Follow Between the Lines as we prepare to launch.
            </p>
        </div>
        </section>
    </main>
  );
}
