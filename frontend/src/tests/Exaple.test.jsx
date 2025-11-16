import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import CounterButton from "../components/CounterButton";

describe("CounterButton Component Tests", () => {
  // Test 1: Check the initial rendering state
  it("should display the initial count as 0 and the correct label", () => {
    // Render the component
    render(<CounterButton />);

    // Find the count display element by its test ID
    const countDisplay = screen.getByTestId("current-count");

    // Assertion 1: Check if the count display is in the document
    expect(countDisplay).toBeInTheDocument();

    // Assertion 2: Check that the count value is '0'
    expect(countDisplay).toHaveTextContent("0");

    // Assertion 3: Check the default button label
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
  });

  // Test 2: Check the initial count when a prop is passed
  it("should initialize with the value from initialCount prop", () => {
    render(<CounterButton initialCount={5} />);

    const countDisplay = screen.getByTestId("current-count");

    // Assertion: Check that the initial count is '5'
    expect(countDisplay).toHaveTextContent("5");
  });
});
