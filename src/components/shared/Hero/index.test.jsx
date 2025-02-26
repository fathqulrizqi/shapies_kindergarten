import { describe, it, expect, beforeEach } from 'vitest';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Hero from '.';

// Group test cases inside describe
describe('Hero Component', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Hero />
      </MemoryRouter>
    );
  });

  it('renders the heading', () => {
    const heading = screen.getByRole('heading', { name: /play, learn, and grow together!/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the description text', () => {
    const description = screen.getByText(/Welcome to Shapies Kindergarten, a place where curiosity meets creativity!/i);
    expect(description).toBeInTheDocument();
  });

  it('renders the Join Now button', () => {
    const button = screen.getByRole('link', { name: /join now/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('href', '/registration');
  });
});