import { render, screen } from "@testing-library/react";
import Link from "..";

describe("Link Component", () => {
  test("renders with the correct text", () => {
    render(<Link to="www.facebook.com">Facebook</Link>);
    const linkElement = screen.getByText(/facebook/i);

    expect(linkElement).toBeInTheDocument();
  });

  test("has the correct href attribute", () => {
    render(<Link to="/about">About</Link>);
    const linkElement = screen.getByText(/about/i);
    expect(linkElement).toHaveAttribute("href", "/about");
  });

  test("renders children correctly", () => {
    render(
      <Link to="/contact">
        <span>Contact Us</span>
      </Link>
    );
    const linkElement = screen.getByText(/contact us/i);
    expect(linkElement).toBeInTheDocument();
  });
});
