import {
  cn,
  formatSpanishDate,
  getCurrentSpanishDate,
  validateEmail,
  validatePhone,
  validateCedula,
  formatPhone,
} from '@/lib/utils';

describe('cn (classname utility)', () => {
  it('should merge class names', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('should handle conditional classes', () => {
    expect(cn('foo', false && 'bar', 'baz')).toBe('foo baz');
  });

  it('should merge tailwind classes correctly', () => {
    expect(cn('px-4', 'px-6')).toBe('px-6');
  });
});

describe('formatSpanishDate', () => {
  it('should format date in Spanish', () => {
    const date = new Date(2026, 0, 15); // January 15, 2026
    expect(formatSpanishDate(date)).toBe('15 de enero de 2026');
  });

  it('should handle different months', () => {
    const date = new Date(2025, 11, 25); // December 25, 2025
    expect(formatSpanishDate(date)).toBe('25 de diciembre de 2025');
  });

  it('should handle single digit days', () => {
    const date = new Date(2026, 5, 5); // June 5, 2026
    expect(formatSpanishDate(date)).toBe('5 de junio de 2026');
  });
});

describe('getCurrentSpanishDate', () => {
  it('should return a string in the correct format', () => {
    const result = getCurrentSpanishDate();
    expect(result).toMatch(/^\d{1,2} de \w+ de \d{4}$/);
  });
});

describe('validateEmail', () => {
  it('should return true for valid emails', () => {
    expect(validateEmail('test@example.com')).toBe(true);
    expect(validateEmail('user.name@domain.co')).toBe(true);
    expect(validateEmail('user+tag@example.org')).toBe(true);
  });

  it('should return false for invalid emails', () => {
    expect(validateEmail('invalid')).toBe(false);
    expect(validateEmail('invalid@')).toBe(false);
    expect(validateEmail('@domain.com')).toBe(false);
    expect(validateEmail('user@domain')).toBe(false);
    expect(validateEmail('')).toBe(false);
  });
});

describe('validatePhone', () => {
  it('should return true for valid Colombian phone numbers', () => {
    expect(validatePhone('3001234567')).toBe(true);
    expect(validatePhone('3109876543')).toBe(true);
  });

  it('should handle phone numbers with formatting', () => {
    expect(validatePhone('300 123 4567')).toBe(true);
    expect(validatePhone('300-123-4567')).toBe(true);
  });

  it('should return false for invalid phone numbers', () => {
    expect(validatePhone('123456789')).toBe(false); // 9 digits
    expect(validatePhone('12345678901')).toBe(false); // 11 digits
    expect(validatePhone('')).toBe(false);
  });
});

describe('validateCedula', () => {
  it('should return true for valid cedula numbers', () => {
    expect(validateCedula('123456')).toBe(true); // 6 digits
    expect(validateCedula('1234567890')).toBe(true); // 10 digits
    expect(validateCedula('123456789012')).toBe(true); // 12 digits
  });

  it('should handle cedulas with formatting', () => {
    expect(validateCedula('1.234.567.890')).toBe(true);
  });

  it('should return false for invalid cedulas', () => {
    expect(validateCedula('12345')).toBe(false); // 5 digits
    expect(validateCedula('1234567890123')).toBe(false); // 13 digits
    expect(validateCedula('')).toBe(false);
  });
});

describe('formatPhone', () => {
  it('should format 10 digit phone numbers', () => {
    expect(formatPhone('3001234567')).toBe('300 123 4567');
  });

  it('should return original for non-10 digit numbers', () => {
    expect(formatPhone('123456789')).toBe('123456789');
    expect(formatPhone('12345678901')).toBe('12345678901');
  });
});
