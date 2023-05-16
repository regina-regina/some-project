import React from "react";
import { render, screen } from "@testing-library/react";
import { Button, ButtonTheme } from "./Button";

describe("Button", () => {
  test("Check button class", () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("clear");
    screen.debug();
  });
});
