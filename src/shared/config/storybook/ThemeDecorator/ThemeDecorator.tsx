/* eslint-disable implicit-arrow-linebreak */
import { ReactNode } from "react";
import "../../../../app/styles/index.scss";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";
import { StoryFnReactReturnType } from "@storybook/react/dist/ts3.9/client/preview/types";

export const ThemeDecorator = (theme: Theme) => (StoryComponent: () => StoryFnReactReturnType) =>
  (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        {StoryComponent() as unknown as ReactNode}
      </div>
    </ThemeProvider>
  );
