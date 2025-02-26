import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, test } from "vitest";
import Footer from ".";

describe("Footer Component", () => {
  test("renders the logo image", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    expect(screen.getByAltText("Shapies Kindergarten")).toBeInTheDocument();
  });

  test("renders navigation links", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    const links = ["About Us", "Profile", "Extracurricular", "Gallery", "Contact Us"];
    links.forEach((linkText) => {
      expect(screen.getByText(linkText)).toBeInTheDocument();
    });
  });

  test("renders social media icons", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    expect(screen.getByTitle("Facebook")).toBeInTheDocument();
    expect(screen.getByTitle("Instagram")).toBeInTheDocument();
  });

  test("renders copyright text", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    expect(
      screen.getByText(/© 2025 Shapies Kindergarten - All Rights Reserved/i)
    ).toBeInTheDocument();
  });
});