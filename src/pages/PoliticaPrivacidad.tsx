import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PoliticaPrivacidad = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Política de Privacidad
          </h1>
          
          <div className="font-body text-muted-foreground space-y-6 leading-relaxed">
            <p className="mb-6">
              En Donina Gabinete Holístico y Herbolario valoramos tu privacidad y nos comprometemos a proteger tus datos personales. Esta política explica cómo recopilamos, utilizamos y protegemos la información que nos proporcionas a través de nuestro sitio web (www.donina.es).
            </p>

            <div>
              <h3 className="text-lg font-bold text-foreground mt-8 mb-3">1. RESPONSABLE DEL TRATAMIENTO</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Titular:</strong> Donina González Fernández.</li>
                <li><strong>NIF:</strong> 10874056R.</li>
                <li><strong>Dirección:</strong> Calle Aguado, número 8, bajo 1, 33202 Gijón (Asturias).</li>
                <li><strong>Correo electrónico:</strong> hipnosisdonina@gmail.com.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mt-8 mb-3">2. FINALIDAD DEL TRATAMIENTO</h3>
              <p className="mb-3">Los datos personales (nombre y correo electrónico) que nos facilites a través del formulario de contacto serán tratados única y exclusivamente con la finalidad de:</p>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li>Atender, gestionar y responder a tus consultas, peticiones o reservas de citas.</li>
                <li>Contactar contigo para ofrecerte la información solicitada.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mt-8 mb-3">3. LEGITIMACIÓN</h3>
              <p>La base legal para el tratamiento de tus datos es tu <strong>consentimiento expreso</strong>, otorgado al marcar la casilla de aceptación de esta política antes de enviar el formulario de contacto.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mt-8 mb-3">4. CONSERVACIÓN DE LOS DATOS</h3>
              <p className="mb-3">Nuestro sitio web está diseñado priorizando tu privacidad. <strong>No almacenamos tus datos en bases de datos web</strong>.</p>
              <p>La información enviada a través del formulario se procesa de forma temporal y se envía directamente a nuestro correo electrónico. Los datos se conservarán únicamente durante el tiempo necesario para resolver tu consulta y, posteriormente, durante los plazos legalmente exigibles.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mt-8 mb-3">5. DESTINATARIOS, ENCARGADOS DEL TRATAMIENTO Y TRANSFERENCIAS INTERNACIONALES</h3>
              <p className="mb-3">
                Tus datos no serán cedidos a terceros salvo obligación legal. Sin embargo, para gestionar el envío de los formularios de contacto y proteger la web contra el spam, utilizamos los servicios de infraestructura tecnológica de <strong>Cloudflare, Inc.</strong> (incluyendo su sistema antispam invisible Turnstile) y la pasarela de envío de correos de <strong>Resend, Inc.</strong>
              </p>
              <p className="mb-3">
                Ambas empresas actúan estrictamente como Encargados del Tratamiento, limitándose a procesar técnicamente los datos para entregarlos en nuestra bandeja de entrada, sin almacenar los mensajes en bases de datos de terceros. 
              </p>
              <p>
                Ambas entidades operan desde Estados Unidos y cumplen con el RGPD al estar adheridas y certificadas bajo el <strong>Marco de Privacidad de Datos UE-EE.UU. (Data Privacy Framework)</strong>, garantizando un nivel de protección de datos equivalente al europeo.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mt-8 mb-3">6. DERECHOS DEL USUARIO</h3>
              <p className="mb-3">En cualquier momento, puedes ejercer tus derechos de <strong>acceso, rectificación, supresión, limitación, portabilidad y oposición</strong>.</p>
              <p>Para ello, solo tienes que enviar un correo electrónico a <strong>hipnosisdonina@gmail.com</strong> indicando el derecho que deseas ejercer y adjuntando una copia de tu DNI o documento equivalente para verificar tu identidad.</p>
              <p className="mt-3">Si consideras que el tratamiento de tus datos no se ajusta a la normativa vigente, tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD).</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PoliticaPrivacidad;