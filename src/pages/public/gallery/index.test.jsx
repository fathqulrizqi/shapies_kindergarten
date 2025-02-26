import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { images } from "../../../utils/constants/gallery";
import { describe, expect, test } from "vitest";
import Gallery from ".";

describe("Gallery Component", () => {
  test("renders gallery title and description", () => {
    render(<Gallery />);
    
    expect(screen.getByText("📸 Shapies Kindergarten Gallery")).toBeInTheDocument();
    expect(
      screen.getByText(
        "A glimpse of our fun-filled activities, creative learning, and joyful moments!"
      )
    ).toBeInTheDocument();
  });

  test("renders all images", () => {
    render(<Gallery />);
    const imageElements = screen.getAllByRole("img");
    
    expect(imageElements.length).toBe(images.length);
  });

  test("opens modal when an image is clicked", () => {
    render(<Gallery />);
    
    const firstImage = screen.getAllByRole("img")[0];
    fireEvent.click(firstImage);
    
    // Cari elemen modal berdasarkan test ID
    const modalImage = screen.getByTestId("modal-image");
    expect(modalImage).toBeInTheDocument();
    expect(modalImage).toHaveAttribute("src", images[0]);
  });

  test("closes modal when clicking outside", () => {
    render(<Gallery />);
    
    fireEvent.click(screen.getAllByRole("img")[0]);
    const modal = screen.getByTestId("modal");
    
    fireEvent.click(modal);
    expect(modal).not.toBeInTheDocument();
  });

  test("navigates to next and previous images in modal", () => {
    render(<Gallery />);
    
    fireEvent.click(screen.getAllByRole("img")[0]);

    // Cari tombol berdasarkan aria-label
    const nextButton = screen.getByRole("button", { name: "Next Image" });
    fireEvent.click(nextButton);

    const modalImage = screen.getByTestId("modal-image");
    expect(modalImage).toHaveAttribute("src", images[1]);

    const prevButton = screen.getByRole("button", { name: "Previous Image" });
    fireEvent.click(prevButton);

    expect(modalImage).toHaveAttribute("src", images[0]);
  });
});
