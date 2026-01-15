'use client';

import { useForm } from '@/context/FormContext';
import Input from '@/components/ui/Input';
import Select from '@/components/ui/Select';
import { COLOMBIAN_CITIES } from '@/lib/constants';
import { User, CreditCard, MapPin } from 'lucide-react';

export default function PersonalInfoStep() {
  const { formData, updateFormData } = useForm();

  const cityOptions = COLOMBIAN_CITIES.map((city) => ({
    value: city,
    label: city,
  }));

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Información Personal
        </h2>
        <p className="text-gray-600">
          Ingresa tus datos para la intervención ciudadana
        </p>
      </div>

      <div className="space-y-5">
        <div className="relative">
          <div className="absolute left-4 top-[42px] text-gray-400">
            <User className="w-5 h-5" />
          </div>
          <Input
            label="Nombre Completo"
            placeholder="Ej: María García López"
            value={formData.nombreCompleto}
            onChange={(e) => updateFormData('nombreCompleto', e.target.value)}
            className="pl-12"
          />
        </div>

        <div className="relative">
          <div className="absolute left-4 top-[42px] text-gray-400">
            <CreditCard className="w-5 h-5" />
          </div>
          <Input
            label="Número de Cédula"
            placeholder="Ej: 1234567890"
            value={formData.numeroIdentidad}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, '');
              updateFormData('numeroIdentidad', value);
            }}
            maxLength={12}
            className="pl-12"
            hint="Entre 6 y 12 dígitos"
          />
        </div>

        <div className="relative">
          <div className="absolute left-4 top-[42px] text-gray-400 z-10">
            <MapPin className="w-5 h-5" />
          </div>
          <Select
            label="Ciudad"
            value={formData.ciudad}
            onChange={(e) => updateFormData('ciudad', e.target.value)}
            options={cityOptions}
            className="pl-12"
          />
        </div>

        {!COLOMBIAN_CITIES.includes(formData.ciudad) && formData.ciudad && (
          <Input
            label="Otra Ciudad"
            placeholder="Escribe tu ciudad"
            value={formData.ciudad}
            onChange={(e) => updateFormData('ciudad', e.target.value)}
          />
        )}
      </div>
    </div>
  );
}
