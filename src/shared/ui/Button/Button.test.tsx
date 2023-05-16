import React from "react";
import { render, screen } from "@testing-library/react";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "./Button";

describe("Button", () => {
  test("Check button class", () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText("TEST")).toHaveClass("clear");
    screen.debug();
  });
});
