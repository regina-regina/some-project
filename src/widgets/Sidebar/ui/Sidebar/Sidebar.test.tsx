import React from "react";
import { screen, fireEvent } from "@testing-library/react";
import { withTranslation } from "react-i18next";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Sidebar } from "./Sidebar";

describe("Sidebar", () => {
  test("check by test id", () => {
    const SidebarWithTranslation = withTranslation()(Sidebar);
    componentRender(<SidebarWithTranslation />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("toggle sidebar", () => {
    const SidebarWithTranslation = withTranslation()(Sidebar);
    componentRender(<SidebarWithTranslation />);
    expect(screen.getByTestId("toggleBtn")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("toggleBtn"));
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
