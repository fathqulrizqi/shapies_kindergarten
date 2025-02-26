import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, test, expect } from "vitest";
import Profile from ".";

describe("Profile Component", () => {
  test("renders Profile title", () => {
    render(<Profile />);
    expect(screen.getByText("Profile")).toBeInTheDocument();
  });

  test("renders profile description", () => {
    render(<Profile />);
    expect(
      screen.getByText(
        "A place where learning meets fun! At Shapies Kindergarten, we nurture curiosity, creativity, and confidence in a warm, engaging environment. Here’s everything you need to know about us:"
      )
    ).toBeInTheDocument();
  });

  test("renders table with school details", () => {
    render(<Profile />);

    expect(screen.getByText("🏫 School Name")).toBeInTheDocument();
    expect(screen.getByText("Shapies Kindergarten")).toBeInTheDocument();

    expect(screen.getByText("📍 Location")).toBeInTheDocument();
    expect(screen.getByText("123 Fun Street, Playtown")).toBeInTheDocument();

    expect(screen.getByText("🎓 Programs")).toBeInTheDocument();
    expect(screen.getByText("Playgroup, Kindergarten, Pre-Primary")).toBeInTheDocument();

    expect(screen.getByText("📅 Founded")).toBeInTheDocument();
    expect(screen.getByText("2010")).toBeInTheDocument();

    expect(screen.getByText("☎️ Contact")).toBeInTheDocument();
    expect(screen.getByText("+123 456 7890")).toBeInTheDocument();
  });

  test("renders closing paragraph", () => {
    render(<Profile />);
    expect(
      screen.getByText(
        "We believe that every child is unique, and we encourage them to explore, learn, and grow in their own special way. Visit us and be part of our happy learning community! 🎈✨"
      )
    ).toBeInTheDocument();
  });
});
