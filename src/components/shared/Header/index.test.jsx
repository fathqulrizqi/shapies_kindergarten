import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Header from ".";
import { describe, expect, test } from "vitest";

describe("Header Component", () => {
  test("renders the logo image", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    expect(screen.getByAltText("Dream Cine Studios")).toBeInTheDocument();
  });

  test("renders navigation links", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  
    const links = ["About Us", "Profile", "Extracurricular", "Gallery", "Contact Us"];
    
    const allLinks = screen.getAllByRole("link");
    console.log("All links found:", allLinks.map(link => link.textContent));
  
    links.forEach((linkText) => {
      expect(allLinks.some(link => link.textContent.includes(linkText))).toBe(true);
    });
  });
  

  test("mobile menu is hidden initially", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  
    const mobileMenu = screen.getByTestId("mobile-menu");
    expect(mobileMenu.classList.contains("translate-x-full")).toBe(true);
  });
  
  test("toggles mobile menu when button is clicked", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  
    const menuButton = screen.getByRole("button", { name: /open main menu/i });
    fireEvent.click(menuButton);
  
    const mobileMenu = screen.getByTestId("mobile-menu");
    expect(mobileMenu).toBeVisible();
    
  });

  test("closes mobile menu when close button is clicked", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
  
    const menuButton = screen.getByRole("button", { name: /open main menu/i });
    fireEvent.click(menuButton);
  
    const closeButton = screen.getByText("✕");
    fireEvent.click(closeButton);
  
    const mobileMenu = screen.getByTestId("mobile-menu");
    expect(mobileMenu.classList.contains("translate-x-full")).toBe(true);
  });
});
