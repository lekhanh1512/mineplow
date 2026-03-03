import { motion } from "framer-motion";
import { ArrowDown, Copy } from "lucide-react";
import { toast } from "sonner";

const Hero = () => {
  const copyIP = () => {
    navigator.clipboard.writeText("mineplow.vn");
    toast.success("Đã copy IP: mineplow.vn");
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: "url('/hero.png')",
  }}
/>
      {/* Black Gradient Overlay (Top → Down) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
      {/* Optional Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/20 blur-[140px]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-auto mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-[0.2em] text-primary text-glow mb-4"
        >
          MINEPLOW IN VIETNAM
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8"
        >
          Cày ít sống dai, cày hoài lên top! Cùng nhau cày, cùng nhau vui.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-10"
        >
          <button
            onClick={copyIP}
            className="inline-flex items-center gap-2 rounded-xl neon-border px-6 py-3 font-mono text-lg md:text-xl text-primary hover:box-glow transition-all duration-300 bg-black/40 backdrop-blur-sm"
          >
            mineplow.vn
            <Copy size={18} />
          </button>
          <p className="text-md text-gray-400 mt-2">Nhấn để copy IP</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={copyIP}
            className="rounded-xl bg-primary px-8 py-3 font-bold text-primary-foreground hover:scale-105 transition-transform duration-300 box-glow text-lg md:text-xl"
          >
            Chơi ngay
          </button>
          <a
            href="#about"
            className="rounded-xl border border-primary px-8 py-3 font-bold text-primary hover:bg-primary/10 transition-all duration-300 text-lg md:text-xl"
          >
            Xem thông tin
          </a>
        </motion.div>
      </div>
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors"
      >
        <ArrowDown className="w-6 h-6 animate-bounce" />
      </motion.a>
    </section>
  );
};

export default Hero;
