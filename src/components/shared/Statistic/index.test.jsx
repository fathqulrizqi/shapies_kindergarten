import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Statistic from ".";
import { expect, test, vi } from "vitest";

// Mock CountUp karena hanya perlu menampilkan angka
vi.mock("../../ui/Count", () => ({
    default: ({ to, separator }) => (
      <span data-testid="count">{to.toLocaleString().replace(/,/g, separator)}</span>
    ),
  }));
  

test("renders statistic titles and numbers", () => {
  render(<Statistic />);

  // Cek judul statistik
  expect(screen.getByText("Kids Graduated")).toBeInTheDocument();
  expect(screen.getByText("Total Enrollments")).toBeInTheDocument();

  // Cek teks deskripsi
  expect(
    screen.getByText("Celebrating success, one child at a time!")
  ).toBeInTheDocument();
  expect(
    screen.getByText("Welcoming new learners every year!")
  ).toBeInTheDocument();

  // Cek angka statistik
  expect(screen.getByText("1,200")).toBeInTheDocument();
  expect(screen.getByText("3,000")).toBeInTheDocument();
});
