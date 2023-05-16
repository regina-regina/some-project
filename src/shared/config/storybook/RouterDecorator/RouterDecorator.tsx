import { BrowserRouter } from "react-router-dom";
import "../../../../app/styles/index.scss";
import { Story } from "@storybook/react";
import { ReactNode } from "react";

export const RouterDecorator = (story: () => Story) => (
  <BrowserRouter>{story() as unknown as ReactNode}</BrowserRouter>
);
