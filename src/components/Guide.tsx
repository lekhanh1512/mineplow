import { motion } from "framer-motion";
import { Monitor, Smartphone, Copy } from "lucide-react";
import { toast } from "sonner";

const copyIP = () => {
  navigator.clipboard.writeText("mineplow.vn");
  toast.success("Đã copy IP: mineplow.vn");
};

const pcSteps = [
  "Mở Minecraft Java Edition",
  "Chọn Multiplayer",
  "Nhấn Add Server",
  "Nhập IP: mineplow.vn",
  "Nhấn Done và vào chơi!",
];

const peSteps = [
  "Mở Minecraft Bedrock",
  "Chọn Play → Servers",
  "Nhấn Add External Server",
  "Nhập IP: mineplow.vn",
  "Lưu và vào chơi!",
];

const Guide = () => (
  <section id="guide" className="py-20 px-6">
    <div className="mx-auto max-w-7xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12"
      >
        Hướng dẫn <span className="text-primary text-glow">tham gia</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        
        {/* PC - Emerald */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group rounded-2xl bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:cursor-pointer"
        >
          <div className="flex items-center gap-3 mb-6">
            <Monitor size={28} className="text-emerald-500" />
            <h3 className="text-xl font-bold text-emerald-500">
              PC (Java Edition)
            </h3>
          </div>

          <ol className="space-y-3">
            {pcSteps.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-sm font-bold text-emerald-500">
                  {i + 1}
                </span>
                <span className="text-muted-foreground pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </motion.div>

        {/* PE - Amber */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group rounded-2xl bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(251,191,36,0.4)] hover:cursor-pointer"
        >
          <div className="flex items-center gap-3 mb-6">
            <Smartphone size={28} className="text-amber-400" />
            <h3 className="text-xl font-bold text-amber-400">
              Điện thoại (Bedrock)
            </h3>
          </div>

          <ol className="space-y-3">
            {peSteps.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-amber-400/20 text-sm font-bold text-amber-400">
                  {i + 1}
                </span>
                <span className="text-muted-foreground pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </motion.div>
      </div>

      {/* Copy IP */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-10 text-center"
      >
        <button
          onClick={copyIP}
          className="inline-flex items-center gap-2 rounded-xl border border-primary px-6 py-3 font-mono text-lg text-primary hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all duration-300 bg-secondary/50"
        >
          mineplow.vn
          <Copy size={18} />
        </button>
      </motion.div>
    </div>
  </section>
);

export default Guide;