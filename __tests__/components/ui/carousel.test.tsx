import { render, screen, fireEvent } from '@testing-library/react';
import { Carousel } from '@/app/components/ui/carousel';

describe('Carousel', () => {
  const mockSlides = [
    <div key="slide1">Slide 1</div>,
    <div key="slide2">Slide 2</div>,
    <div key="slide3">Slide 3</div>
  ];

  it('renders all slides', () => {
    render(<Carousel items={mockSlides} />);
    expect(screen.getByText('Slide 1')).toBeInTheDocument();
    expect(screen.getByText('Slide 2')).toBeInTheDocument();
    expect(screen.getByText('Slide 3')).toBeInTheDocument();
  });

  it('renders navigation buttons', () => {
    render(<Carousel items={mockSlides} />);
    expect(screen.getByLabelText('Previous slide')).toBeInTheDocument();
    expect(screen.getByLabelText('Next slide')).toBeInTheDocument();
  });

  it('renders navigation dots', () => {
    render(<Carousel items={mockSlides} />);
    const dots = screen.getAllByRole('button').filter(
      button => button.getAttribute('aria-label')?.includes('Go to slide')
    );
    expect(dots).toHaveLength(3);
  });

  it('changes slide when navigation buttons are clicked', () => {
    render(<Carousel items={mockSlides} />);
    
    const nextButton = screen.getByLabelText('Next slide');
    const prevButton = screen.getByLabelText('Previous slide');
    
    // Initial state - first slide should be visible
    const slideContainer = screen.getByText('Slide 1').parentElement?.parentElement;
    expect(slideContainer).toHaveStyle({ transform: 'translateX(-0%)' });
    
    // Click next
    fireEvent.click(nextButton);
    expect(slideContainer).toHaveStyle({ transform: 'translateX(-100%)' });
    
    // Click previous
    fireEvent.click(prevButton);
    expect(slideContainer).toHaveStyle({ transform: 'translateX(-0%)' });
  });

  it('changes slide when navigation dots are clicked', () => {
    render(<Carousel items={mockSlides} />);
    
    const dots = screen.getAllByRole('button').filter(
      button => button.getAttribute('aria-label')?.includes('Go to slide')
    );
    
    // Click second dot
    fireEvent.click(dots[1]);
    const slideContainer = screen.getByText('Slide 1').parentElement?.parentElement;
    expect(slideContainer).toHaveStyle({ transform: 'translateX(-100%)' });
  });

  it('handles touch events', () => {
    render(<Carousel items={mockSlides} />);
    
    const carousel = screen.getByText('Slide 1').closest('div');
    expect(carousel).toBeInTheDocument();
    
    if (carousel) {
      // Simulate touch start
      fireEvent.touchStart(carousel, { touches: [{ clientX: 500 }] });
      // Simulate touch move with significant difference to trigger slide change
      fireEvent.touchMove(carousel, { touches: [{ clientX: 300 }] });
      
      const slideContainer = screen.getByText('Slide 1').parentElement?.parentElement;
      expect(slideContainer).toHaveStyle({ transform: 'translateX(-100%)' });
    }
  });
}); 