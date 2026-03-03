import { motion } from "framer-motion";
import { Swords, Calendar, Crown, Fish, Shield, ShoppingCart } from "lucide-react";

const features = [
  { icon: Swords, title: "PvP cân bằng", desc: "Hệ thống chiến đấu công bằng, skill quyết định tất cả" },
  { icon: Calendar, title: "Event mỗi ngày", desc: "Sự kiện phong phú với phần thưởng hấp dẫn mỗi ngày" },
  { icon: Crown, title: "KOTH", desc: "King of the Hill – chiến đấu chiếm đỉnh, giành phần thưởng lớn" },
  { icon: Fish, title: "Câu cá giờ vàng", desc: "Câu cá nhận vật phẩm hiếm trong khung giờ vàng" },
  { icon: Shield, title: "Bang hội", desc: "Lập bang, chiêu mộ thành viên, chinh chiến cùng đồng đội" },
  { icon: ShoppingCart, title: "Shop & nâng cấp", desc: "Hệ thống shop đa dạng, nâng cấp trang bị dễ dàng" },
];

const Features = () => (
  <section id="features" className="py-20 px-6 bg-secondary/30">
    <div className="mx-auto max-w-7xl">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12"
      >
        Tính năng <span className="text-primary text-glow">nổi bật</span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group rounded-2xl bg-card neon-border p-6 hover:box-glow hover:-translate-y-1 transition-all duration-300 hover:cursor-pointer"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
              <f.icon size={24} className="text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
