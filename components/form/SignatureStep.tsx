'use client';

import { useRef, useEffect, useState } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { useForm } from '@/context/FormContext';
import Button from '@/components/ui/Button';
import { Eraser, PenTool } from 'lucide-react';

export default function SignatureStep() {
  const { formData, updateFormData } = useForm();
  const sigPadRef = useRef<SignatureCanvas>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [canvasSize, setCanvasSize] = useState({ width: 400, height: 200 });

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const width = Math.min(containerRef.current.offsetWidth - 4, 600);
        setCanvasSize({ width, height: 200 });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    // Restore signature if exists
    if (formData.firma && sigPadRef.current) {
      sigPadRef.current.fromDataURL(formData.firma);
    }
  }, [canvasSize]);

  const handleClear = () => {
    sigPadRef.current?.clear();
    updateFormData('firma', '');
  };

  const handleEnd = () => {
    if (sigPadRef.current && !sigPadRef.current.isEmpty()) {
      const dataUrl = sigPadRef.current.toDataURL('image/png');
      updateFormData('firma', dataUrl);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Tu Firma
        </h2>
        <p className="text-gray-600">
          Dibuja tu firma en el recuadro usando el mouse o tu dedo
        </p>
      </div>

      <div className="space-y-4">
        <div
          ref={containerRef}
          className="flex justify-center"
        >
          <div className="border-2 border-dashed border-gray-300 rounded-lg bg-white overflow-hidden">
            <SignatureCanvas
              ref={sigPadRef}
              canvasProps={{
                width: canvasSize.width,
                height: canvasSize.height,
                className: 'signature-canvas',
                style: { touchAction: 'none' },
              }}
              penColor="black"
              backgroundColor="white"
              onEnd={handleEnd}
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <Button
            type="button"
            variant="secondary"
            onClick={handleClear}
            size="sm"
          >
            <Eraser className="w-4 h-4 mr-2" />
            Borrar
          </Button>
        </div>

        <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
          <PenTool className="w-4 h-4" />
          <span>Arrastra para firmar</span>
        </div>

        {formData.firma && (
          <div className="text-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
              Firma guardada
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
