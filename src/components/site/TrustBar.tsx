import { ShieldCheck, Award, MapPin, CheckCircle2, Star } from "lucide-react";
import bbbLogo from "@/assets/bbb.svg";
import { useLanguage } from "@/hooks/useLanguage";

export function TrustBar() {
  const { t } = useLanguage();

  const trustBadges = [
    {
      icon: ShieldCheck,
      title: t("Licensed & Insured", "Licenciado y Asegurado"),
      subtitle: t("100% General Liability Coverage", "Cobertura de Responsabilidad Civil"),
    },
    {
      icon: Award,
      title: t("15+ Years Exp.", "15+ Años Exp."),
      subtitle: t("Proven Industry Mastery", "Maestría Demostrada"),
    },
    {
      icon: CheckCircle2,
      title: t("Family Owned & Operated", "Propiedad Familiar"),
      subtitle: t("Roy Lee Brown Leadership", "Liderazgo de Roy Lee Brown"),
    },
    {
      icon: MapPin,
      title: t("50-Mile Service Area", "Área de 50 Millas"),
      subtitle: t("Horn Lake & Surrounding MS/TN", "Horn Lake y Alrededores"),
    },
    {
      icon: Star,
      title: t("24-Hr Free Quote", "Cotización Gratis en 24h"),
      subtitle: t("Fast No-Obligation Estimates", "Estimados Rápido Sin Compromiso"),
    },
  ];

  return (
    <section className="border-y border-slate-200/80 bg-[#F7F7F7] py-6 overflow-hidden select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-around gap-6 sm:gap-8">
          <div className="flex items-center gap-3 shrink-0">
            <img src={bbbLogo} alt="BBB Accredited Business" className="h-9 w-auto object-contain" />
          </div>
          {trustBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div key={badge.title} className="flex items-center gap-3 shrink-0">
                <div className="w-9 h-9 rounded-xl bg-[#2E7D32]/10 border border-[#2E7D32]/20 flex items-center justify-center text-[#2E7D32]">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-black text-[#111111]">{badge.title}</span>
                  <span className="text-[10px] text-slate-500 font-semibold">{badge.subtitle}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
