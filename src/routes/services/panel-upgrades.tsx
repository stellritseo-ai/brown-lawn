import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, ChevronRight } from "lucide-react";
import img from "@/assets/service-panel.jpg";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/services/panel-upgrades")({
  head: () => ({
    meta: [
      { title: "Electrical Panel Upgrades | R&E Electrical Contractor Corp" },
      { name: "description", content: "Professional, licensed panel upgrades and replacement services. Increase electrical capacity to 200A or 400A safely in Florida." },
      { property: "og:title", content: "Electrical Panel Upgrades | R&E Electrical" },
      { property: "og:description", content: "Upgrade to a safe, modern electrical panel with R&E Electrical Contractor Corp." },
    ],
    links: [
      { rel: "canonical", href: "https://www.randeelectrical.com/services/panel-upgrades" }
    ],
  }),
  component: PanelUpgradesPage,
});

function PanelUpgradesPage() {
  const { t } = useLanguage();

  const serviceList = [
    t("Labeling & Circuit Mapping Services", "Servicios de Etiquetado y Mapeo de Circuitos"),
  ];

  const faqs = [
    {
      q: t("How much does a panel upgrade cost?", "¿Cuánto cuesta una actualización de panel?"),
      a: t("Costs typically range depending on the home layout, current service lines, and if utility lines need to be moved. R&E Electrical Contractor Corp provides exact, flat-rate quotes on-site so there are never any surprises.", "Los costos suelen variar según el diseño del hogar, las líneas de servicio actuales y si es necesario mover las líneas de la red pública. R&E Electrical Contractor Corp proporciona cotizaciones exactas y de tarifa fija en el sitio para que nunca haya sorpresas.")
    },
    {
      q: t("Why are Federal Pacific and Zinsco panels dangerous?", "¿Por qué son peligrosos los paneles Federal Pacific y Zinsco?"),
      a: t("These legacy panels have documented design flaws where breakers fail to trip during overload conditions. This creates extreme heat and is a major source of electrical fires.", "Estos paneles heredados tienen fallas de diseño documentadas donde los disyuntores no se disparan durante condiciones de sobrecarga. Esto genera un calor extremo y es una fuente importante de incendios eléctricos.")
    },
    {
      q: t("How long does the installation take?", "¿Cuánto tiempo toma la instalación?"),
      a: t("Most panel upgrades are completed in a single day. We coordinate closely with FPL (Florida Power & Light) and the city inspectors to restore power as quickly as possible, usually within 4-6 hours.", "La mayoría de las actualizaciones de paneles se completan en un solo día. Coordinamos estrechamente con FPL (Florida Power & Light) y los inspectores de la ciudad para restablecer la energía lo más rápido posible, generalmente en un plazo de 4 a 6 horas.")
    }
  ];

  return (
    <>
      <PageHeader
        eyebrow={t("Panel Upgrades", "Actualizaciones de Paneles")}
        title={t("Modern Electrical Panels for Safety & Power", "Paneles Eléctricos Modernos para Seguridad y Energía")}
        subtitle={t("Upgrade your panel to support modern appliances, EV chargers, and smart devices. Safe, fast, and fully permitted installations.", "Actualice su panel para admitir electrodomésticos modernos, cargadores EV y dispositivos inteligentes. Instalaciones seguras, rápidas y con todos los permisos.")}
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Left Column: Details */}
            <div className="space-y-10">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-secondary">
                  {t("Future-Proof Your Home's Electrical Capacity", "Prepare la Capacidad Eléctrica de su Hogar para el Futuro")}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  {t("Older houses typically operate on 60-amp or 100-amp electrical services, which fail to meet the demands of modern central AC systems, electric dryers, and EV chargers. Upgrading to a 200-amp or 400-amp service provides the capacity and safety you need. At R&E Electrical Contractor Corp, we manage the entire process, including utility coordination, municipal permitting, and premium safety grounding.", "Las casas más antiguas suelen operar con servicios eléctricos de 60 o 100 amperios, que no logran satisfacer las demandas de los sistemas modernos de aire acondicionado central, secadoras eléctricas y cargadores de vehículos eléctricos. Actualizar a un servicio de 200 o 400 amperios proporciona la capacidad y seguridad que necesita. En R&E Electrical Contractor Corp manejamos todo el proceso, incluyendo la coordinación con la empresa de servicios públicos, los permisos municipales y la conexión a tierra de seguridad premium.")}
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
                  alt="Upgraded electrical panel installation"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">{t("R&E Electrical Power", "Energía R&E Electrical")}</div>
                  <div className="mt-1 font-display text-xl font-extrabold">{t("200A / 400A Breaker Box Upgrades", "Actualizaciones de Cajas de Disyuntores 200A / 400A")}</div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm">
                <h3 className="font-display text-2xl font-extrabold text-secondary">{t("Ready to get started?", "¿Listo para comenzar?")}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {t("Book a free, transparent on-site panel evaluation. We'll check your current load capacity and quote options.", "Reserve una evaluación gratuita y transparente de su panel en el sitio. Verificaremos su capacidad de carga actual y las opciones de cotización.")}
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
