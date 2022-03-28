import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  it("should render an input and a square with the same white color", () => {
    render(<App />);
    const inputLabel = screen.getByLabelText(/Select color/i);
    const inputElement = screen.getByLabelText("color", { selector: "input" });
    const box = screen.getByRole("article");

    expect(inputLabel).toBeInTheDocument();
    expect(inputElement).toHaveValue("#ffffff");
    expect(box).toHaveStyle("background-color: #ffffff");
  });

  it("should sync like input and box colors", () => {
    render(<App />);
    const inputElement = screen.getByLabelText("color", { selector: "input" });
    const box = screen.getByRole("article");

    fireEvent.change(inputElement, { target: { value: "#000000" } });

    expect(box).toHaveStyle("background-color: #000000");
  });
});
