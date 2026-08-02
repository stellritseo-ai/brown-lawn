import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, ChevronRight } from "lucide-react";
import img from "@/assets/service-residential.jpg";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/services/residential")({
  head: () => ({
    meta: [
      { title: "Residential Electrical Services | R&E Electrical Contractor Corp" },
      { name: "description", content: "Professional, licensed home electrical repairs, installations, smart home setups, and safety inspections across South Florida." },
      { property: "og:title", content: "Residential Electrical Services | R&E Electrical" },
      { property: "og:description", content: "Safe, expert residential electrical solutions." },
    ],
    links: [
      { rel: "canonical", href: "https://www.randeelectrical.com/services/residential" }
    ],
  }),
  component: ResidentialPage,
});

function ResidentialPage() {
  const { t } = useLanguage();

  const serviceList = [
    t("Remodeling & Kitchen/Bath Additions", "Remodelación y Adiciones en Cocinas/Baños"),
  ];

  const faqs = [
    {
      q: t("How do I know if my home needs a rewire?", "¿Cómo sé si mi casa necesita un re-cableado?"),
      a: t("Signs include frequently tripping breakers, flickering lights, burning odors near outlets, two-prong ungrounded outlets, or if your home is over 40 years old with older wiring styles like knob & tube or aluminum.", "Las señales incluyen disyuntores que se disparan con frecuencia, luces parpadeantes, olores a quemado cerca de los tomacorrientes, tomacorrientes de dos clavijas sin conexión a tierra, o si su casa tiene más de 40 años con estilos de cableado más antiguos como tubo y perilla o aluminio.")
    },
    {
      q: t("Are all R&E Electrical Contractor Corp technicians licensed?", "¿Están todos los técnicos de R&E Electrical Contractor Corp autorizados?"),
      a: t("Yes. Every technician sent to your home is fully background-checked, drug-tested, and licensed in accordance with Florida state requirements.", "Sí. Cada técnico enviado a su hogar es sometido a una verificación completa de antecedentes, pruebas de detección de drogas y cuenta con licencia de acuerdo con los requisitos del estado de Florida.")
    },
    {
      q: t("Do you offer emergency residential dispatch?", "¿Ofrecen despacho residencial de emergencia?"),
      a: t("Absolutely. We have emergency dispatch technicians on-call 24/7 for hazards like sparks, smoke, or complete power outages.", "Absolutamente. Tenemos técnicos de despacho de emergencia de guardia las 24 horas, los 7 días de la semana, para peligros como chispas, humo o cortes de energía completos.")
    }
  ];

  return (
    <>
      <PageHeader
        eyebrow={t("Residential Services", "Servicios Residenciales")}
        title={t("Safe & Modern Power for Your Home", "Energía Segura y Moderna para su Hogar")}
        subtitle={t("From simple receptacle replacements to complete home rewiring, our master electricians treat your home with the care it deserves.", "Desde simples reemplazos de receptáculos hasta el recableado completo del hogar, nuestros maestros electricistas tratan su hogar con el cuidado que merece.")}
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Left Column: Details */}
            <div className="space-y-10">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-secondary">
                  {t("Complete Home Electrical Care", "Cuidado Eléctrico Integral del Hogar")}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  {t("Your home's electrical system is its heartbeat. At R&E Electrical Contractor Corp, we design and install systems that prioritize your family's safety and comfort, while introducing modern efficiency. Whether you are upgrading to smart lighting, adding dedicated vehicle charging circuits, or securing your home with backup power, we do the job right the first time.", "El sistema eléctrico de su hogar es su latido. En R&E Electrical Contractor Corp, diseñamos e instalamos sistemas que priorizan la seguridad y el confort de su familia, al tiempo que introducen una eficiencia moderna. Ya sea que esté actualizando a iluminación inteligente, agregando circuitos de carga de vehículos dedicados o asegurando su hogar con energía de respaldo, hacemos el trabajo bien a la primera.")}
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
                  alt="Residential electrical work"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">{t("Florida Electricians", "Electricistas de Florida")}</div>
                  <div className="mt-1 font-display text-xl font-extrabold">{t("Professional Home Installations", "Instalaciones Profesionales del Hogar")}</div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm">
                <h3 className="font-display text-2xl font-extrabold text-secondary">{t("Ready to get started?", "¿Listo para comenzar?")}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {t("Book a transparent, fixed-price home electrical estimate. We charge by the job, not the hour.", "Reserve un presupuesto eléctrico residencial transparente y de precio fijo. Cobramos por trabajo, no por hora.")}
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
