'use client';

import { useForm } from '@/context/FormContext';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import ProgressBar from '@/components/ui/ProgressBar';
import PersonalInfoStep from './PersonalInfoStep';
import ContactInfoStep from './ContactInfoStep';
import SignatureStep from './SignatureStep';
import { ArrowLeft, ArrowRight } from 'lucide-react';
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-2xl mx-auto px-4 py-8">
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
    </div>
  );
}
