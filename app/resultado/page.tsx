'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { pdf } from '@react-pdf/renderer';
import { useForm } from '@/context/FormContext';
import DocumentTemplate from '@/components/pdf/DocumentTemplate';
import Button from '@/components/ui/Button';
import CopyButton from '@/components/ui/CopyButton';
import ProgressBar from '@/components/ui/ProgressBar';
import { EMAIL_CONFIG } from '@/lib/constants';
import { getEmailBody, getMailtoLink } from '@/lib/documentContent';
import {
  Download,
  Mail,
  CheckCircle,
  ArrowLeft,
  ExternalLink,
  FileText,
  Copy,
  RotateCcw,
} from 'lucide-react';

export default function ResultadoPage() {
  const { formData, resetForm, setCurrentStep } = useForm();
  const router = useRouter();
  const [pdfBlob, setPdfBlob] = useState<Blob | null>(null);
  const [isGenerating, setIsGenerating] = useState(true);
  const [hasCountedSupport, setHasCountedSupport] = useState(false);

  useEffect(() => {
    // Check if form is complete
    if (!formData.nombreCompleto || !formData.firma) {
      router.push('/formulario');
      return;
    }

    // Generate PDF
    const generatePdf = async () => {
      try {
        const blob = await pdf(<DocumentTemplate data={formData} />).toBlob();
        setPdfBlob(blob);
      } catch (error) {
        console.error('Error generating PDF:', error);
      } finally {
        setIsGenerating(false);
      }
    };

    generatePdf();
  }, [formData, router]);

  const handleDownload = async () => {
    if (pdfBlob) {
      const url = URL.createObjectURL(pdfBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `intervencion-ciudadana-${formData.nombreCompleto.replace(/\s+/g, '-')}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      // Increment support counter (only once per session)
      if (!hasCountedSupport) {
        try {
          await fetch('/api/counter', { method: 'POST' });
          setHasCountedSupport(true);
        } catch (error) {
          console.error('Error incrementing counter:', error);
        }
      }
    }
  };

  const handleEdit = () => {
    setCurrentStep(1);
    router.push('/formulario');
  };

  const handleStartOver = () => {
    resetForm();
    router.push('/');
  };

  const emailBody = getEmailBody();
  const mailtoLink = getMailtoLink(formData);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <ProgressBar currentStep={4} />
        </div>

        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            ¡Documento Listo!
          </h1>
          <p className="text-gray-600">
            Tu intervención ciudadana está lista para enviar
          </p>
        </div>

        {/* Step 1: Download PDF */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold">
              1
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Descarga tu documento
              </h2>
              <p className="text-gray-600 mb-4">
                Descarga el PDF con tu intervención ciudadana firmada
              </p>

              <div className="flex flex-wrap gap-3">
                <Button
                  onClick={handleDownload}
                  isLoading={isGenerating}
                  disabled={!pdfBlob}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Descargar PDF
                </Button>

                <Button variant="outline" onClick={handleEdit}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Editar datos
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2: Email Instructions */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold">
              2
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Envía por correo electrónico
              </h2>
              <p className="text-gray-600 mb-4">
                Copia los datos y envía el correo con el PDF adjunto
              </p>

              {/* Email Destination */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Destinatario
                </label>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 font-mono text-sm break-all">
                    {EMAIL_CONFIG.to}
                  </div>
                  <CopyButton text={EMAIL_CONFIG.to} label="Copiar" size="sm" />
                </div>
              </div>

              {/* Email Subject */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Asunto
                </label>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm">
                    {EMAIL_CONFIG.subject}
                  </div>
                  <CopyButton text={EMAIL_CONFIG.subject} label="Copiar" size="sm" />
                </div>
              </div>

              {/* Email Body */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cuerpo del correo
                </label>
                <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm whitespace-pre-line max-h-48 overflow-y-auto">
                  {emailBody}
                </div>
                <div className="mt-2">
                  <CopyButton text={emailBody} label="Copiar cuerpo del correo" />
                </div>
              </div>

              {/* Open Email Client */}
              <div className="pt-4 border-t border-gray-200">
                <a
                  href={mailtoLink}
                  className="inline-flex items-center justify-center px-4 py-2 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Abrir cliente de correo
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
                <p className="text-sm text-gray-500 mt-2">
                  Recuerda adjuntar el PDF descargado al correo
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Confirmation */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-200 text-green-700 flex items-center justify-center font-bold">
              3
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold text-green-900 mb-2">
                ¡Gracias por tu apoyo!
              </h2>
              <p className="text-green-700">
                Tu voz importa. Al enviar esta intervención ciudadana, contribuyes a la protección de los animales en Colombia.
              </p>
            </div>
          </div>
        </div>

        {/* Start Over */}
        <div className="text-center">
          <Button variant="ghost" onClick={handleStartOver}>
            <RotateCcw className="w-4 h-4 mr-2" />
            Crear nueva intervención
          </Button>
        </div>
      </div>
    </div>
  );
}
