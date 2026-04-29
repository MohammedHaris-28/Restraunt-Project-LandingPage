import { motion } from "framer-motion";
import { ScanLine, BookOpen, ShoppingBag } from "lucide-react";

const steps = [
  { icon: ScanLine, title: "Scan QR", desc: "Customer scans the QR code placed on the table." },
  { icon: BookOpen, title: "Browse Menu", desc: "Explore the full digital menu with photos & prices." },
  { icon: ShoppingBag, title: "Place Order", desc: "Order goes directly to kitchen — fast & error-free." },
];

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-24 lg:py-32">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-wider">How It Works</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">
          Three Simple Steps
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 relative">
        {/* Connector line */}
        <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="text-center relative"
          >
            <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto shadow-soft relative z-10">
              <step.icon size={28} className="text-primary-foreground" />
            </div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center -mt-1.5 z-20">
              <span className="text-[10px] font-bold text-primary">{i + 1}</span>
            </div>
            <h3 className="font-heading font-semibold text-foreground text-lg mt-6">{step.title}</h3>
            <p className="text-muted-foreground text-sm mt-2 max-w-xs mx-auto">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorksSection;
