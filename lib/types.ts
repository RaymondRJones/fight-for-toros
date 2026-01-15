export interface UserFormData {
  nombreCompleto: string;
  numeroIdentidad: string;
  ciudad: string;
  correo: string;
  celular: string;
  fecha: string;
  firma: string; // base64 signature image
}

export interface FormStep {
  id: number;
  title: string;
  description: string;
}

export type WizardStep = 1 | 2 | 3 | 4;

export const INITIAL_FORM_DATA: UserFormData = {
  nombreCompleto: '',
  numeroIdentidad: '',
  ciudad: '',
  correo: '',
  celular: '',
  fecha: '',
  firma: '',
};
