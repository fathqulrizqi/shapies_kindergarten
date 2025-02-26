import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Quotes from ".";
import { expect, test } from "vitest";

test("renders the quote and author", () => {
  render(<Quotes />);

  // Cek apakah teks kutipan muncul
  expect(
    screen.getByText(
      "Education is the most powerful weapon which you can use to change the world."
    )
  ).toBeInTheDocument();

  // Cek apakah nama penulis muncul
  expect(screen.getByText("- Nelson Mandela")).toBeInTheDocument();
});
