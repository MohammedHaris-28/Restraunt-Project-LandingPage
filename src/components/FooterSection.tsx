import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const FooterSection = () => {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* TOP GRID */}
        <div className="grid md:grid-cols-4 gap-8">

          {/* BRAND */}
          <div>
            <span className="font-heading text-xl font-bold text-foreground">
              Menu<span className="text-gradient">Mint</span>
            </span>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Smart Restaurant Management & QR Ordering System. Digitize your restaurant today.
            </p>

            {/* 🔥 WhatsApp CTA */}
            <a
              href="https://wa.me/919036486726"
              target="_blank"
              className="inline-block mt-4 text-xs font-semibold text-primary hover:underline"
            >
              Chat on WhatsApp →
            </a>
          </div>

          {/* PRODUCT */}
          <div>
            <h4 className="font-heading font-semibold text-foreground text-sm mb-3">
              Product
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="/#features" className="footer-link">Features</a>
              </li>
              <li>
                <a href="/#pricing" className="footer-link">Pricing</a>
              </li>
              <li>
                <a href="/#how-it-works" className="footer-link">How It Works</a>
              </li>
              <li>
                <a href="/#benefits" className="footer-link">Benefits</a>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-heading font-semibold text-foreground text-sm mb-3">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <Link to="/aboutus" className="footer-link">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="footer-link">Contact</Link>
              </li>
              <li>
                <a href="#" className="footer-link">Blog</a>
              </li>
              <li>
                <a href="#" className="footer-link">Careers</a>
              </li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="font-heading font-semibold text-foreground text-sm mb-3">
              Support
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="footer-link">Help Center</a>
              </li>
              <li>
                <a href="#" className="footer-link">API Docs</a>
              </li>
              <li>
                <Link to="/privacy" className="footer-link">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="footer-link">Terms of Service</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-border/40 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <p className="text-xs text-muted-foreground">
            © 2026 MenuMint. All rights reserved.
          </p>

          {/* SOCIALS */}
          <div className="flex gap-4">
            <a href="#" className="social-icon">
              <Facebook size={18} />
            </a>
            <a href="#" className="social-icon">
              <Twitter size={18} />
            </a>
            <a href="#" className="social-icon">
              <Instagram size={18} />
            </a>
            <a href="#" className="social-icon">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;