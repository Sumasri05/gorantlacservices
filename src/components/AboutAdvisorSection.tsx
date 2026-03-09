import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Award, Users, Shield } from "lucide-react";

const AboutAdvisorSection = () => (
  <section id="about" className="py-24 bg-muted">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">Meet Your <span className="text-secondary">Career Mentor</span></h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <p className="text-center text-sm font-semibold text-secondary uppercase tracking-widest mb-4">Your Personal Career Guide</p>

        <div className="bg-card card-elevated rounded-2xl p-8">
          <div className="text-center mb-6">
            <div className="w-24 h-24 rounded-full gradient-hero flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-3xl font-bold text-primary-foreground">GS</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-foreground">Gorantla Subbarao</h3>
            <p className="text-muted-foreground mt-1 font-medium">Independent Insurance Advisor</p>
          </div>

          <p className="text-muted-foreground text-center mb-8 leading-relaxed">
            Experienced independent insurance advisor helping individuals start a successful career in financial advisory. I guide new advisors through training, client acquisition strategies, and income growth opportunities.
          </p>

          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center p-4 bg-muted rounded-xl">
              <Users size={28} className="mx-auto mb-2 text-secondary" />
              <p className="text-sm font-semibold text-foreground">500+</p>
              <p className="text-xs text-muted-foreground">Clients Served</p>
            </div>
            <div className="text-center p-4 bg-muted rounded-xl">
              <Shield size={28} className="mx-auto mb-2 text-secondary" />
              <p className="text-sm font-semibold text-foreground">Experienced</p>
              <p className="text-xs text-muted-foreground">Industry Advisor</p>
            </div>
            <div className="text-center p-4 bg-muted rounded-xl">
              <Award size={28} className="mx-auto mb-2 text-secondary" />
              <p className="text-sm font-semibold text-foreground">Trusted</p>
              <p className="text-xs text-muted-foreground">Financial Mentor</p>
            </div>
          </div>

          <div className="space-y-3">
            <a href="tel:+919346622469" className="flex items-center justify-center gap-3 text-foreground hover:text-primary transition-colors">
              <Phone size={18} className="text-secondary" /> +91 93466 22469
            </a>
            <a href="mailto:gorantlacservices@gmail.com" className="flex items-center justify-center gap-3 text-foreground hover:text-primary transition-colors">
              <Mail size={18} className="text-secondary" /> gorantlacservices@gmail.com
            </a>
            <div className="text-center pt-3">
              <button
                onClick={() => window.open("https://wa.me/919346622469?text=I%20am%20interested", "_blank")}
                className="inline-flex items-center gap-2 bg-emerald-500 text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-colors cursor-pointer"
              >
                <MessageCircle size={20} /> Chat on WhatsApp
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutAdvisorSection;
