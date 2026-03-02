import { motion } from "framer-motion";
import { Shield, Zap, Calendar, Users, Server } from "lucide-react";

const highlights = [
  { icon: Server, title: "Server ổn định", desc: "Uptime 99.9%, hoạt động 24/7" },
  { icon: Zap, title: "Không lag", desc: "TPS luôn ổn định, trải nghiệm mượt mà" },
  { icon: Calendar, title: "Event mỗi ngày", desc: "Sự kiện hấp dẫn diễn ra hàng ngày" },
  { icon: Shield, title: "Bảo mật cao", desc: "Anti-cheat tiên tiến, bảo vệ tài khoản" },
  { icon: Users, title: "Cộng đồng đông", desc: "Hàng nghìn người chơi đang chờ bạn" },
];

const About = () => (
  <section id="about" className="py-20 px-6">
    <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
          Về <span className="text-primary text-glow">Mineplow</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Mineplow là server Minecraft PvP hàng đầu Việt Nam, nơi hội tụ những chiến binh thực thụ.
          Với hệ thống gameplay phong phú, cân bằng và liên tục cập nhật, chúng tôi mang đến trải nghiệm
          Minecraft tốt nhất cho cả PC và điện thoại.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Tham gia ngay để khám phá thế giới PvP đỉnh cao, hệ thống bang hội, event hàng ngày
          và nhiều tính năng độc quyền chỉ có tại Mineplow.
        </p>
      </motion.div>

      <div className="grid gap-4 hover:cursor-pointer ">
        {highlights.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex items-center gap-4 rounded-xl bg-card neon-border p-4 hover:box-glow transition-all duration-300 "
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 ">
              <item.icon size={20} className="text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
