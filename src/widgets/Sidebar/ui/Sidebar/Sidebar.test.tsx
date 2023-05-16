import React from "react";
import { screen, fireEvent } from "@testing-library/react";
// import { fireEventbuild-storybook, screen } from "@testing-library/s";
import { withTranslation } from "react-i18next";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation/renderWithTranslation";
import { fireEventbuild } from "@storybook/testing-library";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
  test("check by test id", () => {
    const SidebarWithTranslation = withTranslation()(Sidebar);
    renderWithTranslation(<SidebarWithTranslation />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("toggle sidebar", () => {
    const SidebarWithTranslation = withTranslation()(Sidebar);
    renderWithTranslation(<SidebarWithTranslation />);
    expect(screen.getByTestId("toggleBtn")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("toggleBtn"));
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
