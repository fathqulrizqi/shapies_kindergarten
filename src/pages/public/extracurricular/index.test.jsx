import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Extracurricular from "./index";
import { extracurricular } from "../../../utils/constants/extracurricular";
import { expect, test } from "vitest";
import "@testing-library/jest-dom";

test("renders Extracurricular page and activities", async () => {
  render(
    <MemoryRouter>
      <Extracurricular />
    </MemoryRouter>
  );

  // Pastikan judul muncul
  expect(await screen.findByRole("heading", { name: /Extracurricular/i })).toBeInTheDocument();

  // Pastikan teks deskripsi muncul
  expect(
    await screen.findByText(/Explore our exciting extracurricular activities/i)
  ).toBeInTheDocument();

  // Pastikan setiap aktivitas ekstrakurikuler muncul
  for (const activity of extracurricular) {
    expect(await screen.findByText(activity.title)).toBeInTheDocument();
    expect(await screen.findByText(activity.description)).toBeInTheDocument();
  }
  

  // Pastikan tombol "Enroll Now" muncul
  expect(await screen.findByText(/Enroll Now/i)).toBeInTheDocument();
});
