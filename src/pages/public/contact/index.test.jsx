import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ContactUs from ".";
import { expect, test } from "vitest";
import "@testing-library/jest-dom";

test("renders Contact Us page and handles form submission", async () => {
  render(
    <MemoryRouter>
      <ContactUs />
    </MemoryRouter>
  );

  // Pastikan halaman memuat teks "Contact Us"
  expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();

  // Pastikan form muncul sebelum disubmit
  const nameInput = screen.getByPlaceholderText(/Your Name/i);
  const emailInput = screen.getByPlaceholderText(/Your Email/i);
  const messageInput = screen.getByPlaceholderText(/Your Message/i);
  const submitButton = screen.getByText(/Submit/i);

  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(messageInput).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();

  // Simulasikan pengisian form dan submit
  fireEvent.change(nameInput, { target: { value: "John Doe" } });
  fireEvent.change(emailInput, { target: { value: "johndoe@example.com" } });
  fireEvent.change(messageInput, { target: { value: "Hello!" } });
  fireEvent.click(submitButton);

  // Pastikan form hilang setelah submit (berarti konfirmasi muncul)
  expect(screen.queryByPlaceholderText(/Your Name/i)).not.toBeInTheDocument();
  expect(screen.queryByPlaceholderText(/Your Email/i)).not.toBeInTheDocument();
  expect(screen.queryByPlaceholderText(/Your Message/i)).not.toBeInTheDocument();
});
