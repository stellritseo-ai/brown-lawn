import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, ChevronRight } from "lucide-react";
import img from "@/assets/service-residential.jpg";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/services/wiring-rewiring")({
  head: () => ({
    meta: [
      { title: "Electrical Wiring & Rewiring | R&E Electrical Contractor Corp" },
      { name: "description", content: "Professional, licensed home & commercial electrical wiring services. Knob & tube removal, aluminum wire mitigation, code corrections in Florida." },
      { property: "og:title", content: "Wiring & Rewiring Services | R&E Electrical" },
      { property: "og:description", content: "Safe, expert electrical wiring solutions for South Florida." },
    ],
    links: [
      { rel: "canonical", href: "https://www.randeelectrical.com/services/wiring-rewiring" }
    ],
  }),
  component: WiringPage,
});

function WiringPage() {
  const { t } = useLanguage();

  const serviceList = [
    t("Whole-House Copper Structural Rewiring", "Recableado Estructural de Cobre para Todo el Hogar"),
    t("Aluminum Wiring Remediation & AlumiConn Mitigations", "Remediación de Cableado de Aluminio y Mitigaciones AlumiConn"),
    t("Outdated Knob & Tube Wiring Safety Removal", "Eliminación Segura de Cableado Antiguo de Perilla y Tubo"),
    t("New Appliance Dedicated 120V/240V Circuit Runs", "Tendido de Circuitos Dedicados de 120V/240V para Nuevos Electrodomésticos"),
    t("GFCI & AFCI Safety Code Corrections", "Correcciones del Código de Seguridad GFCI y AFCI"),
    t("Kitchen, Bath & Home Addition Wiring Setups", "Configuraciones de Cableado para Adiciones de Cocina, Baño y Hogar"),
    t("Faulty Structural Wiring Troubleshooting & Repairs", "Resolución de Problemas y Reparaciones de Cableado Estructural Defectuoso"),
    t("Hot Tub, Pool Pump & RV Receptacle Cabling", "Cableado de Jacuzzis, Bombas de Piscina y Receptáculos para RV"),
  ];

  const faqs = [
    {
      q: t("Is aluminum wiring safe?", "¿Es seguro el cableado de aluminio?"),
      a: t("Aluminum wiring (common in homes built between 1965 and 1973) poses a fire risk at connection points due to thermal expansion. We perform complete safety remediations using COPALUM crimps or AlumiConn connectors to make your wiring safe without a full rewire.", "El cableado de aluminio (común en casas construidas entre 1965 y 1973) representa un riesgo de incendio en los puntos de conexión debido a la expansión térmica. Realizamos remediaciones de seguridad completas utilizando conectores AlumiConn o crimpados COPALUM para que su cableado sea seguro sin necesidad de un recableado completo.")
    },
    {
      q: t("How long does a complete home rewire take?", "¿Cuánto tiempo toma un re-cableado completo del hogar?"),
      a: t("A full rewire typically takes between 5 to 10 working days, depending on the size of the home and access to walls (attic or crawlspace). We minimize sheetrock damage by carefully running cables behind walls.", "Un recableado completo suele tardar entre 5 y 10 días laborables, dependiendo del tamaño de la casa y del acceso a las paredes (ático o espacio de acceso). Minimizamos los daños en los paneles de yeso pasando los cables con cuidado detrás de las paredes.")
    },
    {
      q: t("Will I need to vacate my home during a rewire?", "¿Necesitaré desocupar mi casa durante el re-cableado?"),
      a: t("Not necessarily. We work section-by-section to ensure you have power and access in major parts of the home during evenings. However, it can be noisy, so some homeowners choose to be away during daytime hours.", "No necesariamente. Trabajamos sección por sección para garantizar que tenga energía y acceso en las partes principales de la casa durante las noches. Sin embargo, puede ser ruidoso, por lo que algunos propietarios eligen estar fuera durante el día.")
    }
  ];

  return (
    <>
      <PageHeader
        eyebrow={t("Wiring & Rewiring", "Cableado y Re-cableado")}
        title={t("Safe & Reliable Structural Wiring", "Cableado Estructural Seguro y Confiable")}
        subtitle={t("Protect your property from outdated, degraded, or non-compliant wiring. Our licensed master electricians deliver code-perfect wiring solutions.", "Proteja su propiedad de cableados obsoletos, degradados o que no cumplen con las normas. Nuestros electricistas maestros autorizados ofrecen soluciones de cableado que cumplen perfectamente con los códigos.")}
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Left Column: Details */}
            <div className="space-y-10">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-secondary">
                  {t("Ensure Your Infrastructure is Solid & Safe", "Asegure que su Infraestructura sea Sólida y Segura")}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  {t("Electrical wiring isn't meant to last forever. Outdated insulation, structural shifts, rodent damage, or poor initial installations can lead to degradation, creating serious fire hazards. R&E Electrical Contractor Corp's master electricians conduct thorough diagnostic checks on your circuitry, resolve code violations, and install modern, code-compliant copper wiring to keep your property running safely.", "El cableado eléctrico no está diseñado para durar para siempre. El aislamiento obsoleto, los cambios estructurales, los daños por roedores o las malas instalaciones iniciales pueden provocar degradación, creando graves riesgos de incendio. Los maestros electricistas de R&E Electrical Contractor Corp realizan diagnósticos exhaustivos en sus circuitos, resuelven violaciones del código e instalan cableado de cobre moderno que cumple con las normas para que su propiedad funcione de manera segura.")}
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
                  alt="Installing electrical wiring"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">{t("R&E Electrical Wiring", "Cableado R&E Electrical")}</div>
                  <div className="mt-1 font-display text-xl font-extrabold">{t("Complete Rewires & Code Upgrades", "Re-cableados Completos y Actualizaciones de Códigos")}</div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm">
                <h3 className="font-display text-2xl font-extrabold text-secondary">{t("Ready to get started?", "¿Listo para comenzar?")}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {t("Book a detailed wiring diagnostic or remodeling review. We'll map your system and provide a transparent quote.", "Reserve un diagnóstico de cableado detallado o una revisión de remodelación. Mapearemos su sistema y proporcionaremos una cotización transparente.")}
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
