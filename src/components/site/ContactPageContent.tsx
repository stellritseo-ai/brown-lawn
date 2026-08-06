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
  Facebook,
  Instagram,
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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useLanguage } from "@/hooks/useLanguage";
import { addWebEmail } from "@/lib/leads-store";
import bbbLogo from "@/assets/bbb.svg";

export function ContactPageContent() {
  const { t } = useLanguage();
  const [submitting, setSubmitting] = useState(false);
  const [propertyType, setPropertyType] = useState<"Residential" | "Commercial" | "Agricultural">("Residential");
  const [timeline, setTimeline] = useState("Urgent (within 24-48 hours)");
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Lawn Mowing & Maintenance"
  ]);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const availableServices = [
    t("Lawn Mowing & Maintenance", "Cortado de Césped y Mantenimiento"),
    t("Landscaping & Design", "Paisajismo y Diseño"),
    t("Tree & Brush Removal", "Remoción de Árboles y Maleza"),
    t("Gravel & Dirt Work", "Trabajos de Grava y Tierra"),
    t("Office & Commercial Cleaning", "Limpieza de Oficinas y Comercial"),
    t("Residential & Wire House Cleaning", "Limpieza Residencial y Galpones"),
    t("Emergency Services", "Servicios de Emergencia"),
    t("Other", "Otro"),
  ];

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
        service: selectedServices.join(", ") || "General Contact Inquiry",
        message: `Property Type: ${propertyType}\nTimeline: ${timeline}\nAddress: ${address}\n\nDescription: ${description}`,
        source: "Contact Page Quote Form"
      });

      const response = await fetch("https://formsubmit.co/ajax/royleebrown@ymail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Name: name,
          Phone: phone,
          Email: email,
          "Address / City": address,
          "Property Type": propertyType,
          "Timeline Needed": timeline,
          "Services Interested In": selectedServices.join(", "),
          Message: description
        })
      });

      if (response.ok) {
        toast.success(t("We'll respond within 24 hours. For urgent needs, call (662) 571-1048.", "Responderemos dentro de 24 horas. Para urgencias, llame al (662) 571-1048."));
        form.reset();
        setSelectedServices(["Lawn Mowing & Maintenance"]);
      } else {
        toast.error(t("Submission failed. Please try calling (662) 571-1048.", "Error en el envío. Por favor intente llamar al (662) 571-1048."));
      }
    } catch (err) {
      toast.error(t("Connection error. Please try again or call us.", "Error de conexión. Por favor intente de nuevo."));
    } finally {
      setSubmitting(false);
    }
  };

  const whyContactUsPoints = [
    {
      title: t("Licensed, Insured & Bonded", "Licenciado, Asegurado y Afianzado"),
      desc: t("Your property is fully protected. We carry comprehensive liability coverage and bonding for your complete peace of mind.", "Su propiedad está totalmente protegida con seguro de responsabilidad y fianza."),
      icon: ShieldCheck,
    },
    {
      title: t("15+ Years Experience", "15+ Años de Experiencia"),
      desc: t("With over a decade and a half in the industry, we have the knowledge and skill to handle projects of any size or complexity.", "Con más de 15 años en la industria, tenemos la habilidad para manejar cualquier proyecto."),
      icon: Award,
    },
    {
      title: t("Family-Owned & Community-Focused", "Familia Local y Enfocados en la Comunidad"),
      desc: t("We're a local family business, not a franchise. We're committed to the communities we serve and treat every client like a neighbor.", "Somos una empresa familiar local. Tratamos a cada cliente como a un vecino."),
      icon: Heart,
    },
    {
      title: t("Punctual & Reliable", "Puntual y Confiable"),
      desc: t("We show up when we say we will and complete the job to your satisfaction. Your time matters to us.", "Llegamos a tiempo y completamos el trabajo a su entera satisfacción."),
      icon: Clock,
    },
    {
      title: t("Bilingual Service (English & Spanish)", "Servicio Bilingüe (Inglés y Español)"),
      desc: t("We speak English and Spanish. No language barriers—just clear communication and exceptional service.", "Hablamos inglés y español sin barreras de idioma."),
      icon: Globe,
    },
    {
      title: t("100% Satisfaction Guarantee", "Garantía de Satisfacción del 100%"),
      desc: t("We stand behind our work. If we missed something or you need an adjustment, we make it right immediately.", "Respaldamos nuestro trabajo. Si falta algo, lo solucionamos de inmediato."),
      icon: BadgeCheck,
    },
  ];

  const faqs = [
    {
      q: t("What is your response time for quotes?", "¿Cuál es su tiempo de respuesta para cotizaciones?"),
      a: t("We respond to all online quote requests within 24 hours. For urgent inquiries or storm emergencies, call our main line at (662) 571-1048 for immediate assistance during business hours.", "Respondemos a todas las cotizaciones dentro de las 24 horas. Para emergencias, llame directamente."),
    },
    {
      q: t("Do you offer free estimates?", "¿Ofrecen presupuestos gratuitos?"),
      a: t("Yes! We provide 100% free, no-obligation quotes for all residential, commercial, and agricultural services. You will receive an upfront, itemized estimate with no hidden fees.", "¡Sí! Brindamos cotizaciones 100% gratuitas sin compromiso y sin cargos ocultos."),
    },
    {
      q: t("What is your emergency response time?", "¿Cuál es su tiempo de respuesta en emergencias?"),
      a: t("We provide emergency dispatch during business hours. Response time depends on location and demand, but we strive to arrive as quickly as possible to secure your property and clear hazards.", "Brindamos despacho de emergencia en horario comercial para asegurar su propiedad rápidamente."),
    },
    {
      q: t("Can you provide service outside your listed 50-mile area?", "¿Pueden brindar servicios fuera de su área de 50 millas?"),
      a: t("We primarily serve Horn Lake and a 50-mile radius across Mississippi, Tennessee, and Arkansas. However, we may be able to accommodate nearby locations depending on project size. Call us to discuss!", "Servimos principalmente 50 millas a la redonda, pero podemos coordinar según el tamaño del proyecto."),
    },
    {
      q: t("What forms of payment do you accept?", "¿Qué formas de pago aceptan?"),
      a: t("We accept credit cards, checks, cash, and bank transfers. Details will be provided with your itemized estimate.", "Aceptamos tarjetas de crédito, cheques, efectivo y transferencias bancarias."),
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
            <Phone className="w-3.5 h-3.5 text-[#2E7D32]" />
            <span>{t("We're Here to Help", "Estamos Aquí Para Ayudarle")}</span>
          </div>

          <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-[#111111] tracking-tight leading-[1.15]">
            {t("Contact ", "Contacto con ")}
            <span className="bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] bg-clip-text text-transparent">
              {t("Brown Lawn Care & Cleaning Service", "Brown Lawn Care & Cleaning Service")}
            </span>
          </h1>

          <p className="mt-6 text-slate-700 text-base sm:text-lg leading-relaxed font-medium max-w-3xl mx-auto">
            {t(
              "Thank you for your interest in Brown Lawn Care & Cleaning Service. Whether you need routine lawn maintenance, emergency tree removal, commercial cleaning, or a complete landscape transformation, our family-owned team is ready to serve you. We're licensed, insured, bonded, and committed to delivering professional, reliable service with a personal touch.",
              "Gracias por su interés en Brown Lawn Care & Cleaning Service. Ya sea que necesite mantenimiento de césped, remoción de árboles de emergencia, limpieza comercial o una transformación completa de paisajismo, nuestro equipo familiar está listo para servirle."
            )}
          </p>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            <a
              href="tel:6625711048"
              className="bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] hover:from-[#1B5E20] hover:to-[#2E7D32] text-[#FFD54F] text-xs font-black uppercase tracking-wider px-8 py-4 rounded-full border border-[#D4AF37]/50 shadow-md transition-all active:scale-95 flex items-center gap-2.5"
            >
              <Phone className="w-4 h-4 text-[#FFD54F] fill-current" />
              <span>{t("Call (662) 571-1048", "Llamar (662) 571-1048")}</span>
            </a>
            <a
              href="mailto:royleebrown@ymail.com"
              className="bg-[#111111] hover:bg-[#222222] text-white text-xs font-black uppercase tracking-wider px-8 py-4 rounded-full shadow-md transition-all active:scale-95 flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#D4AF37]" />
              <span>{t("Email Us Directly", "Enviar Correo Directo")}</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT INFORMATION & GOOGLE MAP CARDS ─────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Contact Details Column */}
            <div className="lg:col-span-1 space-y-6 text-left">
              
              {/* Phone Card */}
              <div className="p-6 rounded-3xl bg-[#F7F7F7] border border-slate-200 shadow-xs hover:border-[#2E7D32] transition">
                <div className="w-12 h-12 rounded-2xl bg-[#2E7D32] text-[#FFD54F] flex items-center justify-center mb-4 shadow-sm border border-[#D4AF37]/40">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-[#111111]">{t("Phone Information", "Información Telefónica")}</h3>
                <p className="mt-1 text-sm font-black text-[#2E7D32]">{t("Main Line: (662) 571-1048", "Línea Principal: (662) 571-1048")}</p>

                <div className="mt-4 pt-3 border-t border-slate-200/80 text-xs font-medium text-slate-700 space-y-1">
                  <div className="font-extrabold text-[#111111] mb-1">{t("Business Hours:", "Horario de Atención:")}</div>
                  <div>Monday–Friday: 10:00 AM – 7:00 PM</div>
                  <div>Saturday: 3:00 PM – 8:00 PM</div>
                  <div>Sunday: Closed</div>
                </div>

                <div className="mt-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs font-bold text-amber-900 flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>{t("Emergency Service available during business hours for storm damage & fallen trees.", "Servicio de emergencia disponible en horario comercial para tormentas.")}</span>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-6 rounded-3xl bg-[#F7F7F7] border border-slate-200 shadow-xs hover:border-[#2E7D32] transition">
                <div className="w-12 h-12 rounded-2xl bg-[#111111] text-[#FFD54F] flex items-center justify-center mb-4 shadow-sm border border-[#D4AF37]/40">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-[#111111]">{t("Email & Office", "Correo y Oficina")}</h3>
                <p className="mt-1 text-sm font-black text-[#2E7D32]">royleebrown@ymail.com</p>
                <p className="text-xs text-slate-600 font-medium mt-1">
                  {t("We respond to all email inquiries within 24 hours.", "Respondemos a todas las consultas de correo en 24 horas.")}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-200/80 text-xs text-slate-700">
                  <div className="font-extrabold text-[#111111]">{t("Office Location:", "Ubicación de Oficina:")}</div>
                  <div className="font-medium mt-0.5">Alden Lake Dr W, Horn Lake, MS</div>
                </div>
              </div>

              {/* Social Media Card */}
              <div className="p-6 rounded-3xl bg-[#F7F7F7] border border-slate-200 shadow-xs hover:border-[#2E7D32] transition">
                <h3 className="text-base font-black text-[#111111] mb-3">{t("Connect On Social Media", "Conéctese en Redes Sociales")}</h3>
                <p className="text-xs text-slate-600 font-medium mb-4">
                  {t("Follow us for project photos, seasonal maintenance tips, and updates:", "Síganos para ver fotos de proyectos y consejos de temporada:")}
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-white border border-slate-200 text-xs font-black text-[#111111] hover:border-[#2E7D32] hover:text-[#2E7D32] transition flex items-center justify-center gap-2 shadow-2xs"
                  >
                    <Facebook className="w-4 h-4 text-[#1877F2]" />
                    <span>Facebook</span>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-white border border-slate-200 text-xs font-black text-[#111111] hover:border-[#2E7D32] hover:text-[#2E7D32] transition flex items-center justify-center gap-2 shadow-2xs"
                  >
                    <Instagram className="w-4 h-4 text-[#E4405F]" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Google Map & Interactive Quote Form Column */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Map Container */}
              <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-md h-72 relative group">
                <iframe
                  title="Brown Lawn Care Location Map"
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104595.67493214!2d-90.0463!3d34.9545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d581fb620023a9%3A0xd6e54522a76f2f27!2sHorn%20Lake%2C%20MS!5e0!3m2!1sen!2s!4v1782259191322!5m2!1sen!2s"
                />
              </div>

              {/* Comprehensive Quote Request Form */}
              <div className="rounded-3xl border border-slate-200 bg-[#F7F7F7] p-6 sm:p-10 shadow-lg text-left">
                <div className="mb-8">
                  <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
                    {t("Request A Free Quote", "Solicite Una Cotización Gratis")}
                  </span>
                  <h2 className="mt-3 text-2xl sm:text-3xl font-black text-[#111111] tracking-tight">
                    {t("Online Quote Request Form", "Formulario de Solicitud de Cotización")}
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium">
                    {t(
                      "Fill out the form below, and we'll provide an honest, competitive quote within 24 hours. For urgent needs, call us directly at (662) 571-1048.",
                      "Complete el formulario a continuación y le brindaremos una cotización honesta en 24 horas. Para emergencias, llame al (662) 571-1048."
                    )}
                  </p>
                </div>

                <form onSubmit={onSubmit} className="space-y-6">
                  
                  {/* Basic Inputs Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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

                  {/* Property Type Radio Selector */}
                  <div>
                    <Label className="text-xs font-black uppercase tracking-wider text-slate-700">
                      {t("Property Type", "Tipo de Propiedad")}
                    </Label>
                    <div className="mt-2 grid grid-cols-3 gap-3">
                      {(["Residential", "Commercial", "Agricultural"] as const).map((pt) => {
                        const isSelected = propertyType === pt;
                        return (
                          <button
                            type="button"
                            key={pt}
                            onClick={() => setPropertyType(pt)}
                            className={`py-2.5 px-3 rounded-xl border text-xs font-extrabold transition cursor-pointer flex items-center justify-center gap-1.5 ${
                              isSelected
                                ? "bg-[#2E7D32] text-[#FFD54F] border-[#D4AF37]/50 shadow-sm"
                                : "bg-white text-slate-700 border-slate-300 hover:border-slate-400"
                            }`}
                          >
                            {pt === "Residential" && <Home className="w-3.5 h-3.5" />}
                            {pt === "Commercial" && <Building2 className="w-3.5 h-3.5" />}
                            {pt === "Agricultural" && <Tractor className="w-3.5 h-3.5" />}
                            <span>{pt}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Service Timeline Selector */}
                  <div>
                    <Label htmlFor="timeline" className="text-xs font-black uppercase tracking-wider text-slate-700">
                      {t("How Soon Do You Need Service?", "¿Qué tan pronto necesita el servicio?")}
                    </Label>
                    <select
                      id="timeline"
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="mt-1.5 w-full h-11 rounded-xl bg-white border border-slate-300 px-3 text-xs sm:text-sm font-extrabold text-[#111111] focus:ring-2 focus:ring-[#2E7D32]"
                    >
                      <option value="Urgent (within 24-48 hours)">Urgent (within 24-48 hours)</option>
                      <option value="Within 1 Week">Within 1 Week</option>
                      <option value="Within 2 Weeks">Within 2 Weeks</option>
                      <option value="Flexible / Planning Ahead">Flexible / Planning Ahead</option>
                    </select>
                  </div>

                  {/* Services Interested In Checkboxes */}
                  <div>
                    <Label className="text-xs font-black uppercase tracking-wider text-slate-700">
                      {t("Services Interested In (Select all that apply)", "Servicios de Interés (Seleccione todos los que apliquen)")}
                    </Label>
                    <div className="mt-2.5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {availableServices.map((srv) => {
                        const isChecked = selectedServices.includes(srv);
                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => toggleService(srv)}
                            className={`p-3 rounded-xl border text-xs font-bold text-left transition flex items-center justify-between cursor-pointer ${
                              isChecked
                                ? "bg-white border-[#2E7D32] text-[#2E7D32] shadow-2xs font-extrabold"
                                : "bg-white/60 border-slate-200 text-slate-700 hover:border-slate-300"
                            }`}
                          >
                            <span>{srv}</span>
                            <div className={`w-4 h-4 rounded border flex items-center justify-center ${isChecked ? "bg-[#2E7D32] border-[#2E7D32] text-[#FFD54F]" : "border-slate-300"}`}>
                              {isChecked && <CheckSquare className="w-3.5 h-3.5" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Job Description Textarea */}
                  <div>
                    <Label htmlFor="jobDescription" className="text-xs font-black uppercase tracking-wider text-slate-700">
                      {t("Brief Description of the Job", "Descripción Breve del Trabajo")}
                    </Label>
                    <Textarea
                      id="jobDescription"
                      rows={4}
                      placeholder={t(
                        "Please describe your property, the services you're interested in, and any specific needs or concerns. The more detail you provide, the better we can serve you.",
                        "Por favor describa su propiedad y las necesidades específicas de su trabajo."
                      )}
                      className="mt-1.5 bg-white border-slate-300 text-xs sm:text-sm font-medium"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={submitting}
                    className="w-full h-14 bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] hover:from-[#1B5E20] hover:to-[#2E7D32] text-[#FFD54F] text-xs sm:text-sm font-black uppercase tracking-wider rounded-2xl border border-[#D4AF37]/50 shadow-lg active:scale-98 transition flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      t("Submitting Request...", "Enviando Solicitud...")
                    ) : (
                      <>
                        <span>{t("Submit Quote Request →", "Enviar Solicitud de Cotización →")}</span>
                        <Send className="w-4 h-4 text-[#FFD54F]" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs font-semibold text-slate-500">
                    {t("We'll respond within 24 hours. For urgent needs, call (662) 571-1048.", "Responderemos dentro de 24 horas. Para urgencias, llame al (662) 571-1048.")}
                  </p>
                </form>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ── EMERGENCY CONTACT BOX ─────────────────────────────────────── */}
      <section className="py-12 bg-[#F7F7F7] border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#2E7D32] text-white p-8 sm:p-10 border border-[#D4AF37]/50 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 text-left relative overflow-hidden">
            <div aria-hidden className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-3 relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 text-[#FFD54F] text-xs font-black uppercase tracking-widest border border-white/20">
                <AlertTriangle className="w-4 h-4 text-[#FFD54F] animate-pulse" />
                <span>{t("Rapid Emergency Service", "Servicio de Emergencia Rápido")}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#FFD54F] tracking-tight">
                {t("Emergency Contact: (662) 571-1048", "Contacto de Emergencia: (662) 571-1048")}
              </h3>
              <p className="text-xs sm:text-sm text-slate-100 font-semibold leading-relaxed">
                {t("Available During Business Hours: Monday–Friday: 10:00 AM – 7:00 PM | Saturday: 3:00 PM – 8:00 PM", "Disponible en Horario Comercial: Lunes–Viernes: 10am–7pm | Sábado: 3pm–8pm")}
              </p>

              <div className="pt-2">
                <div className="text-xs font-black uppercase tracking-wider text-[#FFD54F] mb-1.5">
                  {t("What Qualifies as an Emergency?", "¿Qué se Considera una Emergencia?")}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-slate-100">
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#FFD54F]" />{t("Fallen trees blocking driveways or access", "Árboles caídos bloqueando entradas o accesos")}</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#FFD54F]" />{t("Storm damage to structures or roofs", "Daños por tormentas en estructuras o techos")}</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#FFD54F]" />{t("Hazardous limbs threatening power lines", "Ramas peligrosas que amenazan líneas eléctricas")}</div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#FFD54F]" />{t("Urgent land or driveway clearing needs", "Necesidades urgentes de limpieza de terrenos")}</div>
                </div>
              </div>
            </div>

            <div className="relative z-10 shrink-0">
              <a
                href="tel:6625711048"
                className="bg-[#111111] hover:bg-[#222222] text-[#FFD54F] text-xs font-black uppercase tracking-wider px-8 py-4 rounded-full border border-[#D4AF37]/50 shadow-xl transition active:scale-95 flex items-center justify-center gap-2.5 whitespace-nowrap"
              >
                <Phone className="w-4 h-4 fill-current text-[#FFD54F]" />
                <span>{t("Call (662) 571-1048", "Llamar (662) 571-1048")}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA RADIUS (MS, TN, AR) ──────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("Coverage Radius", "Radio de Cobertura")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("Service Area (50-Mile Radius from Horn Lake, MS)", "Área de Servicio (50 Millas desde Horn Lake, MS)")}
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base font-medium">
              {t(
                "Based in Horn Lake, MS, we proudly serve communities across Mississippi, Tennessee, and Arkansas:",
                "Con sede en Horn Lake, MS, servimos con orgullo a comunidades en Mississippi, Tennessee y Arkansas:"
              )}
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-3xl bg-[#F7F7F7] border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-300">
                <MapPin className="w-5 h-5 text-[#2E7D32]" />
                <h3 className="text-base font-black text-[#111111]">Mississippi</h3>
              </div>
              <p className="text-xs text-slate-700 font-semibold leading-relaxed">
                Horn Lake, Southaven, Olive Branch, Hernando, Nesbit, Walls, Tunica, Senatobia, Batesville, Oxford, Lynchburg, Norfolk, Glover, Pleasant Hill, Cormorant, Bridgetown.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#F7F7F7] border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-300">
                <MapPin className="w-5 h-5 text-[#2E7D32]" />
                <h3 className="text-base font-black text-[#111111]">Tennessee</h3>
              </div>
              <p className="text-xs text-slate-700 font-semibold leading-relaxed">
                Memphis, Germantown, Bartlett, Collierville, Arlington, Eads, Millington.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-[#F7F7F7] border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-300">
                <MapPin className="w-5 h-5 text-[#2E7D32]" />
                <h3 className="text-base font-black text-[#111111]">Arkansas</h3>
              </div>
              <p className="text-xs text-slate-700 font-semibold leading-relaxed">
                West Memphis, Marion, and surrounding communities.
              </p>
            </div>
          </div>

          <p className="text-center text-xs font-bold text-slate-500 mt-6">
            {t("Don't see your city? Give us a call at (662) 571-1048—we may still be able to serve you within our 50-mile radius.", "¿No ve su ciudad? Llámenos al (662) 571-1048, es posible que aún podamos servirle.")}
          </p>
        </div>
      </section>

      {/* ── WHY CONTACT US ────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#F7F7F7] border-y border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("The Brown Advantage", "La Ventaja Brown")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("Why Contact Us?", "¿Por Qué Contactarnos?")}
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyContactUsPoints.map((item) => {
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

      {/* ── WHAT TO EXPECT WHEN YOU CONTACT US ────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("Transparent Process", "Proceso Transparente")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("What to Expect When You Contact Us", "Qué Esperar Cuando Nos Contacta")}
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 text-left">
            
            {/* Routine Services Process Card */}
            <div className="p-8 rounded-3xl bg-[#F7F7F7] border border-slate-200 shadow-md">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2E7D32]/10 text-[#2E7D32] text-xs font-black uppercase tracking-wider mb-4">
                <Calendar className="w-4 h-4" />
                <span>{t("For Routine Services (Lawn, Landscaping, Cleaning)", "Para Servicios Rutinarios (Césped, Jardinería, Limpieza)")}</span>
              </div>
              <h3 className="text-xl font-black text-[#111111] mb-4">
                {t("Step-by-Step Routine Workflow", "Flujo de Trabajo Rutinario Paso a Paso")}
              </h3>
              <ul className="space-y-3.5">
                {[
                  t("We'll discuss your needs, property layout, and service preferences.", "Discutiremos sus necesidades, la distribución de su propiedad y sus preferencias."),
                  t("We'll schedule a convenient time for an on-site assessment (if needed).", "Programaremos una hora conveniente para una evaluación en el lugar."),
                  t("You'll receive an upfront, itemized quote with no hidden fees.", "Recibirá una cotización desglosada y por adelantado sin cargos ocultos."),
                  t("We schedule your service at a time that works best for your routine.", "Programamos su servicio en el horario que mejor le convenga."),
                  t("Our team arrives on time, completes the job professionally, and follows up.", "Nuestro equipo llega a tiempo, realiza el trabajo y hace un seguimiento."),
                ].map((step, idx) => (
                  <li key={step} className="flex items-start gap-3 text-xs sm:text-sm font-bold text-slate-800">
                    <span className="w-6 h-6 rounded-full bg-[#2E7D32] text-[#FFD54F] flex items-center justify-center text-xs font-black shrink-0 mt-0.5">{idx + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Emergency Services Process Card */}
            <div className="p-8 rounded-3xl bg-[#F7F7F7] border border-slate-200 shadow-md">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-900 text-xs font-black uppercase tracking-wider mb-4 border border-amber-500/30">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>{t("For Emergency Services (Storm Damage, Fallen Trees)", "Para Emergencias (Tormentas, Árboles Caídos)")}</span>
              </div>
              <h3 className="text-xl font-black text-[#111111] mb-4">
                {t("Rapid Emergency Protocol", "Protocolo de Emergencia Rápido")}
              </h3>
              <ul className="space-y-3.5">
                {[
                  t("Call our direct emergency line immediately: (662) 571-1048.", "Llame a nuestra línea directa de emergencia: (662) 571-1048."),
                  t("Describe the immediate situation, address, and hazard level.", "Describa la situación inmediata, la dirección y el nivel de peligro."),
                  t("Our crew is dispatched rapidly during business hours.", "Nuestro equipo se desplaza rápidamente durante el horario comercial."),
                  t("We arrive on-site to secure your property and eliminate safety hazards.", "Llegamos al lugar para asegurar su propiedad y eliminar peligros."),
                  t("We complete thorough debris cleanup, hauling, and final site inspection.", "Realizamos la limpieza completa de escombros, transporte e inspección."),
                ].map((step, idx) => (
                  <li key={step} className="flex items-start gap-3 text-xs sm:text-sm font-bold text-slate-800">
                    <span className="w-6 h-6 rounded-full bg-[#111111] text-[#FFD54F] flex items-center justify-center text-xs font-black shrink-0 mt-0.5">{idx + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── FREQUENTLY ASKED CONTACT QUESTIONS ─────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#F7F7F7] border-y border-slate-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-black uppercase tracking-widest text-[#2E7D32] bg-[#2E7D32]/10 px-3.5 py-1 rounded-full border border-[#2E7D32]/30">
              {t("Helpful Info", "Información Útil")}
            </span>
            <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-black text-[#111111] tracking-tight">
              {t("Frequently Asked Contact Questions", "Preguntas Frecuentes de Contacto")}
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

      {/* ── GET IN TOUCH FINAL CTA BANNER ─────────────────────────────── */}
      <section className="py-16 sm:py-20 bg-[#2E7D32] text-white relative overflow-hidden">
        <div aria-hidden className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div aria-hidden className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#FFD54F]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl font-black text-[#FFD54F] tracking-tight">
            {t("Connect With Us Today", "Conéctese Con Nosotros Hoy")}
          </h2>
          <p className="mt-4 text-slate-100 text-sm sm:text-base font-semibold max-w-2xl mx-auto leading-relaxed">
            {t(
              "We're here to answer your questions, discuss your project, and provide the professional service you deserve. Contact us today, and let us show you why Brown Lawn Care & Cleaning Service is the trusted choice across Horn Lake and beyond.",
              "Estamos aquí para responder sus preguntas y brindarle el servicio profesional que se merece. Contáctenos hoy mismo."
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
              <span>{t("Email royleebrown@ymail.com", "Enviar Correo A royleebrown@ymail.com")}</span>
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
