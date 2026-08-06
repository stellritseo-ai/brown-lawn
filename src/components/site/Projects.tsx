import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ArrowRight, Sparkles, Scissors, Trees, Truck, Building2, X, ZoomIn, Camera, Star } from "lucide-react";
import g1 from "@/assets/gallery/galler1.webp";
import g2 from "@/assets/gallery/galler2.webp";
import g3 from "@/assets/gallery/gallery.jpg";
import g4 from "@/assets/gallery/gallery1.webp";
import g5 from "@/assets/gallery/gallery3.webp";
import g6 from "@/assets/gallery/gallery4.webp";
import g7 from "@/assets/gallery/gallery5.jpg";
import g8 from "@/assets/gallery/gallery6.webp";
import g9 from "@/assets/gallery/gallery7.webp";
import g10 from "@/assets/gallery/gallery8.jpg";
import g11 from "@/assets/gallery/gallery9.jpeg";
import g12 from "@/assets/gallery/gallery10.jpg";
import g13 from "@/assets/gallery/gallery11.webp";
import g14 from "@/assets/gallery/gallery12.jpg";
import g15 from "@/assets/gallery/gallery13.jpg";
import g16 from "@/assets/gallery/gallery14.webp";
import g17 from "@/assets/gallery/gallery15.webp";
import img1 from "@/assets/gallery/images.jpeg";
import img2 from "@/assets/gallery/images (2).jpeg";
import img3 from "@/assets/gallery/images (3).jpeg";
import img4 from "@/assets/gallery/images (4).jpeg";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/hooks/useLanguage";
import { Link } from "@tanstack/react-router";

const catIcons = {
  All: Sparkles,
  "Lawn Care": Scissors,
  Landscaping: ShovelIcon,
  "Tree Removal": Trees,
  Cleaning: BroomIcon,
  Commercial: Building2,
};

function ShovelIcon(props: any) {
  return <Truck {...props} />;
}

function BroomIcon(props: any) {
  return <Sparkles {...props} />;
}

export function Projects({ isLanding = false }: { isLanding?: boolean }) {
  const { t } = useLanguage();

  const fallbackAll = [
    {
      img: g1,
      title: t("Freshly Mowed Residential Lawn", "Césped Residencial Cortado"),
      cat: "Lawn Care",
      loc: "Horn Lake, MS",
      year: "2024",
      tag: t("Weekly Mowing", "Cortado Semanal"),
      featured: true,
    },
    {
      img: g2,
      title: t("Commercial Lawn Maintenance", "Mantenimiento de Césped Comercial"),
      cat: "Commercial",
      loc: "Southaven, MS",
      year: "2024",
      tag: t("Commercial Lawn", "Césped Comercial"),
      featured: false,
    },
    {
      img: g3,
      title: t("Overgrown Yard Cleanup & Transformation", "Limpieza y Transformación de Jardín"),
      cat: "Lawn Care",
      loc: "Olive Branch, MS",
      year: "2024",
      tag: t("Yard Cleanup", "Limpieza de Jardín"),
      featured: true,
    },
    {
      img: g4,
      title: t("Manicured Turf & Precision Edging", "Césped Manicurado y Bordeado de Precisión"),
      cat: "Lawn Care",
      loc: "Horn Lake, MS",
      year: "2024",
      tag: t("Lawn Edging", "Bordeado de Césped"),
      featured: false,
    },
    {
      img: g5,
      title: t("Custom Landscaping & Bed Maintenance", "Paisajismo Personalizado y Mantenimiento"),
      cat: "Landscaping",
      loc: "Memphis, TN",
      year: "2024",
      tag: t("Landscape Bed", "Jardinería"),
      featured: false,
    },
    {
      img: g6,
      title: t("Heavy Duty Brush Clearing", "Desmonte de Maleza Pesada"),
      cat: "Tree Removal",
      loc: "Hernando, MS",
      year: "2024",
      tag: t("Brush Removal", "Remoción de Maleza"),
      featured: false,
    },
    {
      img: g7,
      title: t("Residential Property Lawn Overhaul", "Renovación de Césped Residencial"),
      cat: "Lawn Care",
      loc: "Nesbit, MS",
      year: "2024",
      tag: t("Lawn Care", "Cuidado de Césped"),
      featured: true,
    },
    {
      img: g8,
      title: t("Storm Emergency Tree Clearing", "Limpieza de Árboles por Tormenta"),
      cat: "Tree Removal",
      loc: "Horn Lake, MS",
      year: "2024",
      tag: t("Tree Removal", "Remoción de Árboles"),
      featured: false,
    },
    {
      img: g9,
      title: t("Tree Branch & Shrub Trimming", "Poda de Ramas de Árboles y Arbustos"),
      cat: "Tree Removal",
      loc: "Southaven, MS",
      year: "2024",
      tag: t("Shrub Trimming", "Poda de Arbustos"),
      featured: false,
    },
    {
      img: g10,
      title: t("Office & Facility Deep Cleaning", "Limpieza Profunda de Oficina y Galpón"),
      cat: "Cleaning",
      loc: "Memphis, TN",
      year: "2024",
      tag: t("Office Cleaning", "Limpieza de Oficina"),
      featured: true,
    },
    {
      img: g11,
      title: t("Warehouse & Agricultural Facility Cleaning", "Limpieza de Almacén y Galpón"),
      cat: "Cleaning",
      loc: "Nesbit, MS",
      year: "2023",
      tag: t("Facility Cleaning", "Limpieza de Instalaciones"),
      featured: false,
    },
    {
      img: g12,
      title: t("Commercial Property Exterior Wash", "Lavado Exterior de Propiedad Comercial"),
      cat: "Commercial",
      loc: "Horn Lake, MS",
      year: "2024",
      tag: t("Commercial Cleanup", "Limpieza Comercial"),
      featured: false,
    },
    {
      img: g13,
      title: t("Gravel Driveway Installation & Leveling", "Instalación y Nivelación de Entrada de Grava"),
      cat: "Landscaping",
      loc: "Olive Branch, MS",
      year: "2024",
      tag: t("Gravel Work", "Trabajo de Grava"),
      featured: true,
    },
    {
      img: g14,
      title: t("Lawn Aeration & Seeding Project", "Proyecto de Aeración y Siembras"),
      cat: "Lawn Care",
      loc: "Hernando, MS",
      year: "2024",
      tag: t("Lawn Aeration", "Aeración de Césped"),
      featured: false,
    },
    {
      img: g15,
      title: t("Shrub Pruning & Garden Bed Care", "Poda de Arbustos y Cuidado de Jardín"),
      cat: "Landscaping",
      loc: "Southaven, MS",
      year: "2024",
      tag: t("Garden Care", "Cuidado de Jardín"),
      featured: false,
    },
    {
      img: g16,
      title: t("Large Tree Hazard Removal", "Remoción de Árbol de Gran Tamaño"),
      cat: "Tree Removal",
      loc: "Horn Lake, MS",
      year: "2024",
      tag: t("Hazard Tree", "Remoción de Árboles"),
      featured: true,
    },
    {
      img: g17,
      title: t("Commercial Office Sanitization & Maintenance", "Sanitización y Mantenimiento Comercial"),
      cat: "Cleaning",
      loc: "Memphis, TN",
      year: "2024",
      tag: t("Deep Cleaning", "Limpieza Profunda"),
      featured: false,
    },
    {
      img: img1,
      title: t("Residential Grass Cutting & Trimming", "Corte y Poda de Césped Residencial"),
      cat: "Lawn Care",
      loc: "Horn Lake, MS",
      year: "2024",
      tag: t("Lawn Care", "Cuidado de Césped"),
      featured: false,
    },
    {
      img: img2,
      title: t("Seasonal Yard Debris & Leaf Cleanup", "Limpieza de Hojas y Residuos de Jardín"),
      cat: "Lawn Care",
      loc: "Southaven, MS",
      year: "2024",
      tag: t("Leaf Cleanup", "Limpieza de Hojas"),
      featured: false,
    },
    {
      img: img3,
      title: t("Property Perimeter Fence & Brush Care", "Cuidado de Perímetro y Maleza"),
      cat: "Landscaping",
      loc: "Olive Branch, MS",
      year: "2024",
      tag: t("Perimeter Care", "Cuidado Perimetral"),
      featured: false,
    },
    {
      img: img4,
      title: t("Commercial Building Surroundings Care", "Mantenimiento de Alrededores Comerciales"),
      cat: "Commercial",
      loc: "Horn Lake, MS",
      year: "2024",
      tag: t("Commercial Care", "Cuidado Comercial"),
      featured: false,
    },
  ];

  const all = fallbackAll;

  const catLabels = {
    All: t("All Projects", "Todos los Proyectos"),
    "Lawn Care": t("Lawn Care", "Cuidado de Césped"),
    Landscaping: t("Landscaping", "Paisajismo"),
    "Tree Removal": t("Tree & Brush Removal", "Remoción de Árboles"),
    Cleaning: t("Cleaning Services", "Servicios de Limpieza"),
    Commercial: t("Commercial Projects", "Proyectos Comerciales"),
  };

  const dynamicCats = useMemo(() => {
    const categories = new Set<string>();
    categories.add("All");
    all.forEach((p) => {
      if (p.cat) categories.add(p.cat);
    });
    return Array.from(categories);
  }, [all]);

  const [active, setActive] = useState<string>("All");
  const items = active === "All" ? all : all.filter((p) => p.cat === active);
  const displayItems = isLanding ? items.slice(0, 15) : items;

  // Lightbox state
  const [lightbox, setLightbox] = useState<null | (typeof all)[number]>(null);
  const [lightboxIdx, setLightboxIdx] = useState<number>(0);

  const openLightbox = useCallback((p: (typeof all)[number], idx: number) => {
    setLightbox(p);
    setLightboxIdx(idx);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    document.body.style.overflow = "";
  }, []);

  const prevPhoto = useCallback(() => {
    const newIdx = (lightboxIdx - 1 + displayItems.length) % displayItems.length;
    setLightboxIdx(newIdx);
    setLightbox(displayItems[newIdx]);
  }, [lightboxIdx, displayItems]);

  const nextPhoto = useCallback(() => {
    const newIdx = (lightboxIdx + 1) % displayItems.length;
    setLightboxIdx(newIdx);
    setLightbox(displayItems[newIdx]);
  }, [lightboxIdx, displayItems]);

  // ESC + Arrow keys
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevPhoto();
      if (e.key === "ArrowRight") nextPhoto();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [closeLightbox, prevPhoto, nextPhoto]);

  useEffect(() => () => { document.body.style.overflow = ""; }, []);

  return (
    <section id="projects" className="relative bg-[#F8FAFC] py-16 sm:py-20 overflow-hidden">

      {/* Background texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #2E7D32 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">

        {/* ── Section Header ──────────────────────────── */}
        {!isLanding && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12"
          >
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white border border-[#2E7D32]/25 rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-widest text-[#2E7D32] mb-5 shadow-sm">
                <Camera className="w-3.5 h-3.5" />
                {t("Our Work Gallery", "Nuestra Galería de Trabajos")}
              </div>

              <h2
                className="text-slate-900 tracking-tight leading-[1.1] font-black"
                style={{ fontSize: "38px", marginTop: "-8px", marginBottom: "10px" }}
              >
                {t("See Our Work — ", "Vea Nuestro Trabajo — ")}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2E7D32] to-[#1B5E20]">
                  {t("Before & After.", "Antes y Después.")}
                </span>
              </h2>
              <p className="text-slate-500 text-[15px] leading-relaxed font-medium max-w-xl">
                {t("Every project tells a story. Browse our gallery to see the Brown difference across Horn Lake and the 50-mile radius.", "Cada proyecto cuenta una historia. Explore nuestra galería para ver la diferencia de Brown.")}
              </p>
            </div>

            <button
              type="button"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] text-[#FFD54F] border border-[#D4AF37]/50 text-[11px] font-black uppercase tracking-widest rounded-full px-6 py-3.5 transition-all duration-300 shadow-lg hover:scale-[1.03] active:scale-[0.97] shrink-0 self-start lg:self-auto cursor-pointer"
            >
              {t("Get Free Quote", "Solicitar Cotización Gratis")} <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        )}

        {/* Landing mini header */}
        {isLanding && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10"
          >
            <div>
              <div className="inline-flex items-center gap-2 bg-white border border-[#2E7D32]/25 rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-widest text-[#2E7D32] mb-4 shadow-sm">
                <Star className="w-3.5 h-3.5 fill-[#2E7D32]" />
                {t("Our Work Gallery", "Nuestra Galería")}
              </div>
              <h2 className="text-slate-900 font-black text-[26px] sm:text-[32px] leading-tight tracking-tight">
                {t("Real Results, Real Properties.", "Resultados Reales, Propiedades Reales.")}
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-[#1E293B] text-white text-[11px] font-black uppercase tracking-widest rounded-full px-6 py-3 transition-all duration-200 shadow-md hover:scale-[1.02] shrink-0 self-start sm:self-auto cursor-pointer"
            >
              {t("View Full Gallery", "Ver Galería Completa")} <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
        )}

        {/* ── Projects Grid ───────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={isLanding
              ? "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4"
              : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            }
          >
            {displayItems.map((p, idx) => (
              <motion.article
                key={idx}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                onClick={() => openLightbox(p, idx)}
                className={cn(
                  "group relative overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 cursor-zoom-in",
                  isLanding
                    ? "aspect-[4/3] w-full"
                    : p.featured ? "sm:col-span-1 lg:row-span-2" : ""
                )}
              >
                {/* Image */}
                <div className={cn(
                  "overflow-hidden w-full h-full",
                  isLanding ? "h-full" : p.featured ? "h-[420px] lg:h-full lg:min-h-[520px]" : "h-[250px] sm:h-[270px]"
                )}>
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-[1.07] transition-transform duration-700 ease-out"
                    loading={idx < 5 ? "eager" : "lazy"}
                  />
                </div>

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-300 flex items-center justify-center">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/85 border border-white/40 text-[#2E7D32] opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-300 shadow-md backdrop-blur-xs">
                    <ZoomIn className="h-5 w-5" />
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>

      {/* ── Lightbox Modal ──────────────────────────────── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeLightbox}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/88 backdrop-blur-md" />

            {/* Modal */}
            <motion.div
              className="relative z-10 w-full max-w-5xl max-h-[90vh] flex flex-col rounded-3xl overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition hover:scale-110"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Prev / Next arrows */}
              <button
                onClick={prevPhoto}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition hover:scale-110"
                aria-label="Previous"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
              </button>
              <button
                onClick={nextPhoto}
                className="absolute right-14 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-black/70 transition hover:scale-110"
                aria-label="Next"
              >
                <ArrowRight className="h-4 w-4" />
              </button>

              {/* Photo counter */}
              <div className="absolute top-4 left-4 z-30 bg-black/50 backdrop-blur-sm border border-white/20 text-white text-[11px] font-bold px-3 py-1.5 rounded-full">
                {lightboxIdx + 1} / {displayItems.length}
              </div>

              {/* Full image */}
              <div className="relative flex-1 overflow-hidden bg-black">
                <img
                  src={lightbox.img}
                  alt={lightbox.title}
                  className="w-full h-full object-contain max-h-[75vh]"
                />
              </div>

              {/* Info bar */}
              <div className="bg-white px-5 py-4 flex items-center justify-between gap-4 shrink-0 border-t border-slate-100">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="bg-[#2E7D32] text-[#FFD54F] text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shrink-0">
                    {catLabels[lightbox.cat as keyof typeof catLabels] || lightbox.cat}
                  </span>
                  <div className="min-w-0">
                    <p className="font-extrabold text-slate-900 text-sm sm:text-base leading-tight truncate">{lightbox.title}</p>
                    <p className="flex items-center gap-1 text-xs text-slate-500 mt-0.5">
                      <MapPin className="h-3.5 w-3.5 text-[#2E7D32] shrink-0" />
                      {lightbox.loc}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs font-bold text-slate-400">{lightbox.year}</span>
                  <button
                    type="button"
                    onClick={closeLightbox}
                    className="hidden sm:inline-flex items-center gap-1.5 bg-gradient-to-r from-[#2E7D32] to-[#1B5E20] text-[#FFD54F] border border-[#D4AF37]/40 text-[10px] font-black uppercase tracking-wider px-4 py-2 rounded-full hover:scale-[1.03] transition-transform shadow-md cursor-pointer"
                  >
                    {t("Get a Quote", "Cotizar")} <ArrowRight className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
