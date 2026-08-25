import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Star } from "lucide-react";
import { Link } from "@tanstack/react-router";
import welcomeImg from "@/assets/about-hero-landscaping.png";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const TinySparkleIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#2E7D32] fill-[#2E7D32] shrink-0" viewBox="0 0 24 24">
    <path d="M12 2l2.4 7.2L21.6 12l-7.2 2.4L12 21.6l-2.4-7.2L2.4 12l7.2-2.4z" />
  </svg>
);

export function Welcome() {
  const { t } = useLanguage();

  const promisePoints = [
    t("Show up on time — Reliable, punctual, and professional.", "Llegar a tiempo — Confiable, puntual y profesional."),
    t("Do the job right — Over 15 years of proven craftsmanship.", "Hacer el trabajo bien — Más de 15 años de experiencia."),
    t("Leave your property looking better than we found it.", "Dejar su propiedad luciendo mejor de como la encontramos."),
    t("Bilingual Service: English & Español", "Servicio Bilingüe: Inglés y Español"),
  ];

  return (
    <section id="welcome" className="bg-white overflow-hidden py-12 sm:py-16 lg:py-24 border-b border-slate-100 relative">
      {/* Ambient background decoration */}
      <div className="absolute top-0 right-1/3 w-96 h-96 rounded-full bg-[#2E7D32]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">

        {/* Premium 2-Column Grid: Copy Left (7 cols), Visual Right (5 cols) */}
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-16 items-center">

          {/* Left Column: Copy & Checklist */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">

            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-[#2E7D32]/10 border border-[#2E7D32]/30 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#2E7D32] shadow-xs">
              <TinySparkleIcon /> {t("Welcome", "Nota de Bienvenida")} <TinySparkleIcon />
            </div>

            {/* Main Headline */}
            <h2 className="font-display text-[22px] sm:text-[26px] lg:text-[29px] mt-0 sm:mt-[-11px] mb-3 sm:mb-[14px] font-extrabold leading-tight text-[#111111] tracking-tight">
              {t("Welcome to Brown Lawn Care & Cleaning Service, LLC — ", "Bienvenido a Brown Lawn Care & Cleaning Service, LLC — ")}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E7D32] to-[#1B5E20]">
                {t("Where Quality Meets Community.", "Donde la Calidad Encuentra la Comunidad.")}
              </span>
            </h2>

            {/* Paragraphs */}
            <div className="space-y-3 text-slate-600 text-[13.5px] sm:text-base leading-relaxed font-medium">
              <p>
                {t("Backed by over 15 years of experience and 6 years in business, Roy Lee Brown and our family-owned team have been the trusted name for lawn care, landscaping, and cleaning services across Horn Lake and the surrounding 50-mile radius. We believe your property — whether commercial or residential — deserves the same care and attention we give our own.", "Con más de 15 años de experiencia y 6 años en el negocio, Roy Lee Brown y nuestro equipo familiar han sido el nombre de confianza para el cuidado de césped, paisajismo y limpieza en Horn Lake y 50 millas a la redonda.")}
              </p>
              <p>
                {t("From restoring overgrown landscapes and repairing gravel driveways to deep-cleaning office spaces and warehouses, we bring professionalism, pride, and a personal touch to every job. We're licensed, insured, and bonded, so you can have peace of mind knowing your property is in good hands.", "Desde la restauración de jardines hasta la limpieza profunda de oficinas y almacenes, traemos profesionalismo a cada trabajo.")}
              </p>
            </div>

            {/* Spanish Language Banner */}
            <div className="w-full bg-gradient-to-r from-[#2E7D32]/10 via-[#2E7D32]/5 to-transparent border-l-4 border-[#2E7D32] p-4 rounded-r-2xl text-xs sm:text-sm font-bold text-[#1B5E20] flex items-center gap-3">
              <span className="text-lg">🇲🇽</span>
              <span>{t("Do you speak Spanish? Yes, we speak Spanish! Ask us about any of our services in Spanish or English.", "¿Hablas español? ¡Sí, hablamos español! Pregúntenos sobre nuestros servicios en español.")}</span>
            </div>

            {/* Promise Points List */}
            <div className="w-full pt-1">
              <ul className="grid gap-3 sm:grid-cols-2">
                {promisePoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-slate-800 font-bold text-xs sm:text-sm leading-snug">
                    <CheckCircle2 className="h-5 w-5 text-[#2E7D32] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <Button variant="hero" size="xl" asChild className="font-extrabold rounded-full px-8 bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] text-[#FFD54F] border border-[#D4AF37]/50 shadow-md">
                <Link to="/about">
                  {t("Read More About Us", "Leer Más Sobre Nosotros")} <ArrowRight className="ml-2 h-4 w-4 text-[#FFD54F]" />
                </Link>
              </Button>
            </div>

          </div>

          {/* Right Column: Premium Visual Video Container */}
          <div className="lg:col-span-5 relative w-full flex justify-center items-center max-w-sm sm:max-w-md mx-auto lg:max-w-none">

            {/* Soft Ambient Glow backdrop */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full bg-[#2E7D32]/10 blur-3xl -z-10 animate-pulse" />

            <div className="relative w-full max-w-[360px] sm:max-w-[460px] aspect-square lg:aspect-[4/5] rounded-[24px] sm:rounded-[32px] border border-slate-200/80 bg-gradient-to-b from-white to-[#F7F7F7] p-2 sm:p-3 lg:p-4 shadow-xl overflow-hidden group">

              {/* Card glowing edge overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2E7D32]/0 via-[#2E7D32]/0 to-[#D4AF37]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10" />

              {/* Video Element */}
              <video
                autoPlay
                loop
                muted
                playsInline
                poster={welcomeImg}
                className="w-full h-full object-cover rounded-[24px] select-none transition-transform duration-700 group-hover:scale-105"
              >
                <source src="https://res.cloudinary.com/ki6vfkhw/video/upload/v1787693256/welcome.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Top Floating Glass Badge */}
              <div className="absolute top-5 left-5 z-20 flex items-center gap-2 bg-white/90 backdrop-blur-md border border-[#D4AF37]/40 px-3.5 py-2 rounded-2xl shadow-md select-none">
                <ShieldCheck className="h-4 w-4 text-[#2E7D32]" />
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-black uppercase text-[#111111]">Licensed &amp; Insured</span>
                  <span className="text-[9px] font-bold text-slate-500">100% Bonded Protection</span>
                </div>
              </div>

              {/* Bottom Floating Glass Badge */}
              <div className="absolute bottom-5 right-5 z-20 flex items-center gap-2 bg-[#111111]/90 backdrop-blur-md border border-[#D4AF37]/50 text-white px-4 py-2.5 rounded-2xl shadow-lg select-none">
                <div className="flex text-[#FFD54F]">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <Star className="h-3.5 w-3.5 fill-current" />
                </div>
                <span className="text-xs font-black text-[#FFD54F]">6 Years Open</span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
