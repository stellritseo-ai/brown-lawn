import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/hooks/useLanguage";
import { useRef, useState } from "react";
import {
  ShieldCheck,
  Clock,
  Award,
  MapPin,
  Languages,
  Home,
  Building2,
  CheckCircle2,
  Star,
  Phone,
  ArrowRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
} from "lucide-react";

const features = (t: (en: string, es: string) => string) => [
  {
    icon: Award,
    title: t("15+ Years of Experience", "15+ Años de Experiencia"),
    desc: t("Over 15 years of industry experience in lawn care, landscaping & cleaning.", "Más de 15 años de experiencia en la industria en cuidado de césped, paisajismo y limpieza."),
  },
  {
    icon: ShieldCheck,
    title: t("Licensed, Insured & Bonded", "Licenciado, Asegurado y Afianzado"),
    desc: t("Full liability coverage so your property is always protected.", "Cobertura completa para que su propiedad esté siempre protegida."),
  },
  {
    icon: Clock,
    title: t("Emergency Service (Business Hours)", "Servicio de Emergencia (Horario Comercial)"),
    desc: t("Storm damage or fallen branches? We're ready to respond during business hours.", "¿Daños por tormenta o ramas caídas? Respondemos en horario comercial."),
  },
  {
    icon: MapPin,
    title: t("50-Mile Service Radius", "Radio de Servicio de 50 Millas"),
    desc: t("Horn Lake, MS and all surrounding communities within 50 miles.", "Horn Lake, MS y comunidades circundantes en un radio de 50 millas."),
  },
  {
    icon: Languages,
    title: t("Bilingual Team (EN / ES)", "Equipo Bilingüe (EN / ES)"),
    desc: t("Our crew speaks English and Spanish — no language barriers.", "Nuestro equipo habla inglés y español sin barreras."),
  },
  {
    icon: Home,
    title: t("Family-Owned (6 Years Open)", "Empresa Familiar (6 Años Abiertos)"),
    desc: t("Not a franchise. A local family committed to the community.", "No somos franquicia. Somos una familia local comprometida."),
  },
  {
    icon: Building2,
    title: t("Residential & Commercial", "Residencial y Comercial"),
    desc: t("From small yards to large office campuses — we handle it all.", "Desde patios pequeños hasta grandes campus de oficinas."),
  },
  {
    icon: CheckCircle2,
    title: t("We Show Up. Always.", "Siempre Llegamos."),
    desc: t("Reliable, punctual, and professional. Your time matters.", "Confiables y puntuales. Su tiempo nos importa."),
  },
];

const trustStats = [
  { value: "15+", label: "Years Experience" },
  { value: "6+", label: "Years in Business" },
  { value: "500+", label: "Happy Clients" },
  { value: "50mi", label: "Service Radius" },
];

export function WhyChooseUs() {
  const { t } = useLanguage();
  const items = features(t);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.muted = false;
      setIsMuted(false);
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  return (
    <section id="why-choose-us" className="relative py-12 sm:py-16 lg:py-28 bg-white border-b border-slate-100 overflow-hidden">

      {/* Subtle background blobs */}
      <div aria-hidden className="pointer-events-none absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-[#2E7D32]/[0.04] blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-[#D4AF37]/[0.06] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid gap-10 sm:gap-14 lg:grid-cols-2 lg:gap-20 items-center">

          {/* ── LEFT: Content ───────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="flex flex-col order-2 lg:order-1"
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full border border-[#2E7D32]/30 bg-[#2E7D32]/8 text-[#2E7D32] text-[10px] font-black uppercase tracking-widest mb-5 shadow-sm select-none">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2E7D32] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2E7D32]" />
              </span>
              {t("Why Choose Us", "Por Qué Elegirnos")}
            </div>

            {/* Headline */}
            <h2 className="text-slate-900 font-black tracking-tight leading-[1.18] text-[22px] sm:text-[28px] lg:text-[34px] mt-0 mb-3 sm:mb-4 max-w-lg">
              {t("Why Horn Lake Trusts ", "¿Por Qué Horn Lake Confía en ")}
              <span className="bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] bg-clip-text text-transparent">
                {t("Brown Lawn Care", "Brown Lawn Care")}
              </span>
              {t(" & Cleaning.", " & Cleaning.")}
            </h2>

            {/* Subtext */}
            <p className="text-slate-500 text-[14px] sm:text-[15px] leading-relaxed mb-7 font-medium max-w-[520px]">
              {t("Over a decade and a half of dedicated service across Horn Lake, MS and a 50-mile radius — trusted by hundreds of homeowners and business managers.", "Más de una década y media de servicio dedicado en Horn Lake, MS y un radio de 50 millas.")}
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
              {items.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="group flex items-start gap-3 p-3 rounded-xl hover:bg-[#2E7D32]/5 border border-transparent hover:border-[#2E7D32]/15 transition-all duration-250 cursor-default"
                  >
                    <span className="mt-0.5 shrink-0 p-1.5 rounded-lg bg-[#2E7D32]/10 border border-[#2E7D32]/20 group-hover:bg-[#2E7D32]/20 transition-colors duration-250">
                      <Icon className="w-3.5 h-3.5 text-[#2E7D32]" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[12.5px] font-extrabold text-slate-900 leading-tight mb-0.5 group-hover:text-[#2E7D32] transition-colors duration-250">{f.title}</p>
                      <p className="text-[11.5px] text-slate-500 leading-relaxed font-medium">{f.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-[#1E293B] text-white text-[11px] font-black uppercase tracking-widest rounded-full px-6 py-3 transition-all duration-300 shadow-md hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
              >
                {t("Explore Services", "Explorar Servicios")}
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href="tel:6625711048"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] text-[#FFD54F] border border-[#D4AF37]/50 text-[11px] font-black uppercase tracking-widest rounded-full px-6 py-3 transition-all duration-300 shadow-md hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
                {t("Call (662) 571-1048", "Llamar (662) 571-1048")}
              </a>
            </div>
          </motion.div>

          {/* ── RIGHT: Video Card ────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: "easeOut" }}
            className="relative order-1 lg:order-2 lg:sticky lg:top-[100px]"
          >
            {/* Decorative glow rings */}
            <div aria-hidden className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-[#2E7D32]/15 via-transparent to-[#D4AF37]/15 blur-xl pointer-events-none" />
            <div aria-hidden className="absolute -inset-1 rounded-[32px] bg-gradient-to-tr from-[#2E7D32]/20 to-[#D4AF37]/20 blur-md pointer-events-none" />

            {/* Video container */}
            <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_80px_-12px_rgba(0,0,0,0.2)] border-2 border-white/90 group">
              <video
                ref={videoRef}
                src="https://res.cloudinary.com/ki6vfkhw/video/upload/v1787693497/whychoose.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[280px] sm:h-[400px] lg:h-[640px] object-cover transition-transform duration-700 ease-out"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent pointer-events-none" />

              {/* ── Play / Pause center button ── */}
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause video" : "Play video"}
                className="absolute inset-0 flex items-center justify-center z-10 group/btn"
              >
                <span
                  className={`flex items-center justify-center w-16 h-16 rounded-full border-2 border-white/60 bg-black/35 backdrop-blur-sm shadow-xl transition-all duration-300 ${isPlaying
                      ? "opacity-0 group-hover/btn:opacity-100 scale-90 group-hover/btn:scale-100"
                      : "opacity-100 scale-100"
                    }`}
                >
                  {isPlaying ? (
                    <Pause className="w-7 h-7 text-white fill-white" />
                  ) : (
                    <Play className="w-7 h-7 text-white fill-white translate-x-0.5" />
                  )}
                </span>
              </button>

              {/* ── Sound toggle button (top-right) ── */}
              <button
                onClick={(e) => { e.stopPropagation(); toggleMute(); }}
                aria-label={isMuted ? "Unmute video" : "Mute video"}
                className="absolute top-4 right-4 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/30 text-white hover:bg-black/60 hover:scale-110 transition-all duration-200 shadow-md"
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>

              {/* Trust Stats Bar at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-3 grid grid-cols-4 divide-x divide-white/20">
                  {trustStats.map((s) => (
                    <div key={s.label} className="flex flex-col items-center px-2">
                      <span className="text-[#FFD54F] font-black text-[15px] sm:text-[17px] leading-tight">{s.value}</span>
                      <span className="text-white/70 text-[9px] sm:text-[10px] font-bold uppercase tracking-wide text-center leading-tight mt-0.5">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top-left badge */}
              <div className="absolute top-4 left-4 z-20 bg-[#2E7D32] border border-[#D4AF37]/50 text-[#FFD54F] text-[9px] sm:text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                <Star className="w-3 h-3 fill-[#FFD54F] text-[#FFD54F]" />
                {t("Horn Lake's #1 Choice", "La #1 Opción de Horn Lake")}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
