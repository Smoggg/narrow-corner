import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders test page", () => {
  render(<App />);
  const linkElement = screen.getByText(/content/i);
  expect(linkElement).toBeInTheDocument();
});
