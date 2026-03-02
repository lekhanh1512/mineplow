import { motion } from "framer-motion";

const CTA = () => (
  <section
    id="cta"
    className="py-20 px-6 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20"
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-3xl text-center"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-6">
        Tham gia <span className="text-primary text-glow">Mineplow</span> ngay hôm nay!
      </h2>
      <p className="text-muted-foreground mb-8 text-lg">
        Hàng nghìn chiến binh đang chờ bạn. Đừng bỏ lỡ cuộc chiến!
      </p>
      <a
        href="https://mineplow.net"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block rounded-xl bg-primary px-10 py-4 text-lg font-bold text-primary-foreground hover:scale-105 transition-transform duration-300 box-glow-lg"
      >
        Vào Server Ngay
      </a>
    </motion.div>
  </section>
);

export default CTA;