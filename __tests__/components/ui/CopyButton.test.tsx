import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CopyButton from '@/components/ui/CopyButton';

// Mock clipboard API
const mockWriteText = jest.fn();
Object.assign(navigator, {
  clipboard: {
    writeText: mockWriteText,
  },
});

describe('CopyButton', () => {
  beforeEach(() => {
    mockWriteText.mockClear();
    mockWriteText.mockResolvedValue(undefined);
  });

  it('renders with default label', () => {
    render(<CopyButton text="Copy this" />);
    expect(screen.getByRole('button', { name: /copiar/i })).toBeInTheDocument();
  });

  it('renders with custom label', () => {
    render(<CopyButton text="Copy this" label="Copy Text" />);
    expect(screen.getByRole('button', { name: /copy text/i })).toBeInTheDocument();
  });

  it('copies text to clipboard on click', async () => {
    render(<CopyButton text="Test content" />);

    fireEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(mockWriteText).toHaveBeenCalledWith('Test content');
    });
  });

  it('shows "Copiado" after copying', async () => {
    render(<CopyButton text="Test content" />);

    fireEvent.click(screen.getByRole('button'));

    await waitFor(() => {
      expect(screen.getByText(/copiado/i)).toBeInTheDocument();
    });
  });

  it('applies custom className', () => {
    render(<CopyButton text="Copy this" className="custom-class" />);
    expect(screen.getByRole('button').className).toContain('custom-class');
  });

  it('applies different variants', () => {
    const { rerender } = render(<CopyButton text="Copy" variant="primary" />);
    expect(screen.getByRole('button').className).toContain('bg-primary-600');

    rerender(<CopyButton text="Copy" variant="secondary" />);
    expect(screen.getByRole('button').className).toContain('bg-gray-100');
  });
});
