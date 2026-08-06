import heroVideo from "@/assets/herovideo.mp4";
import { motion } from "framer-motion";

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-[#0A140B] pt-28 sm:pt-36 pb-20 sm:pb-28 text-white">
      {/* Background Video */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover opacity-20"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Deep layered gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A140B]/70 via-[#0A140B]/80 to-[#0A140B]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2E7D32]/10 via-transparent to-[#D4AF37]/5" />
      </div>

      {/* Ambient glow blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 h-72 w-72 rounded-full bg-[#2E7D32]/20 blur-3xl" />
        <div className="absolute top-1/4 right-1/4 h-56 w-56 rounded-full bg-[#D4AF37]/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-48 w-96 rounded-full bg-[#2E7D32]/15 blur-3xl" />
      </div>

      {/* Dot grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #FFD54F 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {eyebrow && (
            <div className="inline-flex items-center gap-2 bg-white/8 border border-[#FFD54F]/20 backdrop-blur-sm rounded-full px-5 py-1.5 text-[11px] font-black uppercase tracking-widest text-[#FFD54F] mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD54F] animate-pulse" />
              {eyebrow}
            </div>
          )}
          <h1 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-[58px] font-black leading-tight tracking-tight text-white mb-5 max-w-4xl mx-auto">
            {title}
          </h1>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mx-auto max-w-2xl text-base sm:text-lg text-white/60 leading-relaxed font-medium"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>

        {/* Decorative bottom divider line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mt-12 mx-auto h-px w-32 bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent"
        />
      </div>
    </section>
  );
}
