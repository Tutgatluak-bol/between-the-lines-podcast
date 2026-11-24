
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { navigation } from "../data/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyles = ({ isActive }) =>
    `text-sm transition-colors duration-200 ${
      isActive
        ? "font-semibold text-coffee"
        : "text-dark-brown/75 hover:text-coffee"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-dark-brown/10 bg-cream">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex shrink-0 items-center"
        >
          <img
            src="/logo/between-the-lines-logo.png"
            alt="Between the Lines"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={linkStyles}
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link
          to="/be-a-guest"
          className="hidden items-center gap-2 rounded-sm bg-dark-brown px-5 py-3 text-sm font-medium text-cream transition hover:bg-coffee lg:flex"
        >
          Be a Guest
          <ArrowUpRight size={16} />
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center justify-center text-dark-brown lg:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-dark-brown/10 bg-cream lg:hidden"
          >
            <div className="flex flex-col px-6 py-5">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `border-b border-dark-brown/10 py-4 text-sm ${
                      isActive
                        ? "font-semibold text-coffee"
                        : "text-dark-brown/80"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

              <Link
                to="/be-a-guest"
                onClick={() => setMenuOpen(false)}
                className="mt-5 flex items-center justify-center gap-2 rounded-sm bg-dark-brown px-5 py-4 text-sm font-medium text-cream"
              >
                Be a Guest
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
