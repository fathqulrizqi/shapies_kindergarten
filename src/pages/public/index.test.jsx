import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { test } from "vitest";
import Home from ".";

test("renders Home component", async () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
});
