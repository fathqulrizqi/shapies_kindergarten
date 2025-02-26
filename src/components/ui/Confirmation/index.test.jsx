import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ConfirmationMessage from '.';
import { describe, expect, test } from 'vitest';

describe('ConfirmationMessage Component', () => {
  test('renders the confirmation message correctly', () => {
    render(<ConfirmationMessage />);

    // Periksa apakah gambar logo ditampilkan
    const logo = screen.getByRole('img', { name: /logo/i });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/public/image/logo.png');

    // Periksa apakah teks utama ditampilkan
    expect(
      screen.getByRole('heading', { name: /thanks for submitting!/i })
    ).toBeInTheDocument();

    // Periksa apakah teks tambahan ditampilkan
    expect(screen.getByText(/we will get back to you soon./i)).toBeInTheDocument();
  });
});