import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const ApplyFormSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", city: "", occupation: "", age: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const message = `New Consultant Application

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
City: ${form.city}
Age: ${form.age}
Occupation: ${form.occupation}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/919346622469?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");

    toast.success("WhatsApp opened with your application details.");
    setForm({ name: "", phone: "", email: "", city: "", occupation: "", age: "" });
  };

  const inputClass = "w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary text-sm";

  return (
    <section id="apply" className="py-20 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Apply <span className="text-secondary">Now</span></h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">Fill in your details and we'll get in touch with you.</p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-card card-elevated rounded-2xl p-8 space-y-4"
        >
          <input required placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} maxLength={100} />
          <input required type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} maxLength={15} />
          <input required type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} maxLength={255} />
          <input required placeholder="City" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className={inputClass} maxLength={100} />
          <input required placeholder="Current Occupation" value={form.occupation} onChange={(e) => setForm({ ...form, occupation: e.target.value })} className={inputClass} maxLength={100} />
          <input required type="number" placeholder="Age" min={21} max={99} value={form.age} onChange={(e) => setForm({ ...form, age: e.target.value })} className={inputClass} />
          <button
            type="submit"
            className="w-full gradient-gold text-secondary-foreground py-3.5 rounded-xl font-semibold text-base hover:opacity-90 transition-opacity"
          >
            Apply Now
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ApplyFormSection;
