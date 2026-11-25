
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mic2,
  MessageCircle,
  Lightbulb,
  CheckCircle2,
  AlertCircle,
  LoaderCircle,
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
        "The guest application form is not configured yet. Please try again later."
      );
      return;
    }

    const payload = {
      access_key: accessKey,
      subject: `Between the Lines | New Guest Application – ${form.fullName}`,
      from_name: "Between the Lines Website",
      email: form.email,
      replyto: form.email,

      "Full Name": form.fullName,
      "Email Address": form.email,
      Location: form.location,
      Profession: form.profession,
      Background: form.background,
      "Proposed Discussion Topic": form.topic,
      "Why This Conversation Matters": form.reason,
      "Website or Social Media": form.socialLink || "Not provided",

      botcheck: "",
    };

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFeedback(
          "Thank you for sharing your story with us. Your application has been received. Our team will review your submission and get in touch if there is an opportunity to have you on the podcast."
        );
        setForm(initialForm);
      } else {
        throw new Error(
          result.message || "Your application could not be submitted."
        );
      }
    } catch (error) {
      setStatus("error");
      setFeedback(
        error.message ||
          "Something went wrong. Please try submitting your application again."
      );
    }
  }

  return (
    <main className="bg-cream">
            {/* Hero */}
      <section
        className="relative isolate flex min-h-[75vh] items-center overflow-hidden bg-dark-brown px-6 py-24 md:min-h-[85vh] md:px-10 md:py-32"
        style={{
          backgroundImage:
            "url('/images/between-the-lines-host-and-guest.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 -z-10 bg-dark-brown/65" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-dark-brown/90 via-dark-brown/55 to-dark-brown/20" />

        <div className="mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cream">
              Become a guest
            </p>

            <h1 className="mt-8 font-display text-5xl leading-[1.12] text-cream md:text-7xl lg:text-8xl">
              Your story deserves
              <span className="text-cream/70"> to be heard.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-9 text-cream/80">
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
            {status === "success" ? (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-coffee/20 p-8 md:p-12"
                aria-live="polite"
              >
                <CheckCircle2
                  size={34}
                  className="text-coffee"
                  strokeWidth={1.5}
                />

                <h3 className="mt-6 font-display text-3xl text-dark-brown">
                  Application received.
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
                  Submit another application
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Spam protection */}
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
                      htmlFor="guest-full-name"
                      className="text-sm font-medium text-dark-brown"
                    >
                      Full name *
                    </label>

                    <input
                      id="guest-full-name"
                      required
                      maxLength={100}
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      autoComplete="name"
                      className="mt-3 w-full border-b border-dark-brown/25 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-dark-brown/35 focus:border-coffee"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="guest-email"
                      className="text-sm font-medium text-dark-brown"
                    >
                      Email address *
                    </label>

                    <input
                      id="guest-email"
                      required
                      type="email"
                      maxLength={254}
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                      className="mt-3 w-full border-b border-dark-brown/25 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-dark-brown/35 focus:border-coffee"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="guest-location"
                      className="text-sm font-medium text-dark-brown"
                    >
                      Location *
                    </label>

                    <input
                      id="guest-location"
                      required
                      maxLength={150}
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      placeholder="City and country"
                      autoComplete="country-name"
                      className="mt-3 w-full border-b border-dark-brown/25 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-dark-brown/35 focus:border-coffee"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="guest-profession"
                      className="text-sm font-medium text-dark-brown"
                    >
                      Profession or area of work *
                    </label>

                    <input
                      id="guest-profession"
                      required
                      maxLength={150}
                      name="profession"
                      value={form.profession}
                      onChange={handleChange}
                      placeholder="e.g. Entrepreneur, Developer"
                      className="mt-3 w-full border-b border-dark-brown/25 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-dark-brown/35 focus:border-coffee"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="guest-background"
                    className="text-sm font-medium text-dark-brown"
                  >
                    Tell us about yourself *
                  </label>

                  <textarea
                    id="guest-background"
                    required
                    maxLength={3000}
                    rows={4}
                    name="background"
                    value={form.background}
                    onChange={handleChange}
                    placeholder="Your background, experience and journey..."
                    className="mt-3 w-full resize-y border-b border-dark-brown/25 bg-transparent px-0 py-3 text-sm leading-7 outline-none transition placeholder:text-dark-brown/35 focus:border-coffee"
                  />
                </div>

                <div>
                  <label
                    htmlFor="guest-topic"
                    className="text-sm font-medium text-dark-brown"
                  >
                    What would you like to discuss? *
                  </label>

                  <textarea
                    id="guest-topic"
                    required
                    maxLength={2000}
                    rows={3}
                    name="topic"
                    value={form.topic}
                    onChange={handleChange}
                    placeholder="Tell us about your proposed conversation..."
                    className="mt-3 w-full resize-y border-b border-dark-brown/25 bg-transparent px-0 py-3 text-sm leading-7 outline-none transition placeholder:text-dark-brown/35 focus:border-coffee"
                  />
                </div>

                <div>
                  <label
                    htmlFor="guest-reason"
                    className="text-sm font-medium text-dark-brown"
                  >
                    Why would this conversation matter to our audience? *
                  </label>

                  <textarea
                    id="guest-reason"
                    required
                    maxLength={2000}
                    rows={3}
                    name="reason"
                    value={form.reason}
                    onChange={handleChange}
                    placeholder="What lessons, ideas or perspectives could listeners take away?"
                    className="mt-3 w-full resize-y border-b border-dark-brown/25 bg-transparent px-0 py-3 text-sm leading-7 outline-none transition placeholder:text-dark-brown/35 focus:border-coffee"
                  />
                </div>

                <div>
                  <label
                    htmlFor="guest-social-link"
                    className="text-sm font-medium text-dark-brown"
                  >
                    Website or social media link
                    <span className="ml-2 font-normal text-dark-brown/45">
                      (Optional)
                    </span>
                  </label>

                  <input
                    id="guest-social-link"
                    name="socialLink"
                    type="url"
                    maxLength={500}
                    value={form.socialLink}
                    onChange={handleChange}
                    placeholder="https://..."
                    className="mt-3 w-full border-b border-dark-brown/25 bg-transparent px-0 py-3 text-sm outline-none transition placeholder:text-dark-brown/35 focus:border-coffee"
                  />
                </div>

                {/* Submission feedback */}
                {status === "error" && (
                  <div
                    role="alert"
                    className="flex items-start gap-3 text-sm leading-6 text-red-700"
                  >
                    <AlertCircle
                      size={19}
                      className="mt-0.5 shrink-0"
                    />
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
                      Submitting application
                      <LoaderCircle
                        size={17}
                        className="animate-spin"
                      />
                    </>
                  ) : (
                    <>
                      Submit guest interest
                      <ArrowUpRight size={17} />
                    </>
                  )}
                </button>

                <p className="text-xs leading-6 text-dark-brown/45">
                  Your application will be submitted securely through
                  our application form service. We will only use your
                  information to review your guest application and
                  contact you about it.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
