import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, test, expect } from "vitest";
import RegistrationForm from ".";

describe("RegistrationForm Component", () => {
  test("renders form title", () => {
    render(<RegistrationForm />);
    expect(screen.getByText("School Registration")).toBeInTheDocument();
  });

  test("renders all form inputs", () => {
    render(<RegistrationForm />);

    expect(screen.getByLabelText("Full Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Phone Number")).toBeInTheDocument();
    expect(screen.getByLabelText("Date of Birth")).toBeInTheDocument();
    expect(screen.getByLabelText("Select Grade")).toBeInTheDocument();
  });

  test("submitting the form shows confirmation message", () => {
    render(<RegistrationForm />);

    fireEvent.change(screen.getByLabelText("Full Name"), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByLabelText("Email"), { target: { value: "john@example.com" } });
    fireEvent.change(screen.getByLabelText("Phone Number"), { target: { value: "1234567890" } });
    fireEvent.change(screen.getByLabelText("Date of Birth"), { target: { value: "2015-08-15" } });
    fireEvent.change(screen.getByLabelText("Select Grade"), { target: { value: "grade1" } });

    fireEvent.click(screen.getByRole("button", { name: /register/i }));

    // Pastikan halaman berubah ke ConfirmationMessage
    expect(screen.queryByText("School Registration")).not.toBeInTheDocument();
  });
});
