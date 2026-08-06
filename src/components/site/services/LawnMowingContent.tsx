import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Scissors,
  CheckCircle2,
  ShieldCheck,
  Award,
  Clock,
  Phone,
  ArrowRight,
  Sparkles,
  MapPin,
  Trees,
  Truck,
  Building2,
  Home,
  AlertTriangle,
  Calendar,
  Layers,
  Sun,
  CloudSun,
  Wind,
  Snowflake,
  CheckSquare,
  BadgeCheck,
  Trash2,
} from "lucide-react";

const CleaningIcon = Sparkles;
import { useLanguage } from "@/hooks/useLanguage";

import serviceMowing from "@/assets/service-mowing.png";
import aboutHeroLandscaping from "@/assets/about-hero-landscaping.png";
import bbbLogo from "@/assets/bbb.svg";

export function LawnMowingContent() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"commercial" | "residential">("residential");

  const whatIsIncluded = [
    t("Precision rotary or reel mowing at optimal grass height", "Cortado rotativo o helicoidal a la altura óptima del césped"),
    t("Professional string trimming along fence lines & structures", "Poda profesional con hilo a lo largo de cercas y estructuras"),
    t("Crisp hard surface edging along driveways, walkways & patios", "Orillado limpio en entradas de autos, aceras y patios"),
    t("Thorough blower clean-off of all paved surfaces & patios", "Limpieza profunda con soplador de todas las áreas pavimentadas"),
    t("Complete debris removal leaving your property pristine", "Remoción completa de escombros dejando su propiedad impecable"),
  ];

  const detailingPoints = [
    t("Fence lines, walls, and building perimeters", "Líneas de cercas, paredes y perímetros de edificios"),
    t("Trees, flower beds, and custom landscaping features", "Árboles, jardineras y elementos de paisajismo"),
    t("Concrete driveways, stone walkways, and paver patios", "Entradas de concreto, aceras de piedra y patios"),
    t("Retaining walls and garden borders", "Muros de contención y bordes de jardín"),
  ];

  const seasonalSchedules = [
    {
      season: t("Spring", "Primavera"),
      icon: Sun,
      color: "from-emerald-600 to-green-700",
      desc: t("Weekly mowing begins as rapid growth accelerates. Initial lawn setup and lawn edge defining.", "El cortado semanal comienza a medida que se acelera el crecimiento."),
    },
    {
      season: t("Summer", "Verano"),
      icon: CloudSun,
      color: "from-[#2E7D32] to-[#1B5E20]",
      desc: t("Consistent weekly or bi-weekly mowing to manage heat stress and maintain deep green color.", "Cortado semanal o quincenal para manejar el estrés por calor."),
    },
    {
      season: t("Fall", "Otoño"),
      icon: Wind,
      color: "from-amber-600 to-amber-700",
      desc: t("Regular mowing until growth slows, plus leaf management and autumn property cleanup.", "Cortado regular hasta que el crecimiento disminuya, más manejo de hojas."),
    },
    {
      season: t("Winter", "Invierno"),
      icon: Snowflake,
      color: "from-slate-700 to-slate-800",
      desc: t("As-needed trimming, winterization cleanup, and debris monitoring.", "Poda según sea necesario, limpieza de hibernación y monitoreo de escombros."),
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: t("Schedule Your Service", "Programar Su Servicio"),
      desc: t("Contact us by phone or online to set up your regular weekly or bi-weekly mowing schedule.", "Contáctenos por teléfono o en línea para configurar su calendario de cortado."),
    },
    {
      step: "02",
      title: t("Property Assessment", "Evaluación de la Propiedad"),
      desc: t("We evaluate your lawn, note specific concerns, and determine optimal cutting height.", "Evaluamos su césped y determinamos la altura de corte óptima."),
    },
    {
      step: "03",
      title: t("Professional Mowing", "Cortado Profesional"),
      desc: t("Our trained team arrives on time, executes precision mowing with edging, trimming & blowing.", "Nuestro equipo entrenado llega a tiempo y realiza el cortado de precisión con orillado."),
    },
    {
      step: "04",
      title: t("Quality Check", "Control de Calidad"),
      desc: t("We inspect the finished work to ensure every line, edge, and border meets our high standards.", "Inspeccionamos el trabajo terminado para garantizar que cumpla con los estándares."),
    },
    {
      step: "05",
      title: t("Satisfaction Guaranteed", "Garantía de Satisfacción"),
      desc: t("We follow up to confirm you're 100% satisfied. If we missed something, we make it right.", "Hacemos seguimiento para confirmar su 100% de satisfacción."),
    },
  ];

  const addOns = [
    { title: t("Landscaping & Design", "Paisajismo y Diseño"), desc: t("Design, mulching, shrub trimming, and bed edging", "Diseño, mantillo, poda de arbustos y orillado"), icon: Trees },
    { title: t("Tree Care & Removal", "Cuidado de Árboles"), desc: t("Trimming, cutting, and safe tree removal", "Poda, corte y remoción segura de árboles"), icon: Trash2 },
    { title: t("Brush Clearing", "Remoción de Maleza"), desc: t("Overgrown vegetation and dense brush clearing", "Limpieza de vegetación densa y maleza"), icon: Scissors },
    { title: t("Gravel Driveways", "Entradas de Grava"), desc: t("Driveway repair, topsoil grading, and gravel installation", "Reparación de entradas, nivelación y grava"), icon: Truck },
    { title: t("Cleaning Services", "Servicios de Limpieza"), desc: t("Commercial janitorial and residential deep cleans", "Limpieza comercial de oficinas y residencial"), icon: Sparkles },
  ];

  return (
    <div className="bg-white text-[#111111] overflow-hidden">
      
      {/* ── HERO BANNER SECTION ────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F7F7F7] via-white to-white border-b border-slate-100">
        <div aria-hidden className="absolute top-0 right-1/4 w-96 h-96 bg-[#2E7D32]/5 rounded-full blur-3xl pointer-events-none" />
        <div aria-hidden className="absolute bottom-0 left-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Copy Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 text-left"
            >
              {/* Service Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/50 bg-[#1B5E20]/8 text-[#2E7D32] text-xs font-black uppercase tracking-widest mb-6 shadow-xs">
                <Scissors className="w-3.5 h-3.5 text-[#2E7D32]" />
                <span>{t("Signature Property Service", "Servicio Destacado de Propiedad")}</span>
              </div>

              {/* Page Title */}
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight leading-[1.15]">
                {t("Lawn Mowing & ", "Cortado y Mantenimiento de ")}
                <span className="bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] bg-clip-text text-transparent">
                  {t("Maintenance", "Césped")}
                </span>
              </h1>

              {/* Subheadline Tagline */}
              <h2 className="mt-3 text-lg sm:text-xl font-extrabold text-[#2E7D32] tracking-tight">
                {t("Professional Lawn Care That Transforms Your Property", "Cuidado Profesional del Césped Que Transforma Su Propiedad")}
              </h2>

              {/* Intro Paragraph */}
              <p className="mt-5 text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
                {t(
                  "A well-maintained lawn is more than just curb appeal—it's a reflection of pride, professionalism, and care. At Brown Lawn Care & Cleaning Service, we provide expert lawn mowing and maintenance services designed to keep your property looking its absolute best, week after week. Whether you're a homeowner wanting a pristine yard or a commercial property manager seeking reliable groundskeeping, our family-owned team delivers consistent, high-quality results.",
                  "Un césped bien mantenido es más que un atractivo visual: es un reflejo de orgullo y profesionalismo. En Brown Lawn Care & Cleaning Service, brindamos servicios expertos de cortado y mantenimiento de césped diseñados para mantener su propiedad en su mejor estado."
                )}
              </p>

              {/* Quick Info Badges */}
              <div className="mt-6 flex flex-wrap gap-2.5">
                <span className="px-3.5 py-1.5 rounded-full bg-[#F7F7F7] border border-slate-200 text-xs font-black text-[#111111] flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#2E7D32]" />
                  {t("Licensed, Insured & Bonded", "Licenciado, Asegurado y Afianzado")}
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-[#F7F7F7] border border-slate-200 text-xs font-black text-[#111111] flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-[#2E7D32]" />
                  {t("15+ Years Experience", "15+ Años de Experiencia")}
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-[#F7F7F7] border border-slate-200 text-xs font-black text-[#111111] flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#2E7D32]" />
                  {t("Weekly & Bi-Weekly Plans", "Planes Semanales y Quincenales")}
                </span>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="tel:6625711048"
                  className="bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] hover:from-[#1B5E20] hover:to-[#2E7D32] text-[#FFD54F] text-xs font-black uppercase tracking-wider px-6 py-3.5 rounded-full border border-[#D4AF37]/50 shadow-md transition-all active:scale-95 flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#FFD54F] fill-current" />
                  <span>{t("Call (662) 571-1048", "Llamar (662) 571-1048")}</span>
                </a>
                <Link
                  to="/contact"
                  className="bg-[#111111] hover:bg-[#222222] text-white text-xs font-black uppercase tracking-wider px-6 py-3.5 rounded-full shadow-md transition-all active:scale-95 flex items-center gap-2"
                >
                  <span>{t("Get Free Estimate", "Obtener Cotización Gratis")}</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                </Link>
              </div>
            </motion.div>

            {/* Right Image Showcase Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
                <img
                  src={aboutHeroLandscaping}
                  alt="Precision Lawn Mowing Service"
                  className="w-full h-[400px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#D4AF37]/50 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-[#2E7D32]">{t("BBB Accredited Business", "Negocio Acreditado por BBB")}</div>
                      <div className="text-sm font-extrabold text-[#111111] mt-0.5">{t("Golf-Course Quality Striping", "Patrones de Corte de Calidad")}</div>
                    </div>
                    <img src={bbbLogo} alt="BBB Logo" className="h-9 w-auto object-contain" />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── OUR LAWN MOWING SERVICES ────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("What We Provide", "Lo Que Ofrecemos")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("Our Lawn Mowing & Maintenance Services", "Nuestros Servicios de Cortado y Mantenimiento")}
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-medium">
              {t(
                "From precision cutting to complete hard surface clean-off, we detail every inch of your lawn.",
                "Desde el corte de precisión hasta la limpieza completa de aceras, detallamos cada pulgada de su césped."
              )}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            
            {/* Card 1: Weekly Mowing & Edging */}
            <div className="rounded-3xl bg-[#F7F7F7] p-8 border border-slate-200 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#2E7D32] text-[#FFD54F] flex items-center justify-center shadow-md mb-6 border border-[#D4AF37]/40">
                  <Scissors className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-[#111111]">
                  {t("Weekly Mowing & Edging", "Cortado y Orillado Semanal")}
                </h3>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed font-medium">
                  {t(
                    "Our signature service includes precision mowing at the optimal height for your grass type, string trimming along fences and structures, and hard surface edging along driveways, walkways, and patios. The result is a clean, manicured appearance that enhances your entire property.",
                    "Nuestro servicio distintivo incluye cortado de precisión a la altura óptima, poda con hilo a lo largo de cercas y orillado en entradas y caminos."
                  )}
                </p>

                <div className="mt-6 pt-6 border-t border-slate-200">
                  <h4 className="text-xs font-black uppercase tracking-wider text-[#2E7D32] mb-3">
                    {t("What's Included:", "Lo Que Incluye:")}
                  </h4>
                  <ul className="space-y-2.5">
                    {whatIsIncluded.map((inc) => (
                      <li key={inc} className="flex items-start gap-2.5 text-xs sm:text-sm font-bold text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 2: Striping & Precision Mowing */}
            <div className="rounded-3xl bg-[#F7F7F7] p-8 border border-slate-200 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#111111] text-[#FFD54F] flex items-center justify-center shadow-md mb-6 border border-[#D4AF37]/40">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-[#111111]">
                  {t("Striping & Precision Mowing", "Líneas de Corte de Alta Precisión")}
                </h3>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed font-medium">
                  {t(
                    "We take lawn mowing to the next level with professional striping patterns that give your yard a golf-course-quality finish. Our experienced operators use specialized equipment to create clean, alternating stripes that add depth and visual appeal to any lawn.",
                    "Llevamos el cortado al siguiente nivel con patrones de líneas profesionales que le dan a su jardín un acabado de calidad de campo de golf."
                  )}
                </p>

                <div className="mt-6 pt-6 border-t border-slate-200">
                  <h4 className="text-xs font-black uppercase tracking-wider text-[#2E7D32] mb-3">
                    {t("String Trimming & Edging Detailing:", "Detallado de Orillado y Poda:")}
                  </h4>
                  <p className="text-xs text-slate-600 font-medium mb-3">
                    {t(
                      "We don't just mow—we detail. Our string trimming and edging services ensure every corner, border, and hard-to-reach area is perfectly groomed. We pay special attention to:",
                      "No solo cortamos, detallamos. Nuestros servicios de orillado garantizan que cada esquina esté perfectamente arreglada:"
                    )}
                  </p>
                  <ul className="space-y-2.5">
                    {detailingPoints.map((det) => (
                      <li key={det} className="flex items-start gap-2.5 text-xs sm:text-sm font-bold text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
                        <span>{det}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* Blower Clean-Off Feature Banner */}
          <div className="mt-10 rounded-3xl bg-[#111111] text-white p-8 border border-[#D4AF37]/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#2E7D32] text-[#FFD54F] flex items-center justify-center shrink-0 border border-[#D4AF37]/50 shadow-md">
                <Wind className="w-7 h-7" />
              </div>
              <div className="text-left">
                <h3 className="text-lg font-black text-white">
                  {t("Blower Clean-Off After Every Session", "Limpieza con Soplador Después de Cada Sesión")}
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-300 font-medium leading-relaxed max-w-2xl">
                  {t(
                    "After every mowing session, we thoroughly blow grass clippings and debris from all hard surfaces, including sidewalks, driveways, patios, and parking areas. Your property will look clean and finished from every angle.",
                    "Después de cada sesión, soplamos minuciosamente los restos de césped de todas las superficies duras, aceras y entradas."
                  )}
                </p>
              </div>
            </div>
            <a
              href="tel:6625711048"
              className="bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] hover:from-[#1B5E20] hover:to-[#2E7D32] text-[#FFD54F] text-xs font-black uppercase tracking-wider px-6 py-3 rounded-full border border-[#D4AF37]/50 shadow-md shrink-0 whitespace-nowrap"
            >
              {t("Call (662) 571-1048", "Llamar (662) 571-1048")}
            </a>
          </div>

        </div>
      </section>

      {/* ── YEAR-ROUND MAINTENANCE PROGRAMS ────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#F7F7F7] border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("Four Seasons Care", "Cuidado en Las Cuatro Estaciones")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("Year-Round Maintenance Programs", "Programas de Mantenimiento Todo el Año")}
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-medium">
              {t(
                "A healthy lawn requires consistent care throughout the seasons. Our customizable maintenance plans keep your lawn thriving year-round.",
                "Un césped saludable requiere cuidado constante. Nuestros planes personalizados mantienen su césped verde durante todo el año."
              )}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalSchedules.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.season} className="rounded-3xl bg-white p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition">
                  <div>
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${s.color} text-white flex items-center justify-center shadow-md mb-4`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-[#111111]">{s.season}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Maintenance Services List */}
          <div className="mt-12 rounded-3xl bg-white p-8 border border-slate-200 shadow-sm max-w-4xl mx-auto">
            <h3 className="text-lg font-black text-[#111111] text-center mb-6">
              {t("Additional Value-Add Maintenance Services", "Servicios Adicionales de Mantenimiento")}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#F7F7F7]">
                <CheckCircle2 className="w-5 h-5 text-[#2E7D32] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-bold text-slate-800">
                  {t("Grass height management based on season and specific grass type (Bermuda, Zoysia, St. Augustine)", "Manejo de la altura del césped según la temporada y el tipo específico de pasto")}
                </span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#F7F7F7]">
                <CheckCircle2 className="w-5 h-5 text-[#2E7D32] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-bold text-slate-800">
                  {t("Weed control assistance through proper cutting height techniques and turf density building", "Control de maleza mediante técnicas adecuadas de altura de corte")}
                </span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#F7F7F7]">
                <CheckCircle2 className="w-5 h-5 text-[#2E7D32] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-bold text-slate-800">
                  {t("Healthy growth promotion with sharp, clean commercial mower blades", "Promoción del crecimiento saludable con cuchillas comerciales afiladas")}
                </span>
              </div>
              <div className="flex items-start gap-3 p-3 rounded-2xl bg-[#F7F7F7]">
                <CheckCircle2 className="w-5 h-5 text-[#2E7D32] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm font-bold text-slate-800">
                  {t("Comprehensive property cleanup and branch pick-up after every visit", "Limpieza integral de la propiedad y recogida de ramas en cada visita")}
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── COMMERCIAL VS RESIDENTIAL MAINTENANCE ────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("Tailored Property Care", "Cuidado de Propiedad A Medida")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("Commercial & Residential Lawn Maintenance", "Mantenimiento Residencial y Comercial")}
            </h2>

            {/* Toggle Switch */}
            <div className="mt-8 inline-flex p-1.5 rounded-full bg-[#F7F7F7] border border-slate-200 shadow-xs">
              <button
                onClick={() => setActiveTab("residential")}
                className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === "residential"
                    ? "bg-[#2E7D32] text-[#FFD54F] shadow-md border border-[#D4AF37]/50"
                    : "text-slate-700 hover:text-[#111111]"
                }`}
              >
                <Home className="w-4 h-4" />
                <span>{t("Residential Lawn Care", "Cuidado Residencial")}</span>
              </button>
              <button
                onClick={() => setActiveTab("commercial")}
                className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === "commercial"
                    ? "bg-[#2E7D32] text-[#FFD54F] shadow-md border border-[#D4AF37]/50"
                    : "text-slate-700 hover:text-[#111111]"
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>{t("Commercial Groundskeeping", "Jardinería Comercial")}</span>
              </button>
            </div>
          </div>

          {/* Active Panel */}
          <div className="mt-10 bg-[#F7F7F7] rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md max-w-4xl mx-auto">
            {activeTab === "residential" ? (
              <div className="text-left space-y-4">
                <h3 className="text-2xl font-black text-[#111111]">
                  {t("Residential Lawn Maintenance", "Mantenimiento Residencial de Césped")}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                  {t(
                    "Your home deserves the best. Our residential lawn maintenance services give you back your weekends while ensuring your yard is always the envy of the neighborhood. We show up on schedule and treat your property with family care.",
                    "Su hogar merece lo mejor. Nuestros servicios residenciales le devuelven sus fines de semana mientras garantizan que su jardín esté siempre impecable."
                  )}
                </p>
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    t("Single-family homes and townhouses", "Casas unifamiliares y adosados"),
                    t("HOA-approved maintenance standards", "Estándares de mantenimiento aprobados por HOA"),
                    t("Consistent weekly or bi-weekly scheduling", "Programación constante semanal o quincenal"),
                    t("Detailed attention to every blade of grass", "Atención detallada a cada pulgada de césped"),
                  ].map((pt) => (
                    <div key={pt} className="flex items-center gap-2.5 bg-white p-3.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-extrabold text-[#111111]">
                      <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-left space-y-4">
                <h3 className="text-2xl font-black text-[#111111]">
                  {t("Commercial Groundskeeping & Facility Care", "Mantenimiento Comercial de Instalaciones")}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                  {t(
                    "We understand that commercial properties require a higher level of professionalism, safety compliance, and consistency. Our commercial lawn maintenance services are designed to keep your business looking polished and inviting for clients and employees.",
                    "Entendemos que las propiedades comerciales requieren un nivel superior de profesionalismo. Nuestros servicios están diseñados para proyectar la mejor imagen."
                  )}
                </p>
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    t("Shopping centers and retail properties", "Centros comerciales y locales minoristas"),
                    t("Office campuses and business parks", "Campus de oficinas y parques empresariales"),
                    t("Apartment complexes and HOA common areas", "Complejos de apartamentos y áreas comunes de HOA"),
                    t("Medical facilities and professional offices", "Instalaciones médicas y oficinas profesionales"),
                    t("Churches, schools, and community centers", "Iglesias, escuelas y centros comunitarios"),
                    t("Off-peak scheduling to minimize disruption", "Horarios fuera de pico para minimizar interrupciones"),
                  ].map((pt) => (
                    <div key={pt} className="flex items-center gap-2.5 bg-white p-3.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-extrabold text-[#111111]">
                      <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* ── HOW OUR MOWING PROCESS WORKS (5 STEPS) ──────────────────── */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("Streamlined Experience", "Experiencia Eficiente")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("How Our Mowing Process Works", "Cómo Funciona Nuestro Proceso de Cortado")}
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {processSteps.map((st) => (
              <div
                key={st.step}
                className="rounded-3xl bg-[#F7F7F7] p-6 border border-slate-200 flex flex-col justify-between hover:bg-white hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300 text-left group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#2E7D32]">{st.step}</span>
                    <BadgeCheck className="w-5 h-5 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-base font-black text-[#111111] group-hover:text-[#2E7D32] transition-colors">
                    {st.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 font-medium leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADD-ON SERVICES & EMERGENCY DISPATCH ────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#F7F7F7] border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("Complete Property Upkeep", "Mantenimiento Integral")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl font-black text-[#111111] tracking-tight">
              {t("Add-On Services & Emergency Response", "Servicios Adicionales y Atención de Emergencia")}
            </h2>
            <p className="mt-3 text-slate-600 text-sm font-medium">
              {t("Combine your weekly lawn mowing with any of our complementary services for a comprehensive property maintenance plan.", "Combine su cortado semanal con cualquiera de nuestros servicios complementarios.")}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {addOns.map((add) => {
              const Icon = add.icon;
              return (
                <div key={add.title} className="p-5 rounded-2xl bg-white border border-slate-200 text-left hover:border-[#2E7D32] transition shadow-2xs">
                  <div className="w-9 h-9 rounded-xl bg-[#2E7D32]/10 text-[#2E7D32] flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-black text-[#111111]">{add.title}</h4>
                  <p className="text-[11px] text-slate-500 font-semibold mt-1 leading-snug">{add.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Emergency Box */}
          <div className="mt-10 rounded-3xl bg-[#2E7D32] text-white p-8 border border-[#D4AF37]/50 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-white text-[#2E7D32] flex items-center justify-center shrink-0 shadow-md">
                <AlertTriangle className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-black text-[#FFD54F]">
                  {t("Storm Damage Emergency Response", "Respuesta de Emergencia por Tormentas")}
                </h3>
                <p className="text-xs sm:text-sm text-slate-100 font-semibold mt-0.5 max-w-2xl">
                  {t(
                    "Severe weather can strike without warning. If storm damage has left your property covered in fallen limbs or debris, we offer emergency dispatch during business hours to quickly secure your property.",
                    "Si los daños por tormenta han dejado su propiedad cubierta de ramas caídas o escombros, ofrecemos despacho de emergencia durante horario comercial."
                  )}
                </p>
              </div>
            </div>
            <a
              href="tel:6625711048"
              className="bg-[#111111] hover:bg-[#222222] text-[#FFD54F] text-xs font-black uppercase tracking-wider px-6 py-3.5 rounded-full border border-[#D4AF37]/50 shadow-md shrink-0 whitespace-nowrap"
            >
              {t("Call Emergency (662) 571-1048", "Llamar Emergencia")}
            </a>
          </div>

        </div>
      </section>

      {/* ── SERVICE AREAS (MS, TN, AR) ─────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#111111] text-white p-8 sm:p-12 border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden">
            <div aria-hidden className="absolute -right-20 -top-20 w-80 h-80 bg-[#2E7D32]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center max-w-3xl mx-auto relative z-10">
              <span className="text-xs font-black uppercase tracking-widest text-[#FFD54F] bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
                {t("Service Radius", "Radio de Servicio")}
              </span>
              <h2 className="mt-4 text-2xl sm:text-3xl font-black text-white tracking-tight">
                {t("Lawn Mowing Service Areas (50-Mile Radius)", "Áreas de Servicio de Cortado de Césped")}
              </h2>
              <p className="mt-2 text-slate-300 text-xs sm:text-sm font-medium">
                {t(
                  "We provide lawn mowing and grounds maintenance across Horn Lake and a 50-mile radius including:",
                  "Ofrecemos mantenimiento de césped en Horn Lake y un radio de 50 millas incluyendo:"
                )}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-left relative z-10">
              <div className="p-5 rounded-2xl bg-white/10 border border-white/15">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/15">
                  <MapPin className="w-4 h-4 text-[#FFD54F]" />
                  <h4 className="text-sm font-black text-[#FFD54F]">Mississippi</h4>
                </div>
                <p className="text-xs text-slate-200 font-semibold leading-relaxed">
                  Southaven, Olive Branch, Hernando, Nesbit, Walls, Tunica, Senatobia, Batesville, Oxford, and surrounding communities.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/10 border border-white/15">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/15">
                  <MapPin className="w-4 h-4 text-[#FFD54F]" />
                  <h4 className="text-sm font-black text-[#FFD54F]">Tennessee</h4>
                </div>
                <p className="text-xs text-slate-200 font-semibold leading-relaxed">
                  Memphis, Germantown, Bartlett, Collierville, Arlington, and surrounding areas.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/10 border border-white/15">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/15">
                  <MapPin className="w-4 h-4 text-[#FFD54F]" />
                  <h4 className="text-sm font-black text-[#FFD54F]">Arkansas</h4>
                </div>
                <p className="text-xs text-slate-200 font-semibold leading-relaxed">
                  West Memphis, Marion, and surrounding communities.
                </p>
              </div>
            </div>

            <div className="mt-6 text-center relative z-10 text-xs text-slate-300 font-semibold italic">
              "{t("Don't see your city? Give us a call—we may still be able to serve you within our 50-mile radius.", "¿No ve su ciudad? Llámenos, es posible que aún podamos servirle en nuestro radio de 50 millas.")}"
            </div>
          </div>
        </div>
      </section>

      {/* ── GET YOUR FREE QUOTE CTA ────────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#2E7D32] text-white relative overflow-hidden">
        <div aria-hidden className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div aria-hidden className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#FFD54F]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black text-[#FFD54F] tracking-tight">
            {t("Get Your Free Lawn Mowing Quote", "Obtenga Su Cotización Gratis de Cortado")}
          </h2>
          <p className="mt-4 text-slate-100 text-sm sm:text-base font-semibold max-w-2xl mx-auto leading-relaxed">
            {t(
              "Ready to enjoy a beautifully maintained lawn without the hassle? Contact Brown Lawn Care & Cleaning Service today for a free, no-obligation quote. We'll assess your property, discuss your needs, and provide an upfront, itemized estimate with no hidden fees.",
              "¿Listo para disfrutar de un césped hermoso sin complicaciones? Contáctenos hoy para una cotización gratuita sin compromiso."
            )}
          </p>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            <a
              href="tel:6625711048"
              className="bg-[#111111] hover:bg-[#222222] text-[#FFD54F] text-xs font-black uppercase tracking-wider px-8 py-4 rounded-full border border-[#D4AF37]/50 shadow-xl transition active:scale-95 flex items-center gap-2.5"
            >
              <Phone className="w-4 h-4 text-[#FFD54F] fill-current" />
              <span>{t("Call (662) 571-1048", "Llamar (662) 571-1048")}</span>
            </a>
            <Link
              to="/contact"
              className="bg-white hover:bg-slate-100 text-[#111111] text-xs font-black uppercase tracking-wider px-8 py-4 rounded-full shadow-xl transition active:scale-95 flex items-center gap-2"
            >
              <span>{t("Request Online Quote", "Solicitar Cotización")}</span>
              <ArrowRight className="w-4 h-4 text-[#2E7D32]" />
            </Link>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20 text-xs font-bold text-slate-200 flex flex-col items-center gap-1">
            <div className="text-[#FFD54F] font-black uppercase tracking-widest text-[11px]">
              Brown Lawn Care & Cleaning Service, LLC — Family Owned & Operated • 6 Years in Business • 15+ Years Experience
            </div>
            <div className="text-slate-200 text-[10px]">
              Licensed • Insured • Bonded • Bilingual Service (English & Spanish) • Serving Horn Lake & 50-Mile Radius
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
