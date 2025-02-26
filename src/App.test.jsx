import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Tambahkan ini
import App from "./App";
import { test } from "vitest";

test("renders Home component", async () => {
  render(
    <MemoryRouter initialEntries={["/"]}> 
      <App />
    </MemoryRouter>
  );
});
