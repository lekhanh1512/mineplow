import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Trang chủ", href: "#hero" },
  { label: "Tính năng", href: "#features" },
  { label: "Phiên bản", href: "#versions" },
  { label: "Hướng dẫn", href: "#guide" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-[110px]">
            <img
              src="/favicon.ico"
              alt="Mineplow Logo"
              className="w-full drop-shadow-[0_0_10px_rgba(0,255,150,0.8)] hover:scale-110 transition-all duration-300"
            />
          </div>
          <a
            href="#hero"
            className="text-2xl font-extrabold tracking-[0.3em] text-primary text-glow"
          >
            MINEPLOW
          </a>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#cta"
            className="rounded-lg bg-primary px-5 py-2 text-sm font-bold text-primary-foreground hover:scale-105 transition-transform duration-300 box-glow"
          >
            Chơi ngay
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 h-screen w-64 glass border-l border-border z-50 flex flex-col pt-20 px-6 gap-6 md:hidden"
          >
            <button
              className="absolute top-5 right-5 text-foreground"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="rounded-lg bg-primary px-5 py-3 text-center font-bold text-primary-foreground box-glow"
            >
              Chơi ngay
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
