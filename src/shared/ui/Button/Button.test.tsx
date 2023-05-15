import React from "react";
import { render, screen } from "@testing-library/react";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "./Button";

describe("Button", () => {
  const { t } = useTranslation();
  test("Check button class", () => {
    render(<Button theme={ThemeButton.CLEAR}>{t("TEST")}</Button>);
    // expect(screen.getByText("TEST")).toBeInTheDocument();
    expect(screen.getByText("TEST")).toHaveClass("clear");
    screen.debug();
  });
});
