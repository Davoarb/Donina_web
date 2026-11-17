import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AvisoLegal = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Aviso Legal
          </h1>
          
          <div className="font-body text-muted-foreground space-y-6 leading-relaxed">
            <h2 className="font-display text-2xl font-bold text-foreground mt-10 mb-6">
              DONINA GABINETE HOLÍSTICO Y HERBOLARIO
            </h2>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">1. DATOS IDENTIFICATIVOS DEL TITULAR</h3>
              <p className="mb-4">En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los siguientes datos:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Titular:</strong> Donina González Fernández.</li>
                <li><strong>Nombre comercial:</strong> Donina Gabinete Holístico y Herbolario.</li>
                <li><strong>NIF:</strong> 10874056R.</li>
                <li><strong>Domicilio profesional:</strong> Calle Aguado, número 8, bajo 1, 33202 Gijón (Asturias), España.</li>
                <li><strong>Correo electrónico:</strong> hipnosisdonina@gmail.com.</li>
                <li><strong>Página web:</strong> https://www.donina.es.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mt-8 mb-3">2. OBJETO DE LA PÁGINA WEB</h3>
              <p className="mb-3">La presente página web tiene carácter principalmente informativo y comercial.</p>
              <p className="mb-3">Su finalidad es ofrecer información sobre los productos de herbolario, suplementos nutricionales y servicios de quiromasaje y biomagnetismo ofrecidos por Donina Gabinete Holístico y Herbolario.</p>
              <p className="mb-3">A través de la página web, los usuarios pueden consultar información sobre el establecimiento y contactar con su titular mediante los medios habilitados.</p>
              <p>La página web no dispone de una tienda online ni permite realizar compras o pagos directamente a través de ella.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mt-8 mb-3">3. CONDICIONES DE USO</h3>
              <p className="mb-3">El acceso y utilización de esta página web atribuye la condición de usuario e implica la aceptación de las condiciones recogidas en este aviso legal.</p>
              <p className="mb-3">El usuario se compromete a utilizar la página web de forma responsable, lícita y respetuosa, evitando cualquier actuación que pueda perjudicar su funcionamiento o los derechos de terceros.</p>
              <p>Queda prohibido utilizar los contenidos de esta página web con fines ilícitos o contrarios a la buena fe.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mt-8 mb-3">4. PROPIEDAD INTELECTUAL E INDUSTRIAL</h3>
              <p className="mb-3">Los contenidos de esta página web, incluyendo textos, fotografías, imágenes, logotipos, diseños y demás elementos, están protegidos por la normativa de propiedad intelectual e industrial cuando corresponda.</p>
              <p>Queda prohibida su reproducción, distribución o utilización sin la autorización previa de su titular o de los legítimos propietarios de los derechos, salvo en los casos legalmente permitidos.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mt-8 mb-3">5. RESPONSABILIDAD</h3>
              <p className="mb-3">La titular procurará que la información publicada en esta página web sea correcta, actualizada y suficientemente clara.</p>
              <p className="mb-3">No obstante, no garantiza la ausencia absoluta de errores u omisiones ni la disponibilidad ininterrumpida del sitio web.</p>
              <p>La titular no será responsable de los daños derivados de un uso indebido de la página web por parte de los usuarios ni del funcionamiento de páginas externas enlazadas, sin perjuicio de las responsabilidades que legalmente le correspondan.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mt-8 mb-3">6. INFORMACIÓN SOBRE PRODUCTOS Y SERVICIOS</h3>
              <p className="mb-3">La información publicada sobre productos de herbolario y suplementos nutricionales tiene carácter informativo.</p>
              <p className="mb-3">Los suplementos nutricionales no deben considerarse medicamentos ni utilizarse como sustitutos de tratamientos médicos.</p>
              <p>Los servicios de quiromasaje y biomagnetismo se ofrecen dentro del ámbito de la actividad del establecimiento y no sustituyen el diagnóstico, tratamiento o seguimiento realizado por profesionales sanitarios cualificados.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mt-8 mb-3">7. ENLACES A TERCEROS</h3>
              <p className="mb-3">Esta página web puede contener enlaces a sitios web de terceros.</p>
              <p>La titular no controla los contenidos ni las políticas de privacidad de dichos sitios externos y no asume responsabilidad por ellos, sin perjuicio de las obligaciones legales que pudieran corresponderle.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mt-8 mb-3">8. PROTECCIÓN DE DATOS PERSONALES</h3>
              <p className="mb-3">Los datos personales facilitados por los usuarios a través de los medios de contacto disponibles en esta página web serán tratados conforme a la normativa vigente en materia de protección de datos personales.</p>
              <p>La información detallada sobre el tratamiento de datos personales, sus finalidades, legitimación, conservación y ejercicio de derechos se encuentra disponible en la correspondiente Política de Privacidad.</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mt-8 mb-3">9. LEGISLACIÓN APLICABLE Y JURISDICCIÓN</h3>
              <p className="mb-3">El presente aviso legal se rige por la legislación española.</p>
              <p>Para cualquier controversia que pudiera surgir en relación con el uso de esta página web, serán competentes los Juzgados y Tribunales de la ciudad de Gijón (Asturias), renunciando el usuario de forma expresa a cualquier otro fuero que pudiera corresponderle.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AvisoLegal;