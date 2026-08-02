import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import {
  Menu,
  Phone,
  X,
  Mail,
  MapPin,
  Clock,
  ChevronDown,
  Home,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  Scissors,
  Trees,
  Trash2,
  Truck,
  AlertTriangle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/logo.png";
import bbbLogo from "@/assets/bbb.svg";
import { useLanguage } from "@/hooks/useLanguage";

export function Header() {
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { to: "/", label: t("Home", "Inicio") },
    { to: "#", label: t("About Us", "Sobre Nosotros") },
    { to: "/services", label: t("Services", "Servicios") },
    { to: "#", label: t("Gallery", "Galería") },
    { to: "#", label: t("Testimonials", "Testimonios") },
    { to: "#", label: t("Contact Us", "Contáctenos") },
  ];

  const serviceLinks = [
    {
      to: "#",
      l: t("Lawn Mowing & Maintenance", "Cortado y Cuidado de Césped"),
      desc: t("Weekly mowing, edging, trimming & yard upkeep", "Cortado semanal, orillado, podado y cuidado"),
      icon: Scissors,
      tag: "Popular",
    },
    {
      to: "#",
      l: t("Landscaping & Design", "Paisajismo y Diseño"),
      desc: t("Mulch, sod installation, flower beds & design", "Mantillo, césped en rollo y jardinería"),
      icon: Trees,
      tag: "Featured",
    },
    {
      to: "#",
      l: t("Tree & Brush Removal", "Remoción de Árboles y Maleza"),
      desc: t("Professional tree cutting, brush clearing & haul-off", "Corte de árboles, maleza y retiro"),
      icon: Trash2,
      tag: "Safe & Fast",
    },
    {
      to: "#",
      l: t("Gravel & Dirt Work", "Trabajos de Grava y Tierra"),
      desc: t("Gravel driveway repair, grading, topsoil & leveling", "Reparación de entradas, nivelación y grava"),
      icon: Truck,
      tag: "Heavy-Duty",
    },
    {
      to: "#",
      l: t("Office & Commercial Cleaning", "Limpieza de Oficinas y Comercial"),
      desc: t("Scheduled janitorial, office & commercial cleaning", "Limpieza programada de oficinas y comercios"),
      icon: Sparkles,
      tag: "Commercial",
    },
    {
      to: "#",
      l: t("Residential & Wherehouse Cleaning", "Limpieza Residencial y Almacén"),
      desc: t("Deep home cleaning, move-in/out & warehouses", "Limpieza profunda, mudanzas y almacenes"),
      icon: Home,
      tag: "Residential",
    },
  ];

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col w-full bg-transparent pointer-events-none select-none">

      {/* ── TOP UTILITY BAR (Dark #111111, Primary Green #2E7D32 & Yellow #FFD54F) ────── */}
      <div
        className={cn(
          "w-full bg-[#111111] text-white border-b border-[#D4AF37]/30 px-4 sm:px-6 lg:px-8 pointer-events-auto transition-all duration-300 origin-top overflow-hidden",
          scrolled ? "max-h-0 py-0 opacity-0 border-none" : "max-h-14 py-2 opacity-100"
        )}
      >
        <div className="mx-auto max-w-7xl flex flex-row justify-between items-center w-full gap-4">

          {/* Left: Emergency Status & License */}
          <div className="flex items-center gap-4 text-slate-300 min-w-0">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD54F] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FFD54F]"></span>
              </span>
              <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-[#FFD54F]">
                {t("24/7 Emergency Service", "Servicio de Emergencia 24/7")}
              </span>
            </div>

            <div className="hidden md:flex items-center gap-1.5 border-l border-white/15 pl-4 text-[11px] font-semibold text-[#D4AF37]">
              <ShieldCheck className="h-3.5 w-3.5 text-[#2E7D32]" />
              <span>Licensed · Insured · Bonded · 15 Years Exp.</span>
            </div>
          </div>

          {/* Right: Office Hours & Language Switcher */}
          <div className="flex items-center gap-4 text-xs shrink-0">
            <div className="hidden sm:flex items-center gap-1.5 text-slate-300 font-semibold text-[11px]">
              <Clock className="h-3.5 w-3.5 text-[#D4AF37]" />
              <span>Mon–Fri: 10am–7pm | Sat: 3pm–8pm</span>
            </div>

            <div className="flex items-center gap-1 bg-[#1B5E20]/60 border border-[#D4AF37]/40 rounded-full px-1.5 py-0.5">
              <button
                onClick={() => setLanguage("en")}
                className={cn(
                  "flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold transition-all cursor-pointer",
                  language === "en"
                    ? "bg-[#2E7D32] text-[#FFD54F] shadow-sm border border-[#D4AF37]/40"
                    : "text-slate-300 hover:text-white"
                )}
              >
                <span>🇺🇸</span>
                <span>English</span>
              </button>
              <button
                onClick={() => setLanguage("es")}
                className={cn(
                  "flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-extrabold transition-all cursor-pointer",
                  language === "es"
                    ? "bg-[#2E7D32] text-[#FFD54F] shadow-sm border border-[#D4AF37]/40"
                    : "text-slate-300 hover:text-white"
                )}
              >
                <span>🇲🇽</span>
                <span>Español</span>
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* ── MAIN NAVIGATION BAR ───────────────────────────────── */}
      <div
        className={cn(
          "w-full transition-all duration-300 px-3 sm:px-4 lg:px-8 pointer-events-auto",
          scrolled
            ? "py-2 bg-[#FFFFFF]/98 backdrop-blur-md shadow-md border-b border-[#D4AF37]/30"
            : "py-3 bg-[#F7F7F7]/95 backdrop-blur-md border-b border-[#D4AF37]/20 shadow-sm"
        )}
      >
        <div className="mx-auto max-w-7xl flex items-center justify-between w-full gap-4">

          {/* ── MOBILE NAVBAR HEADER ───────────────────────────────── */}
          <div className="flex items-center justify-between w-full md:hidden">
            <Link to="/" className="flex items-center shrink-0">
              <img src={logoImg} alt="Brown Lawn Care Logo" className="h-12 sm:h-14 w-auto object-contain" />
            </Link>

            <div className="flex items-center gap-2">
              <a
                href="tel:6625711048"
                className="flex items-center gap-1.5 bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] text-[#FFD54F] text-[11px] font-extrabold rounded-full px-3.5 py-1.5 border border-[#D4AF37]/50 shadow-sm active:scale-95 transition-transform"
              >
                <Phone className="h-3.5 w-3.5 fill-current" />
                <span className="hidden xs:inline">(662) 571-1048</span>
                <span className="inline xs:hidden">Call</span>
              </a>
              <button
                aria-label="Toggle navigation menu"
                onClick={() => setOpen((v) => !v)}
                className="grid h-9 w-9 place-items-center rounded-xl border border-[#D4AF37]/40 bg-[#FFFFFF] text-[#111111] transition hover:border-[#2E7D32] active:scale-95"
              >
                {open ? <X className="h-5 w-5 text-[#2E7D32]" /> : <Menu className="h-5 w-5 text-[#2E7D32]" />}
              </button>
            </div>
          </div>

          {/* ── DESKTOP UNIFIED HEADER: BIGGER LOGO LEFT | MENU & CTA RIGHT ── */}
          <div className="hidden md:flex items-center justify-between w-full gap-6">

            {/* Left: Prominent Extra Large Brand Logo */}
            <Link to="/" className="flex items-center shrink-0 group">
              <img
                src={logoImg}
                alt="Brown Lawn Care & Cleaning Service Logo"
                className="h-16 lg:h-20 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </Link>

            {/* Right Side Stack: Nav Items Pill + Phone Button + BBB Logo */}
            <div className="flex items-center gap-3 lg:gap-4 shrink-0 ml-auto">

              {/* Nav Items Pill */}
              <nav className="rounded-full bg-[#FFFFFF] border border-[#D4AF37]/40 px-3 lg:px-4 py-1.5 flex items-center gap-1.5 lg:gap-2.5 shadow-sm">
                {navItems.map((item) => {
                  const active = pathname === item.to;

                  if (item.to === "/services") {
                    return (
                      <div key={item.label} className="relative group/nav">
                        <Link
                          to="/services"
                          className={cn(
                            "flex items-center gap-1 rounded-full px-2.5 lg:px-3 py-1 text-[13px] font-bold uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer",
                            active
                              ? "text-[#2E7D32] bg-[#2E7D32]/10 border border-[#D4AF37]/30"
                              : "text-[#111111] hover:text-[#2E7D32]"
                          )}
                          style={{ fontSize: "13px", fontWeight: 700, textTransform: "uppercase" }}
                        >
                          {t("Services", "Servicios")}
                          <ChevronDown className="h-3.5 w-3.5 text-[#D4AF37] group-hover/nav:rotate-180 transition-transform duration-200" />
                        </Link>

                        {/* ── PREMIUM PIXEL-PERFECT SUBMENU DROPDOWN ──────────────── */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-full z-50 pt-3 opacity-0 invisible pointer-events-none group-hover/nav:opacity-100 group-hover/nav:visible group-hover/nav:pointer-events-auto transition-all duration-300 transform group-hover/nav:translate-y-0 translate-y-2">
                          <div className="w-[640px] max-w-[calc(100vw-32px)] bg-white border-2 border-[#D4AF37]/50 rounded-[28px] shadow-[0_25px_60px_-15px_rgba(17,17,17,0.25)] p-5 sm:p-6 flex flex-col gap-4.5 relative overflow-hidden backdrop-blur-xl">

                            {/* Subtle background glow blobs */}
                            <div className="absolute top-0 right-0 w-48 h-48 bg-[#2E7D32]/10 rounded-full blur-2xl pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-2xl pointer-events-none" />

                            {/* Submenu Top Header Bar */}
                            <div className="flex justify-between items-center border-b border-slate-100 pb-3.5 relative z-10">
                              <div className="flex items-center gap-2">
                                <span className="p-1 rounded-lg bg-[#2E7D32]/10 text-[#2E7D32] border border-[#2E7D32]/30">
                                  <Sparkles className="w-4 h-4 text-[#2E7D32]" />
                                </span>
                                <span className="text-[11px] font-black text-[#111111] uppercase tracking-widest">
                                  {t("Complete Property & Cleaning Solutions", "Soluciones de Propiedad y Limpieza")}
                                </span>
                              </div>
                              <Link
                                to="#"
                                className="text-[11px] font-extrabold uppercase text-[#2E7D32] hover:text-[#1B5E20] tracking-wider transition-colors flex items-center gap-1 group/all"
                              >
                                <span>{t("Explore All Services", "Ver Todos Los Servicios")}</span>
                                <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover/all:translate-x-1 transition-transform" />
                              </Link>
                            </div>

                            {/* 2-Column Pixel-Perfect Service Cards Grid */}
                            <div className="grid grid-cols-2 gap-3 relative z-10">
                              {serviceLinks.map((srv) => (
                                <Link
                                  key={srv.l}
                                  to={srv.to}
                                  className="group/item flex items-start gap-3.5 rounded-2xl p-3 bg-[#F7F7F7]/80 hover:bg-white border border-slate-200/80 hover:border-[#D4AF37] hover:shadow-md transition-all duration-300 text-left relative overflow-hidden"
                                >
                                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2E7D32]/15 to-[#1B5E20]/20 group-hover/item:from-[#2E7D32] group-hover/item:to-[#1B5E20] border border-[#D4AF37]/40 flex items-center justify-center text-[#2E7D32] group-hover/item:text-[#FFD54F] transition-all duration-300 shrink-0 shadow-xs group-hover/item:scale-105">
                                    <srv.icon className="h-5 w-5" />
                                  </div>
                                  <div className="flex flex-col text-left min-w-0 pr-1">
                                    <div className="flex items-center gap-1.5">
                                      <span className="text-[13px] font-extrabold text-[#111111] group-hover/item:text-[#2E7D32] transition-colors leading-tight truncate">
                                        {srv.l}
                                      </span>
                                    </div>
                                    <span className="text-[10px] text-slate-600 font-medium leading-normal mt-1 line-clamp-2">
                                      {srv.desc}
                                    </span>
                                  </div>
                                </Link>
                              ))}
                            </div>

                            {/* Emergency Dispatch Banner inside Submenu */}
                            <div className="bg-gradient-to-r from-[#111111] to-[#1a2e1d] border border-[#D4AF37]/50 rounded-2xl p-4 flex justify-between items-center gap-4 relative z-10 shadow-sm">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-[#2E7D32] border border-[#D4AF37]/40 flex items-center justify-center text-[#FFD54F] shrink-0 shadow-md">
                                  <AlertTriangle className="h-5 w-5 animate-pulse text-[#FFD54F]" />
                                </div>
                                <div className="flex flex-col text-left">
                                  <span className="text-[12px] font-extrabold text-white">
                                    {t("Storm Damage or Fallen Trees on Property?", "¿Daños por Tormenta o Árboles Caídos?")}
                                  </span>
                                  <span className="text-[10px] text-slate-300 font-semibold mt-0.5">
                                    {t("24/7 emergency dispatch across Horn Lake & 50-mi radius.", "Despacho de emergencia 24/7 en Horn Lake y 50 millas.")}
                                  </span>
                                </div>
                              </div>
                              <a
                                href="tel:6625711048"
                                className="bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] hover:from-[#1B5E20] hover:to-[#2E7D32] text-[#FFD54F] text-[11px] font-black uppercase tracking-wider px-4 py-2.5 rounded-xl transition-all border border-[#D4AF37]/50 shadow-md whitespace-nowrap active:scale-95 flex items-center gap-1.5"
                              >
                                <span>{t("Call (662) 571-1048", "Llamar 24/7")}</span>
                                <ArrowRight className="w-3.5 h-3.5 text-[#FFD54F]" />
                              </a>
                            </div>

                          </div>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.label}
                      to={item.to}
                      className={cn(
                        "rounded-full px-2.5 lg:px-3 py-1 text-[13px] font-bold uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer",
                        active
                          ? "text-[#2E7D32] bg-[#2E7D32]/10 border border-[#D4AF37]/30"
                          : "text-[#111111] hover:text-[#2E7D32]"
                      )}
                      style={{ fontSize: "13px", fontWeight: 700, textTransform: "uppercase" }}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              {/* Call Direct CTA Button */}
              <a
                href="tel:6625711048"
                className="bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] hover:from-[#1B5E20] hover:to-[#2E7D32] text-white flex items-center gap-2.5 shadow-[0_8px_25px_-6px_rgba(46,125,50,0.5)] hover:shadow-[0_12px_30px_-4px_rgba(46,125,50,0.7)] transition-all duration-300 shrink-0 px-4.5 py-2.5 border border-[#D4AF37]/50 active:scale-95"
                style={{ borderRadius: "50px 0px 50px 50px" }}
              >
                <div className="w-7 h-7 rounded-full bg-[#FFFFFF]/20 flex items-center justify-center border border-[#FFD54F]/40 shrink-0 shadow-xs">
                  <Phone className="h-3.5 w-3.5 fill-current text-[#FFD54F] animate-pulse" />
                </div>
                <div className="flex flex-col text-left leading-none">
                  <span className="text-[9px] font-black uppercase tracking-wider text-[#FFD54F]">
                    {t("Call Direct", "Llámenos")}
                  </span>
                  <span className="text-xs lg:text-sm font-black text-white mt-0.5 tracking-tight">
                    (662) 571-1048
                  </span>
                </div>
              </a>

              {/* BBB Accredited Logo */}
              <a
                href="https://www.bbb.org/us/ms/horn-lake/profile/lawn-care/brown-lawn-care-cleaning-service-llc-0543-44186181"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 hidden lg:flex items-center pl-1 group/bbb cursor-pointer"
                title="BBB Accredited Business Profile"
              >
                <img
                  src={bbbLogo}
                  alt="BBB Accredited Business"
                  className="h-10 lg:h-12 w-auto object-contain drop-shadow-xs group-hover/bbb:scale-105 transition-transform duration-300"
                />
              </a>

            </div>

          </div>

        </div>
      </div>

      {/* ── MOBILE MENU DRAWER ─────────────────────────────────── */}
      <div
        className={cn(
          "md:hidden overflow-y-auto transition-[max-height,opacity] duration-300 bg-[#FFFFFF] pointer-events-auto shadow-2xl border-t border-[#D4AF37]/30",
          open ? "max-h-[calc(100vh-70px)] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-5 py-6 flex flex-col gap-6 text-left">

          {/* Nav links */}
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => {
              const active = pathname === item.to;

              if (item.to === "/services") {
                return (
                  <div key="services-mobile" className="space-y-1">
                    <button
                      onClick={() => setServicesOpen((v) => !v)}
                      className="w-full flex items-center justify-between rounded-2xl px-4 py-3 text-[13px] font-bold uppercase tracking-wider text-[#111111] hover:bg-[#F7F7F7] transition"
                      style={{ fontSize: "13px", fontWeight: 700, textTransform: "uppercase" }}
                    >
                      <span>{t("Services", "Servicios")}</span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 text-[#D4AF37] transition-transform duration-300",
                          servicesOpen && "rotate-180"
                        )}
                      />
                    </button>

                    {servicesOpen && (
                      <div className="ml-4 pl-4 border-l-2 border-[#2E7D32]/30 space-y-1.5 py-1">
                        {serviceLinks.map((srv) => (
                          <Link
                            key={srv.l}
                            to={srv.to}
                            className="flex items-center gap-2.5 py-2 px-2 rounded-xl text-[13px] font-bold text-[#111111] hover:text-[#2E7D32] hover:bg-[#F7F7F7] transition"
                            style={{ fontSize: "13px", fontWeight: 700 }}
                          >
                            <srv.icon className="h-4 w-4 text-[#2E7D32] shrink-0" />
                            <span>{srv.l}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-[13px] font-bold uppercase tracking-wider transition-colors",
                    active
                      ? "bg-[#2E7D32]/10 text-[#2E7D32] border border-[#D4AF37]/30"
                      : "text-[#111111] hover:bg-[#F7F7F7]"
                  )}
                  style={{ fontSize: "13px", fontWeight: 700, textTransform: "uppercase" }}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Quick Contact & Emergency Call Card */}
          <div className="border-t border-[#D4AF37]/20 pt-5 flex flex-col gap-4">
            <a
              href="tel:6625711048"
              className="flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] text-[#FFD54F] py-3.5 text-sm font-black border border-[#D4AF37]/40 shadow-lg transition"
            >
              <Phone className="h-4 w-4 fill-current" />
              <span>(662) 571-1048</span>
            </a>

            <div className="flex flex-col gap-2.5 text-xs text-[#6D4C41] font-semibold px-2">
              <a
                href="mailto:royleebrown@ymail.com"
                className="flex items-center gap-2.5 hover:text-[#2E7D32] transition"
              >
                <Mail className="h-4 w-4 text-[#2E7D32] shrink-0" />
                <span className="truncate">royleebrown@ymail.com</span>
              </a>
              <div className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-[#2E7D32] shrink-0" />
                <span>Alden Lake Dr W, Horn Lake, MS</span>
              </div>
            </div>

            {/* Mobile Language Switcher */}
            <div className="flex items-center justify-center gap-2 bg-[#F7F7F7] border border-[#D4AF37]/30 rounded-2xl p-2 mt-2">
              <button
                onClick={() => setLanguage("en")}
                className={cn(
                  "flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer",
                  language === "en"
                    ? "bg-[#2E7D32] text-[#FFD54F] shadow-sm border border-[#D4AF37]/40"
                    : "text-[#111111] hover:bg-white"
                )}
              >
                <span>🇺🇸</span>
                <span>English</span>
              </button>
              <button
                onClick={() => setLanguage("es")}
                className={cn(
                  "flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-black transition-all cursor-pointer",
                  language === "es"
                    ? "bg-[#2E7D32] text-[#FFD54F] shadow-sm border border-[#D4AF37]/40"
                    : "text-[#111111] hover:bg-white"
                )}
              >
                <span>🇲🇽</span>
                <span>Español</span>
              </button>
            </div>
          </div>

        </div>
      </div>

    </header>
  );
}
