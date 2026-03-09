import { Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="gradient-hero py-10">
    <div className="section-container text-center space-y-6">
      <p className="font-display text-xl font-bold text-primary-foreground">
        <span className="text-primary-foreground">GORANTLA</span>{" "}
        <span className="text-secondary">CONSULTANCY SERVICES</span>
      </p>

      <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/70">
        <a href="#home" className="hover:text-primary-foreground transition-colors">Home</a>
        <a href="#apply" className="hover:text-primary-foreground transition-colors">Apply</a>
        <a href="#products" className="hover:text-primary-foreground transition-colors">Products</a>
        <a href="#contact" className="hover:text-primary-foreground transition-colors">Contact</a>
      </div>

      <div className="flex flex-wrap justify-center gap-6 text-sm text-primary-foreground/70">
        <a href="tel:+919346622469" className="inline-flex items-center gap-2 hover:text-primary-foreground transition-colors">
          <Phone size={14} /> +91 93466 22469
        </a>
        <a href="mailto:gorantlacservices@gmail.com" className="inline-flex items-center gap-2 hover:text-primary-foreground transition-colors">
          <Mail size={14} /> gorantlacservices@gmail.com
        </a>
      </div>

      <div className="border-t border-primary-foreground/10 pt-4">
        <p className="text-primary-foreground/40 text-xs max-w-2xl mx-auto leading-relaxed">
          <strong>Disclaimer:</strong> This website is operated by an independent insurance advisor associated with Tata AIA Life Insurance. It is not an official website of Tata AIA Life Insurance Company Limited. All product information is for general informational purposes only.
        </p>
      </div>

      <p className="text-primary-foreground/40 text-xs">© {new Date().getFullYear()} All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
