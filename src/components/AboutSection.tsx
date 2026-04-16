import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 15, suffix: "+", label: "Años de experiencia" },
  { value: 2500, suffix: "+", label: "Clientes atendidos" },
  { value: 120, suffix: "", label: "Productos naturales" },
  { value: 98, suffix: "%", label: "Satisfacción" },
];

function AnimatedCounter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const AboutSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section
      id="nosotros"
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: "hsl(var(--dark-section))" }}
    >
      {/* Decorative */}
      <div className="absolute top-10 right-10 w-64 h-64 border border-primary/10 rounded-full" />
      <div className="absolute bottom-20 left-20 w-40 h-40 border border-primary/10 rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="font-body text-sm tracking-[0.4em] uppercase text-primary font-semibold">
              Sobre mi
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-8" style={{ color: "hsl(var(--dark-section-foreground))" }}>
              Tu bienestar,{" "}
              <span className="text-primary italic">nuestra pasión</span>
            </h2>
            <p className="font-body text-base md:text-lg leading-relaxed mb-6" style={{ color: "hsl(var(--dark-section-foreground) / 0.7)" }}>
              En DONINA creemos en el poder de la naturaleza y las terapias ancestrales
              para restablecer el equilibrio del cuerpo y la mente. Nuestro gabinete
              holístico combina la sabiduría de la medicina tradicional china con las
              propiedades curativas de las plantas medicinales.
            </p>
            <p className="font-body text-base md:text-lg leading-relaxed" style={{ color: "hsl(var(--dark-section-foreground) / 0.7)" }}>
              Cada tratamiento es personalizado, porque sabemos que cada persona es única.
              Te acompañamos en tu camino hacia una vida más plena y saludable.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.15, duration: 0.6 }}
                className="text-center p-6 rounded-2xl border border-primary/10 bg-primary/5 backdrop-blur-sm"
              >
                <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} inView={inView} />
                </div>
                <p className="font-body text-sm tracking-wide" style={{ color: "hsl(var(--dark-section-foreground) / 0.6)" }}>
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
