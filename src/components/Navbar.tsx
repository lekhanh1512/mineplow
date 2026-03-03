import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

const navItems = [
  { label: "Trang chủ", href: "#hero" },
  { label: "Tính năng", href: "#features" },
  { label: "Phiên bản", href: "#versions" },
  { label: "Hướng dẫn", href: "#guide" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const copyIP = () => {
    navigator.clipboard.writeText("mineplow.vn");
    toast.success("Đã copy IP: mineplow.vn");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/60 border-b border-white/5 shadow-[0_0_20px_rgba(34,197,94,0.15)]">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="/favicon.ico"
            alt="Mineplow Logo"
            className="w-12 drop-shadow-[0_0_15px_rgba(34,197,94,0.7)] hover:scale-110 transition duration-300"
          />
          <a
            href="#hero"
            className="text-xl font-extrabold tracking-[0.3em] text-primary"
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
              className="relative text-sm font-medium text-gray-300 hover:text-primary transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}

          <button
            onClick={copyIP}
            className="rounded-lg bg-primary px-5 py-2 text-sm font-bold text-black hover:scale-105 hover:shadow-[0_0_25px_rgba(34,197,94,0.7)] transition-all duration-300"
          >
            Chơi ngay
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
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
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-screen w-72 backdrop-blur-xl bg-black/90 border-l border-white/5 flex flex-col pt-20 px-6 gap-6 md:hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg text-gray-300 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;