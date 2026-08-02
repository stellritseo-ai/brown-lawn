import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Process } from "@/components/site/Process";
import { EmergencyCTA } from "@/components/site/EmergencyCTA";
import { CheckCircle2, Phone, ShieldCheck, Clock, Award, ChevronRight } from "lucide-react";
import img from "@/assets/service-cctv.png";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

export const Route = createFileRoute("/services/cctv-camera")({
  head: () => ({
    meta: [
      { title: "CCTV Camera Installation & Repair Miami | R&E Electrical Contractor Corp" },
      { name: "description", content: "Professional, licensed CCTV security camera installation, DVR/NVR setups, remote phone access configuration, and system repair services in Miami & South Florida." },
      { property: "og:title", content: "CCTV Camera Installation & Repair | R&E Electrical" },
      { property: "og:description", content: "Expert commercial and residential surveillance cabling, positioning, and NVR setups in South Florida." },
    ],
    links: [
      { rel: "canonical", href: "https://www.randeelectrical.com/services/cctv-camera" }
    ],
  }),
  component: CCTVCameraPage,
});

function CCTVCameraPage() {
  const { t } = useLanguage();

  const serviceList = [
    t("High-Definition IP Camera Setup (4K/PoE)", "Configuración de Cámaras IP de Alta Definición (4K/PoE)"),
    t("NVR & DVR System Configuration & Storage Upgrades", "Configuración de Sistemas NVR y DVR y Actualizaciones de Almacenamiento"),
    t("Coaxial/BNC to IP Camera System Retrofitting", "Adaptación de Sistemas de Cámaras Coaxiales/BNC a IP"),
    t("Smartphone Remote Monitoring Setup & Access Control", "Configuración de Monitoreo Remoto en Teléfono y Control de Acceso"),
    t("PTZ (Pan-Tilt-Zoom) Camera Installation & Tuning", "Instalación y Ajuste de Cámaras PTZ (Giro, Inclinación y Zoom)"),
    t("Night Vision, Infrared & Thermal Sensor Positioning", "Posicionamiento de Sensores Térmicos, Infrarrojos y de Visión Nocturna"),
    t("Troubleshooting, Video Signal Repairs & Cable Splicing", "Resolución de Problemas, Reparaciones de Señal de Video y Empalme de Cables"),
    t("Commercial Surveillance Ordinance Compliance Layouts", "Diseños de Cumplimiento de Ordenanzas de Vigilancia Comercial"),
  ];

  const faqs = [
    {
      q: t("Do you install wired or wireless cameras?", "¿Instalan cámaras con cable o inalámbricas?"),
      a: t("We specialize in hardwired PoE (Power over Ethernet) IP systems and HD BNC coaxial systems. Hardwired cameras provide maximum reliability, high bandwidth for 4K video feeds, and don't suffer from Wi-Fi interference or battery failures.", "Nos especializamos en sistemas IP PoE (Power over Ethernet) cableados y sistemas coaxiales HD BNC. Las cámaras cableadas brindan la máxima confiabilidad, un gran ancho de banda para transmisiones de video 4K y no sufren interferencias de Wi-Fi o fallas de batería.")
    },
    {
      q: t("Can I view my security cameras on my phone?", "¿Puedo ver mis cámaras de seguridad en mi teléfono?"),
      a: t("Yes. We configure your NVR/DVR storage unit and set up secure remote access client applications on your iOS or Android devices so you can monitor live feeds, view playback history, and configure instant alert triggers from anywhere.", "Sí. Configuramos su unidad de almacenamiento NVR/DVR y establecemos aplicaciones de cliente de acceso remoto seguro en sus dispositivos iOS o Android para que pueda monitorear transmisiones en vivo, ver el historial de reproducción y configurar alertas instantáneas desde cualquier lugar.")
    },
    {
      q: t("How long are video recordings typically saved?", "¿Cuánto tiempo se guardan normalmente las grabaciones de video?"),
      a: t("Recording duration depends on your system's hard drive storage capacity and settings. For most residential and commercial installations, we size the system for continuous 15-30 days of loop recording, or setup motion-activation to save months of high-quality footage.", "La duración de la grabación depende de la capacidad de almacenamiento del disco duro de su sistema y la configuración. Para la mayoría de las instalaciones residenciales y comerciales, dimensionamos el sistema para 15-30 días continuos de grabación en bucle, o configuramos la activación por movimiento para almacenar meses de metraje de alta calidad.")
    }
  ];

  return (
    <>
      <PageHeader
        eyebrow={t("CCTV Camera Services", "Servicios de Cámaras CCTV")}
        title={t("HD Surveillance & Camera Repairs", "Vigilancia HD y Reparaciones de Cámaras")}
        subtitle={t("Protect what matters most. We install premium security camera setups, network video recorders (NVR), and remote access apps for seamless property monitoring.", "Proteja lo que más importa. Instalamos sistemas premium de cámaras de seguridad, grabadores de video de red (NVR) y aplicaciones de acceso remoto para un monitoreo perfecto.")}
      />

      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            {/* Left Column: Details */}
            <div className="space-y-10">
              <div>
                <h2 className="font-display text-3xl font-extrabold text-secondary">
                  {t("Enterprise-Grade CCTV Installation & Signal Repair", "Instalación de CCTV de Nivel Empresarial y Reparación de Señal")}
                </h2>
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  {t("Whether you need a new surveillance grid for a commercial warehouse or want to replace/repair broken cameras on your home system, R&E Electrical Contractor Corp provides professional support. We lay structured low-voltage cables, install weatherproof outdoor housings, set up NVR storage servers, and ensure your system complies with local municipal codes. If you have video drops or fuzzy signals, our team diagnoses the wiring and fixes it fast.", "Ya sea que necesite una nueva red de vigilancia para un almacén comercial o desee reemplazar/reparar cámaras rotas en su sistema doméstico, R&E Electrical Contractor Corp le ofrece soporte profesional. Instalamos cables estructurados de bajo voltaje, carcasas para exteriores resistentes a la intemperie, servidores de almacenamiento NVR y nos aseguramos de que su sistema cumpla con los códigos municipales locales. Si tiene caídas de video o señales borrosas, nuestro equipo diagnostica el cableado y lo soluciona rápidamente.")}
                </p>
              </div>

              <div className="border-t border-border pt-8">
                <h3 className="font-display text-xl font-extrabold text-secondary">{t("Our CCTV Specialties", "Nuestras Especialidades en CCTV")}</h3>
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
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">{t("R&E Security", "Seguridad R&E")}</div>
                  <div className="mt-1 font-display text-xl font-extrabold">{t("CCTV Camera Install & Diagnostics", "Instalación y Diagnóstico de CCTV")}</div>
                </div>
              </div>

              {/* Booking Card */}
              <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8 shadow-sm">
                <h3 className="font-display text-2xl font-extrabold text-secondary">{t("Request a Layout Review", "Solicite una Revisión de Diseño")}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  {t("Book a professional surveillance consultation. We'll inspect your property, suggest blind-spot coverage layouts, and provide an itemized quote.", "Reserve una consulta de vigilancia profesional. Inspeccionaremos su propiedad, sugeriremos diseños de cobertura de puntos ciegos y le proporcionaremos un presupuesto detallado.")}
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
