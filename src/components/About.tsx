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
  <section
    id="about"
    className="relative py-24 px-6 overflow-hidden"
  >
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-10"
      style={{ backgroundImage: "url('/public/hero.png')" }}
    />

    {/* Dark Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black" />

    {/* Green Glow Accent */}
    <div className="absolute -left-40 top-1/2 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full" />
    <div className="relative z-10 mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Về <span className="text-primary text-glow">Mineplow</span>
        </h2>

        <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-xl">
          Mineplow là server Minecraft PvP hàng đầu Việt Nam, nơi hội tụ những chiến binh thực thụ.
          Với hệ thống gameplay phong phú, cân bằng và liên tục cập nhật, chúng tôi mang đến trải nghiệm
          Minecraft tốt nhất cho cả PC và điện thoại.
        </p>

        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
          Tham gia ngay để khám phá thế giới PvP đỉnh cao, hệ thống bang hội, event hàng ngày
          và nhiều tính năng độc quyền chỉ có tại Mineplow.
        </p>
      </motion.div>

      {/* Right Cards */}
      <div className="grid gap-5 hover:cursor-pointer">
        {highlights.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex items-center gap-4 rounded-xl bg-card/80 backdrop-blur-sm neon-border p-5 hover:box-glow hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <item.icon size={22} className="text-primary" />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default About;
