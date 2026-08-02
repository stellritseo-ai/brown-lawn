import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, ChevronRight } from "lucide-react";
import img from "@/assets/service-commercial.jpg";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/services/security-systems")({
  head: () => ({
    meta: [
      { title: "Security Systems & Low-Voltage Wiring | R&E Electrical Contractor Corp" },
      { name: "description", content: "Professional, licensed security camera wiring, smart doorbells, access control systems, and low-voltage electrical solutions in Florida." },
      { property: "og:title", content: "Security Systems & Low-Voltage | R&E Electrical" },
      { property: "og:description", content: "Expert commercial and residential low-voltage cabling solutions." },
    ],
    links: [
      { rel: "canonical", href: "https://www.randeelectrical.com/services/security-systems" }
    ],
  }),
  component: SecurityPage,
});

function SecurityPage() {
  const { t } = useLanguage();

  const serviceList = [
    t("CCTV Security Camera Low-Voltage Cabling (IP/Coax)", "Cableado de Bajo Voltaje de Cámaras de Seguridad CCTV (IP/Coaxial)"),
    t("Access Control Card Readers & Magnetic Lock Wiring", "Cableado de Lectores de Tarjetas de Control de Acceso y Cerraduras Magnéticas"),
    t("Cat6 & Fiber Optic Network Structure Cabling", "Cableado de Red Estructurada Cat6 y Fibra Óptica"),
    t("Smart Video Doorbells & Intercom Integrations", "Integraciones de Intercomunicadores y Timbres con Video Inteligente"),
    t("Commercial Fire Alarm Control Conduit Systems", "Sistemas de Conductos de Control de Alarma de Incendio Comercial"),
    t("Whole-Home & Office Wi-Fi Access Point Wiring", "Cableado de Puntos de Acceso Wi-Fi para Todo el Hogar y la Oficina"),
    t("Low-Voltage Landscape Lighting Control Systems", "Sistemas de Control de Iluminación de Paisaje de Bajo Voltaje"),
    t("Ceiling Cable Tray & J-Hook Wire Routing Systems", "Sistemas de Enrutamiento de Cables con Ganchos en J y Bandejas de Cables"),
  ];

  const faqs = [
    {
      q: t("Do you supply the cameras and locks?", "¿Suministran las cámaras y cerraduras?"),
      a: t("We can both supply enterprise-grade surveillance equipment or professionally wire and install customer-provided smart locks and cameras (like Ring, Nest, or Ubiquiti).", "Podemos suministrar equipos de vigilancia de nivel empresarial o cablear e instalar profesionalmente cerraduras y cámaras inteligentes proporcionadas por el cliente (como Ring, Nest o Ubiquiti).")
    },
    {
      q: t("Why is professional low-voltage wiring better than wireless?", "¿Por qué es mejor el cableado de bajo voltaje profesional que el inalámbrico?"),
      a: t("Wireless systems suffer from interference, batteries that require regular recharging, and signal loss through walls. Hardwired systems (using PoE or dedicated power lines) are completely reliable and require almost zero maintenance.", "Los sistemas inalámbricos sufren de interferencias, baterías que requieren recarga regular y pérdida de señal a través de las paredes. Los sistemas cableados (que usan PoE o líneas de energía dedicadas) son completamente confiables y requieren casi cero mantenimiento.")
    },
    {
      q: t("Is low-voltage wiring subject to permitting?", "¿El cableado de bajo voltaje está sujeto a permisos?"),
      a: t("Yes, in many South Florida municipalities, low-voltage installations (especially for commercial properties) require specific permits and inspections to verify proper fire-stopping in walls and ceilings.", "Sí, en muchos municipios del sur de Florida, las instalaciones de bajo voltaje (especialmente para propiedades comerciales) requieren permisos y inspecciones específicos para verificar el cortafuegos adecuado en paredes y techos.")
    }
  ];

  return (
    <>
      <PageHeader
        eyebrow={t("Security & Low Voltage", "Seguridad y Bajo Voltaje")}
        title={t("Securing Your Property with Reliable Wiring", "Protegiendo su Propiedad con Cableado Confiable")}
        subtitle={t("Protect your family or assets. We deploy enterprise-grade security cabling, network structures, and access control systems with professional, clean routing.", "Proteja a su familia o activos. Desplegamos cableado de seguridad de nivel empresarial, estructuras de red y sistemas de control de acceso con un enrutamiento profesional y limpio.")}
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Left Column: Details */}
            <div className="space-y-10">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-secondary">
                  {t("High-Performance Cabling for Security & Networks", "Cableado de Alto Rendimiento para Seguridad y Redes")}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  {t("Modern security and home/business automation rely on steady, hardwired connections. R&E Electrical Contractor Corp's low-voltage technicians run structured cabling (Cat6, PoE, and alarm lines) that ensures peak performance for your smart cameras, security sensors, network access points, and access panels. We run cables neatly behind drywall, in attics, or through conduits, and install proper firewall fire-stopping.", "La seguridad moderna y la automatización del hogar/negocio dependen de conexiones cableadas estables. Los técnicos de bajo voltaje de R&E Electrical Contractor Corp instalan cableado estructurado (Cat6, PoE y líneas de alarma) que garantiza el máximo rendimiento de sus cámaras inteligentes, sensores de seguridad, puntos de acceso a la red y paneles de acceso. Pasamos los cables ordenadamente detrás del panel de yeso, en áticos o a través de conductos, e instalamos los cortafuegos adecuados.")}
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="font-display text-xl font-extrabold text-secondary">{t("Our Specialties", "Nuestras Especialidades")}</h3>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {serviceList.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-secondary">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FAQ Section */}
              <div className="border-t border-border pt-8">
                <h3 className="font-display text-xl font-extrabold text-secondary mb-6">{t("Frequently Asked Questions", "Preguntas Frecuentes")}</h3>
                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <details key={idx} className="group border border-border rounded-2xl bg-muted/20 p-5 [&_summary::-webkit-details-marker]:hidden">
                      <summary className="flex cursor-pointer items-center justify-between gap-1.5 font-display text-base font-bold text-secondary">
                        {faq.q}
                        <ChevronRight className="h-4 w-4 shrink-0 transition-transform group-open:rotate-90 text-primary" />
                      </summary>
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed border-t border-border/60 pt-3">
                        {faq.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: CTA Sidebar */}
            <div className="space-y-8">
              <div className="relative overflow-hidden rounded-3xl border border-border">
                <img
                  src={img}
                  alt="Security cameras and wiring installation"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">{t("R&E Low-Voltage", "Bajo Voltaje R&E")}</div>
                  <div className="mt-1 font-display text-xl font-extrabold">{t("Cabling, Security, & Ethernet", "Cableado, Seguridad y Ethernet")}</div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm">
                <h3 className="font-display text-2xl font-extrabold text-secondary">{t("Ready to get started?", "¿Listo para comenzar?")}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {t("Book a security layout review or ethernet cabling diagnostic. We'll map your requirements and quote.", "Reserve una revisión del diseño de seguridad o un diagnóstico de cableado de Ethernet. Mapearemos sus requisitos y realizaremos una cotización.")}
                </p>

                <div className="mt-6 space-y-3.5">
                  <Button asChild size="lg" className="w-full">
                    <Link to="/contact">{t("Request Estimate", "Solicitar Presupuesto")}</Link>
                  </Button>
                  <a
                    href="tel:6625711048"
                    className="flex items-center justify-center gap-2 rounded-full border border-border bg-white px-4 py-3 text-sm font-bold text-secondary hover:border-primary hover:text-primary transition"
                  >
                    <Phone className="h-4 w-4" /> (662) 571-1048
                  </a>
                </div>

                <div className="mt-6 space-y-2 text-xs font-semibold text-secondary/80">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-primary" /> {t("Fully Licensed & Insured", "Totalmente Autorizado y Asegurado")}
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary" /> {t("Estimates Within 24 Hours", "Presupuestos en 24 Horas")}
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" /> {t("100% Satisfaction Guaranteed", "Garantía de Satisfacción del 100%")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Process />
      <EmergencyCTA />
    </>
  );
}
