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
  Building,
  HeartPulse,
  ShoppingBag,
  UtensilsCrossed,
  GraduationCap,
  Warehouse,
  SprayCan,
  Clock,
  Leaf,
  Briefcase,
  Church,
  Landmark,
  Hotel,
  Car,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

import serviceOfficeCleaning from "@/assets/service-office-cleaning.png";
import serviceCommercialCleaning from "@/assets/service-commercial-cleaning.png";
import aboutCommercialInterior from "@/assets/about-commercial-interior.png";
import bbbLogo from "@/assets/bbb.svg";

export function OfficeCommercialCleaningContent() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"daily" | "deep">("daily");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const janitorialServicesList = [
    t("Daily & weekly surface dusting, desk sanitization & polishing", "Polvo de superficies diario y semanal, desinfección de escritorios"),
    t("HEPA filter vacuuming, hard floor mopping & disinfection", "Aspirado con filtro HEPA, trapeado de pisos duros y desinfección"),
    t("Trash & recycling removal, liner replacement & receptacle sanitization", "Retiro de basura y reciclaje, reemplazo de bolsas y desinfección"),
    t("Restroom complete sanitization, mirror cleaning & paper restocking", "Desinfección completa de baños, limpieza de espejos y surtido"),
    t("Breakroom & kitchen counter sanitization, microwave & sink cleaning", "Desinfección de cocina y descansos, microondas y fregaderos"),
    t("High-touch point disinfection (door handles, light switches, elevator buttons)", "Desinfección de puntos de alto contacto (manijas, interruptores)"),
  ];

  const deepCleaningIncludes = [
    t("Commercial carpet extraction & upholstery steam cleaning", "Extracción de alfombras comerciales y limpieza a vapor de tapicería"),
    t("Hard floor stripping, refinishing, sealing & high-speed burnishing", "Decapado de pisos duros, refinado, sellado y pulido de alta velocidad"),
    t("Wall, baseboard, trim, and ceiling vent/duct dusting & washing", "Limpieza y lavado de paredes, zócalos, molduras y rejillas"),
    t("Detailed restroom tile grout scrubbing & acid sanitation", "Fregado detallado de azulejos de baño y desinfección ácida"),
    t("Interior & exterior storefront window, glass partition & transom washing", "Lavado de ventanas interiores, exteriores y mamparas de vidrio"),
    t("Appliance interior/exterior deep degreasing & sanitization", "Desengrase profundo interior y exterior de electrodomésticos"),
  ];

  const floorCareTypes = [
    { title: t("Carpet Vacuuming & Hot Water Extraction", "Aspirado y Extracción de Alfombras"), desc: t("Deep steam extraction removing trapped dust, allergens, and tough stains", "Extracción a vapor que elimina polvo atrapado, alérgenos y manchas") },
    { title: t("Tile & Grout Deep Restoration", "Restauración Profunda de Azulejos"), desc: t("High-pressure rotary scrubbing eliminating dark grout grime and mildew", "Fregado giratorio a alta presión que elimina la suciedad de las juntas") },
    { title: t("Hardwood & Laminate Care", "Cuidado de Madera y Laminados"), desc: t("Gentle neutral pH cleaning, protective buffing, and high-shine sealers", "Limpieza con pH neutro, pulido protector y selladores de alto brillo") },
    { title: t("Vinyl & Linoleum VCT Waxing", "Encerado de Vinilo y Linóleo VCT"), desc: t("Professional floor stripping, multi-coat acrylic waxing & burnishing", "Decapado profesional, encerado acrílico de varias capas y pulido") },
  ];

  const specializedIndustries = [
    {
      title: t("Medical & Healthcare Office Cleaning", "Limpieza Médica y de Salud"),
      desc: t("HIPAA-compliant, hospital-grade disinfection for exam rooms, waiting areas, and dental practices protecting patient safety.", "Desinfección de nivel hospitalario que cumple con HIPAA para salas de examen y consultorios."),
      icon: HeartPulse,
    },
    {
      title: t("Retail Stores & Showrooms", "Tiendas de Retail y Exhibición"),
      desc: t("Immaculate sales floors, spotless display cases, crystal-clear storefront glass, and sanitized fitting rooms.", "Pisos de venta impecables, vitrinas limpias, cristales deslumbrantes y vestidores desinfectados."),
      icon: ShoppingBag,
    },
    {
      title: t("Restaurants & Food Service", "Restaurantes y Servicios de Comida"),
      desc: t("Health-code compliant dining room cleaning, grease removal, commercial kitchen floor degreasing, and restroom sanitization.", "Limpieza que cumple con el código de salud en comedores, cocina y desinfección de baños."),
      icon: UtensilsCrossed,
    },
    {
      title: t("Warehouses & Industrial Sites", "Almacenes y Sitios Industriales"),
      desc: t("Heavy-duty floor sweeping and scrubbing, loading dock cleanup, high-overhead dusting, and breakroom upkeep.", "Barrido y fregado pesado de pisos, limpieza de muelles de carga y despolvado en alturas."),
      icon: Warehouse,
    },
    {
      title: t("Schools & Educational Facilities", "Escuelas e Instituciones Educativas"),
      desc: t("Consistent, eco-friendly sanitization for classrooms, hallways, cafeterias, gymnasiums, and administrative offices.", "Desinfección ecológica y constante para aulas, pasillos, cafeterías y gimnasios."),
      icon: GraduationCap,
    },
    {
      title: t("Wire House, Barn & Agricultural Cleaning", "Limpieza de Estructuras Agrícolas"),
      desc: t("High-pressure power washing, agricultural sanitation, heavy dirt removal, and equipment room washing.", "Lavado a presión de alta fuerza, desinfección agrícola y limpieza de cuartos de equipos."),
      icon: Construction,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: t("Facility Assessment", "Evaluación de Instalaciones"),
      desc: t("We walk your facility, evaluate square footage, high-traffic zones, flooring types, and specific industry compliance rules.", "Recorremos su instalación, evaluamos metros cuadrados, zonas de alto tráfico y normas de la industria."),
      icon: Compass,
    },
    {
      step: "02",
      title: t("Customized Cleaning Plan", "Plan de Limpieza Personalizado"),
      desc: t("We design a tailored schedule (after-hours, daily, weekly, or bi-weekly) with exact task checklists for your workspace.", "Diseñamos un horario a medida (después de horas, diario, semanal) con listas de tareas exactas."),
      icon: FileCheck,
    },
    {
      step: "03",
      title: t("Transparent Itemized Quote", "Cotización Desglosada"),
      desc: t("You receive a clear, flat-rate quote specifying supplies provided, frequency, and coverage with no hidden charges.", "Recibe una cotización clara de tarifa fija que especifica suministros, frecuencia y cobertura sin cargos ocultos."),
      icon: Layers,
    },
    {
      step: "04",
      title: t("Professional Execution", "Ejecución Profesional"),
      desc: t("Our background-checked, uniformed crew executes your cleaning protocol using hospital-grade disinfectants & commercial gear.", "Nuestro equipo uniformado ejecuta el protocolo utilizando desinfectantes de nivel hospitalario."),
      icon: SprayCan,
    },
    {
      step: "05",
      title: t("Quality Assurance & Inspections", "Garantía de Calidad e Inspección"),
      desc: t("We conduct regular supervisor audits, track client feedback, and adjust checklists as your facility evolves.", "Realizamos auditorías de supervisión periódicas y ajustamos los controles a medida que su empresa crece."),
      icon: BadgeCheck,
    },
  ];

  const whyChooseUsPoints = [
    {
      title: t("Licensed, Insured & 100% Bonded", "Licenciado, Asegurado y Afianzado 100%"),
      desc: t("Full commercial general liability insurance and fidelity bonding protect your facility, equipment, and sensitive data.", "Seguro de responsabilidad comercial y fianza protegen su instalación, equipos y datos confidenciales."),
      icon: ShieldCheck,
    },
    {
      title: t("15+ Years Commercial Experience", "15+ Años de Experiencia Comercial"),
      desc: t("Over 15 years serving corporate offices, medical clinics, retail centers, and industrial facilities in MS, TN, & AR.", "Más de 15 años sirviendo a oficinas corporativas, clínicas médicas y centros comerciales en MS, TN y AR."),
      icon: Award,
    },
    {
      title: t("Customized & Flexible Scheduling", "Horarios Personalizados y Flexibles"),
      desc: t("We work around your operations—offering night shifts, early morning cleaning, weekends, or daytime porter services.", "Nos adaptamos a sus operaciones: ofrecemos turnos nocturnos, mañanas, fines de semana o conserjería diurna."),
      icon: Clock,
    },
    {
      title: t("Environmentally Responsible Green Products", "Productos Ecológicos Responsables"),
      desc: t("We use non-toxic, eco-friendly disinfectants and HEPA filtration vacuums to promote occupant health & air quality.", "Usamos desinfectantes no tóxicos ecológicos y aspiradoras HEPA para promover la salud de los ocupantes."),
      icon: Leaf,
    },
    {
      title: t("Background-Checked & Uniformed Staff", "Personal Verificado y Uniformado"),
      desc: t("Trustworthy, reliable team members trained in confidentiality, security protocols, and professional cleaning standards.", "Personal confiable capacitado en confidencialidad, protocolos de seguridad y estándares profesionales."),
      icon: Briefcase,
    },
    {
      title: t("Bilingual Service (English & Spanish)", "Servicio Bilingüe (Inglés y Español)"),
      desc: t("Direct, seamless communication in both English and Spanish ensuring your exact instructions are always met.", "Comunicación fluida tanto en inglés como en español garantizando que siempre se cumplan sus instrucciones."),
      icon: Globe,
    },
  ];

  const faqs = [
    {
      q: t("What cleaning supplies and equipment do you provide?", "¿Qué suministros y equipos de limpieza proporcionan?"),
      a: t("We provide 100% of all professional cleaning equipment, commercial vacuums, micro-fiber mops, floor buffers, and eco-friendly disinfectants. You do not need to provide anything.", "Proporcionamos el 100% de todos los equipos profesionales, aspiradoras comerciales, trapeadores y desinfectantes ecológicos."),
    },
    {
      q: t("Can you perform office cleaning after business hours?", "¿Pueden realizar la limpieza de oficinas fuera del horario comercial?"),
      a: t("Yes, absolutely! The majority of our commercial clients prefer after-hours cleaning (evenings, nights, or weekends) so your staff arrives to a spotless workspace without any daytime disruption.", "¡Sí, absolutamente! La mayoría de nuestros clientes comerciales prefieren la limpieza nocturna o en fines de semana."),
    },
    {
      q: t("Do you offer daily, weekly, or bi-weekly cleaning plans?", "¿Ofrecen planes de limpieza diarios, semanales o quincenales?"),
      a: t("We offer fully flexible scheduling tailored to your foot traffic and budget—including 7-day daily janitorial, 3-day weekly, 1-day weekly, bi-weekly, or one-time deep cleaning.", "Ofrecemos programación flexible adaptada a su tráfico: janitorial diario de 7 días, 3 días a la semana, semanal o quincenal."),
    },
    {
      q: t("Are your cleaning products safe for employees and medical facilities?", "¿Sus productos de limpieza son seguros para empleados e instalaciones médicas?"),
      a: t("Yes. We utilize hospital-grade, EPA-registered green disinfectants that eliminate 99.9% of bacteria and viruses while remaining low-VOC and non-irritating for employees and patients.", "Sí. Utilizamos desinfectantes ecológicos registrados por la EPA de nivel hospitalario que eliminan el 99.9% de bacterias."),
    },
    {
      q: t("Do you provide janitorial supplies restocking (toilet paper, soap, paper towels)?", "¿Proporcionan reabastecimiento de suministros (papel higiénico, jabón, toallas)?"),
      a: t("Yes! We offer full facility supply management—monitoring inventory and automatically restocking restroom paper products, hand soaps, trash liners, and hand sanitizer.", "¡Sí! Ofrecemos gestión completa de suministros: monitoreo de inventario y reabastecimiento automático."),
    },
  ];

  const targetIndustriesBadges = [
    { label: t("Corporate Offices", "Oficinas Corporativas"), icon: Building },
    { label: t("Medical Clinics", "Clínicas Médicas"), icon: HeartPulse },
    { label: t("Retail Centers", "Centros Comerciales"), icon: ShoppingBag },
    { label: t("Restaurants & Cafes", "Restaurantes y Cafés"), icon: UtensilsCrossed },
    { label: t("Warehouses & Logistics", "Almacenes y Logística"), icon: Warehouse },
    { label: t("Schools & Daycares", "Escuelas y Guarderías"), icon: GraduationCap },
    { label: t("Banks & Financial", "Bancos y Financieras"), icon: Landmark },
    { label: t("Hotels & Lodging", "Hoteles y Hospedajes"), icon: Hotel },
    { label: t("Auto Dealerships", "Concesionarios de Autos"), icon: Car },
    { label: t("Churches & Community", "Iglesias y Comunitarios"), icon: Church },
  ];

  const addOns = [
    { title: t("Lawn Mowing & Groundskeeping", "Cortado de Césped y Terrenos"), desc: t("Maintain commercial exterior grounds & lawn appeal", "Mantenga atractivos los terrenos exteriores comerciales"), icon: Scissors },
    { title: t("Landscaping & Design", "Paisajismo y Diseño"), desc: t("Enhance commercial entrance beds & flower displays", "Embellezca entradas comerciales y jardineras"), icon: Trees },
    { title: t("Tree & Brush Clearing", "Remoción de Árboles"), desc: t("Clear overgrown property trees & parking lot brush", "Limpie árboles y maleza en estacionamientos"), icon: Trash2 },
    { title: t("Gravel & Dirt Work", "Trabajos de Grava y Tierra"), desc: t("Commercial parking lot aggregate repair & grading", "Reparación y nivelación de estacionamientos"), icon: Truck },
    { title: t("Pressure Washing", "Lavado a Presión"), desc: t("Clean exterior building facades, sidewalks & dumpsters", "Limpie fachadas exteriores, aceras y contenedores"), icon: SprayCan },
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
                <Sparkles className="w-3.5 h-3.5 text-[#2E7D32]" />
                <span>{t("Commercial Janitorial & Facility Hygiene", "Servicios Janitorial Comercial e Higiene")}</span>
              </div>

              {/* Title */}
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight leading-[1.15]">
                {t("Office & Commercial ", "Limpieza de Oficinas y ")}
                <span className="bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] bg-clip-text text-transparent">
                  {t("Cleaning", "Comercial")}
                </span>
              </h1>

              {/* Subheadline Tagline */}
              <h2 className="mt-3 text-lg sm:text-xl font-extrabold text-[#2E7D32] tracking-tight">
                {t("Professional Cleanliness That Makes a Lasting Impression", "Limpieza Profesional Que Causa Una Impresión Duradera")}
              </h2>

              {/* Intro Paragraph */}
              <p className="mt-5 text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
                {t(
                  "A clean, well-maintained commercial space speaks volumes about your business. It creates a positive first impression for clients, promotes employee health and productivity, and reflects your commitment to excellence. At Brown Lawn Care & Cleaning Service, we provide professional office and commercial cleaning services that keep your workspace spotless, sanitary, and welcoming. With over 15 years of experience, our family-owned team delivers reliable, thorough cleaning solutions tailored to businesses of all sizes across Horn Lake and a 50-mile radius.",
                  "Un espacio comercial limpio habla por sí mismo sobre su empresa. Crea una primera impresión positiva, promueve la salud de los empleados y refleja su compromiso con la excelencia. En Brown Lawn Care & Cleaning Service ofrecemos soluciones confiables y adaptadas a empresas de todos los tamaños."
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
                  {t("15+ Years Exp.", "15+ Años Exp.")}
                </span>
                <span className="px-3.5 py-1.5 rounded-full bg-[#F7F7F7] border border-slate-200 text-xs font-black text-[#111111] flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#2E7D32]" />
                  {t("After-Hours & Flexible Shifts", "Turnos Nocturnos y Flexibles")}
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
                  <span>{t("Get Free Cleaning Quote", "Cotización de Limpieza Gratis")}</span>
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
                  src={serviceOfficeCleaning}
                  alt="Professional Office and Commercial Cleaning Services"
                  className="w-full h-[400px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#D4AF37]/50 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-[#2E7D32]">{t("Hospital-Grade Sanitation", "Desinfección de Nivel Hospitalario")}</div>
                      <div className="text-sm font-extrabold text-[#111111] mt-0.5">{t("Janitorial, Floor Care & Restroom Hygiene", "Janitorial, Cuidado de Pisos e Higiene")}</div>
                    </div>
                    <img src={bbbLogo} alt="BBB Logo" className="h-9 w-auto object-contain" />
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── OUR COMMERCIAL CLEANING SERVICES SECTION ───────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("Janitorial Excellence", "Excelencia Janitorial")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("Our Office & Commercial Cleaning Services", "Nuestros Servicios de Limpieza Comercial y de Oficinas")}
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-medium">
              {t(
                "From daily scheduled office janitorial care to deep carpet extraction, VCT wax stripping, and window washing.",
                "Desde mantenimiento janitorial diario hasta extracción profunda de alfombras, encerado de VCT y lavado de ventanas."
              )}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Card 1: Office Cleaning & Janitorial */}
            <div className="rounded-3xl bg-[#F7F7F7] p-7 border border-slate-200 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#2E7D32] text-[#FFD54F] flex items-center justify-center shadow-md mb-5 border border-[#D4AF37]/40">
                  <Building className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-[#111111]">
                  {t("Office Cleaning & Janitorial Services", "Limpieza de Oficinas y Janitorial")}
                </h3>
                <p className="mt-2 text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  {t(
                    "We provide comprehensive office janitorial care customized to your business operations. Maintain a pristine, healthy environment for employees and visitors on a schedule that works for you.",
                    "Ofrecemos mantenimiento janitorial completo para oficinas adaptado a sus operaciones. Mantenga un entorno limpio y saludable."
                  )}
                </p>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-[#2E7D32] mb-2.5">
                    {t("Daily & Weekly Tasks Include:", "Las Tareas Diarias y Semanales Incluyen:")}
                  </h4>
                  <ul className="space-y-2">
                    {janitorialServicesList.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs font-bold text-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 2: Deep Cleaning Services */}
            <div className="rounded-3xl bg-[#F7F7F7] p-7 border border-slate-200 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#111111] text-[#FFD54F] flex items-center justify-center shadow-md mb-5 border border-[#D4AF37]/40">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-[#111111]">
                  {t("Commercial Deep Cleaning", "Limpieza Profunda Comercial")}
                </h3>
                <p className="mt-2 text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  {t(
                    "Periodic deep cleaning targets accumulated grease, carpet allergens, wall scuffs, high vents, and embedded grime. We restore your commercial space to show-room condition.",
                    "La limpieza profunda periódica elimina la grasa acumulada, alérgenos en alfombras, marcas en paredes y suciedad en alturas."
                  )}
                </p>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-[#2E7D32] mb-2.5">
                    {t("Deep Cleaning Includes:", "La Limpieza Profunda Incluye:")}
                  </h4>
                  <ul className="space-y-2">
                    {deepCleaningIncludes.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs font-bold text-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2E7D32] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Card 3: Restroom Sanitation & Hygiene */}
            <div className="rounded-3xl bg-[#F7F7F7] p-7 border border-slate-200 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#2E7D32] text-[#FFD54F] flex items-center justify-center shadow-md mb-5 border border-[#D4AF37]/40">
                  <SprayCan className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-black text-[#111111]">
                  {t("Restroom Sanitation & Supplies", "Desinfección de Baños y Suministros")}
                </h3>
                <p className="mt-2 text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                  {t(
                    "Immaculate, sanitized restrooms are critical for employee morale and customer satisfaction. We scrub, disinfect, deodorize, and manage full paper and soap inventory replenishment.",
                    "Baños impecables y desinfectados son fundamentales. Fregamos, desinfectamos, desodorizamos y gestionamos inventarios de papel y jabón."
                  )}
                </p>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <h4 className="text-[11px] font-black uppercase tracking-wider text-[#2E7D32] mb-2.5">
                    {t("Restroom Protocol Includes:", "El Protocolo de Baños Incluye:")}
                  </h4>
                  <ul className="space-y-2">
                    {[
                      t("Toilet, urinal, sink & fixture germicidal disinfection", "Desinfección germicida de inodoros, urinarios y lavabos"),
                      t("Mirror, counter, tile wall & partition sanitization", "Desinfección de espejos, mostradores y paredes de azulejos"),
                      t("Floor mopping with hospital-grade disinfectant", "Trapeado de pisos con desinfectante de nivel hospitalario"),
                      t("Automatic paper towel, toilet paper & soap restocking", "Reabastecimiento automático de papel y jabón"),
                      t("Odor neutralization & continuous air freshening", "Neutralización de olores y desodorización continua"),
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

          {/* Commercial Floor Care Highlight Box */}
          <div className="mt-14 rounded-3xl bg-[#F7F7F7] border border-slate-200 p-8 sm:p-10 text-left">
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
                {t("Floor Maintenance", "Mantenimiento de Pisos")}
              </span>
            </div>
            <h3 className="text-2xl font-black text-[#111111] tracking-tight">
              {t("Commercial Floor Care & Surface Restoration", "Cuidado de Pisos Comerciales y Restauración")}
            </h3>
            <p className="mt-1 text-slate-600 text-xs sm:text-sm font-medium">
              {t("Extend the lifespan of your commercial flooring with specialized restoration and care:", "Extienda la vida útil de sus pisos comerciales con restauración especializada:")}
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {floorCareTypes.map((fc) => (
                <div key={fc.title} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-[#2E7D32]/10 text-[#2E7D32] flex items-center justify-center font-black text-xs mb-2.5">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs font-black text-[#111111]">{fc.title}</h4>
                  <p className="mt-1 text-[11px] text-slate-600 font-medium leading-snug">{fc.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── SPECIALIZED COMMERCIAL CLEANING BY INDUSTRY ─────────────────── */}
      <section className="py-16 sm:py-24 bg-[#F7F7F7] border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("Industry Solutions", "Soluciones Por Industria")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("Specialized Commercial Cleaning Services", "Servicios Especializados de Limpieza Comercial")}
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-medium">
              {t(
                "Tailored hygiene protocols for medical offices, retail stores, food service, warehouses, schools, and agricultural structures.",
                "Protocolos de higiene a medida para consultorios médicos, tiendas, restaurantes, almacenes y estructuras agrícolas."
              )}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializedIndustries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div key={ind.title} className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition text-left flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#2E7D32] text-[#FFD54F] flex items-center justify-center mb-5 shadow-sm border border-[#D4AF37]/40">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-black text-[#111111]">{ind.title}</h3>
                    <p className="mt-2.5 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">{ind.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Target Industry Badges Carousel/Grid */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <h4 className="text-center text-xs font-black uppercase tracking-widest text-[#2E7D32] mb-4">
              {t("Industries We Proudly Serve Across MS, TN, & AR:", "Industrias Que Servimos Orgullosamente en MS, TN y AR:")}
            </h4>
            <div className="flex flex-wrap justify-center gap-3">
              {targetIndustriesBadges.map((b) => {
                const Icon = b.icon;
                return (
                  <div key={b.label} className="px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-extrabold text-[#111111] flex items-center gap-2 shadow-2xs">
                    <Icon className="w-4 h-4 text-[#2E7D32]" />
                    <span>{b.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ── OUR 5-STEP COMMERCIAL CLEANING PROCESS ──────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("Quality Control", "Control de Calidad")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("Our Commercial Cleaning Process", "Nuestro Proceso de Limpieza Comercial")}
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

      {/* ── WHY CHOOSE BROWN LAWN CARE FOR CLEANING ─────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#F7F7F7] border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("Trusted Partner", "Socio de Confianza")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("Why Choose Brown Lawn Care for Commercial Cleaning?", "¿Por Qué Elegir Brown Lawn Care para Limpieza Comercial?")}
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

      {/* ── FREQUENTLY ASKED QUESTIONS (FAQS) ───────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
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
                  className="rounded-2xl bg-[#F7F7F7] border border-slate-200 overflow-hidden transition shadow-2xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-black text-sm sm:text-base text-[#111111] hover:text-[#2E7D32] transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed border-t border-slate-200/60 pt-3">
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
      <section className="py-16 bg-[#F7F7F7] border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
            {t("Complete Management", "Gestión Completa")}
          </span>
          <h2 className="mt-4 text-2xl sm:text-3xl font-black text-[#111111] tracking-tight">
            {t("Combine Commercial Cleaning With Exterior Care", "Combine Limpieza Comercial Con Cuidado Exterior")}
          </h2>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-left">
            {addOns.map((add) => {
              const Icon = add.icon;
              return (
                <div key={add.title} className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-[#2E7D32] transition shadow-2xs">
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
                {t("Office & Commercial Cleaning Service Areas (50-Mile Radius)", "Áreas de Servicio de Limpieza Comercial (50 Millas)")}
              </h2>
              <p className="mt-2 text-slate-300 text-xs sm:text-sm font-medium">
                {t(
                  "We provide commercial janitorial, floor care, and deep cleaning services across Horn Lake and a 50-mile radius:",
                  "Ofrecemos servicios janitorial comercial, cuidado de pisos y limpieza profunda en Horn Lake y 50 millas a la redonda:"
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
            {t("Get Your Free Commercial Cleaning Quote", "Obtenga Su Cotización Gratis de Limpieza Comercial")}
          </h2>
          <p className="mt-4 text-slate-100 text-sm sm:text-base font-semibold max-w-2xl mx-auto leading-relaxed">
            {t(
              "Ready to elevate your business environment with professional office cleaning, carpet extraction, or restroom sanitation? Contact Brown Lawn Care & Cleaning Service today for a free, customized quote.",
              "¿Listo para elevar su espacio comercial con limpieza profesional de oficinas, desinfección de baños o lavado de alfombras? Contáctenos hoy para un presupuesto sin compromiso."
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
