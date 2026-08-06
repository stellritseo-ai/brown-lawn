import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";
import { useLanguage } from "@/hooks/useLanguage";
import { addWebEmail } from "@/lib/leads-store";
import { submitToWeb3Forms } from "@/lib/web3forms";

export function Estimate() {
  const { t } = useLanguage();
  const [submitting, setSubmitting] = useState(false);
  const [service, setService] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    
    const form = e.currentTarget;
    const name = (form.querySelector("#name") as HTMLInputElement)?.value || "";
    const phone = (form.querySelector("#phone") as HTMLInputElement)?.value || "";
    const email = (form.querySelector("#email") as HTMLInputElement)?.value || "";
    const msg = (form.querySelector("#msg") as HTMLTextAreaElement)?.value || "";

    try {
      await addWebEmail({
        name,
        phone,
        email,
        service: service || "General Inquiry",
        message: msg,
        source: "Free Estimate Page"
      });

      const success = await submitToWeb3Forms({
        name,
        phone,
        email,
        "Service Needed": service || "General Inquiry",
        Message: msg,
        to_email: "eva@stellrit.com",
      }, "Free Estimate Page");

      if (success) {
        toast.success(t("We'll respond within 24 hours. For urgent needs, call (662) 571-1048.", "Responderemos dentro de las 24 horas. Para urgencias, llame al (662) 571-1048."));
        form.reset();
        setService("");
      } else {
        toast.error(t("Submission failed. Please try again.", "Error en el envío. Por favor, inténtelo de nuevo."));
      }
    } catch (err) {
      toast.error(t("Connection error. Please try again.", "Error de conexión. Por favor, inténtelo de nuevo."));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#2E7D32]/10 border border-[#2E7D32]/30 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#2E7D32]">{t("Free Quote", "Cotización Gratis")}</span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl font-extrabold leading-tight text-[#111111]">
            {t("Get Your Free, No-Obligation Quote.", "Obtenga Su Cotización Gratuita Sin Compromiso.")}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            {t("Tell us what you need — lawn care, landscaping, cleaning, tree removal, or gravel work — and we'll provide an honest, competitive quote within 24 hours.", "Díganos lo que necesita y le brindaremos una cotización honesta y competitiva en 24 horas.")}
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <form onSubmit={onSubmit} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label={t("Full Name", "Nombre Completo")} id="name"><Input id="name" required placeholder={t("Roy Brown", "Roy Brown")} /></Field>
              <Field label={t("Phone", "Teléfono")} id="phone"><Input id="phone" type="tel" required placeholder="(662) 571-1048" /></Field>
              <div className="sm:col-span-2">
                <Field label={t("Email", "Correo Electrónico")} id="email"><Input id="email" type="email" required placeholder="yourname@example.com" /></Field>
              </div>
              <div className="sm:col-span-2">
                <Field label={t("Service Needed", "Servicio Requerido")} id="service">
                  <Select value={service} onValueChange={setService}>
                    <SelectTrigger id="service" className="h-11"><SelectValue placeholder={t("Select a service...", "Seleccione un servicio...")} /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="lawn-mowing">{t("Lawn Mowing / Maintenance", "Cortado de Césped / Mantenimiento")}</SelectItem>
                      <SelectItem value="landscaping">{t("Landscaping & Design", "Paisajismo y Diseño")}</SelectItem>
                      <SelectItem value="tree-removal">{t("Tree / Brush Removal", "Remoción de Árboles y Maleza")}</SelectItem>
                      <SelectItem value="gravel-work">{t("Gravel Driveway Work", "Trabajos de Grava")}</SelectItem>
                      <SelectItem value="office-cleaning">{t("Office Cleaning", "Limpieza de Oficinas")}</SelectItem>
                      <SelectItem value="residential-cleaning">{t("Residential Cleaning", "Limpieza Residencial")}</SelectItem>
                      <SelectItem value="emergency">{t("Emergency Service", "Servicio de Emergencia")}</SelectItem>
                    </SelectContent>
                  </Select>
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field label={t("Job Description", "Descripción del Trabajo")} id="msg">
                  <Textarea id="msg" rows={5} placeholder={t("Tell us about your property needs...", "Cuéntenos sobre sus necesidades...")} />
                </Field>
              </div>
            </div>
            <Button type="submit" variant="hero" size="xl" disabled={submitting} className="mt-6 w-full bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] text-[#FFD54F] border border-[#D4AF37]/40 shadow-md">
              {submitting ? t("Submitting...", "Enviando...") : <>{t("Submit Request →", "Enviar Solicitud →")} <Send className="h-4 w-4 text-[#FFD54F]" /></>}
            </Button>
          </form>

          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-sm h-72">
              <iframe
                title="Brown Lawn Care Location"
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104595.67493214!2d-90.0463!3d34.9545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87d581fb620023a9%3A0xd6e54522a76f2f27!2sHorn%20Lake%2C%20MS!5e0!3m2!1sen!2s!4v1782259191322!5m2!1sen!2s"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <InfoCard icon={Phone} title={t("Call Us", "Llámenos")} lines={["(662) 571-1048", t("Emergency Service Available", "Servicio de Emergencia Disponible")]} />
              <InfoCard icon={Mail} title={t("Email Us", "Correo")} lines={["royleebrown@ymail.com"]} />
              <InfoCard icon={MapPin} title={t("Office Address", "Dirección de Oficina")} lines={["Alden Lake Dr W", "Horn Lake, MS"]} />
              <InfoCard icon={Clock} title={t("Business Hours", "Horarios")} lines={[t("Mon–Fri: 10am–7pm", "Lun–Vie: 10am–7pm"), t("Sat: 3pm–8pm | Sun: Closed", "Sáb: 3pm–8pm | Dom: Cerrado")]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div>
      <Label htmlFor={id} className="text-xs font-bold uppercase tracking-wider text-slate-700">{label}</Label>
      <div className="mt-1.5">{children}</div>
    </div>
  );
}

function InfoCard({ icon: Icon, title, lines }: { icon: React.ElementType; title: string; lines: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs text-left">
      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#2E7D32]/10 text-[#2E7D32]">
        <Icon className="h-5 w-5" />
      </div>
      <h4 className="mt-3 font-display text-base font-extrabold text-[#111111]">{title}</h4>
      {lines.map((l) => (
        <p key={l} className="text-xs font-semibold text-slate-600 mt-0.5">{l}</p>
      ))}
    </div>
  );
}
