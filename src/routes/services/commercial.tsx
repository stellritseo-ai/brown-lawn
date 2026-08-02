import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, ChevronRight } from "lucide-react";
import img from "@/assets/service-commercial.jpg";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/services/commercial")({
  head: () => ({
    meta: [
      { title: "Commercial Electrical Services | R&E Electrical Contractor Corp" },
      { name: "description", content: "Professional, licensed commercial electrical installations, office build-outs, tenant improvements, and retail lighting across South Florida." },
      { property: "og:title", content: "Commercial Electrical Services | R&E Electrical" },
      { property: "og:description", content: "Licensed commercial electrical solutions for South Florida businesses." },
    ],
    links: [
      { rel: "canonical", href: "https://www.randeelectrical.com/services/commercial" }
    ],
  }),
  component: CommercialPage,
});

function CommercialPage() {
  const { t } = useLanguage();

  const serviceList = [
    t("Office Build-Outs & Tenant Improvements", "Remodelaciones de Oficinas y Mejoras de Inquilinos"),
    t("Retail Store LED Display & Accent Lighting", "Iluminación de Acento y Pantallas LED para Tiendas Minoristas"),
    t("Commercial Panel Board Upgrades & Installations", "Instalaciones y Actualizaciones de Paneles Comerciales"),
    t("Emergency Exit Lighting & Sign Systems", "Sistemas de Señalización e Iluminación de Salidas de Emergencia"),
    t("Data & Low-Voltage Structured Cabling", "Cableado Estructurado de Datos y Bajo Voltaje"),
    t("Preventative Maintenance & Safety Audits", "Auditorías de Seguridad y Mantenimiento Preventivo"),
    t("Dedicated Circuits for High-Draw Equipment", "Circuitos Dedicados para Equipos de Alto Consumo"),
    t("Commercial Surge Protection Solutions", "Soluciones de Protección de Sobretensión Comercial"),
  ];

  const faqs = [
    {
      q: t("Do you offer services after business hours?", "¿Ofrecen servicios fuera del horario de atención?"),
      a: t("Yes. We understand that daytime disruptions cost money. We regularly schedule commercial work during off-hours, nights, and weekends to keep your business operating smoothly.", "Sí. Entendemos que las interrupciones diurnas cuestan dinero. Programamos regularmente trabajos comerciales fuera de horario, noches y fines de semana para que su negocio siga funcionando sin problemas.")
    },
    {
      q: t("Are you fully insured for large commercial properties?", "¿Están totalmente asegurados para grandes propiedades comerciales?"),
      a: t("Yes. R&E Electrical Contractor Corp maintains $2M in general liability coverage, commercial auto insurance, and worker's compensation, satisfying the requirements of major landlords and corporate guidelines.", "Sí. R&E Electrical Contractor Corp mantiene una cobertura de responsabilidad general de $2M, seguro de automóvil comercial y compensación laboral, satisfaciendo los requisitos de los principales propietarios y pautas corporativas.")
    },
    {
      q: t("Can you help bring our building up to NEC code compliance?", "¿Pueden ayudar a que nuestro edificio cumpla con el código NEC?"),
      a: t("Absolutely. We conduct detailed audits and carry out all required remediations, from emergency egress lighting code issues to panel corrections, to keep you compliant with local fire marshal standards.", "Absolutamente. Realizamos auditorías detalladas y llevamos a cabo todas las remediaciones requeridas, desde problemas del código de iluminación de salida de emergencia hasta correcciones de paneles, para que cumpla con los estándares del mariscal de bomberos local.")
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
        "name": "Commercial Electrical",
        "item": "https://www.randeelectrical.com/services/commercial"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Commercial Electrical Services",
    "serviceType": "Commercial Electrical Services",
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
    "description": "Professional, licensed commercial electrical installations, office build-outs, tenant improvements, and retail lighting across South Florida."
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
        eyebrow={t("Commercial Services", "Servicios Comerciales")}
        title={t("Powering Your Business Operations", "Energizando las Operaciones de su Negocio")}
        subtitle={t("Minimize downtime with our highly reliable, licensed commercial electricians. From office wiring to advanced building automations, we handle it all.", "Minimice el tiempo de inactividad con nuestros electricistas comerciales autorizados y altamente confiables. Desde el cableado de oficinas hasta automatizaciones avanzadas de edificios, lo manejamos todo.")}
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Left Column: Details */}
            <div className="space-y-10">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-secondary">
                  {t("Robust Electrical Solutions for Businesses", "Soluciones Eléctricas Robustas para Empresas")}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  {t("R&E Electrical Contractor Corp works with property managers, general contractors, developers, and small business owners across South Florida to deliver safe, scalable, and code-compliant commercial solutions. Whether you are planning a modern open-office layout, retrofitting a retail store with energy-efficient LED, or installing redundant power solutions, our commercial crew is ready to execute.", "R&E Electrical Contractor Corp trabaja con administradores de propiedades, contratistas generales, desarrolladores y propietarios de pequeñas empresas en todo el sur de Florida para ofrecer soluciones comerciales seguras, escalables y que cumplen con los códigos. Ya sea que esté planeando un diseño moderno de oficina abierta, adaptando una tienda minorista con LED de bajo consumo o instalando soluciones de energía redundante, nuestro equipo comercial está listo para ejecutar.")}
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
                  alt="Commercial electrical installation"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">{t("R&E Electrical Commercial", "R&E Electrical Comercial")}</div>
                  <div className="mt-1 font-display text-xl font-extrabold">{t("Office, Retail, & Building Services", "Servicios de Oficina, Comercio y Edificios")}</div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm">
                <h3 className="font-display text-2xl font-extrabold text-secondary">{t("Ready to get started?", "¿Listo para comenzar?")}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {t("Book a commercial electrical site audit. We will review your plans or systems and issue a transparent quote.", "Reserve una auditoría del sitio eléctrico comercial. Revisaremos sus planos o sistemas y emitiremos una cotización transparente.")}
                </p>

                <div className="mt-6 space-y-3.5">
                  <Button asChild size="lg" className="w-full">
                    <Link to="/contact">{t("Request Proposal", "Solicitar Propuesta")}</Link>
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
