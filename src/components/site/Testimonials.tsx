import { useRef } from "react";
import { Star, Quote, BadgeCheck } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Review {
  text: string;
  name: string;
  role: string;
  rating: number;
  initials: string;
  avatarColor: string;
  service?: string;
  replyText?: string;
}

const avatarColors = [
  "#2E7D32", "#1B5E20", "#33691E", "#558B2F", "#1565C0", "#6D4C41", "#4527A0",
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "w-3.5 h-3.5",
            i < count ? "fill-[#FFD54F] text-[#FFD54F]" : "fill-slate-200 text-slate-200"
          )}
        />
      ))}
    </div>
  );
}

function TestimonialCard({ review, isGrid = false }: { review: Review; isGrid?: boolean }) {
  return (
    <div className={cn(
      "relative bg-white border border-slate-100 rounded-2xl p-5 flex flex-col gap-3 group transition-all duration-300 text-left",
      "shadow-[0_2px_16px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_32px_rgba(46,125,50,0.14)] hover:border-[#2E7D32]/35",
      isGrid ? "w-full" : "flex-shrink-0 w-[340px] sm:w-[370px] mx-3"
    )}>

      {/* Top row: rating + verified badge */}
      <div className="flex items-center justify-between">
        <StarRating count={review.rating} />
        <span className="inline-flex items-center gap-1 text-[9px] font-black uppercase tracking-wider text-[#2E7D32] bg-[#2E7D32]/8 border border-[#2E7D32]/20 px-2 py-0.5 rounded-full">
          <BadgeCheck className="w-3 h-3" />
          Verified
        </span>
      </div>

      {/* Quote icon + text */}
      <div className="relative">
        <Quote className="absolute -top-1 -left-0.5 w-6 h-6 text-[#2E7D32]/15 fill-[#2E7D32]/15" />
        <p className="text-slate-700 text-[13.5px] leading-relaxed font-medium pl-5 flex-1">
          {review.text}
        </p>
      </div>

      {/* Service tag */}
      {review.service && (
        <span className="self-start inline-flex items-center bg-[#2E7D32]/8 border border-[#2E7D32]/20 text-[#2E7D32] text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full">
          {review.service}
        </span>
      )}

      {/* Business reply */}
      {review.replyText && (
        <div className="mt-1 bg-[#2E7D32]/8 border border-[#2E7D32]/20 p-3 rounded-xl text-xs">
          <p className="font-extrabold text-[#2E7D32] uppercase tracking-wider text-[9px] mb-1">
            Brown Lawn Care Response
          </p>
          <p className="text-slate-700 font-medium leading-relaxed">"{review.replyText}"</p>
        </div>
      )}

      {/* Author */}
      <div className="flex items-center gap-3 pt-3 border-t border-slate-100 mt-auto">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-[#FFD54F] text-xs font-black flex-shrink-0 shadow-sm"
          style={{ backgroundColor: review.avatarColor }}
        >
          {review.initials}
        </div>
        <div>
          <p className="text-slate-900 font-extrabold text-sm leading-tight">{review.name}</p>
          <p className="text-slate-400 text-[11px] font-semibold mt-0.5">{review.role}</p>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  direction = "left",
  bgColor = "#F8FAFC",
}: {
  items: Review[];
  direction?: "left" | "right";
  bgColor?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const duplicated = [...items, ...items, ...items];
  const animClass = direction === "left" ? "marquee-track-left" : "marquee-track-right";

  return (
    <div
      className="overflow-hidden relative"
      onMouseEnter={() => {
        if (trackRef.current) trackRef.current.style.animationPlayState = "paused";
      }}
      onMouseLeave={() => {
        if (trackRef.current) trackRef.current.style.animationPlayState = "running";
      }}
    >
      {/* Fade edges */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-28 z-10"
        style={{ background: `linear-gradient(to right, ${bgColor}, transparent)` }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-28 z-10"
        style={{ background: `linear-gradient(to left, ${bgColor}, transparent)` }}
      />

      <div ref={trackRef} className={`flex ${animClass}`}>
        {duplicated.map((review, i) => (
          <TestimonialCard key={i} review={review} />
        ))}
      </div>
    </div>
  );
}

export function Testimonials({ isGrid = false }: { isGrid?: boolean }) {
  const { t } = useLanguage();

  const reviews: Review[] = [
    {
      text: t("Roy and his team transformed our overgrown yard into a total showpiece! They arrived on time, stayed professional all day, and the price was more than fair. I've never seen our lawn look this good.", "¡Roy y su equipo transformaron nuestro jardín descuidado en una obra de arte! Puntuales, profesionales y precio justo."),
      name: "Sarah M.",
      role: t("Homeowner · Horn Lake, MS", "Propietaria · Horn Lake, MS"),
      rating: 5,
      initials: "SM",
      avatarColor: avatarColors[0],
      service: t("Lawn Mowing", "Corte de Césped"),
    },
    {
      text: t("We hired Brown Lawn Care for a full office deep cleaning. Everything was spotless — they even came back the next day to touch up a few areas at no charge. Incredible service and professionalism.", "Contratamos a Brown Lawn Care para limpieza profunda de oficina. Todo quedó impecable. Regresaron al día siguiente sin costo extra."),
      name: "James T.",
      role: t("Business Owner · Southaven, MS", "Dueño de Negocio · Southaven, MS"),
      rating: 5,
      initials: "JT",
      avatarColor: avatarColors[1],
      service: t("Office Cleaning", "Limpieza de Oficina"),
    },
    {
      text: t("A huge tree fell on our driveway during a storm. I called at 10 PM and Roy had his crew out at 7 AM the next morning. They cleared everything and even repaired the gravel. Absolute lifesavers!", "Un árbol cayó en nuestra entrada durante la tormenta. Llamé a las 10 PM y Roy envió a su equipo a las 7 AM. ¡Nos salvaron!"),
      name: "Linda R.",
      role: t("Homeowner · Olive Branch, MS", "Propietaria · Olive Branch, MS"),
      rating: 5,
      initials: "LR",
      avatarColor: avatarColors[2],
      service: t("Emergency Tree Removal", "Remoción de Árbol de Emergencia"),
    },
    {
      text: t("I love that they're bilingual! It made everything so much easier for my parents who speak Spanish. Our yard has never looked better. You can tell this is a family-owned business that truly cares.", "¡Me encanta que hablen español! Hizo todo mucho más fácil para mis padres. El jardín nunca se ha visto mejor. Se nota que esta familia se preocupa."),
      name: "Carlos G.",
      role: t("Homeowner · Memphis, TN", "Propietario · Memphis, TN"),
      rating: 5,
      initials: "CG",
      avatarColor: avatarColors[5],
      service: t("Landscaping", "Paisajismo"),
    },
    {
      text: t("We use Brown for our commercial property on a weekly basis — mowing, landscaping, and seasonal cleanups. Consistently on time and always professional. Highly recommend for any business property.", "Usamos a Brown para nuestra propiedad comercial semanalmente. Siempre puntuales y profesionales. Los recomiendo para cualquier propiedad comercial."),
      name: "Diana K.",
      role: t("Property Manager · Hernando, MS", "Gerente de Propiedad · Hernando, MS"),
      rating: 5,
      initials: "DK",
      avatarColor: avatarColors[1],
      service: t("Commercial Maintenance", "Mantenimiento Comercial"),
    },
    {
      text: t("Fantastic gravel driveway installation. Level, compacted perfectly, and it looks beautiful. They even hauled away all the old material without being asked. No mess, no hassle. Will definitely use again.", "Instalación de entrada de grava fantástica. Nivelado, perfectamente compactado y se ve hermoso. Retiraron todo el material viejo sin pedirlo."),
      name: "Mike D.",
      role: t("Homeowner · Nesbit, MS", "Propietario · Nesbit, MS"),
      rating: 5,
      initials: "MD",
      avatarColor: avatarColors[0],
      service: t("Gravel Work", "Trabajo de Grava"),
    },
    {
      text: t("Brown Lawn Care did a brush clearing job on our 3-acre property. It was a big job and they knocked it out in one day! Reasonable quote, zero mess left behind, and very courteous crew.", "Brown Lawn Care hizo el desmonte de nuestra propiedad de 3 acres. ¡Un trabajo grande terminado en un día! Precio razonable, sin desorden."),
      name: "Patricia W.",
      role: t("Homeowner · Horn Lake, MS", "Propietaria · Horn Lake, MS"),
      rating: 5,
      initials: "PW",
      avatarColor: avatarColors[3],
      service: t("Brush Removal", "Remoción de Maleza"),
    },
    {
      text: t("We needed our entire apartment complex landscaped and maintained seasonally. Roy gave a very competitive bid and delivered on every promise. Our tenants constantly compliment the curb appeal now!", "Necesitamos nuestro complejo de apartamentos mantenido estacionalmente. Roy ofreció un precio competitivo y cumplió con todo."),
      name: "Robert A.",
      role: t("Landlord · Southaven, MS", "Arrendador · Southaven, MS"),
      rating: 5,
      initials: "RA",
      avatarColor: avatarColors[6],
      service: t("Commercial Landscaping", "Paisajismo Comercial"),
    },
  ];

  const row1 = reviews.slice(0, Math.ceil(reviews.length / 2));
  const row2 = reviews.slice(Math.ceil(reviews.length / 2));

  const sectionBg = "#F1F5F9";

  return (
    <section id="reviews" className="relative py-12 sm:py-16 lg:py-20 overflow-hidden" style={{ background: sectionBg }}>

      {/* Background blobs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#2E7D32]/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full bg-[#D4AF37]/10 blur-[100px]" />

      {/* Dot grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #2E7D32 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto w-[90%] max-w-7xl text-center mb-8 sm:mb-14 relative z-10"
      >
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-white border border-[#2E7D32]/25 rounded-full px-5 py-1.5 text-[11px] font-black uppercase tracking-widest text-[#2E7D32] mb-5 shadow-sm">
          <Star className="w-3.5 h-3.5 fill-[#FFD54F] text-[#FFD54F]" />
          {t("Client Reviews", "Opiniones de Clientes")}
          <Star className="w-3.5 h-3.5 fill-[#FFD54F] text-[#FFD54F]" />
        </div>

        <h2 className="text-[22px] sm:text-[32px] lg:text-[40px] font-black text-slate-900 tracking-tight leading-tight mt-0 sm:mt-[-8px] mb-[10px]">
          {t("What Our ", "Lo Que Dicen ")}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E7D32] to-[#1B5E20]">
            {t("Customers Say", "Nuestros Clientes")}
          </span>
        </h2>

        <p className={cn(
          "mx-auto max-w-xl text-slate-500 text-[14px] sm:text-[15px] leading-relaxed font-medium",
          isGrid ? "mb-0" : "mb-[-30px]"
        )}>
          {t("Real 5-star experiences from homeowners and businesses across Horn Lake, MS and a 50-mile radius.", "Experiencias reales de propietarios y empresas en Horn Lake, MS y un radio de 50 millas.")}
        </p>

        {/* Aggregate trust row */}
        {!isGrid && (
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="flex -space-x-2">
              {["SM","JT","LR","CG","DK"].map((init, i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-black text-[#FFD54F] shadow-md"
                  style={{ backgroundColor: avatarColors[i % avatarColors.length], zIndex: 5 - i }}
                >
                  {init}
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-[#FFD54F] text-[#FFD54F]" />)}
                <span className="text-[13px] font-black text-slate-900 ml-1">5.0</span>
              </div>
              <p className="text-[11px] text-slate-500 font-medium">{t("200+ verified reviews", "200+ reseñas verificadas")}</p>
            </div>
          </div>
        )}
      </motion.div>

      {/* Grid or Marquee View */}
      {isGrid ? (
        <div className="mx-auto w-[90%] max-w-7xl relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
            >
              <TestimonialCard review={review} isGrid />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="relative z-10 flex flex-col gap-4">
          <MarqueeRow items={row1} direction="left" bgColor={sectionBg} />
          <MarqueeRow items={row2} direction="right" bgColor={sectionBg} />
        </div>
      )}

      {/* CSS Animations */}
      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-33.3333%); }
          100% { transform: translateX(0); }
        }
        .marquee-track-left {
          animation: marquee-left 38s linear infinite;
          width: max-content;
        }
        .marquee-track-right {
          animation: marquee-right 38s linear infinite;
          width: max-content;
        }
      `}</style>
    </section>
  );
}
