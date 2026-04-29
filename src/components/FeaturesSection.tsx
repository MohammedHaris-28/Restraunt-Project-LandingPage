import { motion } from "framer-motion";
import { QrCode, Monitor, ChefHat, BarChart3, Building2, Utensils } from "lucide-react";

const features = [
  { icon: QrCode, title: "QR Menu Ordering", desc: "Customers scan, browse, and order — no app download needed." },
  { icon: Monitor, title: "POS Dashboard", desc: "Complete point-of-sale system with real-time order tracking." },
  { icon: ChefHat, title: "Kitchen Display System", desc: "Live order feed for your kitchen staff to stay on top." },
  { icon: BarChart3, title: "Analytics & Reports", desc: "Deep insights into sales, trends, and customer behavior." },
  { icon: Building2, title: "Multi-Restaurant Support", desc: "Manage multiple branches from a single dashboard." },
  { icon: Utensils, title: "Combo & Menu Management", desc: "Create combos, set prices, and update menus instantly." },
];

const FeaturesSection = () => (
  <section id="features" className="py-24 lg:py-32 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
    <div className="container mx-auto px-4 lg:px-8 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-wider">Features</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">
          Everything You Need to Run <span className="text-gradient">Smarter</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          From QR ordering to analytics — one platform, zero hassle.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className="group glass rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 cursor-default"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <f.icon size={24} className="text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-foreground text-lg">{f.title}</h3>
            <p className="text-muted-foreground text-sm mt-2 leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
