import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroVideo from "@/assets/hero-bg-video.mp4.asset.json";

const HeroSection = () => {
  const title = "DONINA";
  const letterVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.8 + i * 0.1,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background video */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="incienso2.mp4"
        />
      </motion.div>

      {/* Dark + magenta overlay */}
      <div className="absolute inset-0 bg-foreground/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-primary/15 to-foreground/30" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Decorative lotus */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <svg
            viewBox="0 0 100 100"
            className="w-60 h-50 mx-auto text-[#D12B6B] fill-current drop-shadow-2xl"
            >
              <g transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
              fill="current" stroke="none">
              <path d="M448 559 c-25 -14 -22 -55 4 -81 l21 -21 19 23 c21 26 24 60 6 78 -14 14 -27 15 -50 1z"/>
              <path d="M590 515 c-8 -9 -31 -23 -51 -32 -24 -9 -41 -25 -49 -44 -16 -38 -6 -48 23 -22 12 12 37 25 56 30 27 7 37 16 43 38 9 35 -4 52 -22 30z"/>
              <path d="M327 514 c-3 -3 -1 -19 5 -34 7 -21 18 -31 41 -35 18 -4 44 -19 60 -33 22 -21 27 -23 27 -8 0 34 -29 74 -59 81 -16 3 -35 13 -42 21 -12 15 -22 18 -32 8z"/>
              <path d="M228 433 c-30 -8 -20 -21 30 -39 32 -12 68 -39 114 -87 37 -37 72 -66 78 -62 15 10 12 92 -6 126 -27 53 -135 83 -216 62z"/>
              <path d="M553 421 c-50 -23 -73 -62 -73 -125 0 -57 16 -68 47 -30 57 69 90 96 145 121 32 15 58 30 58 34 0 24 -123 24 -177 0z"/>
              <path d="M170 372 c0 -48 25 -134 53 -185 43 -77 168 -116 218 -66 22 22 20 37 -11 99 -36 72 -146 157 -237 185 -21 6 -23 3 -23 -33z"/>
              <path d="M683 376 c-109 -52 -193 -151 -193 -225 0 -36 22 -51 74 -51 78 0 144 51 176 138 23 60 38 172 24 172 -5 0 -42 -15 -81 -34z"/>
              <path d="M454 15 c-18 -14 -17 -14 15 -15 29 0 32 2 21 15 -15 18 -12 18 -36 0z"/>
              </g>
            </svg>
        </motion.div>

        {/* Animated title */}
        <div className="overflow-hidden mb-4">
          <h1 className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] font-bold tracking-[0.15em] text-primary-foreground leading-none drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            {title.split("").map((letter, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                {letter}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-body text-lg sm:text-xl md:text-2xl tracking-[0.3em] uppercase text-primary font-medium mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            Gabinete Holístico y Herbolario
          </p>
          <p className="font-display text-xl sm:text-2xl italic text-primary-foreground/80 drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
            "La vida hay que vivirla"
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.8 }}
          className="mt-12"
        >
          <a
            href="#servicios"
            className="inline-block bg-primary text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase px-10 py-4 rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-[0_8px_30px_-6px_hsl(var(--primary)/0.5)] hover:-translate-y-0.5"
          >
            Descubre más
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#servicios" className="text-primary animate-bounce-slow block drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
          <ChevronDown size={28} />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
