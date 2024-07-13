import { act } from "react";

import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Test", () => {
  test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/Facebook/i);
    expect(linkElement).toBeInTheDocument();
  });
});
