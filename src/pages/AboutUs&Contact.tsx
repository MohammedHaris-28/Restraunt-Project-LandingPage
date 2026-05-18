import { motion } from "framer-motion";
import { Phone, Mail, User, Sparkles, Building2, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      
      {/*  NAVBAR */}
      <Navbar />

      {/* HERO */}
      <section className="py-24 lg:py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto px-4 relative"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-wider">
            About Us
          </span>

          <h1 className="text-4xl md:text-5xl font-heading font-bold mt-4">
            Built for Modern Restaurants 🚀
          </h1>

          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            #2CODE helps restaurants, cafes, and resorts digitize their operations 
            with QR-based ordering, real-time analytics, and powerful management tools — 
            all without needing expensive hardware or complex systems.
          </p>
        </motion.div>
      </section>

      {/* PRODUCT DETAILS */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">

          {[
            {
              icon: Building2,
              title: "For Restaurants & Cafes",
              desc: "Designed for dine-in, cafes, food courts, and resorts — making ordering faster and operations smoother."
            },
            {
              icon: Zap,
              title: "Fast & Simple Setup",
              desc: "Get your system live within 24 hours with QR menus, POS dashboard, and kitchen display."
            },
            {
              icon: Sparkles,
              title: "All-in-One Platform",
              desc: "Menu management, orders, analytics, reports, and billing — everything in one place."
            }
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="glass rounded-2xl shadow-card hover:shadow-card-hover transition-all">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <item.icon className="text-primary" size={26} />
                  </div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-muted-foreground text-sm mt-2">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}

        </div>
      </section>

      {/* MISSION */}
      <section className="py-20 bg-accent/20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-heading font-bold mb-4">
              Our Mission
            </h2>
            <p className="text-muted-foreground text-lg">
              To empower local restaurants and cafes with affordable, powerful 
              technology that increases revenue, reduces manual work, and improves 
              customer experience — without depending on expensive platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24">
        <div className="container mx-auto px-4 max-w-3xl">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-wider">
              Contact
            </span>
            <h2 className="text-3xl font-heading font-bold mt-3">
              Get in Touch
            </h2>
            <p className="text-muted-foreground mt-3">
              Ready to digitize your restaurant? Let’s talk.
            </p>
          </motion.div>

          <Card className="glass rounded-2xl shadow-card">
            <CardContent className="p-8 space-y-6">

              {/* Name */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <User className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Contact Person</p>
                  <p className="font-semibold text-lg">Haris M</p>
                  <p className="text-xs text-muted-foreground">
                    Manager & Sales Representative
                  </p>
                </div>
              </div>

              {/* Phone */}
              <a
                href="tel:+919036486726"
                className="flex items-center gap-4 hover:bg-primary/5 p-3 rounded-xl transition"
              >
                <div className="p-3 rounded-xl bg-primary/10">
                  <Phone className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-semibold text-lg text-primary">
                    +91 9036486726
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:mohammedharis280205@gmail.com"
                className="flex items-center gap-4 hover:bg-primary/5 p-3 rounded-xl transition"
              >
                <div className="p-3 rounded-xl bg-primary/10">
                  <Mail className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold text-lg text-primary">
                    mohammedharis280205@gmail.com
                  </p>
                </div>
              </a>

            </CardContent>
          </Card>

        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-heading font-bold">
            Start Your Digital Restaurant Journey Today 🚀
          </h3>
          <p className="text-muted-foreground mt-3">
            Join restaurants already improving efficiency and increasing revenue.
          </p>
        </motion.div>
      </section>

      {/*  FOOTER */}
      <FooterSection />

    </div>
  );
};

export default AboutPage;