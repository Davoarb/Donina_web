import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="py-12 border-t border-border bg-background">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="Iconop.png" alt="Logo Donina" className="w-12 h-9" />
          <span className="font-display text-lg font-bold tracking-wider text-foreground">DONINA</span>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 text-center">
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} DONINA — Gabinete Holístico y Herbolario. Todos los derechos reservados.
          </p>
          <span className="hidden md:inline text-border">|</span>
          <Link
            to="/aviso-legal"
            className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Aviso Legal
          </Link>
          <Link to="/politica-privacidad" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">
            Política de Privacidad
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;