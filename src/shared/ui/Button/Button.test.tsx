import React from "react";
import { render, screen } from "@testing-library/react";
import { Button, ThemeButton } from "./Button";

describe("Button", () => {
  test("Check button class", () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    // expect(screen.getByText("TEST")).toBeInTheDocument();
    expect(screen.getByText("TEST")).toHaveClass("clear");
    screen.debug();
  });
});
