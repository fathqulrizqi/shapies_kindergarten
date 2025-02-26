import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import AboutUs from "."; 
import { test, expect } from "vitest";
import '@testing-library/jest-dom';


test("renders About Us page", async () => {
  render(
    <MemoryRouter>
      <AboutUs />
    </MemoryRouter>
  );

  expect(await screen.findByText(/About Us/i)).toBeInTheDocument();

  expect(
    await screen.findByText(/Shapies Kindergarten is a joyful learning space/i)
  ).toBeInTheDocument();

  expect(await screen.findByAltText("Kids in Classroom")).toBeInTheDocument();

  expect(await screen.findByText(/Our Vision/i)).toBeInTheDocument();

  expect(await screen.findByText(/Our Mission/i)).toBeInTheDocument();

  expect(await screen.findAllByRole("listitem")).toHaveLength(4);
});
