import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-20 bg-muted">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Get In <span className="text-secondary">Touch</span></h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-md mx-auto bg-card card-elevated rounded-2xl p-8 text-center space-y-6"
      >
        <h3 className="text-xl font-bold text-foreground">Gorantla Subbarao</h3>
        <div className="text-sm text-muted-foreground leading-relaxed">
          <p>Independent Insurance Advisor</p>
          <p>(Associated with Tata AIA Life Insurance)</p>
        </div>

        <div className="space-y-4">
          <a href="tel:+919346622469" className="flex items-center justify-center gap-3 text-foreground hover:text-primary transition-colors">
            <Phone size={18} className="text-secondary" /> +91 93466 22469
          </a>
          <a href="mailto:gorantlacservices@gmail.com" className="flex items-center justify-center gap-3 text-foreground hover:text-primary transition-colors">
            <Mail size={18} className="text-secondary" /> gorantlacservices@gmail.com
          </a>
        </div>

        <button
          onClick={() => window.open("https://wa.me/919346622469?text=I%20am%20interested", "_blank")}
          className="inline-flex items-center gap-2 bg-emerald-500 text-primary-foreground px-8 py-3.5 rounded-xl font-semibold text-lg hover:bg-emerald-600 transition-colors cursor-pointer"
        >
          <MessageCircle size={22} /> Chat on WhatsApp
        </button>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
