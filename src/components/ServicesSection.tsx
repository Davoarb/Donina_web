import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X } from "lucide-react";

import imgBiomagnetismo from "@/assets/service-biomagnetismo.jpg";
import imgHipnoterapia from "@/assets/service-hipnoterapia.jpg";
import imgChinas from "@/assets/service-chinas.jpg";
import imgLipoflash from "@/assets/service-lipoflash.jpg";

const services = [
  {
    title: "Biomagnetismo",
    description: "Método terapéutico creado por el Dr. Isaac Goiz hace más de 30 años.",
    fullDescription:
      "Método terapéutico creado por el Dr. Isaac Goiz hace más de 30 años. Se basa en la impactación de imanes estáticos (3000 gauss o más) sobre el cuerpo para detectar, clasificar, medir y corregir alteraciones funcionales de pH en el organismo.",
    image: imgBiomagnetismo,
  },
  {
    title: "Hipnoterapia",
    description: "Aplicación terapéutica de la hipnosis para reorganizar tu mundo interior.",
    fullDescription:
      "La hipnoterapia es la aplicación terapéutica de la hipnosis. El hipnoterapeuta utiliza los trances hipnóticos y facilita las experiencias hipnóticas terapéuticas en el sujeto para que este pueda reorganizar, desde el interior, sus significados personales y su propio mundo experiencial. Por tanto, es una técnica en la que el sujeto está activo, sobre todo cuando está en trance, porque es él quien activa su personal búsqueda inconsciente de significados.",
    image: imgHipnoterapia,
  },
  {
    title: "Técnicas Tradicionales Chinas",
    description: "Análisis del equilibrio de los meridianos energéticos y acupuntura.",
    fullDescription:
      "Comenzando por una análisis del equilibrio de los meridianos energéticos o meridianos de acupuntura, siguiendo con el masaje tuina, la moxibustión o el uso de ventosas terapéuticas, encontramos en estas técnicas un gran aliado para alcanzar el bienestar físico.",
    image: imgChinas,
  },
  {
    title: "Lipoflash® Detox",
    description: "Técnica manual reductora y drenante para eliminar toxinas.",
    fullDescription:
      "Es una técnica manual, realizada con las manos sin ningún accesorio, que combina un masaje reductor y un masaje drenante. Trabaja todas las zonas del cuerpo para ayudar a eliminar toxinas, reducir la retención de líquidos, activar la circulación y a la vez ayuda a definir los contornos del cuerpo, descarga los músculos y da sensación de ligereza, elimina la inflamación, además de reducir centímetros en la cintura, abdomen y espalda, también disminuye la flacidez y celulitis de cada paciente.",
    image: imgLipoflash,
  },
];

const ServicesSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <section id="servicios" className="py-24 md:py-32 bg-background relative" ref={ref}>
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-16 md:mb-20"
          >
            <span className="font-body text-sm tracking-[0.4em] uppercase text-primary font-semibold">
              Nuestros servicios
            </span>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mt-4 text-foreground">
              Especialidades
            </h2>
            <div className="w-20 h-[2px] bg-primary mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease: "easeOut" }}
              >
                <div className="group relative bg-card border border-border rounded-2xl overflow-hidden h-full transition-all duration-500 hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.2)] hover:-translate-y-2 hover:border-primary/30">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      width={640}
                      height={640}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  </div>

                  <div className="p-6 relative z-10">
                    <h3 className="font-display text-lg font-bold mb-2 text-primary uppercase tracking-wider">
                      {service.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                      {service.description}
                    </p>

                    <button
                      onClick={() => setSelected(i)}
                      className="flex items-center gap-2 text-primary font-body font-semibold text-sm hover:gap-3 transition-all duration-300 cursor-pointer"
                    >
                      Saber más
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3 8h10M9 4l4 4-4 4" />
                      </svg>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/60 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-56">
                <img
                  src={services[selected].image}
                  alt={services[selected].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 bg-card/80 backdrop-blur-sm rounded-full p-2 text-foreground hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-8">
                <h3 className="font-display text-2xl font-bold text-primary uppercase tracking-wider mb-4">
                  {services[selected].title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {services[selected].fullDescription}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ServicesSection;
