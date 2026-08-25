import { ArrowRight, Award, BadgeCheck, Phone, ShieldCheck, Star } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative isolate min-h-screen overflow-hidden pt-16 md:pt-20 flex items-center">
      {/* Background Video */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="https://res.cloudinary.com/ki6vfkhw/video/upload/v1787692982/herovideo.mov" />
        </video>
        {/* Stronger overlay on mobile for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/70 to-[#0F172A]/40 sm:from-[#0F172A]/90 sm:via-[#0F172A]/40 sm:to-transparent" />
      </div>

      {/* Animated blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/3 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-blob" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-blob" style={{ animationDelay: "3s" }} />
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 sm:pb-20 lg:px-8 lg:pt-20 w-full flex justify-start">
        <div className="animate-fade-up text-white flex flex-col items-start text-left max-w-3xl w-full">

          {/* Eyebrow badge */}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[11px] sm:text-xs font-semibold backdrop-blur-md">
            <span className="flex text-amber-400 gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-current text-amber-400" />)}
            </span>
            {t("Family Owned & Operated • 6 Years in Business", "Empresa Familiar • 6 Años en el Negocio")}
          </span>

          {/* Main Headline */}
          <h1 className="mt-4 sm:mt-6 font-display text-[28px] sm:text-[36px] md:text-[41px] leading-[1.2] sm:leading-[1.25] md:leading-[54px] font-extrabold tracking-tight">
            {t("15+ Years Experience Keeping ", "15+ Años de Experiencia Manteniendo ")}
            <span className="gradient-text-orange">{t("Horn Lake Beautiful", "Hermoso a Horn Lake")}</span>{" "}
            {t("— One Lawn & Home at a Time.", "— Un Césped y Hogar a la Vez.")}
          </h1>

          {/* Description */}
          <p className="max-w-2xl mt-3 mb-0 text-white text-[13px] sm:text-[15px] md:text-[17px] leading-relaxed sm:leading-relaxed md:leading-[40px]">
            {t("From weekly mowing and landscaping to office cleaning and tree removal, Brown Lawn Care & Cleaning Service is your family-owned, licensed, insured, and bonded partner for commercial and residential properties. Serving a 50-mile radius. Emergency service available during business hours.", "Desde cortado semanal de césped y paisajismo hasta limpieza de oficinas y remoción de árboles, Brown Lawn Care & Cleaning Service es su socio familiar, licenciado y asegurado. Servicio de emergencia disponible en horario comercial.")}
          </p>

          {/* CTA Buttons — stacked on mobile, row on sm+ */}
          <div className="mt-6 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <Button variant="hero" size="xl" asChild className="w-full sm:w-auto justify-center">
              <Link to="/free-quote">
                📋 {t("Get a Free Quote", "Solicitar Cotización Gratis")} <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" className="w-full sm:w-auto justify-center">
              <Phone className="h-4 w-4" /> (662) 571-1048
            </Button>
          </div>

          {/* Trust badges — wrap cleanly on mobile */}
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm text-white/90 font-medium">
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-[#FF6B00]" /> ✓ {t("Licensed", "Licenciado")}</span>
            <span className="inline-flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-[#FF6B00]" /> ✓ {t("Insured", "Asegurado")}</span>
            <span className="inline-flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-[#FF6B00]" /> ✓ {t("Bonded", "Afianzado")}</span>
            <span className="inline-flex items-center gap-1.5"><Award className="h-4 w-4 text-[#FF6B00]" /> ✓ {t("15 Years Experience", "15 Años de Experiencia")}</span>
            <span className="inline-flex items-center gap-1.5"><BadgeCheck className="h-4 w-4 text-[#FF6B00]" /> ✓ {t("Hablamos Español", "Hablamos Español")}</span>
          </div>

        </div>
      </div>
    </section>
  );
}
