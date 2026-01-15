'use client';

import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';
import { FORM_STEPS } from '@/lib/constants';

interface ProgressBarProps {
  currentStep: number;
  className?: string;
}

export default function ProgressBar({ currentStep, className }: ProgressBarProps) {
  return (
    <div className={cn('w-full', className)}>
      {/* Mobile: Simple progress bar */}
      <div className="sm:hidden">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">
            Paso {currentStep} de {FORM_STEPS.length}
          </span>
          <span className="text-sm text-gray-500">
            {FORM_STEPS[currentStep - 1]?.title}
          </span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary-600 transition-all duration-300"
            style={{ width: `${(currentStep / FORM_STEPS.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Desktop: Step indicators */}
      <div className="hidden sm:block">
        <nav aria-label="Progress">
          <ol className="flex items-center justify-between">
            {FORM_STEPS.map((step, index) => {
              const isCompleted = currentStep > step.id;
              const isCurrent = currentStep === step.id;

              return (
                <li key={step.id} className="flex-1 relative">
                  <div className="flex flex-col items-center">
                    {/* Connector line */}
                    {index > 0 && (
                      <div
                        className={cn(
                          'absolute top-5 left-0 right-1/2 h-0.5 -translate-y-1/2',
                          isCompleted || isCurrent ? 'bg-primary-600' : 'bg-gray-300'
                        )}
                      />
                    )}
                    {index < FORM_STEPS.length - 1 && (
                      <div
                        className={cn(
                          'absolute top-5 left-1/2 right-0 h-0.5 -translate-y-1/2',
                          isCompleted ? 'bg-primary-600' : 'bg-gray-300'
                        )}
                      />
                    )}

                    {/* Step circle */}
                    <div
                      className={cn(
                        'relative z-10 flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200',
                        isCompleted
                          ? 'bg-primary-600 border-primary-600'
                          : isCurrent
                          ? 'bg-white border-primary-600'
                          : 'bg-white border-gray-300'
                      )}
                    >
                      {isCompleted ? (
                        <Check className="w-5 h-5 text-white" />
                      ) : (
                        <span
                          className={cn(
                            'text-sm font-medium',
                            isCurrent ? 'text-primary-600' : 'text-gray-500'
                          )}
                        >
                          {step.id}
                        </span>
                      )}
                    </div>

                    {/* Step label */}
                    <div className="mt-2 text-center">
                      <p
                        className={cn(
                          'text-sm font-medium',
                          isCurrent ? 'text-primary-600' : 'text-gray-500'
                        )}
                      >
                        {step.title}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
}
