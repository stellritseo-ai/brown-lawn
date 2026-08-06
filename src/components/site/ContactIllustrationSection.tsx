import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  HelpCircle,
  Phone,
  ArrowRight,
  ShieldCheck,
  Clock,
  Star,
  Sparkles,
  MessageSquare,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import faqImg from "@/assets/faq-image.png";

interface FAQItem {
  id: string;
  q: string;
  qEs: string;
  a: string;
  aEs: string;
}

const faqs: FAQItem[] = [
  {
    id: "faq-1",
    q: "How quickly can you respond to storm emergencies or fallen trees?",
    qEs: "¿Con qué rapidez pueden responder a emergencias por tormentas o árboles caídos?",
    a: "We provide emergency dispatch during business hours. For urgent storm damage, tree blockages, or fallen limbs in Horn Lake and surrounding areas, our crew can be on-site rapidly to secure your property and clear debris.",
    aEs: "Ofrecemos despacho de emergencia en horario comercial. Para daños urgentes por tormentas o árboles caídos en Horn Lake y áreas cercanas, nuestro equipo estará en el lugar rápidamente.",
  },
  {
    id: "faq-2",
    q: "Are you licensed, bonded, and fully insured?",
    qEs: "¿Están licenciados, afianzados y totalmente asegurados?",
    a: "Yes! We carry comprehensive liability coverage and worker's compensation insurance to protect your property and our crew completely on every job.",
    aEs: "¡Sí! Contamos con cobertura de responsabilidad civil y seguro para trabajadores para proteger completamente su propiedad y a nuestro equipo.",
  },
  {
    id: "faq-3",
    q: "What areas do you serve around Horn Lake, MS?",
    qEs: "¿Qué áreas sirven alrededor de Horn Lake, MS?",
    a: "We serve a 50-mile radius around Horn Lake, MS — including Southaven, Olive Branch, Hernando, Nesbit, Memphis (TN), West Memphis (AR), and surrounding communities.",
    aEs: "Servimos un radio de 50 millas alrededor de Horn Lake, MS — incluyendo Southaven, Olive Branch, Hernando, Nesbit, Memphis (TN) y comunidades circundantes.",
  },
  {
    id: "faq-4",
    q: "Do you offer bilingual communication (English & Spanish)?",
    qEs: "¿Ofrecen comunicación bilingüe (Inglés y Español)?",
    a: "Yes! Our team speaks both English and Spanish fluently. We ensure clear, friendly, and hassle-free communication from the first quote to final walk-through.",
    aEs: "¡Sí! Nuestro equipo habla inglés y español con fluidez. Garantizamos una comunicación clara y amigable desde el presupuesto hasta la inspección final.",
  },
  {
    id: "faq-5",
    q: "How do I request a free quote for my property?",
    qEs: "¿Cómo solicito una cotización gratis para mi propiedad?",
    a: "You can call us directly at (662) 571-1048 or click 'Schedule Service' to send a request online. We provide fast, transparent estimates with zero obligation.",
    aEs: "Puede llamarnos al (662) 571-1048 o hacer clic en 'Agendar Servicio' en línea. Ofrecemos estimados rápidos y transparentes sin compromiso.",
  },
];

import logoImg from "@/assets/logo.png";

export function ContactIllustrationSection() {
  const { t } = useLanguage();
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const servicesList = [
    "Lawn Care",
    "Landscaping",
    "Tree Removal",
    "Office Cleaning",
  ];

  return (
    <section id="faq" className="relative py-12 sm:py-16 lg:py-28 bg-white border-b border-slate-100 overflow-hidden">

      {/* ── Background Decorations ──────────────────────── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:28px_28px] opacity-60" />
        <div className="absolute -top-40 right-0 w-[560px] h-[560px] rounded-full bg-[#2E7D32]/8 blur-[130px]" />
        <div className="absolute bottom-0 -left-24 w-[500px] h-[500px] rounded-full bg-[#D4AF37]/8 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto w-[90%] max-w-7xl">
        <div className="grid gap-10 sm:gap-14 lg:grid-cols-12 lg:gap-16 items-start">

          {/* ── LEFT COLUMN: FAQ Accordion (col-span-7) ───── */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-[#2E7D32]/8 border border-[#2E7D32]/25 rounded-full px-5 py-1.5 text-[11px] font-black uppercase tracking-widest text-[#2E7D32] shadow-sm"
            >
              <HelpCircle className="w-3.5 h-3.5" />
              {t("Frequently Asked Questions", "Preguntas Frecuentes")}
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-2"
            >
              <h2 className="font-display font-black text-slate-900 tracking-tight leading-tight text-[24px] sm:text-[32px] lg:text-[37px]">
                {t("Got Questions? ", "¿Tiene Preguntas? ")}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E7D32] to-[#1B5E20]">
                  {t("We Have Clear Answers.", "Tenemos Respuestas Claras.")}
                </span>
              </h2>
              <p className="text-slate-500 font-medium text-[14.5px] leading-relaxed max-w-xl">
                {t(
                  "Everything you need to know about our lawn care, landscaping, tree removal, and property maintenance services.",
                  "Todo lo que necesita saber sobre nuestros servicios de cuidado de césped, paisajismo y mantenimiento."
                )}
              </p>
            </motion.div>

            {/* Accordion list */}
            <div className="space-y-3 pt-2">
              {faqs.map((faq, idx) => {
                const isOpen = openId === faq.id;
                return (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen
                      ? "bg-[#2E7D32]/4 border-[#2E7D32]/35 shadow-md"
                      : "bg-white border-slate-200 hover:border-[#2E7D32]/25 hover:shadow-sm"
                      }`}
                  >
                    <button
                      onClick={() => toggleFAQ(faq.id)}
                      className="w-full flex items-center justify-between p-4 sm:p-5 text-left gap-4 cursor-pointer select-none"
                      aria-expanded={isOpen}
                    >
                      <span className="font-extrabold text-[15px] sm:text-[16px] text-slate-900 leading-snug flex items-center gap-3">
                        <span className={`w-2 h-2 rounded-full shrink-0 transition-colors duration-300 ${isOpen ? "bg-[#2E7D32]" : "bg-slate-300"
                          }`} />
                        {t(faq.q, faq.qEs)}
                      </span>
                      <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen
                        ? "bg-[#2E7D32] text-[#FFD54F] rotate-180 shadow-xs"
                        : "bg-slate-100 text-slate-500 group-hover:bg-[#2E7D32]/10"
                        }`}>
                        <ChevronDown className="w-4 h-4" />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: "easeInOut" }}
                        >
                          <div className="px-5 pb-5 pt-0 text-slate-600 font-medium text-[13.5px] leading-relaxed border-t border-[#2E7D32]/10 mt-1 pt-3.5">
                            {t(faq.a, faq.aEs)}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* Direct call bottom line */}
            <div className="pt-2 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] text-[#FFD54F] border border-[#D4AF37]/50 text-[11px] font-black uppercase tracking-widest rounded-full px-7 py-3.5 shadow-lg hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 w-full sm:w-auto cursor-pointer"
              >
                {t("Ask a Question", "Hacer una Pregunta")}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:6625711048"
                className="inline-flex items-center gap-2 text-slate-800 text-[13px] font-extrabold hover:text-[#2E7D32] transition-colors cursor-pointer"
              >
                <Phone className="h-4 w-4 text-[#2E7D32]" />
                {t("Call (662) 571-1048", "Llamar (662) 571-1048")}
              </a>
            </div>

          </div>

          {/* ── RIGHT COLUMN: Section Image Showcase (col-span-5) — hidden on mobile ─ */}
          <div className="hidden lg:block lg:col-span-5 relative w-full lg:sticky lg:top-[120px] self-start">
            {/* Outer ambient glow */}
            <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-[#2E7D32]/15 via-transparent to-[#D4AF37]/15 blur-xl pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 85, damping: 16, delay: 0.2 }}
              className="relative rounded-3xl overflow-hidden shadow-[0_24px_70px_-12px_rgba(0,0,0,0.22)] border-2 border-white group"
            >
              {/* Main Image */}
              <img
                src={faqImg}
                alt="Brown Lawn Care & Cleaning Service Team Member"
                className="w-full h-[480px] sm:h-[540px] lg:h-[580px] object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
              />

              {/* Dark Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-slate-950/20 pointer-events-none" />

              {/* Floating Top Header Bar: Logo + Business Name & Phone */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2 z-20">
                <div className="flex items-center gap-2.5 bg-slate-950/80 backdrop-blur-md border border-white/20 px-3.5 py-2 rounded-2xl shadow-lg">
                  <img src={logoImg} alt="Brown Logo" className="w-6 h-6 object-contain" />
                  <div className="text-left">
                    <p className="text-[11px] font-black text-white leading-none tracking-tight">Brown Lawn Care</p>
                    <p className="text-[9px] font-bold text-[#FFD54F] leading-none mt-0.5">& Cleaning Service</p>
                  </div>
                </div>

                <a
                  href="tel:6625711048"
                  className="inline-flex items-center gap-1.5 bg-[#2E7D32] border border-[#D4AF37]/50 text-[#FFD54F] text-[10px] font-black uppercase tracking-wider px-3.5 py-2 rounded-2xl shadow-lg hover:scale-105 transition-transform"
                >
                  <Phone className="w-3 h-3 fill-current" />
                  <span>(662) 571-1048</span>
                </a>
              </div>

              {/* Floating Bottom Card: Service Pills & Action */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-white/40 rounded-2xl p-4 shadow-2xl text-left z-20">
                <div className="flex flex-wrap gap-1.5 mb-2.5">
                  {servicesList.map((srv) => (
                    <span
                      key={srv}
                      className="inline-flex items-center gap-1 bg-[#2E7D32]/10 border border-[#2E7D32]/25 text-[#2E7D32] text-[9.5px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full"
                    >
                      <Sparkles className="w-2.5 h-2.5 text-[#2E7D32]" />
                      {t(srv, srv)}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-slate-100">
                  <div>
                    <span className="text-[9px] uppercase tracking-widest text-[#2E7D32] font-black block">
                      {t("Family-Owned • Horn Lake, MS", "Negocio Familiar • Horn Lake, MS")}
                    </span>
                    <p className="text-xs sm:text-sm font-extrabold text-slate-900 mt-0.5">
                      {t("Call (662) 571-1048 for Free Quotes", "Llama al (662) 571-1048 para Cotización")}
                    </p>
                  </div>
                  <a
                    href="tel:6625711048"
                    className="shrink-0 w-9 h-9 rounded-full bg-[#0F172A] text-[#FFD54F] flex items-center justify-center border border-white/20 shadow-md hover:bg-[#2E7D32] transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
