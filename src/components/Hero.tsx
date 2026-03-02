import { motion } from "framer-motion";
import { Copy } from "lucide-react";
import { toast } from "sonner";

const Hero = () => {
  const copyIP = () => {
    navigator.clipboard.writeText("mineplow.net");
    toast.success("Đã copy IP: mineplow.net");
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Glow bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative z-10 text-center px-6 max-w-auto mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-6xl sm:text-7xl md:text-8xl font-black tracking-[0.2em] text-primary text-glow mb-4"
        >
          MINEPLOW IN VIETNAM
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted-foreground mb-8"
        >
          Cày là phải chất – Chơi là phải Mineplow
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-10"
        >
          <button
            onClick={copyIP}
            className="inline-flex items-center gap-2 rounded-xl neon-border px-6 py-3 font-mono text-lg text-primary hover:box-glow transition-all duration-300 bg-secondary/50"
          >
            mineplow.vn
            <Copy size={18} />
          </button>
          <p className="text-s text-muted-foreground mt-2">Nhấn để copy IP</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#cta"
            className="rounded-xl bg-primary px-8 py-3 font-bold text-primary-foreground hover:scale-105 transition-transform duration-300 box-glow text-lg"
          >
            Chơi ngay
          </a>
          <a
            href="#about"
            className="rounded-xl neon-border px-8 py-3 font-bold text-primary hover:bg-primary/10 transition-all duration-300 text-lg"
          >
            Xem thông tin
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
