import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Award,
  MapPin,
  Clock,
  CheckCircle2,
  Phone,
  Sparkles,
  Trees,
  Scissors,
  Trash2,
  Truck,
  Home,
  Building2,
  Users,
  Star,
  ArrowRight,
  Heart,
  FileCheck,
  Languages,
  AlertTriangle,
  CalendarCheck,
  Search,
  Receipt,
  Wrench,
  CheckSquare,
  Sparkle,
  Droplets,
  Layers,
  Sparkles as CleaningIcon,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Counter } from "./Counter";

import aboutHeroLandscaping from "@/assets/about-hero-landscaping.png";
import aboutCommercialInterior from "@/assets/about-commercial-interior.png";
import aboutEstateYard from "@/assets/about-estate-yard.png";
import serviceLandscaping from "@/assets/service-landscaping.png";
import serviceCommercialCleaning from "@/assets/service-commercial-cleaning.png";
import serviceTreeRemoval from "@/assets/service-tree-removal.png";
import serviceGravel from "@/assets/service-gravel.png";
import bbbLogo from "@/assets/bbb.svg";

export function AboutPageContent() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<"lawn" | "landscaping" | "tree" | "cleaning" | "specialized">("lawn");

  // ── WHAT SETS US APART ──
  const differentiators = [
    {
      icon: ShieldCheck,
      title: t("Licensed, Insured & Bonded", "Licenciado, Asegurado y Afianzado"),
      desc: t(
        "Your property is protected. We carry full liability coverage and are 100% bonded, giving you complete peace of mind knowing your investment is in safe, responsible hands.",
        "Su propiedad está protegida. Contamos con cobertura de responsabilidad civil y estamos 100% afianzados."
      ),
      badge: t("100% Protected", "100% Protegido"),
    },
    {
      icon: Award,
      title: t("15+ Years of Proven Craftsmanship", "15+ Años de Experiencia Demostrada"),
      desc: t(
        "With over a decade and a half of hands-on experience in lawn care, landscaping, tree removal, and cleaning services, we have the knowledge and skill to handle projects of any size or complexity.",
        "Con más de una década y media de experiencia práctica en cuidado de césped, paisajismo y limpieza."
      ),
      badge: t("Proven Mastery", "Maestría Demostrada"),
    },
    {
      icon: MapPin,
      title: t("50-Mile Service Radius Across 3 States", "Radio de Servicio de 50 Millas (3 Estados)"),
      desc: t(
        "Based in Horn Lake, we proudly serve communities across Mississippi, Tennessee, and Arkansas including Southaven, Olive Branch, Memphis, Hernando, Nesbit, Walls, Collierville, Germantown, and West Memphis.",
        "Orgullosamente sirviendo a comunidades en Mississippi, Tennessee y Arkansas en un radio de 50 millas."
      ),
      badge: t("MS · TN · AR", "MS · TN · AR"),
    },
    {
      icon: Languages,
      title: t("Bilingual Service (EN / ES)", "Servicio Bilingüe (Inglés / Español)"),
      desc: t(
        "We speak both English and Spanish. No language barriers—just clear communication, transparency, and exceptional service for every client.",
        "Hablamos inglés y español. Sin barreras de idioma, solo comunicación clara y excelente servicio."
      ),
      badge: t("English & Español", "Inglés y Español"),
    },
    {
      icon: AlertTriangle,
      title: t("Emergency Response During Business Hours", "Respuesta de Emergencia en Horario Comercial"),
      desc: t(
        "Storm damage and fallen trees don't wait. We offer emergency dispatch during business hours to quickly secure your property and clear dangerous debris when you need us most.",
        "Los daños por tormentas y árboles caídos no esperan. Ofrecemos despacho de emergencia durante horario comercial."
      ),
      badge: t("Fast Dispatch", "Despacho Rápido"),
    },
  ];

  // ── OUR COMMITMENT ──
  const commitments = [
    {
      title: t("Show up on time", "Llegar a tiempo"),
      desc: t("Reliable, punctual, and professional from the first call to the final walkthrough.", "Confiable, puntual y profesional desde la primera llamada hasta la revisión final."),
    },
    {
      title: t("Do the job right", "Hacer el trabajo bien"),
      desc: t("Every service is backed by over 15 years of proven craftsmanship and attention to detail.", "Cada servicio está respaldado por más de 15 años de experiencia y atención al detalle."),
    },
    {
      title: t("Leave your property better than we found it", "Dejar su propiedad mejor de como la encontramos"),
      desc: t("We take pride in delivering clean, transformative results that exceed expectations.", "Nos enorgullecemos de ofrecer resultados limpios que superan las expectativas."),
    },
    {
      title: t("Communicate clearly", "Comunicación clara"),
      desc: t("Bilingual service ensures you're never left in the dark at any point in the project.", "El servicio bilingüe garantiza que siempre esté informado en cada etapa del proyecto."),
    },
  ];

  // ── CORE VALUES ──
  const coreValues = [
    {
      icon: Heart,
      title: t("Family-Owned, Community-Focused", "Familiar y Centrado en la Comunidad"),
      desc: t(
        "We're not a franchise. We're a local family committed to the communities we serve. Every client is treated like a neighbor because, to us, they are.",
        "No somos una franquicia. Somos una familia local comprometida. Cada cliente es tratado como un vecino."
      ),
    },
    {
      icon: Clock,
      title: t("Punctuality & Reliability", "Puntualidad y Confiabilidad"),
      desc: t(
        "We understand your time is valuable. That's why we show up when we say we will and complete the job efficiently without compromising quality.",
        "Entendemos que su tiempo es valioso. Nos presentamos cuando prometemos y trabajamos con eficiencia."
      ),
    },
    {
      icon: Receipt,
      title: t("Transparency", "Transparencia Total"),
      desc: t(
        "Upfront, itemized quotes with no hidden fees or surprises. You know exactly what to expect before we start any work on your property.",
        "Cotizaciones desglosadas por adelantado sin cargos ocultos ni sorpresas."
      ),
    },
    {
      icon: Award,
      title: t("Quality Craftsmanship", "Artesanía de Calidad"),
      desc: t(
        "From precision mowing and landscape design to deep cleaning and tree removal, we use top-tier equipment and proven techniques to deliver lasting results.",
        "Desde el cortado de césped y paisajismo hasta la limpieza profunda y remoción de árboles."
      ),
    },
  ];

  // ── 5-STEP PROCESS ──
  const steps = [
    {
      num: "01",
      icon: CalendarCheck,
      title: t("Schedule & Request", "Programar y Solicitar"),
      desc: t("Book online in 60 seconds or call our team. Flexible scheduling tailored to your calendar.", "Reserve en línea en 60 segundos o llame a nuestro equipo."),
    },
    {
      num: "02",
      icon: Search,
      title: t("On-Site Inspection", "Inspección en el Sitio"),
      desc: t("Our experts evaluate your property, assess the scope of work, and identify the best long-term solutions.", "Nuestros expertos evalúan su propiedad y determinan la mejor solución."),
    },
    {
      num: "03",
      icon: Receipt,
      title: t("Transparent Estimate", "Estimado Transparente"),
      desc: t("Receive an upfront, itemized quote with zero hidden fees or surprise charges before work begins.", "Reciba una cotización desglosada por adelantado sin cargos ocultos."),
    },
    {
      num: "04",
      icon: Wrench,
      title: t("Professional Execution", "Ejecución Profesional"),
      desc: t("Our licensed, insured, and bonded team delivers clean, efficient, top-tier craftsmanship on schedule.", "Nuestro equipo licenciado y asegurado realiza el trabajo con calidad."),
    },
    {
      num: "05",
      icon: CheckSquare,
      title: t("Cleanup & Guarantee", "Limpieza y Garantía"),
      desc: t("Immaculate debris removal, final property walkthrough, and our 100% satisfaction guarantee.", "Limpieza completa de escombros, revisión final y garantía del 100%."),
    },
  ];

  // ── SERVICES OFFERED CATEGORIES ──
  const serviceCategories = {
    lawn: {
      title: t("Lawn Care Services", "Servicios de Cuidado de Césped"),
      icon: Scissors,
      image: serviceLandscaping,
      items: [
        t("Weekly mowing and precision edging", "Cortado de césped semanal y orillado de precisión"),
        t("Professional striping and precision cutting", "Patrones de cortado y corte de alta precisión"),
        t("String trimming along fences and flower beds", "Corte con hilo en cercas y jardineras"),
        t("Complete driveway & sidewalk blower clean-off", "Limpieza completa con soplador en entradas y aceras"),
      ],
    },
    landscaping: {
      title: t("Landscaping & Design", "Paisajismo y Diseño"),
      icon: Trees,
      image: aboutEstateYard,
      items: [
        t("Custom landscape design and premium mulching", "Diseño de paisaje personalizado y mantillo premium"),
        t("Shrub, bush, and ornamental tree trimming", "Poda de arbustos y plantas ornamentales"),
        t("Bed edging and commercial weed barrier installation", "Orillado de jardineras e instalación de barrera de maleza"),
        t("Lawn re-seeding, sod laying, and dirt grading", "Siembra, instalación de césped en rollo y nivelación"),
      ],
    },
    tree: {
      title: t("Tree Care & Land Clearing", "Cuidado de Árboles y Limpieza"),
      icon: Trash2,
      image: serviceTreeRemoval,
      items: [
        t("Small and medium tree cutting and trimming", "Corte y poda de árboles pequeños y medianos"),
        t("Brush cutting and dense land clearing", "Corte de maleza y limpieza de terrenos densos"),
        t("Storm damage cleanup and fallen tree removal", "Limpieza por tormentas y retiro de árboles caídos"),
        t("Deadwood removal and crown shaping", "Remoción de madera muerta y perfilado de copa"),
      ],
    },
    cleaning: {
      title: t("Commercial & Residential Cleaning", "Limpieza Comercial y Residencial"),
      icon: CleaningIcon,
      image: serviceCommercialCleaning,
      items: [
        t("Scheduled commercial office & building janitorial", "Limpieza programada de oficinas y edificios comerciales"),
        t("Move-in and move-out residential deep cleaning", "Limpieza profunda residencial para mudanzas"),
        t("Warehouse, industrial building, and barn cleaning", "Limpieza de almacenes, naves e instalaciones industrial"),
        t("High-pressure power washing and floor sanitation", "Lavado a alta presión y desinfección de pisos"),
      ],
    },
    specialized: {
      title: t("Specialized Property Services", "Servicios Especializados"),
      icon: Truck,
      image: serviceGravel,
      items: [
        t("Gravel driveway repair, grading, and installation", "Reparación, nivelación e instalación de entradas de grava"),
        t("Overgrown landscape restoration & brush clearing", "Restauración de paisajes selváticos y maleza"),
        t("Property line clearing and fence line prep", "Limpieza de linderos de propiedad y cercas"),
        t("Topsoil delivery, leveling, and drainage work", "Entrega de tierra vegetal, nivelación y drenaje"),
      ],
    },
  };

  // ── AREAS WE SERVE (3 STATES) ──
  const areas = {
    ms: [
      "Horn Lake", "Southaven", "Olive Branch", "Hernando", "Nesbit", "Walls",
      "Tunica", "Senatobia", "Batesville", "Oxford", "Lynchburg", "Norfolk",
      "Glover", "Pleasant Hill", "Cormorant", "Bridgetown"
    ],
    tn: [
      "Memphis", "Germantown", "Bartlett", "Collierville", "Arlington", "Eads", "Millington"
    ],
    ar: [
      "West Memphis", "Marion"
    ]
  };

  return (
    <div className="bg-[#FFFFFF] text-[#111111] overflow-hidden">

      {/* ── HERO BANNER WITH BRAND STORY ────────────────────────────── */}
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
              {/* Tagline Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/50 bg-[#1B5E20]/8 text-[#2E7D32] text-xs font-black uppercase tracking-widest mb-6 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{t("Where Quality Meets Community", "Donde la Calidad Encuentra la Comunidad")}</span>
              </div>

              {/* Title */}
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight leading-[1.15]">
                {t("About Brown Lawn Care & ", "Acerca de Brown Lawn Care & ")}
                <span className="bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] bg-clip-text text-transparent">
                  {t("Cleaning Service, LLC", "Cleaning Service, LLC")}
                </span>
              </h1>

              {/* Lead Paragraph */}
              <p className="mt-6 text-slate-700 text-base sm:text-lg leading-relaxed font-medium">
                {t(
                  "Welcome to Brown Lawn Care & Cleaning Service, LLC. We are a family-owned and operated business deeply rooted in Horn Lake, Mississippi, and proud to serve a 50-mile radius across Mississippi, Tennessee, and Arkansas. For us, this isn't just a job—it's a commitment to our neighbors, our community, and the properties we care for.",
                  "Bienvenido a Brown Lawn Care & Cleaning Service, LLC. Somos una empresa familiar profundamente arraigada en Horn Lake, Mississippi, y orgullosa de servir en un radio de 50 millas a través de Mississippi, Tennessee y Arkansas. Para nosotros esto es un compromiso con nuestros vecinos y la comunidad."
                )}
              </p>

              {/* Story Highlights Card */}
              <div className="mt-8 p-6 rounded-3xl bg-[#F7F7F7] border border-slate-200 shadow-sm relative overflow-hidden">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#2E7D32] mb-2">
                  <Award className="w-4 h-4 text-[#D4AF37]" />
                  <span>{t("Our Story & Vision", "Nuestra Historia y Visión")}</span>
                </div>
                <p className="text-slate-800 text-sm sm:text-base leading-relaxed font-semibold">
                  {t(
                    "Founded by Roy Lee Brown, our company brings together over 15 years of industry experience and 6 years in business as a trusted, licensed, and insured service provider. What started as a passion for transforming outdoor spaces has grown into a full-service property maintenance company that homeowners and commercial property managers rely on.",
                    "Fundada por Roy Lee Brown, nuestra empresa reúne más de 15 años de experiencia en la industria y 6 años de trayectoria como un proveedor de servicios confiable, licenciado y asegurado."
                  )}
                </p>
                <p className="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed font-medium">
                  {t(
                    "As a family-owned team, we treat every property with the same care and attention we give our own. Whether it's a residential lawn, a commercial office campus, or an overgrown property in need of restoration, we bring professionalism, pride, and a personal touch to every job.",
                    "Como equipo familiar, tratamos cada propiedad con el mismo cuidado que la nuestra. Ya sea un césped residencial o un campus comercial, traemos profesionalismo y un toque personal a cada trabajo."
                  )}
                </p>
              </div>

              {/* CTA Buttons */}
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
                  <span>{t("Request Free Estimate", "Solicitar Cotización Gratis")}</span>
                  <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
                </Link>
              </div>
            </motion.div>

            {/* Right Visual Showcase Column */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
                <img
                  src={aboutHeroLandscaping}
                  alt="Brown Lawn Care Manicured Property"
                  className="w-full h-[440px] sm:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Floating Glass BBB Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#D4AF37]/50 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-[#2E7D32]">{t("BBB Accredited Business", "Negocio Acreditado por BBB")}</div>
                      <div className="text-sm font-extrabold text-[#111111] mt-0.5">{t("Licensed · Insured · Bonded", "Licenciado · Asegurado · Afianzado")}</div>
                    </div>
                    <img src={bbbLogo} alt="BBB Logo" className="h-9 w-auto object-contain" />
                  </div>
                </div>
              </div>

              {/* Floating Counter Badges */}
              <div className="hidden sm:flex absolute -top-6 -left-6 bg-[#2E7D32] text-white p-4 rounded-2xl shadow-xl border border-[#D4AF37]/50 flex-col items-center">
                <span className="text-2xl font-black text-[#FFD54F]">15+</span>
                <span className="text-[9px] font-black uppercase tracking-wider text-white text-center leading-tight mt-0.5">{t("Years Exp.", "Años Exp.")}</span>
              </div>
              <div className="hidden sm:flex absolute top-1/2 -right-6 -translate-y-1/2 bg-[#111111] text-white p-3.5 rounded-2xl shadow-xl border border-[#D4AF37]/50 flex-col items-center">
                <span className="text-xl font-black text-[#FFD54F]">6+ Yrs</span>
                <span className="text-[9px] font-black uppercase tracking-wider text-slate-300 text-center leading-tight mt-0.5">{t("LLC Business", "Empresa LLC")}</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── WHAT SETS US APART (5 FEATURE CARDS) ───────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("Why Choose Us", "Por Qué Elegirnos")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("What Sets Us Apart", "Lo Que Nos Distingue")}
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-medium">
              {t(
                "Built on owner accountability, certified protection, and three-state service coverage.",
                "Construido sobre responsabilidad del propietario, protección certificada y cobertura en tres estados."
              )}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {differentiators.map((diff, idx) => {
              const Icon = diff.icon;
              return (
                <motion.div
                  key={diff.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="rounded-3xl bg-[#F7F7F7] p-7 border border-slate-200 hover:border-[#D4AF37] hover:shadow-xl transition-all duration-300 relative flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#2E7D32] to-[#1B5E20] text-[#FFD54F] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#2E7D32] bg-white px-3 py-1 rounded-full border border-slate-200 shadow-2xs">
                        {diff.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-black text-[#111111] tracking-tight group-hover:text-[#2E7D32] transition-colors">
                      {diff.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                      {diff.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs font-extrabold text-[#2E7D32]">
                    <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                    <span>{t("Certified Standard", "Estándar Certificado")}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── OUR COMMITMENT & CORE VALUES ────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#F7F7F7] border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Commitment Box */}
          <div className="rounded-3xl bg-[#111111] text-white p-8 sm:p-12 relative overflow-hidden border border-[#D4AF37]/30 shadow-2xl mb-16">
            <div aria-hidden className="absolute -right-20 -top-20 w-80 h-80 bg-[#2E7D32]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center max-w-3xl mx-auto relative z-10">
              <span className="text-xs font-black uppercase tracking-widest text-[#FFD54F] bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
                {t("Our Service Guarantee", "Nuestra Garantía de Servicio")}
              </span>
              <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                {t("Our Commitment to You", "Nuestro Compromiso con Usted")}
              </h2>
              <p className="mt-2 text-slate-300 text-sm sm:text-base font-medium">
                {t("We operate on a simple but powerful promise across every project we handle:", "Operamos bajo una promesa simple pero poderosa en cada proyecto:")}
              </p>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                {commitments.map((item) => (
                  <div key={item.title} className="p-5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-[#2E7D32] text-[#FFD54F] flex items-center justify-center shrink-0 border border-[#D4AF37]/50 shadow-md">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-black text-[#FFD54F]">{item.title}</h4>
                      <p className="mt-1 text-xs text-slate-200 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("Guiding Principles", "Principios Guía")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("Our Core Values", "Nuestros Valores Fundamentales")}
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {coreValues.map((val) => {
              const Icon = val.icon;
              return (
                <div key={val.title} className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition">
                  <div>
                    <div className="w-11 h-11 rounded-2xl bg-[#2E7D32]/10 border border-[#2E7D32]/20 flex items-center justify-center text-[#2E7D32] mb-4">
                      <Icon className="w-5.5 h-5.5" />
                    </div>
                    <h3 className="text-base font-black text-[#111111] tracking-tight">{val.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ── OUR 5-STEP PROCESS TIMELINE ────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("How We Work", "Cómo Trabajamos")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("Our Simple 5-Step Process", "Nuestro Proceso Simple de 5 Pasos")}
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-medium">
              {t("From initial inquiry to final walkthrough, we keep everything streamlined, clear, and hassle-free.", "Desde la consulta inicial hasta la entrega final, mantenemos todo claro y sin complicaciones.")}
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 relative">
            {steps.map((st, idx) => {
              const Icon = st.icon;
              return (
                <div
                  key={st.num}
                  className="rounded-3xl bg-[#F7F7F7] p-6 border border-slate-200/90 relative flex flex-col justify-between hover:bg-white hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-[#2E7D32]">{st.num}</span>
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#2E7D32] group-hover:bg-[#2E7D32] group-hover:text-[#FFD54F] transition-colors">
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

      {/* ── SERVICES WE OFFER (INTERACTIVE TABS) ────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#F7F7F7] border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("Full Capability Spectrum", "Espectro Completo de Capacidades")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("Services We Offer", "Servicios Que Ofrecemos")}
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-medium">
              {t("Explore our core categories below for complete residential and commercial property solutions.", "Explore nuestras categorías clave para soluciones residenciales y comerciales.")}
            </p>

            {/* Category Filter Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {(Object.keys(serviceCategories) as Array<keyof typeof serviceCategories>).map((catKey) => {
                const cat = serviceCategories[catKey];
                const Icon = cat.icon;
                const active = activeCategory === catKey;
                return (
                  <button
                    key={catKey}
                    onClick={() => setActiveCategory(catKey)}
                    className={`px-4 py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                      active
                        ? "bg-[#2E7D32] text-[#FFD54F] shadow-md border border-[#D4AF37]/50"
                        : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{cat.title}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Category Display Panel */}
          <div className="mt-10 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 text-left">
                <h3 className="text-2xl font-black text-[#111111]">
                  {serviceCategories[activeCategory].title}
                </h3>
                <ul className="mt-6 space-y-3.5">
                  {serviceCategories[activeCategory].items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-800 text-sm font-bold">
                      <div className="p-1 rounded-full bg-[#2E7D32]/15 text-[#2E7D32] shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-[#2E7D32]" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 bg-[#2E7D32] hover:bg-[#1B5E20] text-[#FFD54F] text-xs font-black uppercase tracking-wider px-6 py-3 rounded-full border border-[#D4AF37]/50 shadow-md transition"
                  >
                    <span>{t("Explore Detailed Services", "Explorar Detalles de Servicios")}</span>
                    <ArrowRight className="w-4 h-4 text-[#FFD54F]" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden shadow-lg border border-slate-200 max-h-[360px]">
                  <img
                    src={serviceCategories[activeCategory].image}
                    alt={serviceCategories[activeCategory].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── AREAS WE SERVE (3 STATES CATEGORIZED) ──────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#111111] text-white p-8 sm:p-12 border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden">
            <div aria-hidden className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#2E7D32]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center max-w-3xl mx-auto relative z-10">
              <span className="text-xs font-black uppercase tracking-widest text-[#FFD54F] bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
                {t("Regional Tri-State Coverage", "Cobertura Tri-Estatal Regional")}
              </span>
              <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
                {t("Areas We Serve (50-Mile Radius)", "Áreas Que Servimos (Radio de 50 Millas)")}
              </h2>
              <p className="mt-3 text-slate-300 text-sm font-medium">
                {t(
                  "Based in Horn Lake, MS, we proudly serve communities across Mississippi, Tennessee, and Arkansas within a 50-mile radius.",
                  "Con base en Horn Lake, MS, servimos comunidades en Mississippi, Tennessee y Arkansas en un radio de 50 millas."
                )}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 text-left">
              {/* Mississippi */}
              <div className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/15">
                  <MapPin className="w-5 h-5 text-[#FFD54F]" />
                  <h3 className="text-lg font-black text-[#FFD54F]">Mississippi</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {areas.ms.map((city) => (
                    <span key={city} className="px-2.5 py-1 rounded-lg bg-white/10 text-[11px] font-semibold text-slate-200">
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tennessee */}
              <div className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/15">
                  <MapPin className="w-5 h-5 text-[#FFD54F]" />
                  <h3 className="text-lg font-black text-[#FFD54F]">Tennessee</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {areas.tn.map((city) => (
                    <span key={city} className="px-2.5 py-1 rounded-lg bg-white/10 text-[11px] font-semibold text-slate-200">
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              {/* Arkansas */}
              <div className="p-6 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-white/15">
                  <MapPin className="w-5 h-5 text-[#FFD54F]" />
                  <h3 className="text-lg font-black text-[#FFD54F]">Arkansas</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {areas.ar.map((city) => (
                    <span key={city} className="px-2.5 py-1 rounded-lg bg-white/10 text-[11px] font-semibold text-slate-200">
                      {city}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 text-center relative z-10">
              <p className="text-xs text-slate-300 font-semibold italic">
                "{t("Don't see your city? Give us a call—we may still be able to serve you within our 50-mile radius.", "¿No ve su ciudad? Llámenos, es posible que aún podamos servirle en nuestro radio de 50 millas.")}"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR REPUTATION SPEAKS FOR ITSELF ───────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#F7F7F7] border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("Social Proof & Trust", "Prueba Social y Confianza")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("Our Reputation Speaks for Itself", "Nuestra Reputación Habla por Sí Misma")}
            </h2>
            <p className="mt-4 text-slate-700 text-sm sm:text-base font-medium leading-relaxed">
              {t(
                "With over 200 verified 5-star reviews and 500+ happy clients, we've built a reputation for reliability, quality, and genuine care. Our clients consistently praise our punctuality, professionalism, and the transformative results we deliver—whether it's a showpiece lawn, a spotless office, or emergency tree removal after a storm.",
                "Con más de 200 reseñas verificadas de 5 estrellas y más de 500 clientes satisfechos, hemos construido una reputación de confiabilidad, calidad y cuidado genuino."
              )}
            </p>

            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <div className="text-3xl font-black text-[#2E7D32]">200+</div>
                <div className="text-xs font-bold text-slate-500 uppercase mt-1">{t("5-Star Reviews", "Reseñas 5 Estrellas")}</div>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <div className="text-3xl font-black text-[#2E7D32]">500+</div>
                <div className="text-xs font-bold text-slate-500 uppercase mt-1">{t("Happy Clients", "Clientes Felices")}</div>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <div className="text-3xl font-black text-[#2E7D32]">15+</div>
                <div className="text-xs font-bold text-slate-500 uppercase mt-1">{t("Years Exp.", "Años Exp.")}</div>
              </div>
              <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <div className="text-3xl font-black text-[#2E7D32]">100%</div>
                <div className="text-xs font-bold text-slate-500 uppercase mt-1">{t("Satisfaction", "Satisfacción")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LET'S WORK TOGETHER & BOTTOM CTA ───────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#2E7D32] text-white relative overflow-hidden">
        <div aria-hidden className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div aria-hidden className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#FFD54F]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black text-[#FFD54F] tracking-tight">
            {t("Let's Work Together", "Trabajemos Juntos")}
          </h2>
          <p className="mt-4 text-slate-100 text-sm sm:text-base font-semibold max-w-2xl mx-auto leading-relaxed">
            {t(
              "Whether you need weekly lawn maintenance, a complete landscape overhaul, office cleaning, or emergency tree removal, Brown Lawn Care & Cleaning Service is here to help. We're licensed, insured, bonded, and ready to serve you.",
              "Ya sea que necesite mantenimiento semanal del césped, remodelación del paisaje, limpieza de oficinas o remoción de emergencia de árboles, estamos listos para servirle."
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
              Proudly serving Horn Lake and a 50-mile radius with licensed, insured, and bonded professionals who care.
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
