import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { addWebEmail } from "@/lib/leads-store";
import { submitToWeb3Forms } from "@/lib/web3forms";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const TinySparkleIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#2E7D32] fill-[#2E7D32] shrink-0" viewBox="0 0 24 24">
    <path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z" />
  </svg>
);

export function GetInTouch() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleGitSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const name = (form.querySelector("input[name='name']") as HTMLInputElement)?.value || "";
    const phone = (form.querySelector("input[name='phone']") as HTMLInputElement)?.value || "";
    const email = (form.querySelector("input[name='email']") as HTMLInputElement)?.value || "";
    const address = (form.querySelector("input[name='address']") as HTMLInputElement)?.value || "";
    const propertyType = (form.querySelector("select[name='propertyType']") as HTMLSelectElement)?.value || "";
    const timeframe = (form.querySelector("select[name='timeframe']") as HTMLSelectElement)?.value || "";
    const msg = (form.querySelector("textarea[name='message']") as HTMLTextAreaElement)?.value || "";

    try {
      await addWebEmail({
        name,
        phone,
        email,
        service: `Property: ${propertyType} | Timeframe: ${timeframe} | Address: ${address}`,
        message: msg,
        source: "Landing Get-In-Touch Form"
      });

      await submitToWeb3Forms({
        name,
        phone,
        email,
        "Address / City": address,
        "Property Type": propertyType,
        Timeframe: timeframe,
        Message: msg,
        to_email: "eva@stellrit.com",
      }, "Landing Get-In-Touch Form");

      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="get-in-touch" className="relative py-[60px] bg-white border-b border-slate-100 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />
      <div className="mx-auto w-[90%] max-w-7xl relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 bg-[#2E7D32]/10 border border-[#2E7D32]/30 text-[#2E7D32] rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5">
            <TinySparkleIcon /> {t("Request a Quote", "Solicitar Cotización")} <TinySparkleIcon />
          </span>
          <h2 className="text-[22px] sm:text-3xl lg:text-[40px] font-extrabold text-[#0F172A] leading-tight mt-0 sm:mt-[-10px] mb-[5px] tracking-tight capitalize">
            {t("Get Your Free, ", "Obtenga Su ")}
            <span className="text-[#2E7D32]">{t("No-Obligation Quote", "Cotización Sin Compromiso")}</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-lg mx-auto">
            {t("Tell us what you need — lawn care, landscaping, cleaning, tree removal, or gravel work — and we'll provide an honest, competitive quote within 24 hours.", "Díganos lo que necesita y le brindaremos una cotización honesta y competitiva en 24 horas.")}
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          {/* Left: Contact Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            className="lg:col-span-5 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#111111] via-[#1B5E20] to-[#2E7D32] text-white p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-[#D4AF37]/40"
          >
            <div className="absolute inset-0 bg-grid opacity-10 mix-blend-overlay pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#FFD54F]/15 blur-3xl pointer-events-none" />

            <div className="relative">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-6 border border-[#D4AF37]/30 text-[#FFD54F]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FFD54F] animate-pulse" />
                Horn Lake Office &amp; 50-Mile Dispatch
              </span>
              <h3 className="text-2xl font-display font-black uppercase tracking-wider text-[#FFD54F]">
                Contact Info
              </h3>
              <p className="mt-3 text-sm text-white/90 font-medium leading-relaxed">
                Brown Lawn Care &amp; Cleaning Service, LLC — Family Owned • 6 Years in Business (15+ Yrs Experience).
              </p>

              <ul className="mt-8 space-y-6">
                <Item
                  icon={Phone}
                  label="Direct Phone & Emergency"
                  value="(662) 571-1048"
                  href="tel:6625711048"
                  isCall
                />
                <Item
                  icon={Mail}
                  label="Direct Email"
                  value="royleebrown@ymail.com"
                  href="mailto:royleebrown@ymail.com"
                />
                <Item
                  icon={MapPin}
                  label="Office Address"
                  value="Alden Lake Dr W, Horn Lake, MS"
                />
                <Item
                  icon={Clock}
                  label="Business Hours"
                  value="Mon–Fri: 10am–7pm | Sat: 3pm–8pm | Sun: Closed | Emergency Service (Business Hours)"
                />
              </ul>
            </div>

            <div className="relative mt-10 pt-6 border-t border-white/15 flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-[#FFD54F] shrink-0" />
              <span className="text-[10px] uppercase font-bold tracking-wider text-white/90">
                Licensed · Insured · Bonded
              </span>
            </div>
          </motion.div>

          {/* Right: Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 relative flex flex-col justify-center"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="grid place-items-center text-center py-16"
                >
                  <div className="grid place-items-center h-16 w-16 rounded-full bg-[#2E7D32]/15 text-[#2E7D32] mb-5 shadow-sm">
                    <CheckCircle2 className="h-8 w-8 text-[#2E7D32]" />
                  </div>
                  <h3 className="text-2xl font-display font-black text-[#0F172A] uppercase tracking-wider">
                    Request Received
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 font-semibold max-w-sm">
                    We'll respond within 24 hours. For urgent needs, call (662) 571-1048.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleGitSubmit}
                  className="space-y-5 text-left"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field
                      label="Full Name *"
                      name="name"
                      placeholder="Roy Brown"
                      required
                    />
                    <Field
                      label="Phone Number *"
                      name="phone"
                      type="tel"
                      placeholder="(662) 571-1048"
                      required
                    />
                    <Field
                      label="Email Address *"
                      name="email"
                      type="email"
                      placeholder="yourname@example.com"
                      required
                    />
                    <Field
                      label="Address / City *"
                      name="address"
                      placeholder="Horn Lake, MS"
                      required
                    />

                    <div>
                      <Label>Property Type</Label>
                      <select
                        name="propertyType"
                        required
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-4 focus:ring-[#2E7D32]/10 focus:border-[#2E7D32] focus:bg-white transition-all cursor-pointer"
                      >
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Warehouse Cleaning">Warehouse Cleaning</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <Label>How soon do you need service?</Label>
                      <select
                        name="timeframe"
                        required
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-4 focus:ring-[#2E7D32]/10 focus:border-[#2E7D32] focus:bg-white transition-all cursor-pointer"
                      >
                        <option value="Urgent">Urgent</option>
                        <option value="Within 1 week">Within 1 week</option>
                        <option value="Within 2 weeks">Within 2 weeks</option>
                        <option value="Flexible">Flexible</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <Label>Brief Description of the Job</Label>
                      <textarea
                        name="message"
                        rows={3}
                        placeholder="Tell us what you need — lawn care, landscaping, cleaning, tree removal, or gravel work..."
                        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-4 focus:ring-[#2E7D32]/10 focus:border-[#2E7D32] focus:bg-white transition-all resize-none"
                      />
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={submitting}
                    className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] text-[#FFD54F] border border-[#D4AF37]/50 px-6 py-4 text-xs font-black uppercase tracking-wider shadow-md hover:brightness-110 cursor-pointer transition-all duration-300 disabled:opacity-75"
                  >
                    <span>{submitting ? "Submitting..." : "Submit Request →"}</span>
                  </motion.button>

                  <p className="text-center text-[11px] text-slate-500 font-semibold">
                    We'll respond within 24 hours. For urgent needs, call (662) 571-1048.
                  </p>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Item({
  icon: Icon,
  label,
  value,
  href,
  isCall,
}: {
  icon: any;
  label: string;
  value: string;
  href?: string;
  isCall?: boolean;
}) {
  const inner = (
    <div className="flex items-start gap-4">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`grid place-items-center h-10 w-10 rounded-xl text-white shrink-0 transition-all duration-300 ${
          isCall 
            ? "bg-[#2E7D32] text-[#FFD54F] border border-[#D4AF37]/40 shadow-sm" 
            : "bg-white/10 border border-white/10 hover:bg-white/15"
        }`}
      >
        <Icon className="h-5 w-5 text-[#FFD54F]" />
      </motion.div>
      <div className="text-left">
        <div className="text-[9px] uppercase tracking-wider text-white/70 font-bold">
          {label}
        </div>
        <div
          className={`font-display font-bold leading-tight ${isCall ? "text-lg text-[#FFD54F]" : "text-sm text-white/95"}`}
        >
          {value}
        </div>
      </div>
    </div>
  );
  return href ? (
    <li>
      <motion.a
        whileHover={{ x: 6 }}
        transition={{ type: "spring", stiffness: 350, damping: 20 }}
        href={href}
        className="block hover:opacity-90 transition-opacity"
      >
        {inner}
      </motion.a>
    </li>
  ) : (
    <li>{inner}</li>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  className = "",
}: any) {
  return (
    <div className={className}>
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-4 focus:ring-[#2E7D32]/10 focus:border-[#2E7D32] focus:bg-white transition-all"
      />
    </div>
  );
}
