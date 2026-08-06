import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Award,
  Phone,
  ArrowRight,
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
  Truck,
  SprayCan,
  Clock,
  Leaf,
  Briefcase,
  Warehouse,
  Tractor,
  Droplets,
  Bath,
  BedDouble,
  Sofa,
  Calendar,
  KeyRound,
  Heart,
  ShieldAlert,
  Flame,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

import serviceWireHouse from "@/assets/service-wire-house.png";
import aboutEstateYard from "@/assets/about-estate-yard.png";
import bbbLogo from "@/assets/bbb.svg";

export function ResidentialWireHouseContent() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"residential" | "agricultural">("residential");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const deepCleanTasks = [
    t("Kitchen deep cleaning (appliances inside/out, cabinets, counters & degreasing)", "Limpieza profunda de cocina (electrodomésticos interior/exterior, muebles y desengrase)"),
    t("Bathroom sanitization (toilets, tile grout, showers, tubs, vanities & mirrors)", "Desinfección de baños (inodoros, azulejos, duchas, bañeras y espejos)"),
    t("Bedroom & living room furniture dusting, vacuuming & surface care", "Polvo, aspirado y cuidado de muebles en dormitorios y salas de estar"),
    t("Baseboard, door frame, window sill, trim & light fixture detail washing", "Lavado detallado de zócalos, marcos de puertas, repisas y lámparas"),
    t("Interior glass, sliding door, mirror & blinds dust removal", "Limpieza de cristales interiores, puertas corredizas, espejos y persianas"),
    t("Hardwood, tile & carpet floor vacuuming, mopping & disinfection", "Aspirado, trapeado y desinfección de pisos de madera, azulejos y alfombras"),
  ];

  const moveInOutTasks = [
    t("Comprehensive move-in/move-out full house deep cleaning", "Limpieza profunda completa de entrada/salida de vivienda"),
    t("Oven, stove, refrigerator & dishwasher interior & exterior degreasing", "Desengrase interior y exterior de horno, estufa, refrigerador y lavavajillas"),
    t("Cabinet, drawer, pantry & closet interior vacuuming & wiping", "Limpieza interna de armarios, cajones, despensas y clósets"),
    t("Floor deep scrubbing, carpet steam extraction & scuff removal", "Fregado profundo de pisos, extracción de alfombras y marcas"),
    t("Window glass, track, frame & sill detailing", "Limpieza detallada de vidrios, rieles y marcos de ventanas"),
    t("Wall spot cleaning, outlet cover & switch plate sanitization", "Limpieza de manchas en paredes, placas de enchufes e interruptores"),
  ];

  const wireHouseServicesList = [
    {
      title: t("Warehouse & Poultry Structure Sanitization", "Desinfección de Galpones y Estructuras Avícolas"),
      desc: t("Complete interior sanitization, high-pressure power washing, fan & ventilation clearing, litter/waste removal, and EPA-registered biosecurity disinfection for poultry and livestock houses.", "Desinfección interior completa, lavado a presión de alta fuerza, limpieza de ventilación y retiro de residuos para avícolas."),
      icon: Warehouse,
    },
    {
      title: t("Agricultural Biosecurity & Disinfection", "Bioseguridad Agrícola y Desinfección"),
      desc: t("Facility-wide livestock health disinfection protocols, odor control, pest-prevention sanitization, and pathogen elimination.", "Protocolos de desinfección para salud del ganado, control de olores y eliminación de patógenos."),
      icon: ShieldAlert,
    },
    {
      title: t("Heavy-Duty Agricultural Power Washing", "Lavado a Presión Agrícola Pesado"),
      desc: t("High-psi pressure washing for barn walls, stables, feeding troughs, concrete pads, and farm building exteriors.", "Lavado a presión de alta potencia para paredes de establos, comederos, losas de concreto y exteriores."),
      icon: Droplets,
    },
    {
      title: t("Heavy Dirt, Manure & Stain Removal", "Remoción de Manchas Pesadas y Estiércol"),
      desc: t("Specialized degreasing and stain removal for manure buildup, grease, mold, chemical residues, and hard water scale.", "Desengrase y remoción de manchas de estiércol, grasa, moho y residuos químicos."),
      icon: Flame,
    },
    {
      title: t("Tractor & Farm Equipment Washing", "Lavado de Tractores y Equipos Agrícolas"),
      desc: t("Detailed cleaning and sanitization for tractors, combines, trailers, implements, and transport vehicles.", "Limpieza y desinfección detallada para tractores, cosechadoras, remolques y vehículos de transporte."),
      icon: Tractor,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: t("Consultation & Assessment", "Consulta y Evaluación"),
      desc: t("We assess your property (home layout or agricultural structure requirements), evaluate surface types, traffic, and specific biosecurity or cleaning priorities.", "Evaluamos su propiedad (distribución del hogar o requisitos agrícolas), tipos de superficies y prioridades."),
      icon: Compass,
    },
    {
      step: "02",
      title: t("Customized Cleaning Plan", "Plan de Limpieza Personalizado"),
      desc: t("We develop a tailored task checklist (recurring housekeeping, deep move-in clean, or agricultural power wash sanitization) designed for your schedule.", "Desarrollamos un plan a medida (mantenimiento recurrente, limpieza profunda o desinfección agrícola)."),
      icon: FileCheck,
    },
    {
      step: "03",
      title: t("Transparent Itemized Quote", "Cotización Desglosada"),
      desc: t("You receive an upfront, flat-rate quote with no hidden fees detailing equipment, Eco-friendly supplies, labor, and scope of work.", "Recibe una cotización desglosada y transparente que detalla equipos, suministros ecológicos y alcance."),
      icon: Layers,
    },
    {
      step: "04",
      title: t("Professional Execution", "Ejecución Profesional"),
      desc: t("Our trained, background-checked crew arrives equipped with commercial steam extractors, HEPA vacuums, or high-psi washers to clean with precision.", "Nuestro equipo verificado llega equipado con extractores de vapor, aspiradoras HEPA o lavadoras a presión."),
      icon: SprayCan,
    },
    {
      step: "05",
      title: t("Quality Inspection", "Inspección de Calidad"),
      desc: t("We conduct a final walkthrough inspection to verify every room, corner, baseboard, or barn structure meets our strict 100% satisfaction standard.", "Realizamos una inspección final para verificar que cada habitación, rincón o establo cumpla con nuestros estándares."),
      icon: BadgeCheck,
    },
  ];

  const whyChooseUsPoints = [
    {
      title: t("Licensed, Insured & 100% Bonded", "Licenciado, Asegurado y Afianzado 100%"),
      desc: t("Comprehensive liability insurance and bonding protect your home, personal belongings, and farm structures completely.", "Seguro de responsabilidad general y fianza protegen su hogar, pertenencias personales y estructuras agrícolas."),
      icon: ShieldCheck,
    },
    {
      title: t("15+ Years Dual Experience", "15+ Años de Experiencia Doble"),
      desc: t("Over 15 years mastering both delicate residential interior detailing and heavy-duty agricultural biosecurity washing.", "Más de 15 años dominando tanto la limpieza residencial de interiores como el lavado de bioseguridad agrícola."),
      icon: Award,
    },
    {
      title: t("Safe & Eco-Friendly Products", "Productos Seguros y Ecológicos"),
      desc: t("We use family-safe, pet-friendly products for home interiors and EPA-certified disinfectants for farm biosecurity.", "Usamos productos seguros para niños y mascotas en hogares, y desinfectantes aprobados por la EPA en granjas."),
      icon: Leaf,
    },
    {
      title: t("Trained, Trustworthy & Background-Checked", "Personal Capacitado y Verificado"),
      desc: t("Our cleaning technicians are background-checked, respectful of your privacy, and dedicated to detail.", "Nuestros técnicos están verificados, respetan su privacidad y están dedicados al detalle."),
      icon: Heart,
    },
    {
      title: t("Heavy-Duty Commercial Equipment", "Equipos Comerciales de Uso Pesado"),
      desc: t("Equipped with high-psi hot water power washers, HEPA filtration vacuums, and commercial carpet steam extractors.", "Equipados con lavadoras a presión de agua caliente, aspiradoras HEPA y extractores de vapor de alfombras."),
      icon: Construction,
    },
    {
      title: t("Bilingual Service (English & Spanish)", "Servicio Bilingüe (Inglés y Español)"),
      desc: t("Clear, seamless communication in both English and Spanish so your exact preferences are always met.", "Comunicación fluida tanto en inglés como en español para garantizar que siempre se cumplan sus instrucciones."),
      icon: Globe,
    },
  ];

  const faqs = [
    {
      q: t("Do you provide all cleaning supplies and equipment?", "¿Proporcionan todos los suministros y equipos de limpieza?"),
      a: t("Yes! For residential house cleaning, we supply 100% of all eco-friendly products, micro-fiber towels, HEPA vacuums, and mops. For warehouse and agricultural power washing, we bring heavy-duty high-psi power washing rigs and EPA-registered disinfectants.", "¡Sí! Proporcionamos el 100% de los productos ecológicos, toallas, aspiradoras y equipos de lavado a presión agrícola."),
    },
    {
      q: t("What is warehouse cleaning?", "¿Qué es la limpieza de almacenes y galpones (warehouse cleaning)?"),
      a: t("Warehouse cleaning refers to the specialized cleaning, pressure washing, and biosecurity sanitization of agricultural and commercial structures—such as poultry houses, livestock barns, equipment sheds, and holding facilities—to control pathogens and protect health.", "Es la limpieza especializada, lavado a presión y desinfección de estructuras comerciales y agrícolas (avícolas, establos, galpones)."),
    },
    {
      q: t("Are your residential cleaning products safe for kids and pets?", "¿Sus productos residenciales son seguros para niños y mascotas?"),
      a: t("Yes, absolutely. We prioritize non-toxic, eco-friendly, low-VOC cleaning products for home interiors that clean deeply without leaving harsh chemical fumes or residues behind.", "Sí, absolutamente. Priorizamos productos no tóxicos y ecológicos que no dejan vapores ni residuos químicos."),
    },
    {
      q: t("Do you offer one-time move-in or move-out deep cleaning?", "¿Ofrecen limpieza profunda única para mudanzas de entrada o salida?"),
      a: t("Yes! Move-in and move-out deep cleaning is one of our most popular residential services. We clean inside all appliances, cabinets, drawers, baseboards, and closets so the house is 100% ready.", "¡Sí! La limpieza de mudanzas incluye el interior de electrodomésticos, armarios, cajones y zócalos."),
    },
    {
      q: t("What areas do you serve for residential and warehouse cleaning?", "¿Qué áreas cubren para limpieza residencial y agrícola?"),
      a: t("We proudly serve Horn Lake and a 50-mile radius across Mississippi (Southaven, Olive Branch, Hernando, Oxford, etc.), Tennessee (Memphis, Germantown, Collierville, etc.), and Arkansas (West Memphis, Marion).", "Servimos a Horn Lake y 50 millas a la redonda en Mississippi, Tennessee y Arkansas."),
    },
  ];

  const addOnsResidential = [
    { title: t("Lawn Mowing & Maintenance", "Cortado de Césped"), desc: t("Maintain pristine lawn appeal alongside interior clean", "Mantenga hermoso el jardín junto con la limpieza interior"), icon: Scissors },
    { title: t("Landscaping & Design", "Paisajismo y Diseño"), desc: t("Mulching, sod installation & flower bed creation", "Instale mantillo, césped en rollo y jardineras"), icon: Trees },
    { title: t("Tree & Brush Removal", "Remoción de Árboles"), desc: t("Remove dangerous limbs & cleared property brush", "Elimine ramas peligrosas y maleza acumulada"), icon: Trash2 },
    { title: t("Gravel & Dirt Work", "Trabajos de Grava y Tierra"), desc: t("Driveway gravel repair, grading & topsoil delivery", "Reparación de entradas de grava y entrega de tierra"), icon: Truck },
    { title: t("Exterior Pressure Washing", "Lavado a Presión Exterior"), desc: t("Clean house siding, driveways, decks & patios", "Limpie revestimientos de casas, entradas y patios"), icon: SprayCan },
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
                <Home className="w-3.5 h-3.5 text-[#2E7D32]" />
                <span>{t("Residential Care & Agricultural Sanitation", "Cuidado Residencial y Desinfección Agrícola")}</span>
              </div>

              {/* Title */}
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight leading-[1.15]">
                {t("Residential & Warehouse ", "Limpieza Residencial y de ")}
                <span className="bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] bg-clip-text text-transparent">
                  {t("Cleaning", "Galpones Agrícolas")}
                </span>
              </h1>

              {/* Subheadline Tagline */}
              <h2 className="mt-3 text-lg sm:text-xl font-extrabold text-[#2E7D32] tracking-tight">
                {t("Expert Cleaning Services for Your Home and Commercial Warehouses", "Servicios Expertos de Limpieza para Su Hogar y Almacenes")}
              </h2>

              {/* Intro Paragraph */}
              <p className="mt-5 text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
                {t(
                  "Your home is your sanctuary, and commercial warehouse facilities require specialized care to maintain safety, biosecurity, and functionality. At Brown Lawn Care & Cleaning Service, we provide professional residential and warehouse cleaning services that deliver exceptional results for both living spaces and commercial structures. With over 15 years of experience, our family-owned team brings thoroughness, reliability, and attention to detail to every project across Horn Lake and a 50-mile radius. We're licensed, insured, and bonded, so you can trust us with your home, barns, and warehouse facilities.",
                  "Su hogar es su santuario, y las instalaciones comerciales y de almacén requieren un cuidado especializado. En Brown Lawn Care & Cleaning Service ofrecemos servicios profesionales de limpieza residencial y de almacenes con más de 15 años de experiencia."
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
                  <Leaf className="w-4 h-4 text-[#2E7D32]" />
                  {t("Safe Eco Products & Biosecurity", "Productos Ecológicos y Bioseguridad")}
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
                  <span>{t("Get Free Quote", "Obtener Cotización Gratis")}</span>
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
                  src={serviceWireHouse}
                  alt="Residential Home Interior and Commercial Warehouse Cleaning"
                  className="w-full h-[400px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#D4AF37]/50 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-[#2E7D32]">{t("Home & Warehouse Sanitation", "Sanidad para el Hogar y Almacenes")}</div>
                      <div className="text-sm font-extrabold text-[#111111] mt-0.5">{t("Deep Cleaning, Housekeeping & Warehouse Washing", "Limpieza Profunda, Hogar y Lavado de Almacenes")}</div>
                    </div>
                    <img src={bbbLogo} alt="BBB Logo" className="h-9 w-auto object-contain" />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── OUR RESIDENTIAL CLEANING SERVICES SECTION ──────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("Home Care", "Cuidado del Hogar")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("Our Residential Cleaning Services", "Nuestros Servicios de Limpieza Residencial")}
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-medium">
              {t(
                "From full house deep cleans and recurring housekeeping to move-in/move-out prep, carpet steam extraction, and pressure washing.",
                "Desde limpiezas profundas y mantenimiento recurrente hasta mudanzas, extracción de alfombras y lavado a presión."
              )}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Deep Interior Cleaning */}
            <div className="rounded-3xl bg-[#F7F7F7] p-7 border border-slate-200 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#2E7D32] text-[#FFD54F] flex items-center justify-center shadow-md mb-5 border border-[#D4AF37]/40">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-[#111111]">
                  {t("Full House Deep Cleaning", "Limpieza Profunda del Hogar")}
                </h3>
                <p className="mt-2 text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  {t(
                    "Our comprehensive deep clean transforms your living space from top to bottom. We detail every surface, scrub tile grout, wash baseboards, sanitise kitchens & bathrooms, and dust high fixtures.",
                    "Nuestra limpieza profunda transforma su hogar de arriba a abajo. Detallamos cada superficie, azulejos, zócalos y lámparas."
                  )}
                </p>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-[#2E7D32] mb-2.5">
                    {t("Deep Clean Checklist:", "Lista de Limpieza Profunda:")}
                  </h4>
                  <ul className="space-y-2">
                    {deepCleanTasks.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs font-bold text-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 2: Move-In / Move-Out Cleaning */}
            <div className="rounded-3xl bg-[#F7F7F7] p-7 border border-slate-200 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#111111] text-[#FFD54F] flex items-center justify-center shadow-md mb-5 border border-[#D4AF37]/40">
                  <KeyRound className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-[#111111]">
                  {t("Move-In / Move-Out Cleaning", "Limpieza de Mudanzas")}
                </h3>
                <p className="mt-2 text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  {t(
                    "Whether moving into a new home or preparing a property for new buyers or tenants, our move-in/move-out service delivers a pristine, germ-free, move-in-ready environment.",
                    "Ya sea que se mude a un nuevo hogar o prepare una propiedad para compradores, entregamos un ambiente impecable."
                  )}
                </p>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-[#2E7D32] mb-2.5">
                    {t("Move-In Services Include:", "Los Servicios de Mudanza Incluyen:")}
                  </h4>
                  <ul className="space-y-2">
                    {moveInOutTasks.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs font-bold text-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 3: Carpet, Upholstery & Windows */}
            <div className="rounded-3xl bg-[#F7F7F7] p-7 border border-slate-200 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#2E7D32] text-[#FFD54F] flex items-center justify-center shadow-md mb-5 border border-[#D4AF37]/40">
                  <Droplets className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-[#111111]">
                  {t("Carpet, Upholstery & Windows", "Alfombras, Tapicería y Ventanas")}
                </h3>
                <p className="mt-2 text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  {t(
                    "Deep steam extraction for carpets and sofas removing pet dander, trapped allergens, and stubborn stains, combined with streak-free interior/exterior window washing.",
                    "Extracción a vapor profunda para alfombras y sofás que elimina caspa de mascotas, alérgenos y manchas, junto con lavado de ventanas."
                  )}
                </p>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-[#2E7D32] mb-2.5">
                    {t("Specialty Care Includes:", "Cuidado Especializado Incluye:")}
                  </h4>
                  <ul className="space-y-2">
                    {[
                      t("Hot water carpet steam extraction & stain lifting", "Extracción de vapor en caliente para alfombras y manchas"),
                      t("Upholstery sofa, armchair & area rug deep cleaning", "Limpieza profunda de sofás, sillones y tapetes"),
                      t("Pet stain enzymatic treatment & odor neutralization", "Tratamiento enzimático para manchas de mascotas y olores"),
                      t("Streak-free interior & ground-level exterior window washing", "Lavado de ventanas interiores y exteriores sin marcas"),
                      t("Hard water spot removal from glass & sliding doors", "Remoción de manchas de agua dura en vidrios y puertas"),
                    ].map((item) => (
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
        </div>
      </section>

      {/* ── WAREHOUSE & AGRICULTURAL CLEANING SECTION ─────────────────── */}
      <section className="py-16 sm:py-24 bg-[#F7F7F7] border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("Warehouse Sanitation", "Desinfección de Almacenes")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("Warehouse, Barn & Agricultural Facility Services", "Servicios de Almacenes, Galpones, Establos e Instalaciones")}
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-medium">
              {t(
                "High-pressure power washing, biosecurity disinfection, equipment washing, and heavy waste removal for poultry and livestock structures.",
                "Lavado a presión de alta fuerza, desinfección de bioseguridad, lavado de equipos y remoción de residuos para granjas."
              )}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wireHouseServicesList.map((wh) => {
              const Icon = wh.icon;
              return (
                <div key={wh.title} className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition text-left flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#2E7D32] text-[#FFD54F] flex items-center justify-center mb-5 shadow-sm border border-[#D4AF37]/40">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-[#111111]">{wh.title}</h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">{wh.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── OUR 5-STEP CLEANING PROCESS ────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("Thorough Workflow", "Flujo de Trabajo Exhaustivo")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("Our Residential & Warehouse Cleaning Process", "Nuestro Proceso de Limpieza Residencial y de Almacenes")}
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
              {t("Dedicated Excellence", "Excelencia Dedicada")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("Why Choose Brown Lawn Care for Residential & Warehouse Cleaning?", "¿Por Qué Elegir Brown Lawn Care para Limpieza Residencial y de Almacenes?")}
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

      {/* ── RESIDENTIAL VS AGRICULTURAL SERVICE TOGGLE ──────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("Complete Coverage", "Cobertura Completa")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("Residential vs. Warehouse & Agricultural Cleaning", "Limpieza Residencial vs. Almacenes y Galpones Agrícolas")}
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
                <span>{t("Residential Services", "Servicios Residenciales")}</span>
              </button>
              <button
                onClick={() => setActiveTab("agricultural")}
                className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                  activeTab === "agricultural"
                    ? "bg-[#2E7D32] text-[#FFD54F] shadow-md border border-[#D4AF37]/50"
                    : "text-slate-700 hover:text-[#111111]"
                }`}
              >
                <Tractor className="w-4 h-4" />
                <span>{t("Warehouse & Agricultural", "Almacenes y Agrícola")}</span>
              </button>
            </div>
          </div>

          {/* Active Tab Content */}
          <div className="mt-10 bg-[#F7F7F7] rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-md max-w-4xl mx-auto text-left">
            {activeTab === "residential" ? (
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-[#111111]">
                  {t("Residential Home & Move-In Cleaning", "Limpieza Residencial del Hogar y Mudanzas")}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                  {t(
                    "Keep your living spaces immaculate with recurring housekeeping, full house deep cleans, appliance interior degreasing, and carpet steam extraction.",
                    "Mantenga sus espacios impecables con mantenimiento recurrente, limpieza profunda, desengrase de electrodomésticos y extracción de vapor."
                  )}
                </p>
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    t("Weekly, bi-weekly & monthly recurring housekeeping", "Mantenimiento recurrente semanal, quincenal y mensual"),
                    t("Full house deep cleaning & allergen reduction", "Limpieza profunda de casa y reducción de alérgenos"),
                    t("Move-in / move-out appliance & cabinet detailing", "Detallado de electrodomésticos y armarios en mudanzas"),
                    t("Carpet steam extraction & pet odor removal", "Extracción a vapor de alfombras y remoción de olores"),
                    t("Interior window glass, mirror & track cleaning", "Limpieza de vidrios interiores, espejos y rieles"),
                    t("House siding & patio exterior pressure washing", "Lavado a presión exterior de casas y patios"),
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
                  {t("Warehouse, Barn & Farm Equipment Cleaning", "Limpieza de Almacenes, Galpones, Establos y Equipos")}
                </h3>
                <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
                  {t(
                    "Heavy-duty power washing, pathogen disinfection, litter removal, and biosecurity sanitation for warehouses, poultry houses, barns, and machinery.",
                    "Lavado a presión de alta fuerza, desinfección de patógenos, remoción de residuos y sanidad para almacenes, avícolas y maquinaria."
                  )}
                </p>
                <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    t("Warehouse & poultry structure complete high-pressure washing", "Lavado completo a alta presión de almacenes y galpones avícolas"),
                    t("EPA-registered biosecurity & pathogen disinfection", "Desinfección de bioseguridad y patógenos con registro EPA"),
                    t("Litter, manure & heavy debris removal", "Remoción de estiércol y residuos pesados"),
                    t("Barn wall, stable & concrete pad power washing", "Lavado a presión de paredes de establos y concreto"),
                    t("Tractor, combine & farm implement sanitization", "Desinfección de tractores, cosechadoras y equipos"),
                    t("Ventilation fan, light fixture & feeder cleaning", "Limpieza de ventiladores, lámparas y comederos"),
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
            {t("Complete Property Care", "Cuidado Completo de Propiedad")}
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl font-black text-[#111111] tracking-tight">
            {t("Combine Residential & Agricultural Cleaning With Outdoor Services", "Combine Limpieza Residencial y Agrícola Con Servicios Exteriores")}
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-left">
            {addOnsResidential.map((add) => {
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
                {t("Residential & Warehouse Cleaning Service Areas (50-Mile Radius)", "Áreas de Servicio de Limpieza Residencial y de Almacenes (50 Millas)")}
              </h2>
              <p className="mt-2 text-slate-300 text-xs sm:text-sm font-medium">
                {t(
                  "We provide home housekeeping, move-in deep cleaning, and warehouse power washing across Horn Lake and a 50-mile radius:",
                  "Ofrecemos limpieza del hogar, mudanzas y lavado a presión de almacenes en Horn Lake y 50 millas a la redonda:"
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
            {t("Get Your Free Residential & Warehouse Cleaning Quote", "Obtenga Su Cotización Gratis de Limpieza Residencial y de Almacenes")}
          </h2>
          <p className="mt-4 text-slate-100 text-sm sm:text-base font-semibold max-w-2xl mx-auto leading-relaxed">
            {t(
              "Ready to enjoy a spotless home or maintain a healthy, sanitized agricultural facility? Contact Brown Lawn Care & Cleaning Service today for a free, no-obligation quote.",
              "¿Listo para disfrutar de un hogar impecable o mantener una instalación agrícola limpia y desinfectada? Contáctenos hoy para un presupuesto sin compromiso."
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
