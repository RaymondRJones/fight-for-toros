'use client';

import { useForm } from '@/context/FormContext';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import ProgressBar from '@/components/ui/ProgressBar';
import PersonalInfoStep from './PersonalInfoStep';
import ContactInfoStep from './ContactInfoStep';
import SignatureStep from './SignatureStep';
import { ArrowLeft, ArrowRight, Shield, EyeOff, Lock, Server } from 'lucide-react';
import { WizardStep } from '@/lib/types';

export default function FormWizard() {
  const { currentStep, setCurrentStep, isStepValid } = useForm();
  const router = useRouter();

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((currentStep + 1) as WizardStep);
    } else {
      router.push('/resultado');
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as WizardStep);
    } else {
      router.push('/');
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfoStep />;
      case 2:
        return <ContactInfoStep />;
      case 3:
        return <SignatureStep />;
      default:
        return <PersonalInfoStep />;
    }
  };

  const privacyReminders = [
    {
      icon: EyeOff,
      title: '100% Anónimo',
      description: 'No rastreamos tu identidad',
    },
    {
      icon: Server,
      title: 'Sin almacenamiento',
      description: 'Tus datos no se guardan en ningún servidor',
    },
    {
      icon: Lock,
      title: 'Procesamiento local',
      description: 'Todo se procesa en tu dispositivo',
    },
    {
      icon: Shield,
      title: 'Privacidad garantizada',
      description: 'Solo tú tienes acceso a tu información',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Mobile Privacy Banner */}
      <div className="lg:hidden bg-green-50 border-b border-green-200 px-4 py-3">
        <div className="flex items-center justify-center gap-2 text-green-800 text-sm">
          <Shield className="w-4 h-4" />
          <span><strong>Tu privacidad está protegida</strong> — No almacenamos tus datos</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8 justify-center">
          {/* Left Privacy Sidebar - Desktop Only */}
          <div className="hidden lg:flex flex-col gap-4 w-64 flex-shrink-0">
            {privacyReminders.slice(0, 2).map((item, index) => (
              <div
                key={index}
                className="bg-green-50 border border-green-200 rounded-xl p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-900 text-sm">
                      {item.title}
                    </h3>
                    <p className="text-green-700 text-xs mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Main Form Content */}
          <div className="w-full max-w-2xl">
            {/* Progress Bar */}
            <div className="mb-8">
              <ProgressBar currentStep={currentStep} />
            </div>

            {/* Form Content */}
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
              {renderStep()}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={handleBack}
                className="flex-1 sm:flex-none"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {currentStep === 1 ? 'Inicio' : 'Atrás'}
              </Button>

              <Button
                type="button"
                variant="primary"
                onClick={handleNext}
                disabled={!isStepValid(currentStep)}
                className="flex-1 sm:flex-none"
              >
                {currentStep === 3 ? 'Ver Documento' : 'Siguiente'}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Right Privacy Sidebar - Desktop Only */}
          <div className="hidden lg:flex flex-col gap-4 w-64 flex-shrink-0">
            {privacyReminders.slice(2, 4).map((item, index) => (
              <div
                key={index}
                className="bg-green-50 border border-green-200 rounded-xl p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-900 text-sm">
                      {item.title}
                    </h3>
                    <p className="text-green-700 text-xs mt-1">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
