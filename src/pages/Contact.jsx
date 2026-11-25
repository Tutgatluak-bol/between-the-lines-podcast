
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  LoaderCircle,
} from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  subject: "General enquiry",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setStatus("loading");
    setFeedback("");

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus("error");
      setFeedback(
        "The contact form is not configured yet. Please try again later."
      );
      return;
    }

    const payload = {
      access_key: accessKey,
      name: form.name,
      email: form.email,
      subject: `Between the Lines | ${form.subject}`,
      message: form.message,
      from_name: "Between the Lines Website",
      replyto: form.email,
      botcheck: "",
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFeedback(
          "Thank you for reaching out. Your message has been received. We'll be in touch soon."
        );
        setForm(initialForm);
      } else {
        throw new Error(
          result.message || "Your message could not be sent."
        );
      }
    } catch (error) {
      setStatus("error");
      setFeedback(
        error.message || "Something went wrong. Please try again."
      );
    }
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
              For enquiries, story ideas and collaboration opportunities.
            </p>

            <p className="mt-5 text-sm text-cream/80">
              hello@betweenthelinesafrica.com
            </p>
            <p className="mt-2 text-xs text-cream/45">
              Email forwarding setup is in progress.
            </p>
          </div>

          <div>
            <MapPin size={27} strokeWidth={1.3} />

            <h2 className="mt-6 font-display text-2xl">
              Our starting point
            </h2>

            <p className="mt-3 text-sm leading-7 text-cream/65">
              Based in Juba, South Sudan, with a vision to connect
              stories across Africa and beyond.
            </p>
          </div>

          <div>
            <ArrowUpRight size={27} strokeWidth={1.3} />

            <h2 className="mt-6 font-display text-2xl">
              Connect online
            </h2>

            <p className="mt-3 text-sm leading-7 text-cream/65">
              Follow the podcast and join our growing community.
            </p>

            <p className="mt-5 text-sm text-cream/80">
              Follow Between the Lines on our official social platforms.
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
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-coffee/20 p-8 md:p-12"
                aria-live="polite"
              >
                <CheckCircle2
                  size={32}
                  className="text-coffee"
                  strokeWidth={1.5}
                />

                <h3 className="mt-6 font-display text-3xl text-dark-brown">
                  Message received.
                </h3>

                <p className="mt-5 text-sm leading-7 text-dark-brown/65">
                  {feedback}
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setStatus("idle");
                    setFeedback("");
                  }}
                  className="mt-8 text-sm font-semibold text-coffee underline underline-offset-4"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Honeypot spam protection */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  tabIndex="-1"
                  autoComplete="off"
                />

                <div className="grid gap-7 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="text-sm font-medium text-dark-brown"
                    >
                      Your name *
                    </label>

                    <input
                      id="contact-name"
                      required
                      maxLength={100}
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full name"
                      autoComplete="name"
                      className="mt-3 w-full border-b border-dark-brown/25 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-dark-brown/35 focus:border-coffee"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="text-sm font-medium text-dark-brown"
                    >
                      Email address *
                    </label>

                    <input
                      id="contact-email"
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                      maxLength={254}
                      className="mt-3 w-full border-b border-dark-brown/25 bg-transparent px-0 py-3 text-sm outline-none placeholder:text-dark-brown/35 focus:border-coffee"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="text-sm font-medium text-dark-brown"
                  >
                    Subject *
                  </label>

                  <select
                    id="contact-subject"
                    required
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
                  <label
                    htmlFor="contact-message"
                    className="text-sm font-medium text-dark-brown"
                  >
                    Your message *
                  </label>

                  <textarea
                    id="contact-message"
                    required
                    rows={6}
                    maxLength={5000}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us what you have in mind..."
                    className="mt-3 w-full resize-y border-b border-dark-brown/25 bg-transparent px-0 py-3 text-sm leading-7 outline-none placeholder:text-dark-brown/35 focus:border-coffee"
                  />
                </div>

                {/* Submission feedback */}
                {status === "error" && (
                  <div
                    role="alert"
                    className="flex items-start gap-3 text-sm leading-6 text-red-700"
                  >
                    <AlertCircle size={19} className="mt-0.5 shrink-0" />
                    <p>{feedback}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center gap-3 bg-dark-brown px-8 py-4 text-sm font-medium text-cream transition hover:bg-coffee disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading" ? (
                    <>
                      Sending message
                      <LoaderCircle size={17} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      Send message
                      <Send size={16} />
                    </>
                  )}
                </button>

                <p className="text-xs leading-6 text-dark-brown/45">
                  Your message will be submitted securely through our
                  contact form service.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Stay connected */}
      <section className="bg-[#EDE2D0] px-6 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-coffee">
            Stay connected
          </p>

          <h2 className="mt-5 font-display text-4xl text-dark-brown md:text-5xl">
            Follow the conversation.
          </h2>

          <p className="mt-5 text-sm leading-7 text-dark-brown/60">
            Follow Between the Lines as we prepare to bring meaningful
            conversations and untold stories to the forefront.
          </p>
        </div>
      </section>
    </main>
  );
}
