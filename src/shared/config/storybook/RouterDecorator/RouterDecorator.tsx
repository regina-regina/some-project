import { BrowserRouter } from "react-router-dom";
import "../../../../app/styles/index.scss";
import { Story } from "@storybook/react";
import { ReactNode, Suspense } from "react";
import { Loader } from "shared/ui/Loader/Loader";

export const RouterDecorator = (story: () => Story) => (
  <Suspense fallback={<Loader />}>
    <BrowserRouter>{story() as unknown as ReactNode}</BrowserRouter>
  </Suspense>
);

