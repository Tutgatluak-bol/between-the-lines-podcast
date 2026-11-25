
import { Link } from "react-router-dom";
import { ArrowUpRight, Phone } from "lucide-react";
import { navigation } from "../data/navigation";

export default function Footer() {
  return (
    <footer className="bg-dark-brown px-6 py-16 text-cream md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 border-b border-cream/15 pb-12 md:grid-cols-2 lg:grid-cols-3">

          <div>
            <Link to="/" className="font-display text-3xl font-semibold">
              Between the Lines.
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-cream/65">
              Beyond the title. Behind the story. Conversations exploring
              the people, journeys and ideas shaping technology and business.
            </p>

            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-cream/70">
              One conversation at a time.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em]">
              Explore
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-sm text-cream/65 transition hover:text-cream"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-[0.2em]">
              Start a conversation
            </h3>

            <p className="text-sm leading-7 text-cream/65">
              Have a story, an idea or a collaboration in mind?
              We'd love to hear from you.
            </p>

            <div className="mt-5 flex flex-col items-start gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm text-cream transition hover:text-white"
              >
                Get in touch <ArrowUpRight size={16} />
              </Link>

              <a
                href="tel:+211923482721"
                className="inline-flex items-center gap-2 text-sm text-cream/65 transition hover:text-cream"
              >
                <Phone size={16} />
                +211 923 482 721
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=61596471797746"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-cream/65 transition hover:text-cream"
              >
                Facebook
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-5 pt-8 text-xs text-cream/50 md:flex-row">
          <p>
            © {new Date().getFullYear()} Between the Lines. All rights reserved.
          </p>

          <p>
            Starting in Juba, South Sudan. Connecting stories beyond borders.
          </p>
        </div>
      </div>
    </footer>
  );
}
