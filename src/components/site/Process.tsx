import { motion } from "framer-motion";
import {
  CalendarCheck,
  Search,
  FileText,
  Sparkles,
  BadgeCheck,
  ArrowRight
} from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

/* ── Custom Animated Business SVG Icons for Start & Finish ────── */

/** Left (Start) Icon: Property Care & Lawn Assessment with Animated Leaf & Sparkle */
const AnimatedStartIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer Glowing Glass Frame */}
    <rect width="54" height="54" rx="18" fill="url(#startBg)" />
    <rect x="1" y="1" width="52" height="52" rx="17" stroke="#FFD54F" strokeWidth="1.5" strokeOpacity="0.7" />

    {/* Animated Sun / Sparkle in background */}
    <g className="animate-spin-slow origin-center" style={{ transformOrigin: "38px 14px" }}>
      <circle cx="38" cy="14" r="5" fill="#FFD54F" opacity="0.9" />
      <path d="M38 6V8M38 20V22M30 14H32M44 14H46M32.3 8.3L33.7 9.7M42.3 18.3L43.7 19.7M32.3 19.7L33.7 18.3M42.3 9.7L43.7 8.3" stroke="#FFD54F" strokeWidth="1.2" strokeLinecap="round" />
    </g>

    {/* House Silhouette */}
    <path d="M13 26L25 15L37 26" stroke="#FFD54F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M17 25V36C17 37.1 17.9 38 19 38H31C32.1 38 33 37.1 33 36V25" stroke="#FFFFFF" strokeWidth="2" opacity="0.9" />

    {/* Animated Grass Blades */}
    <g className="animate-bounce-gentle" style={{ transformOrigin: "25px 38px" }}>
      <path d="M18 38C18 30 22 25 22 25C22 25 24 32 20 38" fill="#81C784" stroke="#FFD54F" strokeWidth="1" />
      <path d="M25 38C25 27 30 21 30 21C30 21 32 31 27 38" fill="#4CAF50" stroke="#FFD54F" strokeWidth="1.2" />
      <path d="M32 38C32 32 35 27 35 27C35 27 36 33 34 38" fill="#81C784" stroke="#FFD54F" strokeWidth="1" />
    </g>

    <defs>
      <linearGradient id="startBg" x1="0" y1="0" x2="54" y2="54" gradientUnits="userSpaceOnUse">
        <stop stopColor="#1B5E20" />
        <stop offset="1" stopColor="#2E7D32" />
      </linearGradient>
    </defs>
  </svg>
);

/** Right (Finish) Icon: Quality Shield Guarantee with Animated Pulse & Checkmark */
const AnimatedFinishIcon = () => (
  <svg className="w-12 h-12" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer Glowing Frame */}
    <rect width="54" height="54" rx="18" fill="url(#finishBg)" />
    <rect x="1" y="1" width="52" height="52" rx="17" stroke="#D4AF37" strokeWidth="1.5" strokeOpacity="0.8" />

    {/* Shield Outline */}
    <path d="M27 10L41 15V26C41 34.5 34.5 42 27 45C19.5 42 13 34.5 13 26V15L27 10Z" fill="#1B5E20" stroke="#D4AF37" strokeWidth="2" />

    {/* Checkmark with Draw Glow */}
    <path d="M20 26.5L25 31.5L34 21.5" stroke="#FFD54F" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />

    {/* Floating Animated Sparkles */}
    <g className="animate-pulse">
      <path d="M41 9L41.9 11.2L44.1 12.1L41.9 13L41 15.2L40.1 13L37.9 12.1L40.1 11.2L41 9Z" fill="#FFD54F" />
      <path d="M12 37L12.7 38.6L14.3 39.3L12.7 40L12 41.6L11.3 40L9.7 39.3L11.3 38.6L12 37Z" fill="#FFD54F" />
    </g>

    <defs>
      <linearGradient id="finishBg" x1="0" y1="0" x2="54" y2="54" gradientUnits="userSpaceOnUse">
        <stop stopColor="#0A140B" />
        <stop offset="1" stopColor="#1B5E20" />
      </linearGradient>
    </defs>
  </svg>
);

export function Process() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: CalendarCheck,
      title: t("1. Schedule & Request", "1. Programar y Solicitar"),
      desc: t("Book online in 60 seconds or call our team. Flexible scheduling for lawn care, landscaping & cleaning.", "Reserve en línea en 60 segundos o llame a nuestro equipo. Horarios flexibles para todos los servicios."),
    },
    {
      icon: Search,
      title: t("2. On-Site Inspection", "2. Inspección en el Sitio"),
      desc: t("Our experts evaluate your property, lawn condition, tree trimming needs, or cleaning scope in detail.", "Nuestros expertos evalúan su propiedad, el estado del césped, la poda de árboles o la limpieza."),
    },
    {
      icon: FileText,
      title: t("3. Transparent Estimate", "3. Cotización Transparente"),
      desc: t("Upfront, itemized quote with no hidden fees or surprises. You know exact costs before work begins.", "Cotización clara y detallada por adelantado sin cargos ocultos. Sabrá los costos exactos."),
    },
    {
      icon: Sparkles,
      title: t("4. Professional Execution", "4. Ejecución Profesional"),
      desc: t("Licensed, insured & bonded team executes clean, efficient, top-tier craftsmanship on your property.", "Equipo licenciado y asegurado ejecuta un trabajo eficiente y de alta calidad en su propiedad."),
    },
    {
      icon: BadgeCheck,
      title: t("5. Cleanup & Guarantee", "5. Limpieza y Garantía"),
      desc: t("Immaculate debris cleanup, final property walkthrough, and 100% satisfaction guarantee.", "Limpieza impecable de residuos, revisión final de la propiedad y garantía de satisfacción 100%."),
    },
  ];

  const desktopPositions = [
    { left: "20%", top: "50px" },
    { left: "50%", top: "50px" },
    { left: "80%", top: "50px" },
    { left: "20%", top: "310px" },
    { left: "50%", top: "310px" },
  ];

  return (
    <section className="relative pt-12 sm:pt-16 pb-[40px] lg:pt-20 lg:pb-[40px] overflow-hidden bg-white border-y border-slate-100" style={{ paddingBottom: "40px" }}>

      {/* Background grid texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #2E7D32 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Custom CSS Animations */}
      <style>{`
        @keyframes sparkFlow {
          0%   { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 45; }
        }
        @keyframes verticalElectricFlow {
          0%   { background-position: 0 0; }
          100% { background-position: 0 -40px; }
        }
        @keyframes spinSlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes bounceGentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        .spark-flow { stroke-dasharray: 12 24; animation: sparkFlow 1.8s infinite linear; }
        .animate-spin-slow { animation: spinSlow 12s linear infinite; }
        .animate-bounce-gentle { animation: bounceGentle 3s ease-in-out infinite; }
        .mobile-electric-flow {
          background: linear-gradient(to bottom, #2E7D32 0%, #2E7D32 30%, #FFD54F 50%, #2E7D32 70%, #2E7D32 100%);
          background-size: 100% 40px;
          animation: verticalElectricFlow 1.2s infinite linear;
        }
      `}</style>

      <div className="mx-auto w-[90%] max-w-7xl relative z-10">

        {/* ── Section Header ──────────────────────────────── */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-10 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-2 bg-[#2E7D32]/10 border border-[#2E7D32]/30 text-[#2E7D32] rounded-full px-5 py-1.5 text-xs font-black uppercase tracking-widest mb-5">
            <Sparkles className="w-3.5 h-3.5 text-[#2E7D32]" />
            {t("How We Work", "Cómo Trabajamos")}
            <Sparkles className="w-3.5 h-3.5 text-[#2E7D32]" />
          </span>

          <h2
            className="text-slate-900 tracking-tight leading-[1.15] font-black"
            style={{ fontSize: "clamp(22px, 5vw, 36px)", marginTop: "-15px", marginBottom: "10px" }}
          >
            {t("We Complete Every ", "Completamos Cada ")}
            <span className="bg-gradient-to-r from-[#2E7D32] via-[#1B5E20] to-[#2E7D32] bg-clip-text text-transparent">
              {t("Step Carefully.", "Paso con Cuidado.")}
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-medium leading-relaxed" style={{ marginBottom: "-49px" }}>
            {t("Our proven 5-step process guarantees punctuality, safety, transparent pricing, and spotless property care from first call to final walk-through.", "Nuestro proceso de 5 pasos garantiza puntualidad, seguridad, precios transparentes y un cuidado impecable de la propiedad.")}
          </p>
        </motion.div>

        {/* ── 1. DESKTOP: S-Curve SVG Layout ──────────────── */}
        <div className="hidden lg:block relative w-full h-[460px] select-none">

          {/* Left Animated Start Icon */}
          <div className="absolute left-[70px] top-[50px] z-20 -translate-x-1/2 -translate-y-1/2 group">
            <div className="relative p-1.5 rounded-[22px] bg-white shadow-[0_12px_36px_rgba(46,125,50,0.22)] border-2 border-[#2E7D32] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <div className="absolute -inset-1.5 rounded-[24px] bg-[#2E7D32]/20 blur-md -z-10 group-hover:bg-[#2E7D32]/40 transition-colors animate-pulse" />
              <AnimatedStartIcon />
            </div>
            <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-wider text-[#2E7D32] whitespace-nowrap bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-[#2E7D32]/30 shadow-sm">
              {t("Service Start", "Inicio de Servicio")}
            </div>
          </div>

          {/* Right Animated Finish Icon */}
          <div className="absolute left-[975px] top-[310px] z-20 -translate-x-1/2 -translate-y-1/2 group">
            <div className="relative p-1.5 rounded-[22px] bg-white shadow-[0_12px_36px_rgba(212,175,55,0.28)] border-2 border-[#D4AF37] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <div className="absolute -inset-1.5 rounded-[24px] bg-[#D4AF37]/25 blur-md -z-10 group-hover:bg-[#D4AF37]/50 transition-colors animate-pulse" />
              <AnimatedFinishIcon />
            </div>
            <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-wider text-[#1B5E20] whitespace-nowrap bg-white/95 backdrop-blur-md px-3 py-1 rounded-full border border-[#D4AF37]/40 shadow-sm">
              {t("100% Guaranteed", "100% Garantizado")}
            </div>
          </div>

          {/* S-Curve Path Conduit */}
          <svg
            viewBox="0 0 1200 360"
            className="absolute top-0 left-0 w-full h-[360px] pointer-events-none z-0"
            fill="none"
            preserveAspectRatio="none"
          >
            {/* Drop shadow */}
            <path d="M 100 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 940 310"
              stroke="#0f172a" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" opacity="0.06" />
            {/* Outer conduit */}
            <path d="M 100 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 940 310"
              stroke="#1E293B" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
            {/* Animated green core */}
            <motion.path
              d="M 100 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 940 310"
              stroke="#2E7D32" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 2.2, ease: "easeInOut" }}
            />
            {/* Gold spark flow */}
            <path d="M 100 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 940 310"
              stroke="#FFD54F" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
              opacity="0.85" className="spark-flow" />
          </svg>

          {/* Step nodes */}
          {steps.map((s, i) => {
            const pos = desktopPositions[i];
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="absolute group cursor-default"
                style={{ left: pos.left, top: pos.top }}
              >
                {/* Circle node */}
                <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[82px] h-[82px] rounded-full bg-white shadow-[0_12px_36px_rgba(46,125,50,0.12)] border-2 border-slate-100 flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_20px_40px_-6px_rgba(46,125,50,0.3)] group-hover:border-[#2E7D32]">
                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-1 w-6 h-6 rounded-full bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] text-[#FFD54F] flex items-center justify-center shadow-md border-2 border-white">
                    <span className="text-[11px] font-black leading-none">{i + 1}</span>
                  </div>
                  {/* Inner ring */}
                  <div className="absolute inset-1.5 rounded-full border border-transparent group-hover:border-[#2E7D32]/30 transition-all duration-300" />
                  {/* Icon */}
                  <Icon className="h-7 w-7 text-slate-500 group-hover:text-[#2E7D32] transition-colors duration-300" />
                </div>

                {/* Text block below node */}
                <div className="absolute top-[52px] -translate-x-1/2 text-center w-[230px] flex flex-col items-center pt-2">
                  <h3 className="font-extrabold text-[15px] text-slate-900 leading-tight mt-1 mb-1.5 group-hover:text-[#2E7D32] transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-[12px] text-slate-500 leading-relaxed font-medium px-1">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ── 2. MOBILE: Vertical Timeline ────────────────── */}
        <div className="relative grid gap-8 pl-14 lg:hidden pt-10 pb-4">

          {/* Mobile Top Start Icon */}
          <div className="absolute left-[14px] -top-6 z-20 p-1 rounded-2xl bg-white shadow-md border-2 border-[#2E7D32] flex items-center justify-center">
            <AnimatedStartIcon />
          </div>

          {/* Animated vertical conduit */}
          <div className="absolute left-[39px] top-6 bottom-6 w-2.5 pointer-events-none z-0">
            <div className="absolute inset-0 bg-slate-900/10 rounded-full blur-[2px]" />
            <div className="absolute inset-0 bg-[#1E293B] rounded-full" />
            <div className="absolute inset-[2px] rounded-full mobile-electric-flow" />
          </div>

          {/* Mobile Bottom Finish Icon */}
          <div className="absolute left-[14px] -bottom-6 z-20 p-1 rounded-2xl bg-white shadow-md border-2 border-[#D4AF37] flex items-center justify-center">
            <AnimatedFinishIcon />
          </div>

          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex flex-col group text-left"
              >
                {/* Circle node */}
                <div className="absolute -left-[54px] top-0 w-12 h-12 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-105 group-hover:border-[#2E7D32]">
                  {/* Step badge */}
                  <div className="absolute -top-1.5 -right-0.5 w-4.5 h-4.5 rounded-full bg-[#2E7D32] text-[#FFD54F] flex items-center justify-center border border-white">
                    <span className="text-[9px] font-black">{i + 1}</span>
                  </div>
                  <Icon className="h-5 w-5 text-slate-500 group-hover:text-[#2E7D32] transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="pl-4 py-0.5">
                  <h3 className="font-extrabold text-base text-slate-900 leading-tight mt-0 mb-1.5 group-hover:text-[#2E7D32] transition-colors duration-300">
                    {s.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium max-w-sm">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>


      </div>
    </section>
  );
}
