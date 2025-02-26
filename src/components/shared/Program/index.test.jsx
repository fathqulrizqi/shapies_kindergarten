import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Programs from '.';
import { programs } from '../../../utils/constants/program';
import '@testing-library/jest-dom';

// Mock program data
vi.mock('../../../utils/constants/program', () => ({
  programs: [
    { id: 1, title: 'Program 1', description: 'Description 1', icon: '/icon1.png' },
    { id: 2, title: 'Program 2', description: 'Description 2', icon: '/icon2.png' },
  ],
}));

describe('Programs Component', () => {
  it('renders the section title', () => {
    render(
      <MemoryRouter>
        <Programs />
      </MemoryRouter>
    );
    const title = screen.getByRole('heading', { name: /our featured programs/i });
    expect(title).toBeInTheDocument();
  });

  it('renders all programs', () => {
    render(
      <MemoryRouter>
        <Programs />
      </MemoryRouter>
    );
    
    programs.forEach((program) => {
      expect(screen.getByText(program.title)).toBeInTheDocument();
      expect(screen.getByText(program.description)).toBeInTheDocument();
      expect(screen.getByAltText(program.title)).toBeInTheDocument();
    });
  });
});