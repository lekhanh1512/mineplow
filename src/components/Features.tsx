import { motion } from "framer-motion";
import {
  Swords,
  Calendar,
  Crown,
  Fish,
  Shield,
  ShoppingCart,
} from "lucide-react";

const features = [
  {
    icon: Swords,
    title: "PvP cân bằng",
    desc: "Hệ thống chiến đấu công bằng, skill quyết định tất cả",
    color: "text-red-500",
    bg: "bg-red-500/10",
    hoverBg: "group-hover:bg-red-500/20",
    glow: "hover:shadow-[0_0_30px_rgba(239,68,68,0.4)]",
  },
  {
    icon: Calendar,
    title: "Event mỗi ngày",
    desc: "Sự kiện phong phú với phần thưởng hấp dẫn mỗi ngày",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    hoverBg: "group-hover:bg-yellow-500/20",
    glow: "hover:shadow-[0_0_30px_rgba(234,179,8,0.4)]",
  },
  {
    icon: Crown,
    title: "KOTH",
    desc: "King of the Hill – chiến đấu chiếm đỉnh, giành phần thưởng lớn",
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    hoverBg: "group-hover:bg-purple-500/20",
    glow: "hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]",
  },
  {
    icon: Fish,
    title: "Câu cá giờ vàng",
    desc: "Câu cá nhận vật phẩm hiếm trong khung giờ vàng",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    hoverBg: "group-hover:bg-blue-500/20",
    glow: "hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]",
  },
  {
    icon: Shield,
    title: "Bang hội",
    desc: "Lập bang, chiêu mộ thành viên, chinh chiến cùng đồng đội",
    color: "text-green-500",
    bg: "bg-green-500/10",
    hoverBg: "group-hover:bg-green-500/20",
    glow: "hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]",
  },
  {
    icon: ShoppingCart,
    title: "Shop & nâng cấp",
    desc: "Hệ thống shop đa dạng, nâng cấp trang bị dễ dàng",
    color: "text-pink-500",
    bg: "bg-pink-500/10",
    hoverBg: "group-hover:bg-pink-500/20",
    glow: "hover:shadow-[0_0_30px_rgba(236,72,153,0.4)]",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 px-6 bg-secondary/30">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12"
        >
          Tính năng{" "}
          <span className="text-primary text-glow">nổi bật</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group rounded-2xl bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:cursor-pointer ${f.glow}`}
            >
              <div
                className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${f.bg} ${f.hoverBg} transition-colors`}
              >
                <f.icon size={24} className={f.color} />
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2">
                {f.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;