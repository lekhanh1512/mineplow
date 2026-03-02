import { motion } from "framer-motion";
import { Monitor, Smartphone } from "lucide-react";

const versions = [
  {
    icon: Monitor,
    title: "Java Edition",
    subtitle: "PC",
    range: "1.12.x - 1.22.x",
  },
  {
    icon: Smartphone,
    title: "Bedrock Edition",
    subtitle: "Điện thoại",
    range: "1.21.50 - 1.21.70",
  },
];

const Versions = () => (
  <section id="versions" className="py-20 px-6">
    <div className="mx-auto max-w-7xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12"
      >
        Phiên bản <span className="text-primary text-glow">hỗ trợ</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {versions.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="group rounded-2xl bg-card neon-border p-8 text-center hover:-translate-y-2 hover:box-glow-lg transition-all duration-300"
          >
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <v.icon size={32} className="text-primary" />
            </div>
            <p className="text-sm text-muted-foreground mb-1">{v.subtitle}</p>
            <h3 className="text-xl font-bold text-foreground mb-2">{v.title}</h3>
            <p className="text-lg font-mono text-primary">{v.range}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Versions;
