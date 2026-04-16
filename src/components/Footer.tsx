const Footer = () => (
  <footer className="py-12 border-t border-border bg-background">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
        <img src="Iconop.png" alt="Logo Donina" className="w-12 h-9" />
          <span className="font-display text-lg font-bold tracking-wider text-foreground">DONINA</span>
        </div>
        <p className="font-body text-sm text-muted-foreground">
          © {new Date().getFullYear()} DONINA — Gabinete Holístico y Herbolario. Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
