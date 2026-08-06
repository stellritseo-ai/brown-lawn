import { CheckCircle2 } from "lucide-react";
import aboutTeamImg from "@/assets/about-hero-landscaping.png";
import { Counter } from "./Counter";
import { useLanguage } from "@/hooks/useLanguage";

export function About() {
  const { t } = useLanguage();

  const points = [
    t("15+ years of experience serving Horn Lake and 50-mile radius", "Más de 15 años de experiencia sirviendo a Horn Lake y 50 millas a la redonda"),
    t("Roy Lee Brown & family-owned dedicated team", "Roy Lee Brown y equipo familiar dedicado"),
    t("Licensed, insured, and bonded property care specialists", "Especialistas en cuidado de propiedad licenciados, asegurados y afianzados"),
    t("Transparent no-obligation quotes within 24 hours", "Cotizaciones transparentes sin compromiso en 24 horas"),
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <div className="absolute -top-6 -left-6 h-32 w-32 rounded-3xl bg-[#2E7D32]/15" aria-hidden />
          <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-3xl bg-[#D4AF37]/15" aria-hidden />
          <img
            src={aboutTeamImg}
            alt="Brown Lawn Care & Cleaning Service Team"
            className="relative rounded-3xl shadow-xl object-cover object-top w-full aspect-[3/2] sm:aspect-[16/9] h-auto border border-slate-100"
            loading="lazy"
          />
          <div className="glass-card absolute -bottom-8 left-6 right-6 rounded-2xl p-5 sm:left-10 sm:right-auto sm:w-80 border border-[#D4AF37]/40 bg-white/95">
            <div className="text-xs font-bold uppercase tracking-wider text-[#2E7D32]">{t("6 Years in Business", "6 Años en el Negocio")}</div>
            <div className="mt-1 font-display text-xl font-extrabold text-[#111111]">{t("Family-Owned & Operated", "Propiedad y Operación Familiar")}</div>
            <div className="mt-1 text-xs text-slate-600 font-medium">{t("Where quality meets community.", "Donde la calidad encuentra la comunidad.")}</div>
          </div>
        </div>

        <div className="text-left">
          <span className="inline-flex rounded-full bg-[#2E7D32]/10 border border-[#2E7D32]/30 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2E7D32]">{t("About Brown Lawn Care & Cleaning", "Acerca de Brown Lawn Care & Cleaning")}</span>
          <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-[#111111] tracking-tight">
            {t("6 Years of Keeping Horn Lake ", "6 Años Manteniendo ")}
            <span className="text-[#2E7D32]">{t("Beautiful", "Hermoso a Horn Lake")}</span>
          </h2>
          <p className="mt-5 text-slate-600 text-base leading-relaxed font-medium">
            {t("With over 15 years of industry experience and 6 years open as a business, Roy Lee Brown and our family-owned team have been the trusted name for lawn care, landscaping, and cleaning services across Horn Lake and the surrounding 50-mile radius. We believe your property — whether commercial or residential — deserves the same care and attention we give our own.", "Con más de 15 años de experiencia en la industria y 6 años de operaciones como empresa, Roy Lee Brown y nuestro equipo familiar han sido el nombre de confianza para el cuidado de césped, paisajismo y limpieza en Horn Lake y 50 millas a la redonda.")}
          </p>

          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-slate-800 font-semibold text-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#2E7D32]" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { v: 1000, s: "+", l: t("Properties", "Propiedades") },
              { v: 6, s: "+ Yrs", l: t("In Business", "En el Negocio") },
              { v: 50, s: " Miles", l: t("Radius", "Radio") },
              { v: 100, s: "%", l: t("Dedicated", "Dedicados") },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-slate-200 bg-[#F7F7F7] p-4 text-center shadow-xs">
                <div className="font-display text-2xl font-black text-[#2E7D32]">
                  <Counter end={s.v} suffix={s.s} />
                </div>
                <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-slate-500">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
