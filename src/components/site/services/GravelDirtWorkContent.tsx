import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Truck,
  CheckCircle2,
  ShieldCheck,
  Award,
  Phone,
  ArrowRight,
  Sparkles,
  MapPin,
  Trees,
  Building2,
  Home,
  Scissors,
  ChevronDown,
  Globe,
  HardHat,
  BadgeCheck,
  Compass,
  FileCheck,
  Construction,
  Shovel,
  Layers,
  Ruler,
  Sprout,
  Trash2,
  HelpCircle,
  Mountain,
  Waves,
  Hammer,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

import serviceGravel from "@/assets/service-gravel.png";
import aboutEstateYard from "@/assets/about-estate-yard.png";
import bbbLogo from "@/assets/bbb.svg";

export function GravelDirtWorkContent() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"residential" | "commercial">("residential");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const drivewayOffers = [
    t("Site clearing, excavation, and vegetable soil removal", "Limpieza del sitio, excavación y remoción de tierra orgânica"),
    t("Proper heavy-duty aggregate base layer compaction", "Compactación adecuada de la capa base de agregados pesados"),
    t("Professional-grade gravel selection (#57 limestone, crusher run, etc.)", "Selección de grava profesional (#57 caliza, crusher run, etc.)"),
    t("Vibratory roller compaction for long-term vehicle stability", "Compactación con rodillo vibratorio para estabilidad a largo plazo"),
    t("Trench bed edging, containment borders, and drainage slope grading", "Orillado de lecho, bordes de contención y nivelación de drenaje"),
  ];

  const gravelTypes = [
    { name: t("#57 Limestone", "#57 Caliza"), desc: t("Standard clean driveway stone, excellent drainage & traction", "Piedra estándar para entradas, excelente drenaje y tracción") },
    { name: t("Crusher Run (Dense Grade)", "Crusher Run (Grado Denso)"), desc: t("Packs tightly with stone dust for solid, rut-resistant base layers", "Se compacta firmemente con polvo de piedra para bases sólidas") },
    { name: t("River Rock & Creek Stone", "Piedra de Río y Piedra de Arroyo"), desc: t("Decorative smooth round stones for dry creek beds & accents", "Piedras redondas decorativas para arroyos secos y acentos") },
    { name: t("Pea Gravel", "Grava Pea (Guijarro)"), desc: t("Smooth small pebbles ideal for garden walkways & patio borders", "Guijarros pequeños ideales para caminos de jardín y bordes") },
    { name: t("Recycled Concrete Aggregate", "Agregado de Concreto Reciclado"), desc: t("Cost-effective, heavy-duty eco option for sub-base construction", "Opción ecológica y económica para sub-bases de construcción") },
  ];

  const drivewayRepairServices = [
    t("Pothole, rut, and low-spot filling & mechanical compaction", "Relleno y compactación mecánica de baches, huellas y puntos bajos"),
    t("Fresh gravel replenishment and uniform spreading", "Reabastecimiento de grava fresca y distribución uniforme"),
    t("Edge restoration, containment border cleanup, and weed barrier", "Restauración de bordes, limpieza y barrera contra maleza"),
    t("Crown re-grading and cross-slope drainage correction", "Re-nivelación de corona y corrección de drenaje de pendiente"),
  ];

  const drainageGravelSolutions = [
    t("French drain trench excavation, perforated pipe & aggregate backfill", "Excavación de drenes franceses, tubería perforada y relleno"),
    t("Dry creek beds and decorative swales for heavy rain runoff", "Arroyos secos y canaletas decorativas para escorrentía de lluvia"),
    t("Foundation perimeter drainage gravel to protect basements & slabs", "Grava de drenaje perimetral para proteger cimientos y losas"),
    t("Erosion control riprap stone placement for hillsides & ditches", "Colocación de piedra riprap para control de erosión en laderas"),
  ];

  const dirtWorkServices = [
    t("Lot grading, slope creation, and site level preparation", "Nivelación de lotes, creación de pendientes y preparación del sitio"),
    t("Building pad & shed pad laser-level grading and soil compaction", "Nivelación con láser y compactación para losas de cobertizos"),
    t("Fill dirt delivery, spreading, and structural compaction", "Entrega, distribución y compactación estructural de tierra de relleno"),
    t("Screened topsoil delivery, grading, and lawn bed preparation", "Entrega de tierra vegetal cernida, nivelación y siembra de césped"),
    t("Utility trenching, drainage swales, and footing excavation", "Excavación para servicios públicos, canaletas de drenaje y zanjas"),
  ];

  const processSteps = [
    {
      step: "01",
      title: t("Site Assessment & Consultation", "Evaluación del Sitio y Consulta"),
      desc: t("We evaluate your property, soil type, natural runoff slopes, utility markers, and access points to design the optimal surface plan.", "Evaluamos su propiedad, tipo de suelo, pendientes de drenaje y accesos para diseñar el plan de superficie óptimo."),
      icon: Compass,
    },
    {
      step: "02",
      title: t("Customized Design & Planning", "Diseño y Planificación Personalizada"),
      desc: t("We select the correct aggregate mix, determine required excavation depths, calculate tonnage, and establish precise drainage slopes.", "Seleccionamos la mezcla de agregados correcta, determinamos profundidades y calculamos toneladas necesarias."),
      icon: FileCheck,
    },
    {
      step: "03",
      title: t("Transparent Estimate", "Cotización Transparente"),
      desc: t("You receive an upfront, itemized quote detailing material tonnage, equipment mobilization, excavation, grading, and compaction.", "Recibe una cotización desglosada que detalla toneladas de material, maquinaria, excavación y compactación."),
      icon: Layers,
    },
    {
      step: "04",
      title: t("Precision Execution", "Ejecución de Precisión"),
      desc: t("Using skid steers, excavators, box blades, and heavy vibratory rollers, we excavate, spread material, and compact to engineering specs.", "Utilizando minicargadores, excavadoras y rodillos vibratorios, excavamos, distribuimos y compactamos."),
      icon: Construction,
    },
    {
      step: "05",
      title: t("Final Grading & Inspection", "Nivelación Final e Inspección"),
      desc: t("We complete laser-accurate final grading, test water drainage paths, clean paved borders, and conduct a final walkthrough with you.", "Completamos la nivelación final con láser, probamos rutas de agua, barremos bordes y realizamos la inspección."),
      icon: BadgeCheck,
    },
  ];

  const whyChooseUsPoints = [
    {
      title: t("15+ Years of Excavation & Grading Experience", "15+ Años de Experiencia en Excavación y Nivelación"),
      desc: t("Over a decade and a half mastering clay soils, heavy rain drainage, and driveway base stability across MS, TN, and AR.", "Más de 15 años dominando suelos arcillosos, drenaje de lluvias pesadas y bases de entradas en MS, TN y AR."),
      icon: Award,
    },
    {
      title: t("Licensed, Insured & Bonded Protection", "Protección Licenciada, Asegurada y Afianzada"),
      desc: t("Full commercial general liability insurance and 100% bonding protect your property during all earth-moving operations.", "Seguro de responsabilidad comercial y fianza del 100% protegen su propiedad durante la movimiento de tierra."),
      icon: ShieldCheck,
    },
    {
      title: t("Heavy Excavation Equipment Fleet", "Flota de Maquinaria Pesada de Excavación"),
      desc: t("Equipped with compact excavators, skid steers, graders, rollers, and dump trucks for fast, precision project completion.", "Equipados con miniexcavadoras, minicargadores, niveladoras y camiones de volteo para ejecución precisa."),
      icon: Truck,
    },
    {
      title: t("Engineered Base & Compaction Protocol", "Protocolo de Base y Compactación de Ingeniería"),
      desc: t("We don't just dump gravel on dirt. We excavate soft topsoil, lay compactable base stone, and use vibratory rollers for rut-proof durability.", "No solo tiramos grava. Excavamos tierra blanda, colocamos piedra base compactable y rodillos vibratorios."),
      icon: Construction,
    },
    {
      title: t("Punctual, Reliable & Bilingual Service", "Servicio Puntual, Confiable y Bilingüe"),
      desc: t("We show up on schedule, respect your property, and communicate clearly in both English and Spanish.", "Llegamos a tiempo, respetamos su propiedad y nos comunicamos con fluidez en inglés y español."),
      icon: Globe,
    },
  ];

  const faqs = [
    {
      q: t("How long does a gravel driveway installation take?", "¿Cuánto tiempo tarda la instalación de una entrada de grava?"),
      a: t("Most residential gravel driveway installations or resurfacing projects take 1 to 3 days, depending on length, excavation depth, and weather conditions. We provide a firm timeline during your free estimate.", "La mayoría de las instalaciones o nivelaciones de entradas residenciales tardan entre 1 y 3 días según el tamaño y la excavación."),
    },
    {
      q: t("What type of gravel is best for driveways?", "¿Qué tipo de grava es mejor para entradas de vehículos?"),
      a: t("For a rut-proof driveway, we recommend a two-layer system: a dense base of Crusher Run (crushed limestone with dust that locks together when rolled) topped with 2-3 inches of #57 Limestone for clean traction.", "Recomendamos un sistema de dos capas: una base densa de Crusher Run cubierta con 2-3 pulgadas de caliza #57 para tracción limpia."),
    },
    {
      q: t("Do you fix drainage problems and standing water?", "¿Solucionan problemas de drenaje y agua estancada?"),
      a: t("Yes! Drainage is an essential part of dirt work. We install French drains, dry creek swales, correct property slope grading, and direct rainwater safely away from house foundations and driveways.", "¡Sí! El drenaje es clave. Instalamos drenes franceses, arroyos secos y re-nivelamos pendientes para alejar el agua de la casa."),
    },
    {
      q: t("Can you work around existing landscaping and trees?", "¿Pueden trabajar alrededor de jardines y árboles existentes?"),
      a: t("Yes! We use compact machinery operated by skilled crew members to maneuver carefully around specimen trees, flower beds, fences, and existing concrete without causing damage.", "¡Sí! Usamos maquinaria compacta operada por expertos para maniobrar con cuidado alrededor de árboles y estructuras."),
    },
    {
      q: t("How much does gravel and dirt work cost?", "¿Cuánto cuestan los trabajos de grava y tierra?"),
      a: t("Costs depend on square footage, required excavation depth, material tonnage (#57 limestone, topsoil, fill dirt), and drainage requirements. We provide free, upfront itemized estimates with no hidden fees.", "Los costos dependen de los pies cuadrados, la profundidad de excavación y el tonelaje de material. Ofrecemos cotizaciones gratuitas."),
    },
  ];

  const addOns = [
    { title: t("Lawn Mowing & Maintenance", "Cortado de Césped"), desc: t("Keep lawn borders pristine around newly graded gravel", "Mantenga impecables los bordes alrededor de la grava"), icon: Scissors },
    { title: t("Landscaping & Design", "Paisajismo y Diseño"), desc: t("Install sod, mulch beds & decorative borders after dirt work", "Instale césped en rollo y mantillo tras nivelar"), icon: Trees },
    { title: t("Tree & Brush Removal", "Remoción de Árboles"), desc: t("Clear overgrown trees and stumps before site grading", "Limpie árboles y tocones antes de nivelar el sitio"), icon: Trash2 },
    { title: t("Cleaning Services", "Servicios de Limpieza"), desc: t("Post-construction site cleaning & power washing", "Limpieza de sitio post-construcción y lavado a presión"), icon: Sparkles },
    { title: t("Brush Clearing & Land Prep", "Limpieza de Terrenos"), desc: t("Large acreage clearing prior to foundation dirt work", "Limpieza de grandes terrenos previa a trabajos de tierra"), icon: Sprout },
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
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/50 bg-[#1B5E20]/8 text-[#2E7D32] text-xs font-black uppercase tracking-widest mb-6 shadow-xs">
                <Truck className="w-3.5 h-3.5 text-[#2E7D32]" />
                <span>{t("Heavy Site Prep & Aggregate Grading", "Preparación de Sitio y Nivelación de Agregados")}</span>
              </div>

              {/* Title */}
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight leading-[1.15]">
                {t("Gravel & Dirt ", "Trabajos de Grava y ")}
                <span className="bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] bg-clip-text text-transparent">
                  {t("Work", "Tierra")}
                </span>
              </h1>

              {/* Subheadline Tagline */}
              <h2 className="mt-3 text-lg sm:text-xl font-extrabold text-[#2E7D32] tracking-tight">
                {t("Expert Site Preparation and Surface Solutions", "Soluciones Expertas de Preparación de Sitio y Superficies")}
              </h2>

              {/* Intro Paragraph */}
              <p className="mt-5 text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
                {t(
                  "Whether you need a durable gravel driveway, a level building site, topsoil delivery, or proper drainage correction for your property, professional gravel and dirt work provides the foundation for lasting results. At Brown Lawn Care & Cleaning Service, we bring over 15 years of experience to every excavation, grading, and surface installation project. Our family-owned team is licensed, insured, and bonded, delivering precision work that enhances functionality, accessibility, and curb appeal across Horn Lake and a 50-mile radius.",
                  "Ya sea que necesite una entrada de grava duradera, un sitio de construcción nivelado o corrección de drenaje, los trabajos profesionales de grava y tierra brindan la base para resultados duraderos. En Brown Lawn Care & Cleaning Service aportamos más de 15 años de experiencia."
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
                  {t("15+ Years Excavation Exp.", "15+ Años Exp. en Excavación")}
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-[#F7F7F7] border border-slate-200 text-xs font-black text-[#111111] flex items-center gap-1.5">
                  <Construction className="w-4 h-4 text-[#2E7D32]" />
                  {t("Heavy Equipment Fleet", "Flota de Maquinaria Pesada")}
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
                  <span>{t("Get Free Gravel Quote", "Cotización de Grava Gratis")}</span>
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
                  src={serviceGravel}
                  alt="Gravel Driveway Grading and Heavy Equipment Work"
                  className="w-full h-[400px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#D4AF37]/50 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-[#2E7D32]">{t("Laser Grading & Heavy Compaction", "Nivelación Láser y Compactación")}</div>
                      <div className="text-sm font-extrabold text-[#111111] mt-0.5">{t("Gravel Driveways, Dirt Work & Drainage", "Entradas de Grava, Tierra y Drenaje")}</div>
                    </div>
                    <img src={bbbLogo} alt="BBB Logo" className="h-9 w-auto object-contain" />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── OUR GRAVEL SERVICES SECTION ─────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("Gravel Solutions", "Soluciones de Grava")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("Our Gravel Driveway & Surface Services", "Servicios de Entradas de Grava y Superficies")}
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-medium">
              {t(
                "From new driveway construction and pothole repairs to decorative stone pathways and French drain gravel systems.",
                "Desde construcción de nuevas entradas y reparación de baches hasta caminos decorativos y drenes franceses."
              )}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Gravel Driveway Installation */}
            <div className="rounded-3xl bg-[#F7F7F7] p-7 border border-slate-200 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#2E7D32] text-[#FFD54F] flex items-center justify-center shadow-md mb-5 border border-[#D4AF37]/40">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-[#111111]">
                  {t("Gravel Driveway Installation", "Instalación de Entradas de Grava")}
                </h3>
                <p className="mt-2 text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  {t(
                    "A well-installed gravel driveway provides outstanding durability, water drainage, and rustic curb appeal at a fraction of asphalt or concrete costs. We excavate soft topsoil, lay a solid compacted base, and finish with clean aggregate.",
                    "Una entrada de grava bien instalada ofrece excelente durabilidad, drenaje y atractivo rústico por una fracción del costo del concreto."
                  )}
                </p>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-[#2E7D32] mb-2.5">
                    {t("Installation Process Includes:", "El Proceso de Instalación Incluye:")}
                  </h4>
                  <ul className="space-y-2">
                    {drivewayOffers.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs font-bold text-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 2: Gravel Driveway Repair & Maintenance */}
            <div className="rounded-3xl bg-[#F7F7F7] p-7 border border-slate-200 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#111111] text-[#FFD54F] flex items-center justify-center shadow-md mb-5 border border-[#D4AF37]/40">
                  <Hammer className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-[#111111]">
                  {t("Driveway Repair & Maintenance", "Reparación y Mantenimiento de Entradas")}
                </h3>
                <p className="mt-2 text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  {t(
                    "Heavy rain and vehicle traffic can create unsightly ruts, potholes, and washed-out gravel borders over time. We restore old driveways with fresh gravel replenishment, re-grading, and compaction.",
                    "Las lluvias pesadas y el tráfico vehicular crean ruts y baches. Restauramos entradas viejas re-nivelando y añadiendo grava fresca."
                  )}
                </p>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-[#2E7D32] mb-2.5">
                    {t("Repair Services Include:", "Los Servicios de Reparación Incluyen:")}
                  </h4>
                  <ul className="space-y-2">
                    {drivewayRepairServices.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs font-bold text-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 3: Drainage Gravel & French Drains */}
            <div className="rounded-3xl bg-[#F7F7F7] p-7 border border-slate-200 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#2E7D32] text-[#FFD54F] flex items-center justify-center shadow-md mb-5 border border-[#D4AF37]/40">
                  <Waves className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-[#111111]">
                  {t("Drainage Gravel & French Drains", "Grava de Drenaje y Drenes Franceses")}
                </h3>
                <p className="mt-2 text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  {t(
                    "Uncontrolled rainwater can erode driveways and compromise house foundations. We design and install gravel drainage systems that safely collect and direct runoff away from structures.",
                    "El agua de lluvia sin controlar erosiona entradas y daña cimientos. Diseñamos e instalamos sistemas de grava para dirigir la correntía."
                  )}
                </p>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-[#2E7D32] mb-2.5">
                    {t("Drainage Solutions Include:", "Las Soluciones de Drenaje Incluyen:")}
                  </h4>
                  <ul className="space-y-2">
                    {drainageGravelSolutions.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs font-bold text-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* Gravel Selection Guide */}
          <div className="mt-14 rounded-3xl bg-[#F7F7F7] border border-slate-200 p-8 sm:p-10 text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
                {t("Material Guide", "Guía de Materiales")}
              </span>
            </div>
            <h3 className="text-2xl font-black text-[#111111] tracking-tight">
              {t("Professional Aggregate & Gravel Selection", "Selección Profesional de Grava y Agregados")}
            </h3>
            <p className="mt-1 text-slate-600 text-xs sm:text-sm font-medium">
              {t("We source top-grade crushed limestone, river rock, and aggregates tailored to your project's load needs:", "Obtenemos caliza triturada, piedra de río y agregados de primera calidad adaptados a las necesidades de su proyecto:")}
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {gravelTypes.map((gt) => (
                <div key={gt.name} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-[#2E7D32]/10 text-[#2E7D32] flex items-center justify-center font-black text-xs mb-2.5">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-black text-[#111111]">{gt.name}</h4>
                  <p className="mt-1 text-[11px] text-slate-600 font-medium leading-snug">{gt.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── OUR DIRT WORK SERVICES SECTION ─────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#F7F7F7] border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("Earth Moving & Excavation", "Movimiento de Tierra y Excavación")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("Our Dirt Work, Grading & Topsoil Services", "Nuestros Servicios de Tierra, Nivelación y Suelo")}
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-medium">
              {t(
                "Precision site grading, building pad preparation, fill dirt delivery, screened topsoil, and erosion control.",
                "Nivelación de precisión, preparación de losas, entrega de tierra de relleno, tierra vegetal y control de erosión."
              )}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Site Grading & Leveling */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm text-left flex flex-col justify-between hover:shadow-md transition">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#2E7D32] text-[#FFD54F] flex items-center justify-center mb-5 shadow-sm border border-[#D4AF37]/40">
                  <Ruler className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-[#111111]">
                  {t("Site Grading & Leveling", "Nivelación de Sitio y Terrenos")}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  {t(
                    "Proper land grading creates a stable, level surface for home additions, shed pads, driveways, and lawn installation while preventing water pooling near building foundations.",
                    "La nivelación adecuada crea una superficie estable para cobertizos, entradas y césped, evitando estancamiento de agua."
                  )}
                </p>
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-[#2E7D32] mb-2">
                    {t("Grading Applications:", "Aplicaciones de Nivelación:")}
                  </h4>
                  <ul className="space-y-1.5 text-xs font-bold text-slate-800">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32]" />{t("Building pad & shed foundation prep", "Preparación de losas para cobertizos")}</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32]" />{t("Slope grading & rainwater diversion", "Nivelación de pendiente y desvío de lluvia")}</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32]" />{t("Spot grading for yard depressions", "Nivelación de hundimientos en el jardín")}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 2: Fill Dirt & Topsoil Delivery */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm text-left flex flex-col justify-between hover:shadow-md transition">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#111111] text-[#FFD54F] flex items-center justify-center mb-5 shadow-sm border border-[#D4AF37]/40">
                  <Shovel className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-[#111111]">
                  {t("Fill Dirt & Topsoil Services", "Servicios de Tierra de Relleno y Vegetal")}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  {t(
                    "We haul, deliver, spread, and grade quality structural fill dirt for deep hole filling and rich screened topsoil for sod installation, flower beds, and lawn establishment.",
                    "Entregamos, distribuimos y nivelamos tierra de relleno para huecos profundos y tierra vegetal rica para césped en rollo."
                  )}
                </p>
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-[#2E7D32] mb-2">
                    {t("Soil Delivery Options:", "Opciones de Entrega de Tierra:")}
                  </h4>
                  <ul className="space-y-1.5 text-xs font-bold text-slate-800">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32]" />{t("Red clay structural fill dirt", "Tierra de relleno estructural de arcilla roja")}</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32]" />{t("Screened dark organic topsoil", "Tierra vegetal orgánica oscura cernida")}</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32]" />{t("Soil spreading & lawn prep grading", "Esparcido de tierra y nivelación para siembra")}</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 3: Trenching & Excavation */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm text-left flex flex-col justify-between hover:shadow-md transition">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#2E7D32] text-[#FFD54F] flex items-center justify-center mb-5 shadow-sm border border-[#D4AF37]/40">
                  <Construction className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-[#111111]">
                  {t("Trenching & Excavation", "Excavación y Zanjas")}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  {t(
                    "Our compact excavator operators execute clean utility trenching, drainage ditch excavation, retaining wall footing trenches, and pond/water feature digging with surgical precision.",
                    "Nuestros operadores de miniexcavadoras realizan zanjas para servicios públicos, desagües y muros de contención con precisión."
                  )}
                </p>
                <div className="mt-5 pt-4 border-t border-slate-100">
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-[#2E7D32] mb-2">
                    {t("Excavation Capabilities:", "Capacidades de Excavación:")}
                  </h4>
                  <ul className="space-y-1.5 text-xs font-bold text-slate-800">
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32]" />{t("Utility line & drainage pipe trenching", "Zanjas para líneas de servicio y drenaje")}</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32]" />{t("Retaining wall & footing digging", "Excavación para cimientos y muros de contención")}</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32]" />{t("Erosion control riprap placement", "Colocación de riprap para control de erosión")}</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── OUR 5-STEP GRAVEL & DIRT PROCESS ───────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("Precision Execution", "Ejecución de Precisión")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("Our Gravel & Dirt Work Process", "Nuestro Proceso de Trabajos de Grava y Tierra")}
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {processSteps.map((st) => {
              const Icon = st.icon;
              return (
                <div
                  key={st.step}
                  className="rounded-3xl bg-[#F7F7F7] p-6 border border-slate-200 flex flex-col justify-between hover:bg-white hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300 text-left group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-[#2E7D32]">{st.step}</span>
                      <div className="w-9 h-9 rounded-xl bg-[#2E7D32]/10 text-[#2E7D32] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-base font-black text-[#111111] group-hover:text-[#2E7D32] transition-colors">
                      {st.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 font-medium leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE BROWN LAWN CARE ───────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#F7F7F7] border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("Built To Last", "Construido Para Durar")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("Why Choose Brown Lawn Care for Gravel & Dirt Work?", "¿Por Qué Elegir Brown Lawn Care para Grava y Tierra?")}
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUsPoints.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="p-7 rounded-3xl bg-white border border-slate-200 hover:border-[#2E7D32] transition shadow-xs text-left">
                  <div className="w-12 h-12 rounded-2xl bg-[#2E7D32] text-[#FFD54F] flex items-center justify-center mb-5 shadow-sm border border-[#D4AF37]/40">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-[#111111]">{item.title}</h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── RESIDENTIAL VS COMMERCIAL GRAVEL & DIRT ──────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("Tailored Solutions", "Soluciones A Medida")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("Residential & Commercial Dirt & Gravel Work", "Trabajos Residenciales y Comerciales de Grava y Tierra")}
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
                <span>{t("Residential Projects", "Proyectos Residenciales")}</span>
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
                <span>{t("Commercial Projects", "Proyectos Comerciales")}</span>
              </button>
            </div>
          </div>

          {/* Active Tab Content */}
          <div className="mt-10 bg-[#F7F7F7] rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md max-w-4xl mx-auto text-left">
            {activeTab === "residential" ? (
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-[#111111]">
                  {t("Residential Gravel & Dirt Solutions", "Soluciones Residenciales de Grava y Tierra")}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                  {t(
                    "Upgrade home driveways, level garden pads, install decorative creek rock, and correct standing water near your home foundation.",
                    "Mejore entradas de casas, nivele cobertizos, instale piedras decorativas y corrija el agua estancada cerca de cimientos."
                  )}
                </p>
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    t("Gravel driveway installation & pothole repair", "Instalación de entradas de grava y reparación de baches"),
                    t("Garden walkways, side yard & patio pad prep", "Caminos de jardín y preparación para patios"),
                    t("French drain installation & rainwater management", "Instalación de drenes franceses y drenaje de agua"),
                    t("Shed pad leveling & building pad preparation", "Nivelación de losas para cobertizos y cimientos"),
                    t("Fill dirt hole filling & screened topsoil delivery", "Relleno de huecos con tierra y entrega de tierra vegetal"),
                    t("Decorative river rock & dry creek bed installation", "Instalación de piedras de río y arroyos secos"),
                  ].map((pt) => (
                    <div key={pt} className="flex items-center gap-2.5 bg-white p-3.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-extrabold text-[#111111]">
                      <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-[#111111]">
                  {t("Commercial Site Grading & Gravel Parking", "Nivelación Comercial de Sitios y Estacionamientos")}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                  {t(
                    "Heavy-duty aggregate installation for commercial access roads, heavy equipment parking lots, site pad clearing, and utility trench excavation.",
                    "Instalación de agregados pesados para carreteras de acceso comercial, estacionamientos de maquinaria y excavaciones."
                  )}
                </p>
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    t("Commercial aggregate access road installation", "Instalación de rutas de acceso comercial de agregados"),
                    t("Heavy machinery gravel parking lot compaction", "Compactación de estacionamientos de grava para maquinaria"),
                    t("Commercial site pad grading & land preparation", "Nivelación de terrenos comerciales y preparación"),
                    t("Erosion control riprap & drainage ditch construction", "Colocación de riprap y zanjas de drenaje"),
                    t("Utility line trench excavation & backfilling", "Excavación de zanjas para servicios públicos y relleno"),
                    t("Large scale fill dirt haul-off & land leveling", "Retiro de tierra de relleno a gran escala y nivelación"),
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

      {/* ── FREQUENTLY ASKED QUESTIONS (FAQS) ───────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#F7F7F7] border-y border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("Got Questions?", "¿Tiene Preguntas?")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("Frequently Asked Questions", "Preguntas Frecuentes")}
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl bg-white border border-slate-200 overflow-hidden transition shadow-2xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-black text-sm sm:text-base text-[#111111] hover:text-[#2E7D32] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ADD-ON SERVICES ────────────────────────────────────────────── */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
            {t("Complete Development", "Desarrollo Completo")}
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl font-black text-[#111111] tracking-tight">
            {t("Combine With Our Other Property Services", "Combine Con Nuestros Otros Servicios")}
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-left">
            {addOns.map((add) => {
              const Icon = add.icon;
              return (
                <div key={add.title} className="p-5 rounded-2xl bg-[#F7F7F7] border border-slate-200 hover:border-[#2E7D32] transition shadow-2xs">
                  <div className="w-9 h-9 rounded-xl bg-[#2E7D32]/10 text-[#2E7D32] flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-xs font-black text-[#111111]">{add.title}</h4>
                  <p className="text-[11px] text-slate-500 font-semibold mt-1 leading-snug">{add.desc}</p>
                </div>
              );
            })}
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
                {t("Gravel & Dirt Work Service Areas (50-Mile Radius)", "Áreas de Servicio de Grava y Tierra (50 Millas)")}
              </h2>
              <p className="mt-2 text-slate-300 text-xs sm:text-sm font-medium">
                {t(
                  "We deliver aggregate stone, fill dirt, topsoil, and provide heavy grading across Horn Lake and a 50-mile radius:",
                  "Entregamos piedra, tierra de relleno, tierra vegetal y nivelación en Horn Lake y 50 millas a la redonda:"
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
                  Horn Lake, Southaven, Olive Branch, Hernando, Nesbit, Walls, Tunica, Senatobia, Batesville, Oxford, and surrounding communities.
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
          </div>
        </div>
      </section>

      {/* ── GET STARTED TODAY CTA BANNER ───────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#2E7D32] text-white relative overflow-hidden">
        <div aria-hidden className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div aria-hidden className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#FFD54F]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black text-[#FFD54F] tracking-tight">
            {t("Get Your Free Gravel & Dirt Work Quote", "Obtenga Su Cotización Gratis de Grava y Tierra")}
          </h2>
          <p className="mt-4 text-slate-100 text-sm sm:text-base font-semibold max-w-2xl mx-auto leading-relaxed">
            {t(
              "Ready to improve your property with professional driveway installation, site grading, topsoil delivery, or drainage correction? Contact Brown Lawn Care & Cleaning Service today for a free, no-obligation quote.",
              "¿Listo para mejorar su propiedad con instalación de entradas de grava, nivelación, tierra vegetal o drenaje? Contáctenos hoy para un presupuesto sin compromiso."
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
              Licensed • Insured • Bonded • Bilingual Service (English & Spanish) • Proudly Serving Horn Lake & 50-Mile Radius
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
