/* eslint-disable implicit-arrow-linebreak */
import { ReactNode } from "react";
import "../../../../app/styles/index.scss";
import { Story } from "@storybook/react";
import { Theme, ThemeProvider } from "app/providers/ThemeProvider";

export const ThemeDecorator = (theme: Theme) => (StoryComponent: () => Story) =>
  (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        {StoryComponent() as unknown as ReactNode}
      </div>
    </ThemeProvider>
  );
