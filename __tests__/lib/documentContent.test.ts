import { getDocumentContent, getEmailBody, getMailtoLink } from '@/lib/documentContent';
import { UserFormData } from '@/lib/types';

const mockFormData: UserFormData = {
  nombreCompleto: 'María García López',
  numeroIdentidad: '1234567890',
  ciudad: 'Bogotá D.C.',
  correo: 'maria@example.com',
  celular: '3001234567',
  fecha: '15 de enero de 2026',
  firma: 'data:image/png;base64,test',
};

describe('getDocumentContent', () => {
  it('should include user name', () => {
    const content = getDocumentContent(mockFormData);
    expect(content).toContain('María García López');
  });

  it('should include cedula number', () => {
    const content = getDocumentContent(mockFormData);
    expect(content).toContain('1234567890');
  });

  it('should include city', () => {
    const content = getDocumentContent(mockFormData);
    expect(content).toContain('Bogotá D.C.');
  });

  it('should include contact information', () => {
    const content = getDocumentContent(mockFormData);
    expect(content).toContain('maria@example.com');
    expect(content).toContain('3001234567');
  });

  it('should include date', () => {
    const content = getDocumentContent(mockFormData);
    expect(content).toContain('15 de enero de 2026');
  });

  it('should include legal content about Law 2385', () => {
    const content = getDocumentContent(mockFormData);
    expect(content).toContain('INTERVENCIÓN CIUDADANA');
    expect(content).toContain('LEY 2385 DE 2024');
    expect(content).toContain('EXEQUIBILIDAD');
  });

  it('should include expediente references', () => {
    const content = getDocumentContent(mockFormData);
    expect(content).toContain('D-0016158');
    expect(content).toContain('D-0016172');
    expect(content).toContain('D-0016193');
  });
});

describe('getEmailBody', () => {
  it('should include greeting', () => {
    const body = getEmailBody();
    expect(body).toContain('Respetados(as) señores(as)');
  });

  it('should include reference to citizen intervention', () => {
    const body = getEmailBody();
    expect(body).toContain('intervención ciudadana');
  });

  it('should include reference to Law 2385', () => {
    const body = getEmailBody();
    expect(body).toContain('Ley 2385 de 2024');
  });

  it('should include expediente numbers', () => {
    const body = getEmailBody();
    expect(body).toContain('D-0016158');
    expect(body).toContain('D-0016172');
    expect(body).toContain('D-0016193');
  });
});

describe('getMailtoLink', () => {
  it('should return a valid mailto link', () => {
    const link = getMailtoLink(mockFormData);
    expect(link).toMatch(/^mailto:/);
  });

  it('should include correct email destination', () => {
    const link = getMailtoLink(mockFormData);
    expect(link).toContain('secretaria3@corteconstitucional.gov.co');
  });

  it('should include subject parameter', () => {
    const link = getMailtoLink(mockFormData);
    expect(link).toContain('subject=');
  });

  it('should include body parameter', () => {
    const link = getMailtoLink(mockFormData);
    expect(link).toContain('body=');
  });
});
