import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, ChevronRight } from "lucide-react";
import img from "@/assets/service-ev.jpg";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/services/ev-charger")({
  head: () => ({
    meta: [
      { title: "EV Charger Installation | R&E Electrical Contractor Corp" },
      { name: "description", content: "Professional, licensed Level 2 home EV charger installations. Certified Tesla, ChargePoint, and generic charger setup in Florida." },
      { property: "og:title", content: "EV Charger Installation | R&E Electrical" },
      { property: "og:description", content: "Get your home or business Level 2 EV charging ready." },
    ],
    links: [
      { rel: "canonical", href: "https://www.randeelectrical.com/services/ev-charger" }
    ],
  }),
  component: EvChargerPage,
});

function EvChargerPage() {
  const { t } = useLanguage();

  const serviceList = [
    t("Tesla Wall Connector Home Installations", "Instalaciones Domésticas de Tesla Wall Connector"),
    t("ChargePoint & JuiceBox Level 2 Setups", "Configuraciones de Nivel 2 de ChargePoint y JuiceBox"),
    t("Dedicated 240V NEMA 14-50 Receptacles", "Receptáculos Dedicados de 240V NEMA 14-50"),
    t("Commercial & Fleet EV Charging Stations", "Estaciones de Carga de EV Comerciales y para Flotas"),
    t("Electrical Panel Capacity Load Calculation", "Cálculo de Carga de Capacidad de Panel Eléctrico"),
    t("Outdoor All-Weather Charger Mounting", "Montaje de Cargador para Todo Clima en Exteriores"),
    t("Dual-Port High-Speed Charging Setups", "Configuraciones de Carga Rápida de Puerto Doble"),
    t("Smart Wi-Fi Charger Setup & Integration", "Configuración e Integración de Cargadores Inteligentes Wi-Fi"),
  ];

  const faqs = [
    {
      q: t("How fast does a Level 2 EV charger power a vehicle?", "¿Qué tan rápido carga un vehículo un cargador de EV Nivel 2?"),
      a: t("A Level 2 charger (240V) typically adds 25 to 45 miles of range per hour, meaning it will fully charge most electric vehicles overnight. In comparison, a standard 120V outlet adds only 3-5 miles per hour.", "Un cargador Nivel 2 (240V) generalmente agrega de 25 a 45 millas de alcance por hora, lo que significa que cargará por completo la mayoría de los vehículos eléctricos durante la noche. En comparación, un tomacorriente estándar de 120V agrega solo 3-5 millas por hora.")
    },
    {
      q: t("Do I need to upgrade my electrical panel to install a charger?", "¿Necesito actualizar mi panel eléctrico para instalar un cargador?"),
      a: t("It depends on your current service capacity (typically 100A or 200A) and existing appliance loads. We carry out detailed load calculations to determine if a subpanel or a full panel upgrade is required.", "Depende de su capacidad de servicio actual (generalmente 100A o 200A) y las cargas de los electrodomésticos existentes. Realizamos cálculos de carga detallados para determinar si se requiere un subpanel o una actualización de panel completa.")
    },
    {
      q: t("Are there tax credits or utility rebates available?", "¿Hay créditos fiscales o reembolsos de servicios públicos disponibles?"),
      a: t("Yes. The federal government offers credits for residential EV infrastructure, and local utilities like FPL occasionally run rebate programs for off-peak EV charging setup.", "Sí. El gobierno federal ofrece créditos para infraestructura de EV residencial, y las empresas de servicios públicos locales como FPL ocasionalmente ejecutan programas de reembolso para la configuración de carga de EV en horas de menor actividad.")
    }
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.randeelectrical.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.randeelectrical.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "EV Charger Installation",
        "item": "https://www.randeelectrical.com/services/ev-charger"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "EV Charger Installation",
    "serviceType": "EV Charger Installation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "R&E Electrical Contractor Corp",
      "telephone": "+17863075933",
      "image": "https://www.randeelectrical.com/assets/logo.png",
      "priceRange": "$$"
    },
    "areaServed": {
      "@type": "State",
      "name": "Florida"
    },
    "description": "Professional, licensed Level 2 home EV charger installations. Certified Tesla, ChargePoint, and generic charger setup in Florida."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <PageHeader
        eyebrow={t("EV Charging", "Carga de EV")}
        title={t("Fast & Secure EV Charger Installations", "Instalaciones Rápidas y Seguras de Cargadores EV")}
        subtitle={t("Wake up to a full charge. We install certified home and commercial Level 2 EV chargers, mapped perfectly to your vehicle's requirements.", "Despiértese con una carga completa. Instalamos cargadores EV Nivel 2 certificados para el hogar y el comercio, adaptados perfectamente a los requisitos de su vehículo.")}
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Left Column: Details */}
            <div className="space-y-10">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-secondary">
                  {t("High-Speed Charging at Your Convenience", "Carga de Alta Velocidad a su Conveniencia")}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  {t("Electric vehicles are the future, and charging at home is the most convenient way to fuel them. R&E Electrical Contractor Corp installs Level 2 charging equipment from all major brands (Tesla, ChargePoint, Wallbox, Emporia, and more). Our certified electricians ensure that your wiring, breakers, and receptacles are sized correctly to prevent overheating and electrical fire risks.", "Los vehículos eléctricos son el futuro, y cargarlos en casa es la forma más conveniente de abastecerlos. R&E Electrical Contractor Corp instala equipos de carga Nivel 2 de todas las marcas principales (Tesla, ChargePoint, Wallbox, Emporia y más). Nuestros electricistas certificados se aseguran de que su cableado, disyuntores y tomacorrientes tengan el tamaño correcto para evitar el sobrecalentamiento y los riesgos de incendio eléctrico.")}
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
                  alt="Installing EV charging station"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">{t("R&E Electrical EV", "R&E Electrical EV")}</div>
                  <div className="mt-1 font-display text-xl font-extrabold">{t("Tesla & Universal Level 2 Chargers", "Cargadores Tesla y Universales Nivel 2")}</div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm">
                <h3 className="font-display text-2xl font-extrabold text-secondary">{t("Ready to get started?", "¿Listo para comenzar?")}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {t("Book an EV charger site review. We'll verify your panel capacity and provide a quote for the install.", "Reserve una revisión del sitio del cargador EV. Verificaremos la capacidad de su panel y proporcionaremos una cotización para la instalación.")}
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
