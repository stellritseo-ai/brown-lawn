import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, ArrowRight, Navigation, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const areasData = [
  { name: "Horn Lake", x: "50%", y: "45%", primary: true },
  { name: "Southaven", x: "55%", y: "38%" },
  { name: "Olive Branch", x: "65%", y: "40%" },
  { name: "Memphis, TN", x: "52%", y: "25%" },
  { name: "Hernando", x: "50%", y: "58%" },
  { name: "Nesbit", x: "46%", y: "52%" },
  { name: "Walls", x: "35%", y: "42%" },
  { name: "Tunica", x: "28%", y: "68%" },
  { name: "Collierville", x: "72%", y: "30%" },
  { name: "Germantown", x: "62%", y: "28%" },
  { name: "Bartlett", x: "58%", y: "18%" },
  { name: "Senatobia", x: "48%", y: "72%" },
  { name: "Batesville", x: "42%", y: "82%" },
  { name: "Oxford", x: "65%", y: "85%" },
  { name: "West Memphis, AR", x: "32%", y: "26%" },
];

const statCards = [
  { value: "50mi", label: "Coverage Radius" },
  { value: "3", label: "States Served" },
  { value: "15+", label: "Cities Covered" },
  { value: "Fast", label: "Emergency Response" },
];

export function ServiceArea() {
  const { t } = useLanguage();
  const [hoveredArea, setHoveredArea] = useState<string | null>(null);

  return (
    <section id="service-area" className="relative py-12 sm:py-16 lg:py-24 bg-white border-b border-slate-100 overflow-hidden">

      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:26px_26px] opacity-60" />
        <div className="absolute -top-40 left-0 w-[500px] h-[500px] rounded-full bg-[#2E7D32]/6 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[#D4AF37]/6 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto w-[90%] max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center">

          {/* ── LEFT COLUMN ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-left space-y-6"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-[#2E7D32]/8 border border-[#2E7D32]/25 text-[#2E7D32] rounded-full px-5 py-1.5 text-[11px] font-black uppercase tracking-widest shadow-sm">
              <Navigation className="w-3.5 h-3.5" />
              {t("Service Area", "Área de Servicio")}
            </div>

            {/* Headline */}
            <div>
              <h2
                className="text-slate-900 leading-tight tracking-tight font-black text-[26px] sm:text-[35px] mb-3"
                style={{ fontSize: undefined }}
              >
                {t("Proudly Serving a ", "Servimos Con Orgullo un Radio de ")}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E7D32] to-[#1B5E20]">
                  {t("50-Mile Radius", "50 Millas")}
                </span>
                .
              </h2>
              <p className="text-[14.5px] text-slate-500 font-medium leading-relaxed max-w-md">
                {t("Based in Horn Lake, MS — we serve homeowners and businesses across Mississippi, Tennessee, and Arkansas within our 50-mile service corridor.", "Ubicados en Horn Lake, MS — servimos a propietarios y empresas a través de Mississippi, Tennessee y Arkansas.")}
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-3">
              {statCards.map((s) => (
                <div key={s.label} className="flex flex-col items-center p-3 rounded-2xl bg-[#2E7D32]/5 border border-[#2E7D32]/15 text-center">
                  <span className="text-[#2E7D32] font-black text-[18px] leading-tight">{s.value}</span>
                  <span className="text-slate-400 text-[9px] font-bold uppercase tracking-wide mt-0.5 leading-tight">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Area chips */}
            <div className="flex flex-wrap gap-2">
              {areasData.map((a) => {
                const isActive = hoveredArea === a.name;
                return (
                  <motion.div
                    key={a.name}
                    onMouseEnter={() => setHoveredArea(a.name)}
                    onMouseLeave={() => setHoveredArea(null)}
                    whileHover={{ scale: 1.04, y: -1 }}
                    transition={{ duration: 0.15 }}
                    className={`flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider rounded-xl py-1.5 px-3 cursor-pointer border transition-all duration-200 ${
                      isActive
                        ? "bg-[#2E7D32] border-[#D4AF37]/50 text-[#FFD54F] shadow-md"
                        : a.primary
                        ? "bg-[#2E7D32]/10 border-[#2E7D32]/30 text-[#2E7D32]"
                        : "text-slate-600 bg-slate-50 border-slate-200 hover:bg-[#2E7D32]/5 hover:border-[#2E7D32]/30 hover:text-[#2E7D32]"
                    }`}
                  >
                    <MapPin className="h-3 w-3 shrink-0" />
                    {a.name}
                    {a.primary && !isActive && (
                      <span className="ml-0.5 text-[8px] font-black bg-[#2E7D32] text-[#FFD54F] px-1.5 py-0.5 rounded-full">HQ</span>
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* "Don't see your city" card */}
            <div className="relative group max-w-lg w-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2E7D32] to-[#D4AF37] rounded-2xl blur opacity-15 group-hover:opacity-30 transition duration-500" />
              <div className="relative flex items-center justify-between gap-4 bg-white border border-slate-200 rounded-2xl p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-8 h-8 rounded-xl bg-[#2E7D32]/10 border border-[#2E7D32]/20 flex items-center justify-center mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                  </div>
                  <p className="text-[12.5px] font-bold text-slate-700 leading-relaxed">
                    {t("Don't see your city? Call us — we may still be able to serve you within our 50-mile radius.", "¿No ve su ciudad? Llámenos — es posible que aún podamos servirle en nuestro radio de 50 millas.")}
                  </p>
                </div>
                <button
                  type="button"
                  className="shrink-0 inline-flex items-center gap-1.5 bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] text-[#FFD54F] border border-[#D4AF37]/40 text-[10px] font-black uppercase tracking-wider px-3.5 py-2 rounded-xl transition-all duration-200 hover:scale-[1.04] shadow-md cursor-pointer"
                >
                  <Phone className="h-3.5 w-3.5" />
                  {t("Call", "Llamar")}
                  <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN: Map ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            {/* Outer glow */}
            <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-br from-[#2E7D32]/12 via-transparent to-[#D4AF37]/12 blur-xl pointer-events-none" />

            <div className="relative aspect-[4/3] sm:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden bg-gradient-to-br from-[#0c1324] to-[#040814] border border-slate-800/60 shadow-[0_30px_80px_-12px_rgba(0,0,0,0.4)]">

              {/* Google Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104595.67493214!2d-90.0463!3d34.9545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d581fb620023a9%3A0xd6e54522a76f2f27!2sHorn%20Lake%2C%20MS!5e0!3m2!1sen!2s!4v1782259191322!5m2!1sen!2s"
                className="absolute inset-0 w-full h-full opacity-70 grayscale invert contrast-[1.15] brightness-[0.8] pointer-events-none"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Radial coverage overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="absolute rounded-full border border-[#2E7D32]/30 bg-[#2E7D32]/10"
                  style={{ width: "62%", height: "62%", top: "20%", left: "20%" }}
                />
                <div
                  className="absolute rounded-full border border-dashed border-[#D4AF37]/20"
                  style={{ width: "78%", height: "78%", top: "12%", left: "12%" }}
                />
              </div>

              {/* Pins */}
              {areasData.map((pin) => (
                <Pin
                  key={pin.name}
                  x={pin.x}
                  y={pin.y}
                  label={pin.name}
                  primary={pin.primary}
                  active={hoveredArea === pin.name}
                  onMouseEnter={() => setHoveredArea(pin.name)}
                  onMouseLeave={() => setHoveredArea(null)}
                />
              ))}

              {/* Coverage badge — bottom left */}
              <div className="absolute bottom-4 left-4 bg-slate-950/80 border border-[#D4AF37]/35 backdrop-blur-md text-white rounded-2xl px-4 py-2.5 select-none z-20 shadow-lg">
                <div className="text-[9px] uppercase tracking-widest text-slate-400 font-bold leading-tight">
                  Horn Lake HQ · 50-Mile Radius
                </div>
                <div className="font-bold text-[13px] text-[#FFD54F] mt-0.5">
                  MS · TN · AR Coverage
                </div>
              </div>

              {/* Live badge — top right */}
              <div className="absolute top-4 right-4 bg-slate-950/80 border border-white/10 backdrop-blur-md text-white rounded-full px-3 py-1.5 select-none z-20 flex items-center gap-1.5 shadow-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2E7D32] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2E7D32]" />
                </span>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#2E7D32]">
                  Active Coverage
                </span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function Pin({
  x,
  y,
  label,
  primary = false,
  active = false,
  onMouseEnter,
  onMouseLeave,
}: {
  x: string;
  y: string;
  label: string;
  primary?: boolean;
  active?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-full group cursor-pointer z-20 transition-all duration-300"
      style={{ left: x, top: y }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex flex-col items-center gap-1.5">
        {/* Glowing hotspot */}
        <div className="relative flex h-8 w-8 items-center justify-center">
          <span className={`animate-ping absolute inline-flex rounded-full opacity-70 transition-all duration-300 ${
            active ? "h-7 w-7 bg-[#2E7D32] scale-125" : primary ? "h-6 w-6 bg-[#2E7D32]" : "h-5 w-5 bg-emerald-400"
          }`} />
          <span className={`relative inline-flex rounded-full items-center justify-center shadow-lg transition-all duration-300 ${
            primary ? "h-5 w-5" : "h-4 w-4"
          } ${
            active
              ? "bg-[#2E7D32] scale-125 shadow-[0_0_14px_rgba(46,125,50,0.7)]"
              : primary
              ? "bg-[#2E7D32] shadow-[0_0_10px_rgba(46,125,50,0.5)]"
              : "bg-gradient-to-br from-[#2E7D32] to-emerald-500"
          }`}>
            <span className={`rounded-full bg-[#FFD54F] animate-pulse ${primary ? "h-2 w-2" : "h-1.5 w-1.5"}`} />
          </span>
        </div>

        {/* Label */}
        <span className={`px-2.5 py-0.5 rounded-lg backdrop-blur-sm border transition-all duration-300 text-[10px] font-bold uppercase tracking-wider whitespace-nowrap shadow-sm ${
          primary || active ? "inline-block" : "hidden sm:inline-block"
        } ${
          active
            ? "bg-[#2E7D32] border-[#D4AF37]/50 text-[#FFD54F] scale-105 shadow-md"
            : primary
            ? "bg-[#2E7D32]/90 border-[#D4AF37]/40 text-[#FFD54F]"
            : "bg-[#0c1324]/85 border-slate-700/80 text-white group-hover:bg-[#2E7D32] group-hover:border-[#D4AF37]/40 group-hover:text-[#FFD54F]"
        }`}>
          {label}
        </span>
      </div>
    </div>
  );
}
