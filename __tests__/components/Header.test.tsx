import { render, screen } from '@testing-library/react';
import Header from '@/app/components/Header';

describe('Header', () => {
  it('renders the navigation menu', () => {
    render(<Header />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('contains the ODI logo', () => {
    render(<Header />);
    const logo = screen.getByAltText('Open Data Initiative');
    expect(logo).toBeInTheDocument();
  });
}); 