import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Owner, Spice Garden",
    text: "SmartQR transformed how we take orders. Our staff is happier and customers love the speed.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "Manager, The Urban Café",
    text: "We cut our order errors by 90%. The analytics dashboard alone is worth the subscription.",
    rating: 5,
  },
  {
    name: "Amit Verma",
    role: "Founder, Biryani Blues (3 outlets)",
    text: "Managing multiple branches from one dashboard is a game-changer. Setup took less than a day.",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-24 lg:py-32">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary text-sm font-semibold uppercase tracking-wider">Testimonials</span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mt-3">
          Trusted by Growing Restaurants
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="glass rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300"
          >
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} size={16} className="text-primary fill-primary" />
              ))}
            </div>
            <p className="text-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
            <div>
              <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
