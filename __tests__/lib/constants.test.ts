import { EMAIL_CONFIG, EXPEDIENTES, COLOMBIAN_CITIES, FORM_STEPS } from '@/lib/constants';

describe('EMAIL_CONFIG', () => {
  it('should have correct email destination', () => {
    expect(EMAIL_CONFIG.to).toBe('secretaria3@corteconstitucional.gov.co');
  });

  it('should have correct subject line', () => {
    expect(EMAIL_CONFIG.subject).toContain('Intervención ciudadana');
    expect(EMAIL_CONFIG.subject).toContain('Ley 2385 de 2024');
    expect(EMAIL_CONFIG.subject).toContain('D-0016158');
  });
});

describe('EXPEDIENTES', () => {
  it('should contain all three expediente numbers', () => {
    expect(EXPEDIENTES).toHaveLength(3);
    expect(EXPEDIENTES).toContain('D-0016158');
    expect(EXPEDIENTES).toContain('D-0016172');
    expect(EXPEDIENTES).toContain('D-0016193');
  });
});

describe('COLOMBIAN_CITIES', () => {
  it('should contain major Colombian cities', () => {
    expect(COLOMBIAN_CITIES).toContain('Bogotá D.C.');
    expect(COLOMBIAN_CITIES).toContain('Medellín');
    expect(COLOMBIAN_CITIES).toContain('Cali');
    expect(COLOMBIAN_CITIES).toContain('Barranquilla');
  });

  it('should have at least 10 cities', () => {
    expect(COLOMBIAN_CITIES.length).toBeGreaterThanOrEqual(10);
  });
});

describe('FORM_STEPS', () => {
  it('should have 4 steps', () => {
    expect(FORM_STEPS).toHaveLength(4);
  });

  it('should have sequential IDs', () => {
    FORM_STEPS.forEach((step, index) => {
      expect(step.id).toBe(index + 1);
    });
  });

  it('should have title and description for each step', () => {
    FORM_STEPS.forEach((step) => {
      expect(step.title).toBeTruthy();
      expect(step.description).toBeTruthy();
    });
  });
});
