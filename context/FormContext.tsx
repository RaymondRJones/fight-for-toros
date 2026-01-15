'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { UserFormData, INITIAL_FORM_DATA, WizardStep } from '@/lib/types';
import { getCurrentSpanishDate } from '@/lib/utils';

interface FormContextType {
  formData: UserFormData;
  updateFormData: <K extends keyof UserFormData>(field: K, value: UserFormData[K]) => void;
  setFormData: (data: UserFormData) => void;
  currentStep: WizardStep;
  setCurrentStep: (step: WizardStep) => void;
  resetForm: () => void;
  isStepValid: (step: WizardStep) => boolean;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

const STORAGE_KEY = 'intervencion-ciudadana-form';

export function FormProvider({ children }: { children: ReactNode }) {
  const [formData, setFormDataState] = useState<UserFormData>(() => ({
    ...INITIAL_FORM_DATA,
    fecha: getCurrentSpanishDate(),
  }));
  const [currentStep, setCurrentStep] = useState<WizardStep>(1);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setFormDataState({
          ...INITIAL_FORM_DATA,
          ...parsed,
          fecha: parsed.fecha || getCurrentSpanishDate(),
        });
      }
    } catch (e) {
      console.error('Error loading form data:', e);
    }
    setIsHydrated(true);
  }, []);

  // Save to localStorage on change
  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
      } catch (e) {
        console.error('Error saving form data:', e);
      }
    }
  }, [formData, isHydrated]);

  const updateFormData = <K extends keyof UserFormData>(field: K, value: UserFormData[K]) => {
    setFormDataState(prev => ({ ...prev, [field]: value }));
  };

  const setFormData = (data: UserFormData) => {
    setFormDataState(data);
  };

  const resetForm = () => {
    setFormDataState({
      ...INITIAL_FORM_DATA,
      fecha: getCurrentSpanishDate(),
    });
    setCurrentStep(1);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.error('Error clearing form data:', e);
    }
  };

  const isStepValid = (step: WizardStep): boolean => {
    switch (step) {
      case 1:
        return (
          formData.nombreCompleto.trim().length > 0 &&
          formData.numeroIdentidad.trim().length >= 6 &&
          formData.ciudad.trim().length > 0
        );
      case 2:
        return (
          formData.correo.includes('@') &&
          formData.celular.replace(/\D/g, '').length >= 10 &&
          formData.fecha.trim().length > 0
        );
      case 3:
        return formData.firma.length > 0;
      case 4:
        return true;
      default:
        return false;
    }
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        updateFormData,
        setFormData,
        currentStep,
        setCurrentStep,
        resetForm,
        isStepValid,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

export function useForm() {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return context;
}
