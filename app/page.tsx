import Link from 'next/link';
import {
  Heart,
  FileText,
  Mail,
  CheckCircle,
  ArrowRight,
  Shield,
  Scale,
  Users,
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:py-24">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Protección Animal en Colombia
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Tu voz importa para{' '}
              <span className="text-blue-600">proteger a los animales</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Envía tu intervención ciudadana a la Corte Constitucional para apoyar
              la <strong>Ley 2385 de 2024</strong>, que protege a los animales del
              sufrimiento innecesario.
            </p>

            {/* CTA Button */}
            <Link
              href="/formulario"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Comenzar Intervención
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>

            {/* Trust indicators */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4" />
                <span>100% Gratuito</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4" />
                <span>Proceso simple</span>
              </div>
              <div className="flex items-center gap-1">
                <Scale className="w-4 h-4" />
                <span>Derecho constitucional</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is this about */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            ¿Por qué es importante?
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            La Ley 2385 de 2024 protege a los animales de prácticas que causan
            sufrimiento deliberado. Algunas personas han demandado esta ley ante
            la Corte Constitucional.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Protección Animal
              </h3>
              <p className="text-gray-600">
                Los animales son seres sintientes. La ley reconoce su derecho a
                no sufrir innecesariamente.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl border border-green-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Scale className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Respaldo Constitucional
              </h3>
              <p className="text-gray-600">
                Las sentencias C-374 y C-429 de 2025 ya respaldan la
                constitucionalidad de esta ley.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl border border-purple-100">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Tu Derecho
              </h3>
              <p className="text-gray-600">
                El artículo 242 de la Constitución te permite presentar
                intervenciones ciudadanas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
            En solo 3 pasos puedes enviar tu intervención ciudadana
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-4">
                1
              </div>
              <div className="flex items-center gap-3 mb-3">
                <FileText className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Completa tus datos
                </h3>
              </div>
              <p className="text-gray-600">
                Ingresa tu nombre, cédula, ciudad y datos de contacto.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-4">
                2
              </div>
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Firma digitalmente
                </h3>
              </div>
              <p className="text-gray-600">
                Dibuja tu firma en la pantalla para validar tu intervención.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mb-4">
                3
              </div>
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-6 h-6 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  Descarga y envía
                </h3>
              </div>
              <p className="text-gray-600">
                Descarga el PDF y envíalo por correo a la Corte Constitucional.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Link
              href="/formulario"
              className="inline-flex items-center justify-center px-6 py-3 font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Comenzar ahora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center text-gray-600 text-sm">
            <p className="mb-4">
              <strong>Nota:</strong> Esta herramienta facilita el ejercicio de tu
              derecho constitucional. Tus datos no son almacenados en ningún servidor.
            </p>
            <div className="flex items-center justify-center gap-6 mb-4">
              <Link href="/privacidad" className="text-blue-600 hover:underline">
                Política de Privacidad
              </Link>
              <Link href="/faq" className="text-blue-600 hover:underline">
                Preguntas Frecuentes
              </Link>
              <a
                href="https://github.com/RaymondRJones/fight-for-toros"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GitHub
              </a>
            </div>
            <p className="text-gray-500">
              Expedientes: D-0016158, D-0016172 y D-0016193 | Ley 2385 de 2024
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
