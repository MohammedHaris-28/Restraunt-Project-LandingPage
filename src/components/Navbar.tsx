import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

// Updated navItems to include Packaging
const navItems = ["Features", "Packaging", "Pricing", "How It Works", "Benefits"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (id: string) => {
    const sectionId = id.toLowerCase().replace(/ /g, "-");

    // ✅ Route-based Navigation
    if (id === "Features") {
      navigate("/features");
      setOpen(false);
      return;
    }
    
    if (id === "Packaging") {
      navigate("/packaging");
      setOpen(false);
      return;
    }

    if (id === "Pricing") {
      navigate("/pricing");
      setOpen(false);
      return;
    }

    // ✅ If NOT on homepage → go to homepage with hash for section scrolling
    if (location.pathname !== "/") {
      navigate(`/#${sectionId}`);
      setOpen(false);
      return;
    }

    // ✅ If already on homepage → smooth scroll to ID
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }

    setOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 glass-strong"
    >
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        
        {/* Logo → Home */}
        <span
          onClick={() => navigate("/")}
          className="cursor-pointer font-heading text-xl font-bold text-foreground tracking-tight"
        >
          #2<span className="text-primary">CODE</span>
        </span>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {item}
              {/* Subtle underline hover effect to match premium aesthetic */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </button>
          ))}

          <button
            onClick={() => navigate("/aboutus")}
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </button>
        </div>
        
        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary transition-colors">
            Book Demo
          </Button>
          <Button
            size="sm"
            onClick={() => navigate("/")}
            className="gradient-primary text-primary-foreground rounded-full px-6 shadow-soft hover:shadow-primary/20 transition-all"
          >
            Get Started
          </Button>
        </div>
          
        {/* Mobile Toggle */}
        <button className="md:hidden text-foreground p-2" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Slide-down */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden glass-strong border-t border-border/30"
          >
            <div className="flex flex-col gap-2 p-4 pb-8">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="text-left py-3 text-base font-medium text-muted-foreground border-b border-border/10 last:border-0"
                >
                  {item}
                </button>
              ))}

              <button
                onClick={() => {
                  navigate("/aboutus");
                  setOpen(false);
                }}
                className="text-left py-3 text-base font-medium text-muted-foreground border-b border-border/10"
              >
                About
              </button>

              <div className="flex flex-col gap-3 mt-4">
                <Button
                  onClick={() => {
                    navigate("/");
                    setOpen(false);
                  }}
                  className="gradient-primary text-primary-foreground rounded-full py-6 text-lg"
                >
                  Get Started
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full py-6 text-lg border-primary/20"
                >
                  Book Demo
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;