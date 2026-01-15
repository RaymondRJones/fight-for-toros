import { render, screen } from '@testing-library/react';
import ProgressBar from '@/components/ui/ProgressBar';

describe('ProgressBar', () => {
  it('renders step indicator', () => {
    render(<ProgressBar currentStep={1} />);
    expect(screen.getByText(/paso 1/i)).toBeInTheDocument();
  });

  it('shows correct current step', () => {
    render(<ProgressBar currentStep={2} />);
    expect(screen.getByText(/paso 2/i)).toBeInTheDocument();
  });

  it('shows total number of steps', () => {
    render(<ProgressBar currentStep={1} />);
    expect(screen.getByText(/de 4/i)).toBeInTheDocument();
  });

  it('renders all step titles on desktop view', () => {
    render(<ProgressBar currentStep={1} />);
    // Use getAllByText since titles appear in both mobile and desktop views
    expect(screen.getAllByText(/información personal/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/contacto/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/firma/i).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText(/enviar/i).length).toBeGreaterThanOrEqual(1);
  });

  it('marks completed steps with checkmark', () => {
    render(<ProgressBar currentStep={3} />);
    // Steps 1 and 2 should be completed when on step 3
    const checkmarks = document.querySelectorAll('svg.text-white');
    expect(checkmarks.length).toBeGreaterThanOrEqual(2);
  });

  it('applies custom className', () => {
    const { container } = render(<ProgressBar currentStep={1} className="custom-class" />);
    expect(container.firstChild).toHaveClass('custom-class');
  });
});
