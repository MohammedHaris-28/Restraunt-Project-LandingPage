import { motion } from "framer-motion";
import { IndianRupee, Smartphone, Zap, Activity, TrendingUp } from "lucide-react";

const reasons = [
  { 
    icon: IndianRupee, 
    title: "Increase Daily Revenue", 
    desc: "Faster ordering = more table turnover. Even 3 extra orders/day can add more revenue monthly." 
  },
  { 
    icon: Smartphone, 
    title: "No App Needed", 
    desc: "Customers scan QR & order instantly — no downloads, no friction, higher conversions." 
  },
  { 
    icon: Zap, 
    title: "Go Live in 24 Hours", 
    desc: "We handle setup, QR, and onboarding — you start earning immediately." 
  },
  { 
    icon: Activity, 
    title: "Real-time Control", 
    desc: "Track orders, kitchen flow, and revenue live — no confusion, no missed orders." 
  },
];

const WhyChooseUsSection = () => (
  <section className="py-24 lg:py-32 relative">
    
    {/* Background Glow */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/30 to-transparent" />

    <div className="container mx-auto px-4 lg:px-8 relative">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-wider">
          Why SmartQR
        </span>

        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">
          Built to <span className="text-gradient">Increase Profit</span>, Not Just Manage Orders
        </h2>

        <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm">
          Most systems just digitize menus. SmartQR helps you earn more, reduce staff workload, 
          and run your restaurant smarter every day.
        </p>
      </motion.div>

      {/* Benefits Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6 }}
            className="glass rounded-2xl p-6 text-center shadow-card hover:shadow-card-hover transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <r.icon size={26} className="text-primary" />
            </div>

            <h3 className="font-heading font-semibold text-foreground">
              {r.title}
            </h3>

            <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
              {r.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* ROI / Conversion Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="mt-20 rounded-2xl p-8 text-center bg-primary/5 border border-primary/20 shadow-sm"
      >
        <div className="flex items-center justify-center mb-3">
          <TrendingUp className="w-6 h-6 text-primary" />
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-foreground">
          Why Choose SmartQR? Because It Pays for Itself in Days, Not Months.
        </h3>

        <p className="text-muted-foreground mt-3 text-sm max-w-md mx-auto">
          With faster service and better order flow, even a small increase in daily orders 
          can cover your subscription cost within days.
        </p>

        <p className="text-green-600 font-semibold text-sm mt-4">
          ✔ Used by growing restaurants to boost efficiency & profits
        </p>
      </motion.div>

    </div>
  </section>
);

export default WhyChooseUsSection;