import { motion } from "framer-motion";
import { Phone, Shield, Users, UserCheck, BarChart3, Briefcase, Crown, DollarSign } from "lucide-react";

const roles = [
  { icon: Phone, title: "Telecallers" },
  { icon: Shield, title: "Insurance Advisors" },
  { icon: DollarSign, title: "Financial Advisors" },
  { icon: Users, title: "Team Leaders" },
  { icon: UserCheck, title: "HR Profiles" },
  { icon: BarChart3, title: "Sales Executives" },
  { icon: Briefcase, title: "Sales Managers" },
  { icon: Crown, title: "Business Leaders" },
];

const CareerRolesSection = () => (
  <section className="py-24 bg-background">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Multiple Career <span className="text-secondary">Opportunities Available</span>
        </h2>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto text-base">
          We are currently hiring for multiple roles with flexible earning opportunities.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
        {roles.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="bg-card card-elevated rounded-xl p-6 text-center group cursor-default"
          >
            <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <r.icon size={24} className="text-primary-foreground" />
            </div>
            <h3 className="text-sm font-semibold text-foreground">{r.title}</h3>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-8 text-center text-sm font-semibold text-secondary"
      >
        Full-Time &nbsp;|&nbsp; Part-Time &nbsp;|&nbsp; Work From Home Opportunities Available
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 text-center"
      >
        <a
          href="#apply"
          className="inline-block gradient-gold text-secondary-foreground px-8 py-3.5 rounded-xl text-base font-semibold hover:opacity-90 transition-opacity"
        >
          Apply Now for Available Positions
        </a>
      </motion.div>
    </div>
  </section>
);

export default CareerRolesSection;
