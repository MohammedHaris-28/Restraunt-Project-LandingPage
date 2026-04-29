import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="py-24 lg:py-32 relative overflow-hidden">
    <div className="absolute inset-0 gradient-hero" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="container mx-auto px-4 lg:px-8 text-center relative"
    >
      <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground">
        Start Your Digital Restaurant <span className="text-gradient">Today</span>
      </h2>
      <p className="text-muted-foreground mt-4 max-w-lg mx-auto text-lg">
        Join MenuMint to boost revenue and reduce costs.
      </p>
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <Button className="gradient-primary text-primary-foreground rounded-full px-10 py-6 text-base shadow-soft hover:shadow-card-hover transition-shadow">
          Get Started 
        </Button>
        
      </div>
    </motion.div>
  </section>
);

export default CTASection;
