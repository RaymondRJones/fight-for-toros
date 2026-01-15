import Link from 'next/link';
import { ArrowLeft, HelpCircle, ChevronDown } from 'lucide-react';

const faqs = [
  {
    category: 'Sobre la Aplicación',
    questions: [
      {
        q: '¿Qué es esta aplicación?',
        a: 'Es una herramienta gratuita que te ayuda a ejercer tu derecho constitucional de presentar una intervención ciudadana ante la Corte Constitucional de Colombia, en apoyo a la Ley 2385 de 2024 que protege a los animales.',
      },
      {
        q: '¿Es seguro usar esta aplicación?',
        a: 'Sí, es completamente seguro. La aplicación funciona 100% en tu navegador. Tus datos personales nunca se envían a ningún servidor. No almacenamos, vendemos ni compartimos tu información con nadie. El código es abierto y puede ser auditado por cualquier persona.',
      },
      {
        q: '¿Mis datos quedan guardados en algún servidor?',
        a: 'No. Tus datos solo existen temporalmente en tu navegador mientras usas la aplicación. Cuando cierras el navegador, los datos se eliminan. No tenemos servidores que almacenen información personal.',
      },
      {
        q: '¿La aplicación envía el correo por mí?',
        a: 'No. La aplicación genera el documento PDF y te proporciona el texto del correo para que lo copies. Tú mismo envías el correo desde tu cuenta personal de correo electrónico, lo que garantiza que tienes control total sobre lo que envías.',
      },
    ],
  },
  {
    category: 'Sobre la Intervención Ciudadana',
    questions: [
      {
        q: '¿Qué es una intervención ciudadana?',
        a: 'Es un mecanismo constitucional (Artículo 242 de la Constitución) que permite a cualquier ciudadano colombiano expresar su opinión ante la Corte Constitucional sobre leyes que están siendo revisadas. Es un derecho fundamental de participación democrática.',
      },
      {
        q: '¿Por qué debería apoyar la Ley 2385 de 2024?',
        a: 'La Ley 2385 de 2024 protege a los animales de prácticas que les causan sufrimiento innecesario. Al enviar tu intervención, apoyas el reconocimiento de los animales como seres sintientes y contribuyes a una sociedad más compasiva.',
      },
      {
        q: '¿Mi intervención realmente hace diferencia?',
        a: 'Sí. La Corte Constitucional considera las intervenciones ciudadanas en sus deliberaciones. Entre más ciudadanos participen, mayor es el mensaje de apoyo a la protección animal. Cada voz cuenta en una democracia.',
      },
      {
        q: '¿Qué son los expedientes D-0016158, D-0016172 y D-0016193?',
        a: 'Son los números de los casos en la Corte Constitucional donde se está revisando la constitucionalidad de la Ley 2385 de 2024. Tu intervención se incorporará a estos expedientes.',
      },
    ],
  },
  {
    category: 'Proceso y Requisitos',
    questions: [
      {
        q: '¿Necesito ser abogado para enviar una intervención?',
        a: 'No. Cualquier ciudadano colombiano mayor de edad puede presentar una intervención ciudadana. Es un derecho de todos, no solo de profesionales del derecho.',
      },
      {
        q: '¿Qué documentos necesito?',
        a: 'Solo necesitas tu cédula de ciudadanía, un correo electrónico y un número de celular. La aplicación genera automáticamente el documento legal con los argumentos apropiados.',
      },
      {
        q: '¿Por qué necesitan mi firma?',
        a: 'La firma es necesaria para validar tu intervención ciudadana como un documento legal. La Corte Constitucional requiere que las intervenciones estén firmadas por el ciudadano que las presenta.',
      },
      {
        q: '¿Puedo modificar el contenido del documento?',
        a: 'El documento generado contiene argumentos legales sólidos basados en jurisprudencia existente. Si deseas agregar comentarios personales, puedes hacerlo en el cuerpo del correo electrónico.',
      },
      {
        q: '¿Hay algún costo?',
        a: 'No. Esta aplicación es completamente gratuita. Presentar intervenciones ciudadanas ante la Corte Constitucional tampoco tiene ningún costo.',
      },
    ],
  },
  {
    category: 'Después de Enviar',
    questions: [
      {
        q: '¿Recibiré confirmación de la Corte?',
        a: 'La Corte Constitucional puede enviar un acuse de recibo al correo electrónico que proporcionaste. Sin embargo, esto no siempre ocurre. Lo importante es que tu intervención quedará registrada en el expediente.',
      },
      {
        q: '¿Cuándo se decidirá el caso?',
        a: 'Los tiempos de la Corte Constitucional varían según la complejidad del caso y su carga de trabajo. Puedes seguir el estado de los expedientes en la página web de la Corte Constitucional.',
      },
      {
        q: '¿Puedo enviar más de una intervención?',
        a: 'Técnicamente sí, pero una intervención por persona es suficiente y apropiada. Lo importante es la calidad y legitimidad de la participación, no la cantidad.',
      },
    ],
  },
  {
    category: 'Problemas Técnicos',
    questions: [
      {
        q: '¿Por qué no puedo avanzar al siguiente paso?',
        a: 'Asegúrate de completar todos los campos requeridos. El número de cédula debe tener entre 6 y 12 dígitos, el celular debe tener 10 dígitos, y debes dibujar tu firma en el recuadro.',
      },
      {
        q: '¿Qué hago si el PDF no se descarga?',
        a: 'Intenta usar otro navegador (Chrome, Firefox, Safari o Edge). Si el problema persiste, verifica que tu navegador permita descargas y no tenga bloqueadores activos.',
      },
      {
        q: '¿La aplicación funciona en celular?',
        a: 'Sí, la aplicación está diseñada para funcionar en dispositivos móviles. Puedes firmar usando tu dedo en la pantalla táctil.',
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 py-12">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver al inicio
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-4">
            <HelpCircle className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Preguntas Frecuentes
          </h1>
          <p className="text-gray-600">
            Encuentra respuestas a las dudas más comunes sobre la aplicación y el proceso.
          </p>
        </div>

        {/* Trust Banner */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-8">
          <p className="text-green-800 text-center font-medium">
            🔒 Tus datos están seguros. No almacenamos información en servidores.
            Todo se procesa localmente en tu dispositivo.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-8">
          {faqs.map((section, sectionIndex) => (
            <div key={sectionIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  {section.category}
                </h2>
              </div>
              <div className="divide-y divide-gray-200">
                {section.questions.map((faq, faqIndex) => (
                  <details key={faqIndex} className="group">
                    <summary className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-gray-50 transition-colors">
                      <span className="font-medium text-gray-900 pr-4">
                        {faq.q}
                      </span>
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="px-6 pb-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            ¿No encontraste respuesta a tu pregunta?
          </p>
          <a
            href="https://github.com/RaymondRJones/fight-for-toros/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contáctanos en GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
