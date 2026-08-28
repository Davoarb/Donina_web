import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const rawPhone = (import.meta.env.VITE_CONTACT_PHONE as string) || "+34 600 000 000";
  const cleanPhone = rawPhone.replace(/\D/g, "");
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=Hola,%20me%20gustar%C3%ADa%20reservar%20una%20cita`;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarnos, nos pondremos en contacto contigo lo antes posible.",
    });
  };
    const contactInfo = [
    {
      icon: MapPin,
      label: "Dirección",
      value: (import.meta.env.VITE_CONTACT_ADDRESS as string) || "Calle Ejemplo 123, Ciudad",
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: rawPhone,
    },
    {
      icon: Mail,
      label: "Email",
      value: (import.meta.env.VITE_CONTACT_EMAIL as string) || "contacto@ejemplo.com",
    },
  {
    icon: Clock,
    label: "Horario",
    value: (
      <div className="text-sm">
        <p>Lun - Vie: 10:00-16:00</p>
        <p className="text-pink-500 font-semibold mt-1">Citas con reserva</p>
      </div>
    )
  },
];

  return (
    <section id="contacto" className="py-24 md:py-32 bg-background relative" ref={ref}>
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="font-body text-sm tracking-[0.4em] uppercase text-primary font-semibold">
            Contacto
          </span>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mt-4 text-foreground">
            Reserva tu cita
          </h2>
          <div className="w-20 h-[2px] bg-primary mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <label className="font-body text-sm font-medium text-foreground mb-2 block">Nombre</label>
              <Input
                name="name"
                placeholder="Tu nombre completo"
                value={formData.name}
                onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                required
                className="bg-secondary/50 border-border focus:border-primary"
              />
            </div>
            <div>
              <label className="font-body text-sm font-medium text-foreground mb-2 block">Email</label>
              <Input
                name="email"
                type="email"
                placeholder="tu@email.com"
                value={formData.email}
                onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                required
                className="bg-secondary/50 border-border focus:border-primary"
              />
            </div>
            <div>
              <label className="font-body text-sm font-medium text-foreground mb-2 block">Mensaje</label>
              <Textarea
                name="message"
                placeholder="Cuéntanos cómo podemos ayudarte..."
                value={formData.message}
                onChange={(e) => setFormData(p => ({ ...p, message: e.target.value }))}
                required
                rows={5}
                className="bg-secondary/50 border-border focus:border-primary resize-none"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground font-body font-semibold tracking-widest uppercase text-sm py-6 rounded-full hover:bg-primary/90 hover:shadow-[0_8px_30px_-6px_hsl(var(--primary)/0.5)] transition-all duration-300"
            >
              Enviar mensaje
            </Button>
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center gap-8"
          >
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
                className="flex items-start gap-4 group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <item.icon size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-body text-sm text-muted-foreground">{item.label}</p>
                  <div className="font-body text-base font-medium text-foreground">
                    {item.value}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social */}
            <div className="flex gap-4 pt-4">
              <a href="https://www.instagram.com/donina_gonzalez/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground text-primary transition-all duration-300" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="https://www.facebook.com/ninuki/?locale=es_ES" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground text-primary transition-all duration-300" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground text-primary transition-all duration-300" aria-label="WhatsApp">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;