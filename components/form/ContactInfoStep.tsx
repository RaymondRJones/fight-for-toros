'use client';

import { useForm } from '@/context/FormContext';
import Input from '@/components/ui/Input';
import { Mail, Phone, Calendar } from 'lucide-react';

export default function ContactInfoStep() {
  const { formData, updateFormData } = useForm();

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Información de Contacto
        </h2>
        <p className="text-gray-600">
          Datos para que la Corte pueda contactarte
        </p>
      </div>

      <div className="space-y-5">
        <div className="relative">
          <div className="absolute left-4 top-[42px] text-gray-400">
            <Mail className="w-5 h-5" />
          </div>
          <Input
            label="Correo Electrónico"
            type="email"
            placeholder="tu@email.com"
            value={formData.correo}
            onChange={(e) => updateFormData('correo', e.target.value)}
            className="pl-12"
          />
        </div>

        <div className="relative">
          <div className="absolute left-4 top-[42px] text-gray-400">
            <Phone className="w-5 h-5" />
          </div>
          <Input
            label="Número de Celular"
            type="tel"
            placeholder="3001234567"
            value={formData.celular}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, '');
              updateFormData('celular', value);
            }}
            maxLength={10}
            className="pl-12"
            hint="10 dígitos sin espacios"
          />
        </div>

        <div className="relative">
          <div className="absolute left-4 top-[42px] text-gray-400">
            <Calendar className="w-5 h-5" />
          </div>
          <Input
            label="Fecha"
            placeholder="15 de enero de 2026"
            value={formData.fecha}
            onChange={(e) => updateFormData('fecha', e.target.value)}
            className="pl-12"
            hint="Formato: día de mes de año"
          />
        </div>
      </div>
    </div>
  );
}
