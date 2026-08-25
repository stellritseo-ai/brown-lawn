import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  Award,
  Heart,
  Globe,
  AlertTriangle,
  ChevronDown,
  Sparkles,
  HelpCircle,
  Building2,
  Home,
  Tractor,
  Scissors,
  Trees,
  Trash2,
  Truck,
  ArrowRight,
  Calendar,
  CheckSquare,
  BadgeCheck,
  Compass,
  FileCheck,
  Layers,
  Ruler,
  UserCheck,
  FileText,
  Calculator,
  DollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useLanguage } from "@/hooks/useLanguage";
import { addWebEmail } from "@/lib/leads-store";
import bbbLogo from "@/assets/bbb.svg";

export function FreeQuoteContent() {
  const { t } = useLanguage();
  const [submitting, setSubmitting] = useState(false);
  const [propertyType, setPropertyType] = useState<"Residential" | "Commercial" | "Agricultural">("Residential");
  const [timeline, setTimeline] = useState("Urgent (within 24-48 hours)");
  const [propertySize, setPropertySize] = useState("Medium (1/4 – 1 acre)");
  const [budget, setBudget] = useState("Flexible / Need Estimate");
  const [referralSource, setReferralSource] = useState("Google / Online Search");
  const [preferredContact, setPreferredContact] = useState("Phone");

  const serviceCategories = [
    {
      category: t("Lawn Care & Maintenance", "Cuidado y Mantenimiento de Césped"),
      icon: Scissors,
      items: [
        t("Weekly Lawn Mowing & Edging", "Cortado Semanal y Orillado de Césped"),
        t("Seasonal Maintenance Programs", "Programas de Mantenimiento Estacional"),
        t("Stripe & Precision Mowing", "Corte con Rayas y de Precisión"),
        t("Commercial Groundskeeping", "Mantenimiento de Terrenos Comerciales"),
      ],
    },
    {
      category: t("Landscaping & Design", "Paisajismo y Diseño"),
      icon: Trees,
      items: [
        t("Landscape Design & Installation", "Diseño e Instalación de Paisajismo"),
        t("Mulching & Bed Maintenance", "Colocación de Mantillo y Jardinería"),
        t("Shrub & Bush Trimming", "Poda de Arbustos y Matorrales"),
        t("Bed Edging & Weed Barrier", "Orillado y Barrera de Maleza"),
        t("Grading & Dirt Work", "Nivelación y Trabajos de Tierra"),
        t("Seeding & Lawn Establishment", "Siembra y Establecimiento de Césped"),
      ],
    },
    {
      category: t("Tree & Brush Services", "Servicios de Árboles y Maleza"),
      icon: Trash2,
      items: [
        t("Small Tree Cutting & Removal", "Corte y Remoción de Árboles Pequeños"),
        t("Large Tree Removal", "Remoción de Árboles Grandes"),
        t("Tree Trimming & Pruning", "Poda y Mantenimiento de Árboles"),
        t("Brush Cutting & Land Clearing", "Corte de Maleza y Limpieza de Terrenos"),
        t("Storm Damage & Emergency Removal", "Daños por Tormentas y Emergencias"),
        t("Deadwood Removal", "Remoción de Madera Muerta"),
      ],
    },
    {
      category: t("Gravel & Dirt Work", "Trabajos de Grava y Tierra"),
      icon: Truck,
      items: [
        t("Gravel Driveway Installation", "Instalación de Entradas de Grava"),
        t("Gravel Driveway Repair", "Reparación de Entradas de Grava"),
        t("Walkways & Pathways", "Caminos y Senderos"),
        t("Site Grading & Leveling", "Nivelación de Sitios y Terrenos"),
        t("Fill Dirt & Topsoil Services", "Tierra de Relleno y Tierra Vegetal"),
        t("Drainage Solutions", "Soluciones de Drenaje"),
      ],
    },
    {
      category: t("Cleaning Services", "Servicios de Limpieza"),
      icon: Sparkles,
      items: [
        t("Office & Commercial Cleaning", "Limpieza de Oficinas y Comercial"),
        t("Deep Cleaning Services", "Servicios de Limpieza Profunda"),
        t("Floor Care & Maintenance", "Cuidado y Encerado de Pisos"),
        t("Window & Glass Cleaning", "Limpieza de Ventanas y Vidrios"),
        t("Residential Cleaning", "Limpieza Residencial del Hogar"),
        t("Warehouse & Agricultural Cleaning", "Limpieza de Almacenes y Galpones"),
        t("Pressure Washing", "Lavado a Presión Exterior"),
      ],
    },
    {
      category: t("Emergency Services", "Servicios de Emergencia"),
      icon: AlertTriangle,
      items: [
        t("Storm Damage & Fallen Trees", "Daños por Tormenta y Árboles Caídos"),
        t("Emergency Dispatch", "Despacho Inmediato de Emergencia"),
        t("Immediate Property Protection", "Protección Inmediata de Propiedad"),
      ],
    },
  ];

  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Weekly Lawn Mowing & Edging"
  ]);

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      setSelectedServices(selectedServices.filter((s) => s !== srv));
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const name = (form.querySelector("#fullName") as HTMLInputElement)?.value || "";
    const phone = (form.querySelector("#phoneNumber") as HTMLInputElement)?.value || "";
    const email = (form.querySelector("#emailAddress") as HTMLInputElement)?.value || "";
    const address = (form.querySelector("#addressCity") as HTMLInputElement)?.value || "";
    const description = (form.querySelector("#jobDescription") as HTMLTextAreaElement)?.value || "";

    try {
      await addWebEmail({
        name,
        phone,
        email,
        service: selectedServices.join(", ") || "General Quote Request",
        message: `Property Type: ${propertyType}\nProperty Size: ${propertySize}\nTimeline: ${timeline}\nBudget: ${budget}\nReferral Source: ${referralSource}\nPreferred Contact: ${preferredContact}\nAddress: ${address}\n\nDescription: ${description}`,
        source: "Dedicated Free Quote Page"
      });

      toast.success(t("We'll respond within 24 hours with your free, itemized quote!", "¡Responderemos dentro de 24 horas con su cotización detallada gratis!"));
      form.reset();
      setSelectedServices(["Weekly Lawn Mowing & Edging"]);
    } catch (err) {
      console.error("Free quote submission error:", err);
      toast.error(t("Submission error. Please call us directly at (662) 571-1048.", "Error de envío. Por favor llame al (662) 571-1048."));
    } finally {
      setSubmitting(false);
    }
  };

  const whyQuotePoints = [
    {
      title: t("100% Free & No Obligation", "100% Gratis y Sin Compromiso"),
      desc: t("There's zero cost and no pressure. We provide estimates so you can make an informed decision with full confidence.", "Sin costo ni presión. Le brindamos cotizaciones para que tome una decisión informada."),
      icon: ShieldCheck,
    },
    {
      title: t("Upfront, Itemized Estimates", "Cotizaciones Desglosadas por Adelantado"),
      desc: t("You'll see exactly what you're paying for—every service, material tonnage, and labor cost clearly listed with no hidden fees.", "Verá exactamente lo que paga: cada servicio y material desglosado claramente sin sorpresas."),
      icon: FileText,
    },
    {
      title: t("Fast 24-Hour Response", "Respuesta Rápida en 24 Horas"),
      desc: t("We respond to all online quote submissions within 24 hours. For urgent storm damage, same-day estimates are available.", "Respondemos en 24 horas. Para daños por tormentas, ofrecemos cotizaciones el mismo día."),
      icon: Clock,
    },
    {
      title: t("Personalized Property Assessment", "Evaluación Personalizada de la Propiedad"),
      desc: t("We take the time to inspect your site, evaluate soil & drainage, and tailor the scope specifically to your budget.", "Nos tomamos el tiempo para inspeccionar su terreno y adaptar la cotización a su presupuesto."),
      icon: UserCheck,
    },
    {
      title: t("Licensed, Insured & Bonded", "Licenciado, Asegurado y Afianzado"),
      desc: t("Every quote is backed by full commercial general liability insurance and 100% bonding for complete peace of mind.", "Cada proyecto está respaldado por seguro de responsabilidad civil y fianza comercial."),
      icon: Award,
    },
    {
      title: t("Family-Owned Integrity", "Integridad de Empresa Familiar"),
      desc: t("We're a local family business, not a franchise. Our quotes reflect honest, competitive pricing and dedicated care.", "Somos una empresa familiar local. Nuestras cotizaciones reflejan precios honestos y competitivos."),
      icon: Heart,
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: t("We Review Your Request", "Revisamos Su Solicitud"),
      desc: t("Our team evaluates your submitted details, requested services, property square footage, and requested timeline.", "Nuestro equipo evalúa los detalles enviados, servicios requeridos y tiempos deseados."),
      icon: Compass,
    },
    {
      step: "02",
      title: t("We Contact You", "Nos Comunicamos Con Usted"),
      desc: t("We reach out via your preferred contact method (phone, email, or text) within 24 hours to confirm details or schedule an on-site visit.", "Nos comunicamos vía teléfono, correo o texto dentro de 24 horas para confirmar detalles."),
      icon: Phone,
    },
    {
      step: "03",
      title: t("We Provide Your Itemized Quote", "Entregamos Su Cotización Desglosada"),
      desc: t("You receive a clear written quote covering scope of work, materials, labor costs, timeline, and flexible payment terms.", "Recibe una cotización clara por escrito que cubre alcance, materiales, mano de obra y plazos."),
      icon: FileCheck,
    },
    {
      step: "04",
      title: t("You Decide (No Pressure)", "Usted Decide (Sin Presión)"),
      desc: t("Review your quote, ask any questions, and decide when you're ready. When approved, we schedule your service promptly.", "Revise su presupuesto, haga preguntas y decida cuando esté listo. Al aprobar, programamos el servicio."),
      icon: BadgeCheck,
    },
  ];

  const pricingTable = [
    { service: t("Weekly Lawn Mowing (1/4 acre)", "Cortado de Césped Semanal (1/4 acre)"), price: "$40 – $60 per visit" },
    { service: t("Weekly Lawn Mowing (1 acre)", "Cortado de Césped Semanal (1 acre)"), price: "$80 – $120 per visit" },
    { service: t("Shrub Trimming & Mulching", "Poda de Arbustos y Mantillo"), price: "$150 – $400 per job" },
    { service: t("Landscape Design & Installation", "Diseño e Instalación de Paisajismo"), price: "Varies by project" },
    { service: t("Tree Removal (Small)", "Remoción de Árboles Pequeños"), price: "$200 – $500 per tree" },
    { service: t("Tree Removal (Large)", "Remoción de Árboles Grandes"), price: "$500 – $2,000+ per tree" },
    { service: t("Brush Clearing (1 acre)", "Limpieza de Maleza (1 acre)"), price: "$400 – $1,200" },
    { service: t("Gravel Driveway Installation", "Instalación de Entrada de Grava"), price: "$1,500 – $5,000+" },
    { service: t("Office Cleaning (per visit)", "Limpieza de Oficinas (por visita)"), price: "$100 – $300+" },
    { service: t("Residential Deep Cleaning", "Limpieza Profunda Residencial"), price: "$200 – $600+" },
    { service: t("Warehouse & Agricultural Cleaning", "Limpieza de Almacenes y Galpones"), price: "Varies by facility size" },
    { service: t("Storm Emergency Response", "Respuesta de Emergencias"), price: "Call for pricing" },
  ];

  const faqs = [
    {
      q: t("Is my quote really 100% free?", "¿Mi cotización es realmente 100% gratuita?"),
      a: t("Yes, absolutely. We provide free, no-obligation quotes for all residential, commercial, and agricultural services. There is zero cost and no pressure to commit.", "Sí, absolutamente. Ofrecemos cotizaciones 100% gratuitas sin costo ni compromiso."),
    },
    {
      q: t("How long does it take to get a quote?", "¿Cuánto tiempo tarda en recibir la cotización?"),
      a: t("We respond to all online quote requests within 24 hours. For straightforward lawn care or cleaning jobs, we can often provide an estimate the same day.", "Respondemos en 24 horas. Para trabajos sencillos de césped o limpieza, a menudo enviamos el presupuesto el mismo día."),
    },
    {
      q: t("Do you offer on-site assessments?", "¿Ofrecen evaluaciones en la propiedad?"),
      a: t("Yes! For larger landscaping overhauls, tree removals, gravel driveways, or commercial janitorial contracts, we schedule a convenient time to visit your property in person.", "¡Sí! Para proyectos grandes de paisajismo, árboles, grava o comercios, programamos una visita en persona."),
    },
    {
      q: t("What information do you need for a quote?", "¿Qué información necesitan para una cotización?"),
      a: t("We need your contact information, property address, the specific services you're interested in, and a brief description of the job (approximate acreage or square footage).", "Necesitamos sus datos de contacto, dirección de la propiedad, servicios deseados y descripción del trabajo."),
    },
    {
      q: t("Can you provide quotes over the phone?", "¿Pueden brindar cotizaciones por teléfono?"),
      a: t("Yes! For simple or routine services like lawn mowing or basic office cleaning, we can often provide preliminary estimates right over the phone at (662) 571-1048.", "¡Sí! Para servicios de cortado de césped o limpieza de oficinas, a menudo podemos dar un presupuesto por teléfono."),
    },
    {
      q: t("What if my needs change after I receive a quote?", "¿Qué pasa si mis necesidades cambian después de recibir la cotización?"),
      a: t("No problem at all! We can adjust your itemized quote as needed. Simply let us know if you want to add or remove services.", "¡Sin problema! Podemos ajustar su cotización desglosada si desea agregar o quitar servicios."),
    },
    {
      q: t("How long is your quote valid?", "¿Por cuánto tiempo es válida la cotización?"),
      a: t("Our estimates are typically valid for 30 days. If material market costs change significantly after 30 days, we will verify pricing before starting.", "Nuestros presupuestos son válidos por 30 días normalmente."),
    },
  ];

  return (
    <div className="bg-white text-[#111111] overflow-hidden">

      {/* ── HERO BANNER SECTION ────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F7F7F7] via-white to-white border-b border-slate-100">
        <div aria-hidden className="absolute top-0 right-1/4 w-96 h-96 bg-[#2E7D32]/5 rounded-full blur-3xl pointer-events-none" />
        <div aria-hidden className="absolute bottom-0 left-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/50 bg-[#1B5E20]/8 text-[#2E7D32] text-xs font-black uppercase tracking-widest mb-6 shadow-xs">
            <Calculator className="w-3.5 h-3.5 text-[#2E7D32]" />
            <span>{t("Fast, Transparent & No Obligation", "Rápido, Transparente y Sin Compromiso")}</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-[#111111] tracking-tight leading-[1.15]">
            {t("Get a ", "Solicite Una ")}
            <span className="bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] bg-clip-text text-transparent">
              {t("Free Quote", "Cotización Gratis")}
            </span>
          </h1>

          <p className="mt-6 text-slate-700 text-base sm:text-lg leading-relaxed font-medium max-w-3xl mx-auto">
            {t(
              "At Brown Lawn Care & Cleaning Service, we believe in making quality property care accessible and straightforward. That's why we offer free, no-obligation quotes for every service we provide. Whether you need weekly lawn maintenance, a complete landscape redesign, commercial cleaning, or emergency tree removal, we'll provide an honest, itemized estimate that clearly outlines the scope of work and cost—with no hidden fees or surprises.",
              "En Brown Lawn Care & Cleaning Service ofrecemos cotizaciones gratuitas y sin compromiso para cada servicio. Le brindamos una estimación honesta y detallada sin cargos ocultos ni sorpresas."
            )}
          </p>

          {/* Quick Option Badges */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="text-[10px] font-black uppercase tracking-widest text-[#2E7D32]">{t("Option 1", "Opción 1")}</div>
              <div className="text-xs font-black text-[#111111] mt-0.5">{t("Online Quote Form", "Formulario En Línea")}</div>
              <div className="text-[11px] text-slate-500 font-medium mt-1">{t("Complete the form below for 24h response", "Complete el formulario para respuesta en 24h")}</div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="text-[10px] font-black uppercase tracking-widest text-[#2E7D32]">{t("Option 2", "Opción 2")}</div>
              <div className="text-xs font-black text-[#111111] mt-0.5">{t("Call Us Directly", "Llámenos Directamente")}</div>
              <div className="text-[11px] text-slate-500 font-medium mt-1">{t("Phone estimates: (662) 571-1048", "Estimaciones por teléfono: (662) 571-1048")}</div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="text-[10px] font-black uppercase tracking-widest text-[#2E7D32]">{t("Option 3", "Opción 3")}</div>
              <div className="text-xs font-black text-[#111111] mt-0.5">{t("On-Site Assessment", "Evaluación En El Sitio")}</div>
              <div className="text-[11px] text-slate-500 font-medium mt-1">{t("In-person property walkthrough for large projects", "Visita presencial para proyectos grandes")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY GET A QUOTE FROM US SECTION ───────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("Honest Estimates", "Estimaciones Honestas")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("Why Get a Free Quote From Us?", "¿Por Qué Solicitar Una Cotización Gratis Con Nosotros?")}
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyQuotePoints.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="p-7 rounded-3xl bg-[#F7F7F7] border border-slate-200 hover:border-[#2E7D32] transition shadow-xs text-left">
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

      {/* ── DETAILED QUOTE REQUEST FORM ────────────────────────────────── */}
      <section id="quote-form" className="py-16 sm:py-24 bg-[#F7F7F7] border-y border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-12 shadow-xl text-left">
            <div className="mb-8 text-center max-w-2xl mx-auto">
              <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
                {t("Comprehensive Form", "Formulario Detallado")}
              </span>
              <h2 className="mt-3 text-2xl sm:text-4xl font-black text-[#111111] tracking-tight">
                {t("Online Quote Request Form", "Formulario de Solicitud de Cotización")}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium">
                {t(
                  "Complete the details below and our team will evaluate your property requirements to deliver a detailed, itemized estimate within 24 hours.",
                  "Complete los detalles a continuación y le enviaremos un presupuesto detallado en 24 horas."
                )}
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-8">
              
              {/* Step 1: Contact Information */}
              <div className="p-6 rounded-2xl bg-[#F7F7F7] border border-slate-200 space-y-4">
                <h3 className="text-base font-black text-[#111111] flex items-center gap-2 border-b border-slate-300 pb-3">
                  <span className="w-6 h-6 rounded-full bg-[#2E7D32] text-[#FFD54F] flex items-center justify-center text-xs font-black">1</span>
                  <span>{t("Your Contact Information", "Su Información de Contacto")}</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName" className="text-xs font-black uppercase tracking-wider text-slate-700">
                      {t("Full Name (required)", "Nombre Completo (requerido)")}
                    </Label>
                    <Input id="fullName" required placeholder="Roy Brown" className="mt-1.5 bg-white border-slate-300 h-11 text-sm font-semibold" />
                  </div>

                  <div>
                    <Label htmlFor="phoneNumber" className="text-xs font-black uppercase tracking-wider text-slate-700">
                      {t("Phone Number (required)", "Número de Teléfono (requerido)")}
                    </Label>
                    <Input id="phoneNumber" type="tel" required placeholder="(662) 571-1048" className="mt-1.5 bg-white border-slate-300 h-11 text-sm font-semibold" />
                  </div>

                  <div>
                    <Label htmlFor="emailAddress" className="text-xs font-black uppercase tracking-wider text-slate-700">
                      {t("Email Address (required)", "Correo Electrónico (requerido)")}
                    </Label>
                    <Input id="emailAddress" type="email" required placeholder="royleebrown@ymail.com" className="mt-1.5 bg-white border-slate-300 h-11 text-sm font-semibold" />
                  </div>

                  <div>
                    <Label htmlFor="addressCity" className="text-xs font-black uppercase tracking-wider text-slate-700">
                      {t("Address / City (required)", "Dirección / Ciudad (requerido)")}
                    </Label>
                    <Input id="addressCity" required placeholder="Horn Lake, MS" className="mt-1.5 bg-white border-slate-300 h-11 text-sm font-semibold" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <Label className="text-xs font-black uppercase tracking-wider text-slate-700">
                      {t("Property Type", "Tipo de Propiedad")}
                    </Label>
                    <div className="mt-1.5 grid grid-cols-3 gap-2">
                      {(["Residential", "Commercial", "Agricultural"] as const).map((pt) => {
                        const isSelected = propertyType === pt;
                        return (
                          <button
                            type="button"
                            key={pt}
                            onClick={() => setPropertyType(pt)}
                            className={`py-2 px-2 rounded-xl border text-[11px] font-extrabold transition cursor-pointer flex items-center justify-center gap-1 ${
                              isSelected
                                ? "bg-[#2E7D32] text-[#FFD54F] border-[#D4AF37]/50 shadow-2xs"
                                : "bg-white text-slate-700 border-slate-300 hover:border-slate-400"
                            }`}
                          >
                            <span>{pt}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="timeline" className="text-xs font-black uppercase tracking-wider text-slate-700">
                      {t("How Soon Do You Need Service?", "¿Qué tan pronto necesita el servicio?")}
                    </Label>
                    <select
                      id="timeline"
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="mt-1.5 w-full h-10 rounded-xl bg-white border border-slate-300 px-3 text-xs font-bold text-[#111111]"
                    >
                      <option value="Urgent (within 24-48 hours)">Urgent (within 24-48 hours)</option>
                      <option value="Within 1 Week">Within 1 Week</option>
                      <option value="Within 2 Weeks">Within 2 Weeks</option>
                      <option value="Flexible / Planning Ahead">Flexible / Planning Ahead</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Step 2: Comprehensive Services Selection */}
              <div className="p-6 rounded-2xl bg-[#F7F7F7] border border-slate-200 space-y-4">
                <h3 className="text-base font-black text-[#111111] flex items-center gap-2 border-b border-slate-300 pb-3">
                  <span className="w-6 h-6 rounded-full bg-[#2E7D32] text-[#FFD54F] flex items-center justify-center text-xs font-black">2</span>
                  <span>{t("Services You're Interested In (Select all that apply)", "Servicios de Su Interés (Seleccione todos los que apliquen)")}</span>
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {serviceCategories.map((cat) => {
                    const CategoryIcon = cat.icon;
                    return (
                      <div key={cat.category} className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
                        <div className="flex items-center gap-2 mb-3 text-xs font-black text-[#2E7D32] border-b border-slate-100 pb-2">
                          <CategoryIcon className="w-4 h-4" />
                          <span>{cat.category}</span>
                        </div>
                        <div className="space-y-2">
                          {cat.items.map((item) => {
                            const isChecked = selectedServices.includes(item);
                            return (
                              <button
                                type="button"
                                key={item}
                                onClick={() => toggleService(item)}
                                className={`w-full p-2.5 rounded-lg border text-left text-xs transition flex items-center justify-between cursor-pointer ${
                                  isChecked
                                    ? "bg-[#2E7D32]/8 border-[#2E7D32] text-[#2E7D32] font-black"
                                    : "bg-white border-slate-200 text-slate-700 hover:border-slate-300 font-medium"
                                }`}
                              >
                                <span>{item}</span>
                                <div className={`w-4 h-4 rounded border flex items-center justify-center ${isChecked ? "bg-[#2E7D32] border-[#2E7D32] text-[#FFD54F]" : "border-slate-300"}`}>
                                  {isChecked && <CheckSquare className="w-3.5 h-3.5" />}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Project Details & Preferences */}
              <div className="p-6 rounded-2xl bg-[#F7F7F7] border border-slate-200 space-y-4">
                <h3 className="text-base font-black text-[#111111] flex items-center gap-2 border-b border-slate-300 pb-3">
                  <span className="w-6 h-6 rounded-full bg-[#2E7D32] text-[#FFD54F] flex items-center justify-center text-xs font-black">3</span>
                  <span>{t("Project Details & Specific Expectations", "Detalles del Proyecto y Expectativas")}</span>
                </h3>

                <div>
                  <Label htmlFor="jobDescription" className="text-xs font-black uppercase tracking-wider text-slate-700">
                    {t("Brief Description of the Job", "Descripción Breve del Trabajo")}
                  </Label>
                  <p className="text-[11px] text-slate-500 font-medium mb-1.5">
                    {t(
                      'Examples: "Weekly mowing for 1/2-acre yard in Southaven", "5,000 sq ft office cleaned weekly", "Large fallen tree on driveway in Horn Lake needing immediate removal".',
                      'Ejemplos: "Cortado semanal para 1/2 acre en Southaven", "Limpieza de oficina de 5,000 sq ft", "Árbol caído en la entrada en Horn Lake".'
                    )}
                  </p>
                  <Textarea
                    id="jobDescription"
                    rows={4}
                    placeholder={t("Please describe your property, desired outcome, or specific concerns...", "Describa su propiedad o resultado deseado...")}
                    className="bg-white border-slate-300 text-xs font-medium"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                  <div>
                    <Label htmlFor="propertySize" className="text-xs font-black uppercase tracking-wider text-slate-700">
                      {t("Approximate Property Size", "Tamaño Aproximado")}
                    </Label>
                    <select
                      id="propertySize"
                      value={propertySize}
                      onChange={(e) => setPropertySize(e.target.value)}
                      className="mt-1.5 w-full h-10 rounded-xl bg-white border border-slate-300 px-3 text-xs font-bold text-[#111111]"
                    >
                      <option value="Small (under 1/4 acre)">Small (under 1/4 acre)</option>
                      <option value="Medium (1/4 – 1 acre)">Medium (1/4 – 1 acre)</option>
                      <option value="Large (1 – 5 acres)">Large (1 – 5 acres)</option>
                      <option value="Very Large (5+ acres)">Very Large (5+ acres)</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="budget" className="text-xs font-black uppercase tracking-wider text-slate-700">
                      {t("Budget Expectations", "Presupuesto Esperado")}
                    </Label>
                    <select
                      id="budget"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="mt-1.5 w-full h-10 rounded-xl bg-white border border-slate-300 px-3 text-xs font-bold text-[#111111]"
                    >
                      <option value="Under $500">Under $500</option>
                      <option value="$500 – $1,500">$500 – $1,500</option>
                      <option value="$1,500 – $5,000">$1,500 – $5,000</option>
                      <option value="$5,000+">$5,000+</option>
                      <option value="Flexible / Need Estimate">Flexible / Need Estimate</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="referralSource" className="text-xs font-black uppercase tracking-wider text-slate-700">
                      {t("How Did You Hear About Us?", "¿Cómo nos conoció?")}
                    </Label>
                    <select
                      id="referralSource"
                      value={referralSource}
                      onChange={(e) => setReferralSource(e.target.value)}
                      className="mt-1.5 w-full h-10 rounded-xl bg-white border border-slate-300 px-3 text-xs font-bold text-[#111111]"
                    >
                      <option value="Google / Online Search">Google / Online Search</option>
                      <option value="Social Media (Facebook, Instagram)">Social Media (Facebook, Instagram)</option>
                      <option value="Referral from Friend or Neighbor">Referral from Friend or Neighbor</option>
                      <option value="Saw Our Truck / Yard Sign">Saw Our Truck / Yard Sign</option>
                      <option value="Previous Customer">Previous Customer</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="preferredContact" className="text-xs font-black uppercase tracking-wider text-slate-700">
                      {t("Preferred Contact Method", "Método de Contacto")}
                    </Label>
                    <select
                      id="preferredContact"
                      value={preferredContact}
                      onChange={(e) => setPreferredContact(e.target.value)}
                      className="mt-1.5 w-full h-10 rounded-xl bg-white border border-slate-300 px-3 text-xs font-bold text-[#111111]"
                    >
                      <option value="Phone">Phone Call</option>
                      <option value="Email">Email</option>
                      <option value="Text Message">Text Message</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={submitting}
                className="w-full h-14 bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] hover:from-[#1B5E20] hover:to-[#2E7D32] text-[#FFD54F] text-xs sm:text-sm font-black uppercase tracking-wider rounded-2xl border border-[#D4AF37]/50 shadow-lg active:scale-98 transition flex items-center justify-center gap-2"
              >
                {submitting ? (
                  t("Generating Your Itemized Quote...", "Generando Su Cotización...")
                ) : (
                  <>
                    <span>{t("Submit Quote Request →", "Enviar Solicitud de Cotización →")}</span>
                    <Send className="w-4 h-4 text-[#FFD54F]" />
                  </>
                )}
              </Button>

              <p className="text-center text-xs font-bold text-slate-500">
                {t("We'll respond within 24 hours with your free, no-obligation quote.", "Responderemos dentro de 24 horas con su cotización gratis sin compromiso.")}
              </p>

            </form>
          </div>
        </div>
      </section>

      {/* ── WHAT HAPPENS NEXT (4-STEP PROCESS) ─────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("Simple & Transparent", "Sencillo y Transparente")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("What Happens Next?", "¿Qué Sucede Después?")}
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((st) => {
              const Icon = st.icon;
              return (
                <div
                  key={st.step}
                  className="rounded-3xl bg-[#F7F7F7] p-7 border border-slate-200 flex flex-col justify-between hover:border-[#D4AF37] hover:shadow-lg transition text-left group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-black text-[#2E7D32]">{st.step}</span>
                      <div className="w-10 h-10 rounded-xl bg-[#2E7D32]/10 text-[#2E7D32] flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="text-lg font-black text-[#111111] group-hover:text-[#2E7D32] transition-colors">
                      {st.title}
                    </h3>
                    <p className="mt-2.5 text-xs text-slate-600 font-medium leading-relaxed">
                      {st.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SAMPLE PRICING GUIDE TABLE ─────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#F7F7F7] border-y border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-left">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("Transparent Pricing", "Precios Transparentes")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("Sample Service Pricing Guide", "Guía de Precios de Ejemplo")}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium">
              {t(
                "Note: These are estimated starting prices and may vary based on property size, condition, and specific requirements. Contact us for an accurate, personalized quote.",
                "Nota: Estos son precios de referencia estimados que varían según el tamaño y la condición de la propiedad."
              )}
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-[#111111] text-[#FFD54F] font-black uppercase tracking-wider border-b border-slate-200">
                  <th className="p-4 sm:p-5">{t("Property Service", "Servicio de Propiedad")}</th>
                  <th className="p-4 sm:p-5 text-right">{t("Estimated Starting Price", "Precio Inicial Estimado")}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 font-bold text-slate-800">
                {pricingTable.map((pt, idx) => (
                  <tr key={pt.service} className={idx % 2 === 0 ? "bg-white" : "bg-[#F7F7F7]"}>
                    <td className="p-4 sm:p-5 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0" />
                      <span>{pt.service}</span>
                    </td>
                    <td className="p-4 sm:p-5 text-right font-black text-[#2E7D32]">{pt.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
              {t("Common Questions About Quotes", "Preguntas Frecuentes Sobre Cotizaciones")}
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

      {/* ── SERVICE AREAS (MS, TN, AR) ─────────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#111111] text-white p-8 sm:p-12 border border-[#D4AF37]/30 shadow-2xl relative overflow-hidden">
            <div aria-hidden className="absolute -right-20 -top-20 w-80 h-80 bg-[#2E7D32]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="text-center max-w-3xl mx-auto relative z-10">
              <span className="text-xs font-black uppercase tracking-widest text-[#FFD54F] bg-white/10 px-3.5 py-1 rounded-full border border-white/20">
                {t("Service Radius", "Radio de Servicio")}
              </span>
              <h2 className="mt-4 text-2xl sm:text-3xl font-black text-white tracking-tight">
                {t("Service Areas For Free Quotes (50-Mile Radius)", "Áreas de Servicio Para Cotizaciones (50 Millas)")}
              </h2>
              <p className="mt-2 text-slate-300 text-xs sm:text-sm font-medium">
                {t(
                  "We provide free quotes for properties across Horn Lake and a 50-mile radius:",
                  "Brindamos cotizaciones gratuitas para propiedades en Horn Lake y 50 millas a la redonda:"
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

      {/* ── READY TO GET STARTED CTA BANNER ────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#2E7D32] text-white relative overflow-hidden">
        <div aria-hidden className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div aria-hidden className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#FFD54F]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black text-[#FFD54F] tracking-tight">
            {t("Ready to Get Started?", "¿Listo para Empezar?")}
          </h2>
          <p className="mt-4 text-slate-100 text-sm sm:text-base font-semibold max-w-2xl mx-auto leading-relaxed">
            {t(
              "Don't wait—get your free quote today. Whether you need routine lawn care, a major landscape project, commercial cleaning, or emergency assistance, Brown Lawn Care & Cleaning Service is here to help.",
              "No espere más: obtenga su presupuesto gratuito hoy mismo. Ya sea que necesite corte de césped, paisajismo o asistencia de emergencia, estamos aquí para ayudarle."
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
            <a
              href="mailto:royleebrown@ymail.com"
              className="bg-white hover:bg-slate-100 text-[#111111] text-xs font-black uppercase tracking-wider px-8 py-4 rounded-full shadow-xl transition active:scale-95 flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#2E7D32]" />
              <span>{t("Email Us Directly", "Enviar Correo Directo")}</span>
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20 text-xs font-bold text-slate-200 flex flex-col items-center gap-1">
            <div className="text-[#FFD54F] font-black uppercase tracking-widest text-[11px]">
              Brown Lawn Care & Cleaning Service, LLC — Family Owned & Operated • 6 Years in Business • 15+ Years Experience
            </div>
            <div className="text-slate-200 text-[10px]">
              Licensed • Insured • Bonded • Bilingual Service (English & Spanish) • Office: Alden Lake Dr W, Horn Lake, MS
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
