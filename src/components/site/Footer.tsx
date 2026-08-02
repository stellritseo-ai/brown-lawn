import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Clock,
  Globe,
  ChevronDown,
} from "lucide-react";
import logoImg from "@/assets/logo.png";
import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/hooks/useLanguage";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const MapMarkerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const socials = [
  { icon: FacebookIcon, href: "https://www.facebook.com", label: "Facebook" },
  { icon: HomeIcon, href: "https://nextdoor.com", label: "Nextdoor" },
  { icon: MapMarkerIcon, href: "https://www.google.com/business", label: "Google My Business" },
];

/** Collapsible section exclusively for mobile view */
function MobileCollapsibleSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 py-3">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between w-full py-1 text-left cursor-pointer"
        aria-expanded={open}
      >
        <span className="text-xs uppercase tracking-widest text-[#FFD54F] font-bold">
          {title}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-[#D4AF37] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-3 pb-1">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { label: t("Home", "Inicio"), href: "/" },
    { label: t("About Us", "Sobre Nosotros"), href: "#" },
    { label: t("Services", "Servicios"), href: "#" },
    { label: t("Gallery", "Galería"), href: "#" },
    { label: t("Testimonials", "Testimonios"), href: "#" },
    { label: t("FAQs", "Preguntas Frecuentes"), href: "/#" },
    { label: t("Contact", "Contacto"), href: "#" },
  ];

  const servicesLinks = [
    { label: t("Lawn Care", "Cuidado de Césped"), href: "#" },
    { label: t("Landscaping", "Paisajismo"), href: "#" },
    { label: t("Tree Removal", "Remoción de Árboles"), href: "#" },
    { label: t("Brush Cutting", "Corte de Maleza"), href: "#" },
    { label: t("Gravel Driveways", "Entradas de Grava"), href: "#" },
    { label: t("Seeding & Dirt Work", "Siembra y Tierra"), href: "#" },
    { label: t("Office Cleaning", "Limpieza de Oficinas"), href: "#" },
    { label: t("Wherehouse Cleaning", "Limpieza de Almacén"), href: "#" },
    { label: t("Commercial & Residential", "Comercial y Residencial"), href: "#" },
  ];

  return (
    <footer className="relative bg-[#0b140d] text-white overflow-hidden border-t border-[#D4AF37]/30">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid opacity-[0.02] pointer-events-none" />

      {/* Decorative Blur Blobs */}
      <div className="absolute -top-40 left-1/4 w-[400px] h-[400px] bg-[#2E7D32]/10 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: "8s" }} />
      <div className="absolute -bottom-40 right-10 w-[350px] h-[350px] bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: "10s" }} />

      <div className="relative mx-auto w-[90%] max-w-7xl pt-10 pb-8 sm:pt-14 sm:pb-10 lg:py-20 z-10 text-left">

        {/* ── MOBILE VERSION (UNTOUCHED) ────────────────────────── */}
        <div className="block lg:hidden">
          {/* Logo & Description */}
          <div className="mb-4">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logoImg} alt="Brown Lawn Care Logo" className="h-14 w-auto object-contain" />
            </Link>

            <p className="text-[13px] text-slate-300 leading-relaxed font-medium mb-4">
              {t(
                "For over 15 years, Roy Lee Brown and our family-owned team have provided licensed, insured, and bonded lawn care, landscaping, and cleaning across Horn Lake and the 50-mile radius.",
                "Durante más de 15 años, Roy Lee Brown y nuestro equipo familiar han brindado servicios autorizados y asegurados en Horn Lake."
              )}
            </p>

            {/* Phone CTA */}
            <a
              href="tel:6625711048"
              className="flex items-center gap-3 w-full bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] border border-[#D4AF37]/50 rounded-2xl px-4 py-3 mb-4 shadow-lg"
            >
              <div className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <Phone className="h-4 w-4 text-[#FFD54F] animate-bounce" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase tracking-widest text-[#FFD54F]/80 font-bold">24/7 Emergency Line</span>
                <span className="font-black text-white text-[15px] tracking-tight leading-tight">(662) 571-1048</span>
              </div>
            </a>

            {/* Trust Badges - 2x2 grid */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              {["Licensed", "Insured", "Bonded", "15 Yrs Exp."].map((badge) => (
                <div key={badge} className="flex items-center gap-2 bg-[#1B5E20]/60 border border-[#D4AF37]/40 rounded-xl px-3 py-2 text-[10px] font-bold text-[#FFD54F] uppercase tracking-wide">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FFD54F] animate-pulse shrink-0" />
                  ✓ {badge}
                </div>
              ))}
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-slate-400">{t("Follow Us:", "Síganos:")}</span>
              {socials.map(({ icon: Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid place-items-center h-9 w-9 rounded-xl bg-slate-900/80 border border-[#D4AF37]/30 text-[#FFD54F] hover:bg-[#2E7D32]/40 active:scale-95 transition-all shadow-sm"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Collapsible Sections */}
          <MobileCollapsibleSection title={t("Quick Links", "Enlaces Rápidos")}>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link to={href} className="text-xs text-slate-300 hover:text-[#FFD54F] font-semibold block">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </MobileCollapsibleSection>

          <MobileCollapsibleSection title={t("Services", "Servicios")}>
            <ul className="space-y-2.5">
              {servicesLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link to={href} className="text-xs text-slate-300 hover:text-[#FFD54F] font-semibold block">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </MobileCollapsibleSection>

          <MobileCollapsibleSection title={t("Contact Us", "Contáctenos")}>
            <ul className="space-y-3 text-xs">
              <li>
                <a href="tel:6625711048" className="flex items-center gap-2.5 text-slate-300">
                  <Phone className="h-3.5 w-3.5 text-[#FFD54F] shrink-0" />
                  <span>(662) 571-1048</span>
                </a>
              </li>
              <li>
                <a href="mailto:royleebrown@ymail.com" className="flex items-center gap-2.5 text-slate-300 break-all">
                  <Mail className="h-3.5 w-3.5 text-[#FFD54F] shrink-0" />
                  <span>royleebrown@ymail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <MapPin className="h-3.5 w-3.5 text-[#FFD54F] shrink-0" />
                  <span>Alden Lake Dr W, Horn Lake, MS</span>
                </div>
              </li>
            </ul>
          </MobileCollapsibleSection>

          <MobileCollapsibleSection title={t("Business Hours", "Horario Comercial")}>
            <div className="bg-[#152217]/90 border border-[#D4AF37]/40 rounded-xl p-3 text-xs text-slate-300 leading-relaxed font-semibold space-y-1">
              <span className="text-[#FFD54F] font-black uppercase tracking-wider block mb-1 text-[10px]">
                🚨 24/7 Emergency Available
              </span>
              <p>Mon–Fri: 10:00 AM – 7:00 PM</p>
              <p>Saturday: 3:00 PM – 8:00 PM</p>
              <p className="text-slate-400">Sunday: Closed</p>
            </div>
          </MobileCollapsibleSection>
        </div>

        {/* ── DESKTOP VERSION (REFINED & BEAUTIFUL) ──────────────── */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-12 items-start">

          {/* Col 1: Brand Info (col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-block">
              <img src={logoImg} alt="Brown Lawn Care Logo" className="h-16 w-auto object-contain" />
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm font-medium">
              {t(
                "For over 15 years, Roy Lee Brown and our family-owned team have provided licensed, insured, and bonded lawn care, landscaping, and cleaning across Horn Lake and the 50-mile radius.",
                "Durante más de 15 años, Roy Lee Brown y nuestro equipo familiar han brindado servicios autorizados y asegurados en Horn Lake."
              )}
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-slate-400">{t("Follow Us:", "Síganos:")}</span>
              {socials.map(({ icon: Icon, href, label }, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid place-items-center h-9 w-9 rounded-xl bg-slate-900/90 border border-[#D4AF37]/35 text-[#FFD54F] hover:bg-[#2E7D32] hover:text-white transition-all shadow-sm"
                >
                  <Icon />
                </motion.a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {["Licensed", "Insured", "Bonded", "15 Years Experience"].map((badge) => (
                <div key={badge} className="flex items-center gap-1.5 bg-[#1B5E20]/60 border border-[#D4AF37]/40 rounded-xl px-3 py-1.5 text-[10px] font-bold text-[#FFD54F] uppercase tracking-wider">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#FFD54F] animate-pulse" />
                  ✓ {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links (col-span-2) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-widest text-[#FFD54F] font-extrabold mb-6">
              {t("Quick Links", "Enlaces Rápidos")}
            </h3>
            <ul className="space-y-3 text-sm font-semibold">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-slate-300 hover:text-[#FFD54F] transition-colors inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 text-[#2E7D32] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services (col-span-3) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-widest text-[#FFD54F] font-extrabold mb-6">
              {t("Our Services", "Nuestros Servicios")}
            </h3>
            <ul className="space-y-3 text-sm font-semibold">
              {servicesLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="text-slate-300 hover:text-[#FFD54F] transition-colors inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 text-[#2E7D32] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Hours (col-span-3) */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#FFD54F] font-extrabold mb-5">
                {t("Contact Us", "Contáctenos")}
              </h3>
              <ul className="space-y-3.5 text-sm">
                <li>
                  <a
                    href="tel:6625711048"
                    className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
                  >
                    <div className="h-8 w-8 rounded-lg bg-[#2E7D32]/30 border border-[#D4AF37]/40 flex items-center justify-center text-[#FFD54F] group-hover:bg-[#2E7D32] transition-all shrink-0">
                      <Phone className="h-3.5 w-3.5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">Phone</span>
                      <span className="font-semibold text-white tracking-tight text-xs">(662) 571-1048</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:royleebrown@ymail.com"
                    className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
                  >
                    <div className="h-8 w-8 rounded-lg bg-[#2E7D32]/30 border border-[#D4AF37]/40 flex items-center justify-center text-[#FFD54F] group-hover:bg-[#2E7D32] transition-all shrink-0">
                      <Mail className="h-3.5 w-3.5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">Email</span>
                      <span className="font-semibold text-white tracking-tight text-xs truncate">royleebrown@ymail.com</span>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-3 text-slate-300">
                    <div className="h-8 w-8 rounded-lg bg-[#2E7D32]/30 border border-[#D4AF37]/40 flex items-center justify-center text-[#FFD54F] shrink-0">
                      <MapPin className="h-3.5 w-3.5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">{t("Address", "Dirección")}</span>
                      <span className="font-semibold text-white tracking-tight text-xs leading-snug">
                        Alden Lake Dr W, Horn Lake, MS
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Hours card */}
            <div className="bg-[#152217]/90 border border-[#D4AF37]/40 rounded-2xl p-4">
              <span className="text-[#FFD54F] font-black uppercase tracking-wider block mb-2 text-[10px] flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD54F] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFD54F]" />
                </span>
                🚨 24/7 Emergency Service
              </span>
              <div className="text-xs text-slate-300 leading-relaxed font-semibold space-y-1">
                <p>Mon–Fri: 10:00 AM – 7:00 PM</p>
                <p>Saturday: 3:00 PM – 8:00 PM</p>
                <p className="text-slate-400">Sunday: Closed</p>
              </div>
            </div>
          </div>

        </div>

        {/* ── BOTTOM BAR ───────────────────────────────────────── */}
        <div className="mt-10 sm:mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 order-2 sm:order-1 text-xs text-slate-400 font-semibold">
            <p>
              © 2026 Brown Lawn Care &amp; Cleaning Service, LLC.{" "}
              {t("Family Owned & Operated Since 2009.", "Familiares y Operados Desde 2009.")}
            </p>
            <span className="hidden sm:inline text-white/20">|</span>
            <p className="text-slate-400">
              {t("Design & Developed by ", "Diseñado y Desarrollado por ")}
              <span className="text-[#FFD54F] font-bold">StellR IT LLC</span>
            </p>
          </div>

          <div className="flex items-center gap-6 order-1 sm:order-2">
            <p className="text-xs text-slate-400 font-semibold hidden sm:block">
              ✓ Licensed · Insured · Bonded · 15 Years Experience
            </p>
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="text-xs text-slate-300 hover:text-white transition-colors font-bold flex items-center gap-2 cursor-pointer select-none"
            >
              <span>{t("Back to Top", "Volver Arriba")}</span>
              <ArrowRight className="h-4 w-4 -rotate-90 text-[#FFD54F]" />
            </motion.button>
          </div>
        </div>

      </div>
    </footer>
  );
}
