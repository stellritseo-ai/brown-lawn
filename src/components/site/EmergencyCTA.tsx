import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Phone, Clock, ShieldCheck, CheckCircle2, AlertTriangle, Zap, ArrowRight } from "lucide-react";
import heroVideo from "@/assets/herovideo.mp4";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

export function EmergencyCTA() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24 text-white bg-[#0A100B] border-y border-[#2E7D32]/30">
      {/* Background Video with Multi-Layered Gradients */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="h-full w-full object-cover scale-105 filter brightness-75"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Layered Gradient Overlays for High Contrast & Visual Luxury */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#080D09]/98 via-[#080D09]/85 to-[#080D09]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080D09] via-transparent to-[#080D09]/70" />

        {/* Ambient Glowing Blobs */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 rounded-full bg-[#2E7D32]/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-96 h-96 rounded-full bg-[#D4AF37]/15 blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto w-[90%] max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">

          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow Live Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 rounded-full bg-black/60 backdrop-blur-xl border border-[#D4AF37]/50 px-4 py-2 text-xs font-black uppercase tracking-widest text-[#FFD54F] shadow-lg"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD54F] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FFD54F]"></span>
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 fill-[#FFD54F] text-[#FFD54F]" />
                {t("Emergency Dispatch (Business Hours)", "Despacho de Emergencia (Horario Comercial)")}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-[22px] sm:text-[26px] lg:text-[28px] mt-0 sm:mt-[-13px] mb-[7px] font-black tracking-tight leading-tight text-white max-w-2xl">
              <span className="block">
                {t("Storm Damage or Fallen Trees on Your Property?", "¿Daños por Tormenta o Árboles Caídos en su Propiedad?")}
              </span>
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#FFD54F] via-amber-200 to-[#D4AF37]">
                {t("Immediate Response During Business Hours.", "Respuesta Inmediata en Horario Comercial.")}
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-medium"
            >
              {t("Did severe weather damage your yard or block your driveway with fallen limbs? We dispatch emergency clearing crews during business hours across Horn Lake and the 50-mile radius.", "¿Tormentas dañaron su propiedad o árboles cayeron en su entrada? Despachamos equipos de emergencia en horario comercial en Horn Lake y 50 millas a la redonda.")}
            </motion.p>

            {/* Feature Cards Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 w-full max-w-xl"
            >
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2E7D32]/40 text-[#FFD54F] shrink-0 border border-[#D4AF37]/30">
                  <Clock className="h-4 w-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-extrabold text-white">{t("Business Hours Line", "Línea en Horario Comercial")}</span>
                  <span className="text-[11px] text-slate-400 font-medium">{t("Mon-Fri 10am-7pm | Sat 3pm-8pm", "Lun-Vie 10am-7pm | Sáb 3pm-8pm")}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2E7D32]/40 text-[#FFD54F] shrink-0 border border-[#D4AF37]/30">
                  <AlertTriangle className="h-4 w-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-extrabold text-white">{t("Rapid Dispatch", "Despacho Rápido")}</span>
                  <span className="text-[11px] text-slate-400 font-medium">{t("Fast Equipment Deployment", "Despliegue Rápido de Equipo")}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2E7D32]/40 text-[#FFD54F] shrink-0 border border-[#D4AF37]/30">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-extrabold text-white">{t("Licensed & Insured", "Licenciado y Asegurado")}</span>
                  <span className="text-[11px] text-slate-400 font-medium">{t("100% Bonded Protection", "Protección 100% Afianzado")}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#2E7D32]/40 text-[#FFD54F] shrink-0 border border-[#D4AF37]/30">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-extrabold text-white">{t("15+ Years Experience", "15+ Años de Experiencia")}</span>
                  <span className="text-[11px] text-slate-400 font-medium">{t("Trusted Family Crew", "Equipo Familiar de Confianza")}</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Action Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: 0.2,
            }}
            className="lg:col-span-5 flex flex-col items-center gap-5 w-full"
          >
            {/* Primary Phone Action Card */}
            <div className="relative group w-full max-w-md">
              {/* Glowing Aura Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#2E7D32] via-[#FFD54F] to-[#1B5E20] rounded-[28px] blur-md opacity-60 group-hover:opacity-100 transition duration-500 animate-pulse" />

              <a
                href="tel:6625711048"
                className="relative flex flex-col items-center justify-between gap-4 rounded-[20px] sm:rounded-[24px] bg-gradient-to-br from-[#132215] via-[#0D180E] to-[#0A120B] border border-[#D4AF37]/60 p-5 sm:p-6 lg:p-7 shadow-2xl hover:scale-[1.02] transition-all duration-300 w-full text-center sm:text-left sm:flex-row cursor-pointer"
              >
                <div className="flex items-center gap-4 justify-center sm:justify-start text-left w-full sm:w-auto">
                  <span className="relative grid place-items-center h-14 w-14 rounded-2xl bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] border border-[#D4AF37]/50 shrink-0 shadow-lg">
                    <Phone className="h-6 w-6 text-[#FFD54F] animate-bounce" />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-[#FFD54F] font-black flex items-center gap-1.5">
                      <span className="h-2 w-2 rounded-full bg-[#FFD54F] animate-ping" />
                      {t("Direct Emergency Line", "Línea Directa de Emergencia")}
                    </span>
                    <span className="text-[22px] sm:text-[23px] font-display font-black leading-tight tracking-tight mt-1 text-white">
                      (662) 571-1048
                    </span>
                  </div>
                </div>

                <div className="w-full sm:w-auto flex justify-end">
                  <span className="w-full sm:w-auto text-center px-4 py-2.5 rounded-xl bg-[#FFD54F] text-[#111111] text-xs font-black uppercase tracking-wider shadow-md group-hover:bg-white transition-colors">
                    {t("Call Now", "Llamar")}
                  </span>
                </div>
              </a>
            </div>

            {/* Secondary Request Online CTA */}
            <div className="w-full max-w-md">
              <Button variant="outline" size="xl" asChild className="w-full rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-slate-900 font-extrabold text-sm py-4 shadow-lg">
                <Link to="/free-quote">
                  {t("Request Emergency Service Online", "Solicitar Servicio de Emergencia")}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Micro-trust glass badge */}
            <div className="flex items-center gap-2.5 rounded-2xl bg-black/50 backdrop-blur-md border border-white/15 px-5 py-3 text-xs text-slate-300 w-full max-w-md justify-center shadow-md">
              <span className="h-2.5 w-2.5 rounded-full bg-[#2E7D32] shrink-0" />
              <span className="font-semibold">{t("Serving Horn Lake, Southaven, Olive Branch & 50-Mile Radius", "Sirviendo Horn Lake, Southaven, Olive Branch y 50 Millas")}</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
