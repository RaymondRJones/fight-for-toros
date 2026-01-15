import Link from 'next/link';
import { ArrowLeft, Shield, Lock, Eye, Trash2, Server } from 'lucide-react';

export default function PrivacidadPage() {
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
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
            <Shield className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Política de Privacidad
          </h1>
          <p className="text-gray-600">
            Tu privacidad es nuestra prioridad. Lee cómo protegemos tus datos.
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-8">
          {/* Key Point */}
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-start gap-4">
              <Server className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-lg font-semibold text-green-900 mb-2">
                  No almacenamos tus datos en ningún servidor
                </h2>
                <p className="text-green-800">
                  Esta aplicación funciona 100% en tu navegador. Tus datos personales,
                  firma y documento generado <strong>nunca se envían a ningún servidor</strong>.
                  Todo el procesamiento ocurre localmente en tu dispositivo.
                </p>
              </div>
            </div>
          </div>

          {/* Section 1 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-900">
                ¿Qué datos se recopilan?
              </h2>
            </div>
            <p className="text-gray-600 mb-4">
              Para generar tu intervención ciudadana, necesitamos los siguientes datos:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Nombre completo</li>
              <li>Número de cédula de ciudadanía</li>
              <li>Ciudad de residencia</li>
              <li>Correo electrónico</li>
              <li>Número de celular</li>
              <li>Tu firma digital</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-900">
                ¿Cómo se usan tus datos?
              </h2>
            </div>
            <p className="text-gray-600 mb-4">
              Tus datos se utilizan <strong>únicamente</strong> para:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Generar el documento PDF de intervención ciudadana</li>
              <li>Rellenar automáticamente el formulario legal</li>
              <li>Facilitar el envío del correo electrónico a la Corte Constitucional</li>
            </ul>
            <p className="text-gray-600 mt-4">
              <strong>Importante:</strong> Nosotros no enviamos el correo por ti. Tú mismo
              copias el contenido y lo envías desde tu propio correo electrónico.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Trash2 className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-900">
                ¿Dónde se almacenan tus datos?
              </h2>
            </div>
            <p className="text-gray-600 mb-4">
              Tus datos se almacenan <strong>temporalmente</strong> solo en tu navegador
              (localStorage) para que puedas completar el formulario sin perder información
              si refrescas la página.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Los datos se eliminan automáticamente cuando cierras el navegador</li>
              <li>Puedes borrar los datos manualmente en cualquier momento</li>
              <li>Ningún dato se envía a servidores externos</li>
              <li>No usamos cookies de rastreo</li>
              <li>No usamos servicios de analítica</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-5 h-5 text-blue-600" />
              <h2 className="text-xl font-semibold text-gray-900">
                Seguridad
              </h2>
            </div>
            <p className="text-gray-600">
              Al no almacenar datos en servidores, eliminamos el riesgo de filtraciones
              de datos. Tu información existe únicamente en tu dispositivo durante el
              tiempo que usas la aplicación. El código fuente de esta aplicación es
              abierto y puede ser auditado por cualquier persona en{' '}
              <a
                href="https://github.com/RaymondRJones/fight-for-toros"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Contacto
            </h2>
            <p className="text-gray-600">
              Si tienes preguntas sobre esta política de privacidad, puedes abrir un
              issue en nuestro{' '}
              <a
                href="https://github.com/RaymondRJones/fight-for-toros/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                repositorio de GitHub
              </a>.
            </p>
          </section>

          {/* Last updated */}
          <div className="text-sm text-gray-500 pt-4 border-t border-gray-200">
            Última actualización: Enero 2026
          </div>
        </div>
      </div>
    </div>
  );
}
