import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, QrCode, BarChart3, ShoppingCart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero flex items-center overflow-hidden pt-16">
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-foreground">
              Digitize Your Restaurant with{" "}
              <span className="text-gradient">Smart QR Ordering</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
              All-in-one platform for menu, orders, POS & analytics. Reduce costs, increase efficiency, and delight your customers.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button className="gradient-primary text-primary-foreground rounded-full px-8 py-6 text-base shadow-soft hover:shadow-card-hover transition-shadow">
                Get Started 
              </Button>
            </div>

            <div className="flex items-center gap-6 mt-10 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">✓ No app required</span>
              <span className="flex items-center gap-1.5">✓ Setup in 24hrs</span>
              <span className="flex items-center gap-1.5">✓ Free trial</span>
            </div>
          </motion.div>

          {/* Right – Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative glass rounded-2xl p-6 shadow-card">
              {/* Mock dashboard header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs text-muted-foreground">Dashboard</p>
                  <p className="font-heading font-semibold text-foreground">Today's Overview</p>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary/30" />
                  <div className="w-3 h-3 rounded-full bg-primary/50" />
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[
                  { icon: ShoppingCart, label: "Orders", value: "142" },
                  { icon: BarChart3, label: "Revenue", value: "₹28.5K" },
                  { icon: QrCode, label: "QR Scans", value: "310" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-accent/50 rounded-xl p-3 text-center">
                    <stat.icon size={18} className="mx-auto text-primary mb-1" />
                    <p className="text-lg font-heading font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Mock chart */}
              <div className="bg-accent/30 rounded-xl p-4 h-32 flex items-end gap-1.5">
                {[40, 65, 45, 80, 55, 90, 70, 95, 60, 85, 75, 100].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    animate={{ height: `${h}%` }}
                    transition={{ delay: 0.8 + i * 0.05, duration: 0.5 }}
                    className="flex-1 rounded-t-md gradient-primary opacity-70"
                  />
                ))}
              </div>
            </div>

            {/* Floating QR card */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 glass rounded-2xl p-4 shadow-card"
            >
              <QrCode size={48} className="text-primary" />
              <p className="text-xs font-medium text-foreground mt-1">Scan to order</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
